import { ReactNode } from "react"


type Props = {
    children: ReactNode
    type: "button" | "submit" | "reset",
    onClick?: () => void
    className?: string
 }

 
 export const ButtonSuccess = ({ children, type, onClick, className }: Props) => {
    return (
        <button className={`text-sm bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700 font-bold ${className}`}
            type={type} onClick={() => { if (onClick) onClick() }}>
            {children}
        </button>
    )
 }
 
 export const ButtonWarning = ({ children, type, onClick, className }: Props) => {
    return (
        <button className={`text-sm bg-yellow-500 text-white rounded-md py-2 px-4 hover:bg-yellow-600 font-bold ${className}`}
            type={type} onClick={() => { if (onClick) onClick() }}>
            {children}
        </button>
    )
 }
 
 export const ButtonDanger = ({ children, type, onClick, className }: Props) => {
    return (
        <button className={`text-sm bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700 font-bold ${className}`}
            type={type} onClick={() => { if (onClick) onClick() }}>
            {children}
        </button>
    )
 }
 export const ButtonAmba = ({ children, type, onClick, className }: Props) => {
    return (
        <button className={`text-sm bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-gray-700 font-bold ${className}`}
            type={type} onClick={() => { if (onClick) onClick() }}>
            {children}
        </button>
    )
 }
 export const Nigg = ({ children, type, onClick, className }: Props) => {
    return (
        <button className={`text-sm bg-black-600 text-white rounded-md py-2 px-4 hover:bg-gray-700 font-bold ${className}`}
            type={type} onClick={() => { if (onClick) onClick() }}>
            {children}
        </button>
    )
 }
 export const Waw = ({ children, type, onClick, className }: Props) => {
    return (
        <button className={`text-sm bg-purple-600 text-white rounded-md py-2 px-4 hover:bg-pink-700 font-bold ${className}`}
            type={type} onClick={() => { if (onClick) onClick() }}>
            {children}
        </button>
    )
 }
