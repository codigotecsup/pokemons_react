
function Pokemon(prop){
    const urlBase=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${+prop.core+1}.png`;

    return (
      <>
          <div key={prop.data?.id} className="card ms-3 mb-3" style={{width: "18rem"}}>
              <img src={urlBase} className="card-img-top" alt="..." />
                  <div className="card-body">
                      <h5 className="card-title text-uppercase">{prop.data?.name}</h5>
                      <p className="card-text">
                            Hola mundo
                      </p>
                      <button data-bs-toggle="modal" data-bs-target="#exampleModal-${index+1}"
                              className="btn btn-primary">Open
                      </button>
                  </div>
          </div>
      </>
    );
}

export  default Pokemon;
