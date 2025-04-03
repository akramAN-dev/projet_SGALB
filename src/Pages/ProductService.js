// ProductService.js

const ProductService = {
    getProductsMini: async () => {
        // Simuler un appel API ou retourner des données statiques
        return new Promise((resolve) => {
            const products = [
                { code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', quantity: 24 },
                { code: 'f230fh0g4', name: 'Leather Wallet', category: 'Accessories', quantity: 35 },
                { code: 'f230fh0g5', name: 'Smartphone', category: 'Electronics', quantity: 50 },
                // Ajouter plus de produits ici...
            ];
            resolve(products);
        });
    }
};

export default ProductService;
