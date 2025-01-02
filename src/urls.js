import {API_KEY} from './constants/constants'
import { baseUrl } from './constants/constants'
export const originals=`${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`
export const action=`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`
export const Documentary= `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99`
export const Romance= `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const Horror= `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`
export const Comedy= `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`
