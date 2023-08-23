import React, {createContext, useState} from 'react'

interface IModalCntxt {
    modal:boolean
    open: () => void
    close: () => void
}

export const ModalCntxt = createContext<IModalCntxt>({
    modal: false,
    open: () => {},
    close: () => {} 
})

export const ModalState = ({ children }: {children: React.ReactNode}) => {
    const [modal, setModal] = useState(false)

    const open = () => setModal(true)
    const close = () => setModal(false)

    return(
        <ModalCntxt.Provider value={{modal, open, close}}>
            {children}
        </ModalCntxt.Provider>
    )
}