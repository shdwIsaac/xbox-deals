export interface IDeal {
  'id': number
  'gameName': string
  'isTopGame': boolean
  'isNeedGold': boolean
  'logoPicture': string
  'prices': [
    {
      'country': string
      'discount': number
      'price': number
    }
  ]
}

const GetDealsUrl = 'http://localhost:5288/api/DealsControllers'

export const checkResponse = async <T> (res: Response): Promise<T> => {
  return res.ok ? await res.json() : await res.json().then(async (err) => await Promise.reject(err))
}

export async function request<T> (url: string, options?: RequestInit): Promise<T> {
  // принимает два аргумента: урл и объект опций, как и `fetch`
  return await fetch(url, options).then(async res => await checkResponse<T>(res))
}

export const getDeals = async (): Promise<IDeal[]> => {
  return await request(GetDealsUrl, {
    method: 'Get',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Request-Method': 'GET'
    }
  })
}
