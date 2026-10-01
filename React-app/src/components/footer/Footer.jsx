export default function Footer(){
  const today = new Date().toLocaleDateString();
    return(
        <>
        <div className="card text-center">
  <div className="card-header bg-secondary">
    
  </div>
  <div className="card-body border-0">
    <h5 className="card-title">Dummy footer</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="https://hema-sai.netlify.app" target="blank" className="btn btn-primary">Go To Portfolio</a>
  </div>
  <div className="card-footer text-body-secondary">
    {today}
  </div>
</div>
        </>
    )
}