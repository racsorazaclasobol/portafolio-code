import Link from "next/link";
import PortafolioLayout from "../layout/PortafolioLayout"

const custom404 = () => {
  return (
    <PortafolioLayout>
        
        <div className="text-center">
            <h1>404</h1>    
            <p>Esta página no existe, porfavor retorna al <Link href="/">Curriculo</Link></p>
        </div>
        
    </PortafolioLayout>
  )
}

export default custom404;