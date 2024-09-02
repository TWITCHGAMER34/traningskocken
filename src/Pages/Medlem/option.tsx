export function Option({title, items, price}: { title: string, items: string[], price: string }) {
    return <div className='box'>
        <h2>{title}</h2>
        <ul className='lists'>
            {items.map((item, i) => <li key={item + i}>{item}</li>)}
        </ul>
        <p>{price} Kr/Månad</p>
        <button>Prenumerera</button>
    </div>
}