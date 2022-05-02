

const useAuth = () => {

    const auth =localStorage.getItem("storefront")?JSON.parse(localStorage.getItem("storefront")):null;
    return auth;
    
}

export default useAuth