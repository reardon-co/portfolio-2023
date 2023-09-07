import fs from "fs/promises";
import satori from "satori";
import sharp from "sharp";
import type { APIRoute } from 'astro';

export const get: APIRoute = async function get({ params, request }) {
  const interData = await fs.readFile("./public/fonts/inter/Inter-Bold.ttf");

  const svg = await satori(
    { 
      type: "div", 
      props: { 
        children: [{
          type: "h1",
          props: {
            children: "Cole Reardon",
            style: {
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1), rgba(143, 143, 143, 1))',
              backgroundClip: 'text',
              fontSize: '6rem',
              color: 'transparent',
              margin: '0'
            }
          }
        },
        {
          type: "p",
          props: {
            children: "Crafting Captivating Web Experiences",
            style: {
              color: 'white'
            }
          }
        }], 
        style: { 
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          fontSize: 32,
          fontWeight: 600,
          backgroundImage: 'radial-gradient(84.62% 100% at 50% -0%, #291154 0%,#0b011d 100%)'
        },
      }
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interData,
          style: "normal",
        },
      ],
    },
  );
  
//   <div
//   style={{
//     height: '100%',
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//     fontSize: 32,
//     fontWeight: 600,
//     backgroundImage: 'radial-gradient(84.62% 100% at 50% -0%, #291154 0%,#0b011d 100%)'
//   }}
// >
//   <h1 style={{
//     backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1), rgba(143, 143, 143, 1))',
//     backgroundClip: 'text',
//     fontSize: '6rem',
//     color: 'transparent',
//     margin: '0'
//   }}>Cole Reardon</h1>
//   <p style={{
//     color: 'white',

//   }}
//   >Crafting Captivating Web Experiences</p>
// </div>

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}