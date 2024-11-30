import React, { useState } from "react";
import "./Inventory.css";

const Inventory = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [equippedItem, setEquippedItem] = useState(null);

    // Datos de ejemplo para cada categoría
    const items = {
        All: [
            { id: 1, category: "head", name: "Sombrero Elegante", img: "https://cdn.shopify.com/s/files/1/0809/3349/files/GORRA_MEZCLILLA_480x480.jpg?v=1724950503" },
            { id: 2, category: "torso", name: "Camiseta Casual", img: "https://down-co.img.susercontent.com/file/cn-11134207-7ras8-m125erwwh4h2b4" },
            { id: 3, category: "legs", name: "Pantalón Deportivo", img: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/126927053_01/w=1500,h=1500,fit=pad" },
            { id: 4, category: "shoes", name: "Zapatillas Modernas", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGH0mL9kmJaJ9xbEtU9gP-xY1WB96KP_ODg&s" },
            { id: 5, category: "accessory", name: "Collar Brillante", img: "https://i.pinimg.com/474x/3f/7a/d3/3f7ad34093221595904b25fa05bd81da.jpg" },
        ],
        head: [
            { id: 1, category: "head", name: "Sombrero Elegante", img: "https://cdn.shopify.com/s/files/1/0809/3349/files/GORRA_MEZCLILLA_480x480.jpg?v=1724950503" },
            { id: 2, category: "head", name: "Sombrero Deportivo", img: "https://ae01.alicdn.com/kf/Sdd4b10f0ba2a4d54820c7ffbba5942e7u.jpg_640x640q90.jpg" },
            { id: 3, category: "head", name: "Sombrero de Playa", img: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/122489094_01/w=800,h=800,fit=pad" },
            { id: 4, category: "head", name: "Sombrero Elegante 2", img: "https://exitocol.vtexassets.com/arquivos/ids/23409269/sombrero-fedora-playa-gorro-gardel-elegante-negro.jpg?v=638557946545830000" }
        ],
        torso: [
            { id: 1, category: "torso", name: "Camiseta Casual", img: "https://down-co.img.susercontent.com/file/cn-11134207-7ras8-m125erwwh4h2b4" },
            { id: 2, category: "torso", name: "Camiseta de Manga Larga", img: "https://m.media-amazon.com/images/I/71IIzPDBPyL._AC_UY350_.jpg" },
            { id: 3, category: "torso", name: "Sudadera Deportiva", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXhANVfhdsztGEqZesrVOpEqRfwaPiZ2yyw&s" },
            { id: 4, category: "torso", name: "Chaqueta de Invierno", img: "https://img.joomcdn.net/d224417952ba6dfa209a8206e1a9821dfb799b95_original.jpeg" }
        ],
        legs: [
            { id: 1, category: "legs", name: "Pantalón Deportivo", img: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/126927053_01/w=1500,h=1500,fit=pad" },
            { id: 2, category: "legs", name: "Pantalón de Jeans", img: "https://bezaid.com/cdn/shop/products/Joggercorduroy.jpg?v=1661890966&width=2048" },
            { id: 3, category: "legs", name: "Pantalón Corto", img: "https://http2.mlstatic.com/D_NQ_NP_877514-CBT70478835535_072023-O.webp" },
            { id: 4, category: "legs", name: "Pantalón de Traje", img: "https://hmcolombia.vtexassets.com/arquivos/ids/3922124-483-725?v=638600844217730000&width=483&height=725&aspect=true" }
        ],
        shoes: [
            { id: 1, category: "shoes", name: "Zapatillas Modernas", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGH0mL9kmJaJ9xbEtU9gP-xY1WB96KP_ODg&s" },
            { id: 2, category: "shoes", name: "Zapatos de Vestir", img: "https://http2.mlstatic.com/D_NQ_NP_828421-CBT70126410244_062023-O.webp" },
            { id: 3, category: "shoes", name: "Botas de Montaña", img: "https://http2.mlstatic.com/D_NQ_NP_813443-MCO52894028645_122022-O.webp" },
            { id: 4, category: "shoes", name: "Sandalias de Playa", img: "https://siman.vtexassets.com/arquivos/ids/5138529-800-800?v=638423956413100000&width=800&height=800&aspect=true" }
        ],
        accessory: [
            { id: 1, category: "accessory", name: "Collar Brillante", img: "https://i.pinimg.com/474x/3f/7a/d3/3f7ad34093221595904b25fa05bd81da.jpg" },
            { id: 2, category: "accessory", name: "Gafas de Sol", img: "https://santalucia.com.co/cdn/shop/files/0RB2205__1397R5__P21__shad__cfr.jpg?v=1721258211" },
            { id: 3, category: "accessory", name: "Pulsera Elegante", img: "https://http2.mlstatic.com/D_NQ_NP_721692-MCO72725406658_112023-O.webp" },
            { id: 4, category: "accessory", name: "Reloj de Pulsera", img: "https://m.media-amazon.com/images/I/51BI9WUJE9L._AC_SY350_.jpg" }
        ],
    };

    // Filtrar productos según la categoría seleccionada
    const displayedItems =
        selectedCategory === "All" ? items.All : items[selectedCategory];

    return (
        <div className="inventory-container">
            {/* Botones de categorías con iconos */}
            <div className="inventory-categories">
                <button
                    className={selectedCategory === "All" ? "active" : ""}
                    onClick={() => setSelectedCategory("All")}
                >
                    <i className="fas fa-layer-group"></i> Todos
                </button>
                <button
                    className={selectedCategory === "head" ? "active" : ""}
                    onClick={() => setSelectedCategory("head")}
                >
                    <i className="fas fa-hat-cowboy"></i> Cabeza
                </button>
                <button
                    className={selectedCategory === "torso" ? "active" : ""}
                    onClick={() => setSelectedCategory("torso")}
                >
                    <i className="fas fa-tshirt"></i> Torso
                </button>
                <button
                    className={selectedCategory === "legs" ? "active" : ""}
                    onClick={() => setSelectedCategory("legs")}
                >
                    <i className="fas fa-user"></i> Piernas
                </button>
                <button
                    className={selectedCategory === "shoes" ? "active" : ""}
                    onClick={() => setSelectedCategory("shoes")}
                >
                    <i className="fas fa-shoe-prints"></i> Zapatos
                </button>
                <button
                    className={selectedCategory === "accessory" ? "active" : ""}
                    onClick={() => setSelectedCategory("accessory")}
                >
                    <i className="fas fa-gem"></i> Accesorios
                </button>
            </div>

            {/* Galería de productos */}
            <div className="inventory-gallery">
                {displayedItems.map((item) => (
                    <div className="inventory-item" key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                        <button
                            onClick={() => setEquippedItem(item.id)}
                            className={equippedItem === item.id ? "equipped" : ""}
                        >
                            {equippedItem === item.id ? "Equipado" : "Equipar"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Inventory;
