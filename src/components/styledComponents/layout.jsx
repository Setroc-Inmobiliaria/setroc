import { Header } from "./header";

export const Layout = ({children}) => {
  return (
    <>
      <div>
      <Header/>
        <main>{children}</main>
        <footer className="flex w-full justify-center items-center h-28">
          © {new Date().getFullYear()} &middot;
          {` `}
          <a>SETROC Inmobiliaria</a>
        </footer>
      </div>
    </>
  );
};
