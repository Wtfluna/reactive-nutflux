type ModalPropreties = {
    children: React.ReactNode,
    label :string,
}

export function toggleMovieModal(id: string){
const movieModalElement = document.getElementById(id) as HTMLDialogElement;
const movieModalIsOpen = movieModalElement?.open
if(movieModalElement){
    if(movieModalIsOpen){
        movieModalElement.close()
    } else if(!movieModalIsOpen){
        movieModalElement.showModal()
    }
}
}
export default function MovieModal ({
    children,
    label
} : ModalPropreties){
    return(
        <>
        <dialog id={label}>
            
            <>
            <button onClick={() => toggleMovieModal(label)}>Close
            </button>
            </>
            <h1>TEST</h1>

            {children}
        </dialog>
        </>
    )
}