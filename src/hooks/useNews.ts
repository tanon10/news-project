import { useEffect, useState } from 'react';
import { Axios } from '../helper/axios';
import { Articles } from '../interfaces/interfaces';


export const useNote = (title: string = '') => {
    const [isLoading, setIsLoading] = useState(true)

    const [note, setNote] = useState<any>();    
    
    const getNote = async () => {
        const data: Articles[]  = await Axios('', 1, title);
        console.log('resp', data)
        if (data.length > 0) {
            setNote(data[0]);
        } else {
            setNote({})
        }

        setIsLoading(false);
    }

    useEffect(() => {
        getNote();
    }, [])
    
    return {
        isLoading,
        note
    }
}


export const useArticles = () => {
    const [isLoading, setIsLoading] = useState(true)

    const [articles, setArticles] = useState<Articles[]>([]);    
    
    const getSectors = async () => {
        const resp: Articles[] = await Axios();
        
        setArticles(resp);
        setIsLoading(false);
    }

    useEffect(() => {
        getSectors();
    }, [])

    
    return {
        isLoading,
        articles
    }
}

export const useBusiness = () => {
    const [isLoading, setIsLoading] = useState(true)

    const [business, setBusiness] = useState<Articles[]>([]);    
    
    const getSectors = async () => {
        const resp: Articles[] = await Axios('business');
        
        setBusiness(resp);
        setIsLoading(false);
    }

    useEffect(() => {
        getSectors();
    }, [])

    
    return {
        isLoading,
        business
    }
}

export const useScience = () => {
    const [isLoading, setIsLoading] = useState(true)

    const [science, setScience] = useState<Articles[]>([]);    
    
    const getSectors = async () => {
        const resp: Articles[] = await Axios('science');
        
        setScience(resp);
        setIsLoading(false);
    }

    useEffect(() => {
        getSectors();
    }, [])

    
    return {
        isLoading,
        science
    }
}

export const useTecnology = () => {
    const [isLoading, setIsLoading] = useState(true)

    const [technology, setTecnology] = useState<Articles[]>([]);    
    
    const getSectors = async () => {
        const resp: Articles[] = await Axios('technology');
        
        setTecnology(resp);
        setIsLoading(false);
    }

    useEffect(() => {
        getSectors();
    }, [])

    
    return {
        isLoading,
        technology
    }
}



export const useSports = () => {
    const [isLoading, setIsLoading] = useState(true)

    const [sports, setSports] = useState<Articles[]>([]);    
    
    const getSectors = async () => {
        const resp: Articles[] = await Axios('sports');
        
        setSports(resp);
        setIsLoading(false);
    }

    useEffect(() => {
        getSectors();
    }, [])

    
    return {
        isLoading,
        sports
    }
}


export const useEntertainment = () => {
    const [isLoading, setIsLoading] = useState(true)

    const [entertainment, setEntertainment] = useState<Articles[]>([]);    
    
    const getSectors = async () => {
        const resp: Articles[] = await Axios('entertainment');
        
        setEntertainment(resp);
        setIsLoading(false);
    }

    useEffect(() => {
        getSectors();
    }, [])

    
    return {
        isLoading,
        entertainment
    }
}

export const useHealth = () => {
    const [isLoading, setIsLoading] = useState(true)

    const [health, setHealth] = useState<Articles[]>([]);    
    
    const getSectors = async () => {
        const resp: Articles[] = await Axios('health');
        
        setHealth(resp);
        setIsLoading(false);
    }

    useEffect(() => {
        getSectors();
    }, [])

    
    return {
        isLoading,
        health
    }
}






