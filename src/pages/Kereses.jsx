export default function Kereses({ receptek }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Keresés</h2>
            <input
                type="text"
                placeholder="Keresés recept név vagy kategória alapján..."
                className="border p-2 w-full mb-4"
                onChange={(e) => {
                    const query = e.target.value.toLowerCase();
                    const filtered = receptek.filter(recept =>
                        recept.nev.toLowerCase().includes(query) ||
                        recept.kateg.toLowerCase().includes(query)
                    );
                    console.log(filtered);
                }}
            />
            <div id="results" className="mt-4">
                {/* Itt jelenítheted meg a keresési eredményeket */}
            </div>
        </div>
    );
}

