import { redirect } from 'next/navigation';

const ShortUrlPage = async ({ params }) => {
  const { shorturl } = params;

  const response = await fetch(`https://szatjmdyotqigrrlrrsb.supabase.co/rest/v1/urls?short_url=eq.${shorturl}`, {
    headers: {
      "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6YXRqbWR5b3RxaWdycmxycnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2NjUsImV4cCI6MjA0MzM3ODY2NX0.QcXRZ82w4MCZ_UlpAsZCxHLlAgoHh6YNz3FYC9d6MW8",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6YXRqbWR5b3RxaWdycmxycnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2NjUsImV4cCI6MjA0MzM3ODY2NX0.QcXRZ82w4MCZ_UlpAsZCxHLlAgoHh6YNz3FYC9d6MW8"
    }
  });

  const data = await response.json();

  if (data.length > 0) {
    const longUrl = data[0].long_url;

    redirect(longUrl);
  } else {

    redirect('/404');
  }
};

export default ShortUrlPage;
