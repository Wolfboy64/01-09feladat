import { useState } from 'react';
import Notfound from './Notfound';

export default function Kereses({ receptek }) {
    const [filtered, setFiltered] = useState(receptek);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        const results = receptek.filter(recept =>
            recept.nev.toLowerCase().includes(query) ||
            recept.kateg.toLowerCase().includes(query) ||
            recept.leiras.toLowerCase().includes(query)
        );
        setFiltered(results);
    };

    return (
        <div className="container mt-4">
            <h2 className="h2 mb-4">Keresés</h2>
            <input
                type="text"
                placeholder="Keresés recept név vagy kategória alapján..."
                className="form-control mb-4"
                onChange={handleSearch}
            />
            <div className="mt-4">
                {filtered.length > 0 ? (
                    <div className="row">
                        {filtered.map(recept => (
                            <div key={recept.id} className="col-md-6 col-lg-4 mb-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title">{recept.nev}</h3>
                                        <p className="text-muted">{recept.kateg}</p>
                                        <p className="card-text">{recept.leiras}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <Notfound />
                )}
            </div>
        </div>
    );
}

