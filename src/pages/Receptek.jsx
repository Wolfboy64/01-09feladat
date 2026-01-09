
const Receptek = () => {
    const receptek = [
        { id: '1', nev: 'Bolognai spagetti', kateg: 'Olasz', leiras: 'Főzd ki a tésztát...' },
        { id: '2', nev: 'Gulyásleves', kateg: 'Magyar', leiras: 'Pirítsd meg a hagymát...' },
        { id: '3', nev: 'Sushi tál', kateg: 'Japán', leiras: 'Használj friss halat...' }
    ];
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Receptek</h2>
            <ul>
                {receptek.map((recept) => (
                    <li key={recept.id} className="mb-4 border-b pb-2">
                        <h3 className="text-xl font-semibold">{recept.nev}</h3>
                        <p className="italic">Kategória: {recept.kateg}</p>
                        <p>{recept.leiras}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Receptek;