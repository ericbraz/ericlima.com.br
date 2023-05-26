import React from 'react'
import CTAButton from '../../reusables/verse/CTAButton'
import useLanguage from '../../../hooks/useLanguage'

function BeforeFold({ outerDivClasses }: { outerDivClasses: string }) {
    const { language } = useLanguage()
    const beforeFoldContent = [
        {
            h2: 'Hello, I\'m',
            aside: 'React Developer',
            text: 'I\'m a frontend React developer from Brazil. I\'m strongly motivated by my passion for coding and the endless possibilities it offers. With a strong determination, I am committed to bringing ideas to life through innovative solutions.',
            cta: 'Reach out to me',
            alt: 'Eric Lima presenting himself in an imagem with a light background',
            lang: 'en'
        },
        {
            h2: 'Olá, eu sou',
            aside: 'Desenvolvedor React',
            text: 'Sou um desenvolvedor frontend React do Brasil. Sou fortemente motivado pela minha paixão pela programação e pelas infinitas possibilidades que ela oferece. Com uma forte determinação, estou comprometido em dar vida às ideias por meio de soluções inovadoras.',
            cta: 'Vamos conversar',
            alt: 'Eric Lima se apresentando em uma imagem com o fundo claro',
            lang: 'pt'
        },
        {
            h2: 'Salut! Je suis',
            aside: 'Développeur React',
            text: 'Je suis un développeur frontend React du Brésil. Je suis fortement motivé par ma passion pour la programmation et les possibilités infinies qu\'elle offre. Avec une grande détermination, je m\'engage à donner vie à des idées grâce à des solutions innovantes.',
            cta: 'Contactez-moi',
            alt: 'Eric Lima se présentant dans une image avec un fond clair',
            lang: 'fr'
        }
    ]

    return (
        <div className={`${outerDivClasses} 550:flex-row flex-col gap-16 items-center justify-center`}>
            <div className='flex flex-1'>
                <div className={`w-full`}>
                    <article className='roboto-title my-8 lg:w-[291px] 785:w-[232px] 550:w-[174px] 360:w-[291px] w-[232px]'>
                        <h2 className='relative lg:text-4xl 785:text-3xl 550:text-xl text-3xl'>
                            <span className='bg-white inline-block relative lg:pr-3 pr-1 -z-[1]'>
                                {beforeFoldContent.find(content => content.lang === language)?.h2}
                            </span>
                        </h2>
                        <h1 className='lg:text-6xl 785:text-5xl 550:text-4xl 360:text-6xl text-5xl'>Eric Lima</h1>
                        <aside className='relative lg:text-2xl 785:text-xl 550:text-base text-xl text-center'>
                            <span className='bg-white inline-block relative lg:px-3 px-1 -z-[1]'>
                                {beforeFoldContent.find(content => content.lang === language)?.aside}
                            </span>
                        </aside>
                    </article>
                    <article className={`lg:text-lg 870:text-base 785:text-sm 550:text-xs 360:text-base text-sm`}>
                        {beforeFoldContent.find(content => content.lang === language)?.text}
                    </article>
                    <CTAButton className='my-5 lg:text-xl 785:text-base text-sm' buttonClassName='py-3'>
                        {beforeFoldContent.find(content => content.lang === language)?.cta}
                    </CTAButton>
                </div>
            </div>
            <div className={`550:flex flex-1 items-center justify-center w-full hidden`}>
                <img
                    src='ericlima2.jpg'
                    alt={beforeFoldContent.find(content => content.lang === language)?.alt}
                    className={`rounded-full`}
                />
            </div>
        </div>
    )
}

export default BeforeFold
