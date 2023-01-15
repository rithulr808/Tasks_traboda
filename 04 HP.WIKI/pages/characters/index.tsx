import React, {useEffect} from 'react' ;
import SearchBar from "../../src/searchbar";
import { useRouter } from 'next/router'
import {Avatar, Grid} from '@mui/material';
import {IconButton} from "@material-tailwind/react";
import {IconContext} from "react-icons";
import {AiFillHome} from "react-icons/ai";


const  Characters = () => {

    const router = useRouter()
    const { name } = router.query
    const urlToFetch = "https://hp-api.onrender.com/api/characters"
    // https://hp-api.onrender.com/api/characters
    // https://harry-potter-api-en.onrender.com/db

    const [data, setData] = React.useState(null)

    useEffect(() => {
        fetch(urlToFetch)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])

    // @ts-ignore
    const results = data?.filter((item: any) => item.name.toLowerCase().includes(name?.toString().toLowerCase()))



    if(data) {
        return (
            <div className="w-full bg-white h-screen overflow-y-auto">
                <div className="flex flex-wrap absolute z-10 px-14 py-4 bg-white w-full shadow-xl shadow-gray-100 ">
                    <SearchBar/>
                    <div className="mx-2" >
                        <IconButton size="lg" onClick={() => router.push('/')} >
                            <IconContext.Provider
                                value={{ color: 'white', size: '2em' }}
                            >
                                <AiFillHome  />
                            </IconContext.Provider>
                        </IconButton>
                    </div>
                </div>
                <div className="mt-10 p-8">
                    <Grid container spacing={{xs: 1, md: 3,}} columns={{xs: 2, sm: 8, md: 12, lg: 16}}>
                        {results?.map((result: any, index: number) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <div
                                    className="max-w-lg rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-7 hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                                    onClick={() => router.push(`/characters/${result.name.toLowerCase()}`)}>
                                    <div className="px-2 py-4 text-center">

                                        <div className="flex justify-center mt-4">
                                            <Avatar className="relative  m-4 z-0" alt="wizard"   sx={{ width: 140, height: 140 }}

                                                    src={result.image}/>
                                        </div>
                                        <p
                                            className="inline-block rounded-full px-3 text-center text-xl font-semibold text-gray-900 m-auto ">Name
                                            :</p>
                                        <p
                                            className="inline-block rounded-full  text-center text-xl font-semibold text-gray-900 m-auto ">{result.name}</p>
                                        <div className="px-6 pt-4 pb-2 justify-center  text-center">
                                            <p
                                                className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mr-2 mb-2 ">House
                                                :</p>
                                            <p
                                                className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2 mb-2">{result.house}</p>
                                        </div>
                                        <p className="flex  flex-wrap  text-gray-700   justify-center p-2 ">
                                        </p>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        )
    }
    else{
        return(
            <div role="status" className="flex flex-wrap h-screen justify-center content-center   bg-white" >
                <svg aria-hidden="true" className="w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"/>
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"/>
                </svg>
            </div>
        )
    }
}
export default Characters
