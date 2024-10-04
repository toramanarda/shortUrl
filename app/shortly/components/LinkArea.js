"use client";
import { useState, useEffect } from 'react';
import { z } from 'zod';
import { useQRCode } from 'next-qrcode';

const urlSchema = z.string().url("Geçerli bir URL giriniz!");

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const LinkArea = () => {
  const { Canvas } = useQRCode();
  const [longUrl, setLongUrl] = useState('');
  const [shortUrls, setShortUrls] = useState([]);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [qrText, setQrText] = useState('');

  // LocalStorage'dan verileri oku
  useEffect(() => {
    const storedUrls = JSON.parse(localStorage.getItem('shortUrls')) || [];
    setShortUrls(storedUrls);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const result = urlSchema.safeParse(longUrl);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    try {
      const generatedShortUrl = generateShortUrl();

      const response = await fetch("https://szatjmdyotqigrrlrrsb.supabase.co/rest/v1/urls", {
        method: "POST",
        headers: {
          "apikey": "your_api_key_here", // API anahtarınızı buraya ekleyin
          "Authorization": "Bearer your_bearer_token_here", // Bearer tokenınızı buraya ekleyin
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          long_url: longUrl,
          short_url: generatedShortUrl
        })
      });

      if (response.ok) {
        const newShortUrl = { longUrl, shortUrl: generatedShortUrl };
        const updatedShortUrls = [...shortUrls, newShortUrl];

        // LocalStorage'a kaydet
        localStorage.setItem('shortUrls', JSON.stringify(updatedShortUrls));
        setShortUrls(updatedShortUrls);
        setLongUrl(''); // Inputu temizle
      } else {
        throw new Error('Short URL oluşturulamadı');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const generateShortUrl = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const openModal = (url) => {
    setQrText(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="linkArea">
      <form id="link-form" onSubmit={handleSubmit}>
        <input
          id="link-input"
          placeholder="Shorten a link here..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          required
        />
        <button type="submit">Shorten It!</button>
      </form>

      <div id="shortened-links">
        {shortUrls.map((url, index) => (
          <div key={index} className="shortened-link">
            <p className='longurl'>{url.longUrl}</p>
            <a id="shortened-url" href={`/${url.shortUrl}`} target="_blank" rel="noopener noreferrer">
              {`${window.location.origin}/${url.shortUrl}`}
            </a>
            <div onClick={() => openModal(`${window.location.origin}/${url.shortUrl}`)}>
              <Canvas
                text={`${window.location.origin}/${url.shortUrl}`} // QR code for the shortened URL
                options={{
                  errorCorrectionLevel: 'M',
                  margin: 3,
                  scale: 4,
                  width: 100,
                  color: {
                    dark: '#000',
                    light: '#fff',
                  },
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <h2>QR Code</h2>
        <Canvas
          text={qrText}
          options={{
            errorCorrectionLevel: 'M',
            margin: 3,
            scale: 4,
            width: 200, // Modal içinde daha büyük gösterim
            color: {
              dark: '#000',
              light: '#fff',
            },
          }}
        />
      </Modal>
    </div>
  );
};

export default LinkArea;
