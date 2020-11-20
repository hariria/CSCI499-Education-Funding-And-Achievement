const title = 'CSCI 499 – Education Funding Project';
const description =
  'Examining the relationship between funding and achievement in California K-12 public schools';

const SEO = {
  title,
  description,
  canonical: 'https://csci-499-education-funding-and-achievement.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://csci-499-education-funding-and-achievement.vercel.app/',
    title,
    description,
    images: [
      {
        url: 'https://psmag.com/.image/t_share/MTI4NzYxNDYwMzM0NTY1ODU0/shutterstock_213333985jpg.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
};

export default SEO;
