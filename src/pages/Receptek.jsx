
const Receptek = () => {
    const receptek = [
        { id: '1', nev: 'Bolognai spagetti', kateg: 'Olasz', leiras: 'Főzd ki a tésztát...' },
        { id: '2', nev: 'Gulyásleves', kateg: 'Magyar', leiras: 'Pirítsd meg a hagymát...' },
        { id: '3', nev: 'Sushi tál', kateg: 'Japán', leiras: 'Használj friss halat...' }
    ];
    return (
        <div className="container mt-4">
            <h2 className="h2 mb-4">Receptek</h2>
            <div className="row">
                {receptek.map((recept) => (
                    <div key={recept.id} className="col-md-6 col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">{recept.nev}</h3>
                                <p className="text-muted">Kategória: {recept.kateg}</p>
                                <p className="card-text">{recept.leiras}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Receptek;