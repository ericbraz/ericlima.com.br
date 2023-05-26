import React from 'react'
import useLanguage from '../../../hooks/useLanguage'

function StackSection({ outerDivClasses }: { outerDivClasses: string }) {
    const { language } = useLanguage()
    const stackContent = [
        {
            text: 'Stack and technologies',
            lang: 'en',
        },
        {
            text: 'Stack e tecnologias',
            lang: 'pt',
        },
        {
            text: 'Stack et technologies',
            lang: 'fr',
        },
    ]

    const images = [
        { alt: 'HTML', src: 'HTML.png' },
        { alt: 'CSS', src: 'CSS.png' },
        { alt: 'Typescript', src: 'Typescript.png' },
        { alt: 'React.js', src: 'React.js.png' },
        { alt: 'Redux', src: 'Redux.png' },
        { alt: 'Node.js', src: 'Node.js.png' },
    ]

    return (
        <div className={`${outerDivClasses} flex-col items-center justify-center gap-7 w-full`}>
            <h2>{stackContent.find(content => content.lang === language)?.text}</h2>
            <div className='flex flex-row items-center justify-between w-full'>
                {images.map((image) => (
                    <span key={image.alt}>
                        <img
                            src={`icons/${image.src}`}
                            alt={`${image.alt} - Programming language`}
                        />
                    </span>
                ))}
            </div>
        </div>
    )
}

export default StackSection
