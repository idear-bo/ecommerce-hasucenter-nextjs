import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const HeaderOption = () => {
  return (
    <div className="grid grid-cols-2 pb-4 border-b-2 border-sky-800">
      <div className="col-span-2 lg:col-span-1">
        <Image src="http://via.placeholder.com/464x130/png" width={464} height={130} style={{ width: '100%', height: 'auto' }} alt="http://via.placeholder.com/12x12" />
      </div>
      <div className="col-span-2 lg:col-span-1 m-4">
        <div className="flex flex-wrap justify-center lg:justify-end gap-2 ">
          <Link className="font-bold text-sky-800" href={'/'}>INICIO</Link>
          <div className="border-l-2 border-sky-800 h-full">&nbsp;</div>
          <Link className="font-bold text-sky-800" href={'/'}>CATALOGO</Link>
          <div className="border-l-2 border-sky-800 h-full">&nbsp;</div>
          <Link className="font-bold text-sky-800" href={'/'}>CONTACTANOS</Link>
          <div className="border-l-2 border-sky-800 h-full">&nbsp;</div>
          <Link className="font-bold text-sky-800" href={'/'}>FAVORITOS</Link>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-end gap-2 my-4">
          <Link href={'mi-cuenta'} className="uppercase py-1 px-4 border-2 border-sky-800 rounded-3xl text-sky-800 hover:bg-sky-800 hover:text-white font-semibold place-items-center flex justify-center gap-2 h-12 w-40 text-start text-sm"><Image src={''} width={30} height={30} alt={""} /> Iniciar sesion</Link>
          <Button label="SEGUIR MI PEDIDO" />
          <Button label="CREDI HAUS" />
        </div>
      </div>
    </div>
  )
}

export default HeaderOption;