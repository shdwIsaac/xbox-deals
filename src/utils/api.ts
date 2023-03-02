export interface IGame {
  gameId: string
  gameName: string
  isNeedGold: boolean
  logoPicture: string
}

const GetDealsUrl = 'http://localhost:5288/api/DealsControllers'

export const checkResponse = async <T> (res: Response): Promise<T> => {
  return res.ok ? await res.json() : await res.json().then(async (err) => await Promise.reject(err))
}

export async function request<T> (url: string, options?: RequestInit): Promise<T> {
  // принимает два аргумента: урл и объект опций, как и `fetch`
  return await fetch(url, options).then(async res => await checkResponse<T>(res))
}

export const getDealsDb = async (params: any): Promise<IGame[]> => {
  return await request(GetDealsUrl + '?' + new URLSearchParams(params).toString(), {
    method: 'Get',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Request-Method': 'GET'
    }
  })
}

export interface IGameDeals {
  gameName: string
  logoPicture: string
  description: boolean
  deals: IDeal[]
}

export interface IDeal {
  country: string
  priceRub: string
  isNeedGold: boolean
}

export const getDeal = async (id: string): Promise<IGameDeals> => {
  return await request(GetDealsUrl + `/${id}`, {
    method: 'Get',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Request-Method': 'GET'
    }
  })
}
