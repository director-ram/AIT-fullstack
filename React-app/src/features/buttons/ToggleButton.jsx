import { useToggle } from "../../Hooks/useToggle";

export const ToggleButton = () => {

    let [theme,updatedTheme] = useToggle('theme','light')
  return (
    <>
      <div className="container-fluid" style={{ height: "100vh" }}>
        <div className={`h-100 ${theme == 'light' ? 'bg-dark':'bg-light'}`}>
          <button className="btn btn-primary border-success" 
          onClick={()=>updatedTheme(theme == 'light' ? 'dark':'light')}>
            {theme == 'light' ? 'Light' : 'Dark'}
            </button>
        </div>
      </div>
    </>
  );
};
