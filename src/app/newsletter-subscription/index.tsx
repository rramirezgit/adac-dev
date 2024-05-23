// import style from './SubscirptionToNewsletter.module.css'
// import cel from '@/assets/img/SubscirptionToNewsletter/cel.svg'
// import Head from 'next/head'
// import Image from 'next/image'
// import CommingSoonLayout from '@/components/SubscirptionToNewsletter/layout'
// import FormEmail from '@/components/SubscirptionToNewsletter/formEmail'
// import SocialMediaIcons from '@/components/SubscirptionToNewsletter/socialMediaIcons'
// import Typewriter from 'typewriter-effect'
// import { useMediaQuery } from '@mui/material'

// export default function SubscirptionToNewsletter() {
//   const urlbase = process.env.NEXT_PUBLIC_API_URL
//   console.log(urlbase)

//   const smup = useMediaQuery('(min-width: 977px)')
//   return (
//     <>
//       <Head>
//         <title>ADAC</title>
//       </Head>
//       <CommingSoonLayout>
//         <div
//           className={style.content}
//           style={{
//             position: 'relative'
//           }}
//         >
//           <div className={style.info}>
//             <div className={style.title}>
//               <div
//                 style={{
//                   display: 'flex',
//                   gap: '10px',
//                   alignItems: 'center'
//                 }}
//               >
//                 <div>¡Domina</div>
//                 <Typewriter
//                   options={{
//                     loop: true,
//                     delay: 35,
//                     wrapperClassName: style.title,
//                     cursorClassName: style.cursor
//                   }}
//                   onInit={typewriter => {
//                     typewriter
//                       .typeString('las finanzas!')
//                       .pauseFor(1000)
//                       .deleteAll()
//                       .typeString('las startups!')
//                       .pauseFor(1000)
//                       .deleteAll()
//                       .typeString('las cryptos!')
//                       .pauseFor(1000)
//                       .deleteAll()
//                       .typeString('los negocios!')
//                       .pauseFor(1000)
//                       .deleteAll()
//                       .typeString('los mercados!')
//                       .pauseFor(1000)
//                       .deleteAll()
//                       .typeString('la tecnología!')
//                       .pauseFor(1000)
//                       .deleteAll()
//                       .typeString('la IA!')
//                       .pauseFor(1000)
//                       .deleteAll()
//                       .start()
//                   }}
//                 />
//               </div>
//               Coloca tu empresa en el siguiente nivel.
//             </div>
//             <div className={style.footer}>
//               <div className={style.text}>
//                 Únete a nuestro newsletter y{' '}
//                 <span>domina la economía de la innovación.</span>
//               </div>
//               <div className={style.textWithLink}>
//                 ¡Conviértete en líder con un solo clic!
//               </div>
//               <FormEmail />
//               {!smup && <SocialMediaIcons />}
//               {smup && (
//                 <div
//                   style={{
//                     position: 'absolute',
//                     bottom: '0%',
//                     width: '95%',
//                     // centro de la pantalla
//                     display: 'flex',
//                     justifyContent: 'center'
//                   }}
//                 >
//                   <SocialMediaIcons />
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className={style.contentLottie}>
//             <Image alt="cel" src={cel} className={style.imgBottom} />
//           </div>
//         </div>
//       </CommingSoonLayout>
//     </>
//   )
// }
