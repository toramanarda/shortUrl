"use client";
import { useState } from 'react';
import { z } from 'zod';

const urlSchema = z.string().url("Geçerli bir URL giriniz!");

const LinkArea = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState(null);

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
          "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6YXRqbWR5b3RxaWdycmxycnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2NjUsImV4cCI6MjA0MzM3ODY2NX0.QcXRZ82w4MCZ_UlpAsZCxHLlAgoHh6YNz3FYC9d6MW8",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6YXRqbWR5b3RxaWdycmxycnNiIiwicm9zZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2NjUsImV4cCI6MjA0MzM3ODY2NX0.QcXRZ82w4MCZ_UlpAsZCxHLlAgoHh6YNz3FYC9d6MW8",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          long_url: longUrl,
          short_url: generatedShortUrl
        })
      });

      if (response.ok) {
        setShortUrl(generatedShortUrl);
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

      {shortUrl && (
        <div id="shortened-link">
          <p className='longurl'>{longUrl}</p>
          <a id="shortened-url" href={`/${shortUrl}`} target="_blank">
            {`${window.location.origin}/${shortUrl}`}
          </a>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LinkArea;
