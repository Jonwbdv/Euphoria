import './EuphoriaLogo.css'

interface EuphoriaLogoProps {
    withFlavorText?: boolean,
    customStyles?: string
}

const EuphoriaLogo = ({withFlavorText = true, customStyles}: EuphoriaLogoProps) => {
    return (
    <figure className="euphoria-logo-wrapper w-[100%]">
        <img src="/img/Logo.png" alt="Euphoria Company Logo." className={`${customStyles ? customStyles : ""}`}/>
        {withFlavorText && <p className="euphoria-logo-flavortext">Be up to date with anyone around the <br/> globe.</p> }
    </figure>
    )
}

export default EuphoriaLogo;