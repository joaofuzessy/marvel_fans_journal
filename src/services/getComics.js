import axios from 'axios';

const api = axios.create({
 baseURL: 'https://gateway.marvel.com:443/v1/public/',
});

export const getComics = async() => {
  try{
    //return await axios.get(`https://gateway.marvel.com:443/v1/public/comics?apikey=70dc72ee8641520cd02edeeb4f5cb87d`)
    let response = {
      "code": 200,
      "status": "Ok",
      "copyright": "© 2020 MARVEL",
      "attributionText": "Data provided by Marvel. © 2020 MARVEL",
      "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2020 MARVEL</a>",
      "etag": "2b8370dd450eeb95855dba6e1b002cf2490d0a5f",
      "data": {
        "offset": 0,
        "limit": 20,
        "total": 47605,
        "count": 20,
        "results": [
          {
            "id": 82967,
            "digitalId": 0,
            "title": "Marvel Previews (2017)",
            "issueNumber": 0,
            "variantDescription": "",
            "description": null,
            "modified": "2019-11-07T08:46:15-0500",
            "isbn": "",
            "upc": "75960608839302811",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "",
            "pageCount": 112,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/82967",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/82967/marvel_previews_2017?utm_campaign=apiRef&utm_source=70dc72ee8641520cd02edeeb4f5cb87d"
              }
            ],
            "series": {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/23665",
              "name": "Marvel Previews (2017 - Present)"
            },
            "variants": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/82965",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/82970",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/82969",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/74697",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/72736",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/75668",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/65364",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/65158",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/65028",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/75662",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/74320",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/73776",
                "name": "Marvel Previews (2017)"
              }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
              {
                "type": "onsaleDate",
                "date": "2099-10-30T00:00:00-0500"
              },
              {
                "type": "focDate",
                "date": "2019-10-07T00:00:00-0400"
              }
            ],
            "prices": [
              {
                "type": "printPrice",
                "price": 0
              }
            ],
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
              "extension": "jpg"
            },
            "images": [],
            "creators": {
              "available": 1,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/10021",
                  "name": "Jim Nausedas",
                  "role": "editor"
                }
              ],
              "returned": 1
            },
            "characters": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/characters",
              "items": [],
              "returned": 0
            },
            "stories": {
              "available": 2,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/183698",
                  "name": "cover from Marvel Previews (2017)",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/183699",
                  "name": "story from Marvel Previews (2017)",
                  "type": "interiorStory"
                }
              ],
              "returned": 2
            },
            "events": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/events",
              "items": [],
              "returned": 0
            }
          },
          {
            "id": 82965,
            "digitalId": 0,
            "title": "Marvel Previews (2017)",
            "issueNumber": 0,
            "variantDescription": "",
            "description": null,
            "modified": "2019-08-21T17:11:27-0400",
            "isbn": "",
            "upc": "75960608839302611",
            "diamondCode": "JUL190068",
            "ean": "",
            "issn": "",
            "format": "",
            "pageCount": 152,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/82965",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/82965/marvel_previews_2017?utm_campaign=apiRef&utm_source=70dc72ee8641520cd02edeeb4f5cb87d"
              }
            ],
            "series": {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/23665",
              "name": "Marvel Previews (2017 - Present)"
            },
            "variants": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/82967",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/82970",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/82969",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/74697",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/72736",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/75668",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/65364",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/65158",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/65028",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/75662",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/74320",
                "name": "Marvel Previews (2017)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/73776",
                "name": "Marvel Previews (2017)"
              }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
              {
                "type": "onsaleDate",
                "date": "2099-08-28T00:00:00-0500"
              },
              {
                "type": "focDate",
                "date": "2019-08-05T00:00:00-0400"
              }
            ],
            "prices": [
              {
                "type": "printPrice",
                "price": 0
              }
            ],
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
              "extension": "jpg"
            },
            "images": [],
            "creators": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/82965/creators",
              "items": [],
              "returned": 0
            },
            "characters": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/82965/characters",
              "items": [],
              "returned": 0
            },
            "stories": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/82965/stories",
              "items": [],
              "returned": 0
            },
            "events": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/82965/events",
              "items": [],
              "returned": 0
            }
          }
        ]
      }
    }
    return(response.data.results);
  }catch(error){
    Promise.reject(error);
  }
}

export default api;