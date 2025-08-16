##### Environment Variables

```
PORT=8081
CACHE_TIME=300
SECRET_CAPCHA=reCAPTCHA_v2

TRUCKERSMP_API_URL=https://api.truckersmp.com/v2/
TRUCKERSMP_VTC_ID=vtc_id
TRUCKERSMP_STAFF_ID=string_id,string_id

DISCORD_WEBHOOK_URL_CONTACT=discord_webhook(channel+token)
DISCORD_WEBHOOK_URL_VTC_APPLY=discord_webhook(channel+token)
DISCORD_WEBHOOK_REFORMA_CONTACT=discord_webhook(channel+token)
DISCORD_BOT_TOKEN=your_token
DISCORD_ID_SERVER=your_discord_server_id
DISCORD_ROLES_ID=string_id,string_id
DISCORD_ROLES_REFORMA_STAFF=string_id,string_id
DISCORD_INVITE_CODE=discord_invite_code

AUTHORIZED_DOMAINS=domain,domain
ALLOWEDHEADERS=Accept-Encoding, Accept
ALLOWEDORIGIN=https://domain.com, https://domain2.com
```

-   Cache time is represented in seconds
-   Use -1 in CACHE_TIME to disable cache

##### How to use

Install dependencies

```bash
npm i
```

Generate the transpilation of the TS code to JS using

```bash
npm run build
```

And run the service using

```bash
npm run start
```

<details>
 <summary><code>POST</code> <code><b>/getApiResponse/</b></code> <code>(Send GET request to other API)</code></summary>

`BODY`:

```json
{
  "url": string,
  "headers": json
}
```

`Response`:

> | http code | content-type       | response                      |
> | --------- | ------------------ | ----------------------------- |
> | `200`     | `application/json` | `(JSON API response)`         |
> | `500`     | `application/json` | `{"error": "need more data"}` |
> | `404`     | `application/json` | `{"error": "error message"}`  |

### Remember

These are just the responses that our backend sends. The other answers may depend on the API you are querying.

</details>

---

<details>
 <summary><code>POST</code> <code><b>/postIaChat/</b></code> <code>(GET response from AI API)</code></summary>

`BODY`:

```json
{
  "prompt": string,
  "pass": string,
  "user_id": string
}
```

`Response`:

> | http code | content-type       | response           |
> | --------- | ------------------ | ------------------ |
> | `200`     | `application/json` | `application/json` |
> | `404`     | `application/json` | `{"error": 404}`   |

</details>

---

<details>
 <summary><code>POST</code> <code><b>/postContact/</b></code> <code>(POST contact form and send to discord webhook)</code></summary>

`BODY`:

```json
{
  "name": string,
  "email": string,
  "reason": string,
  "discord": string | undefined,
  "message": string,
  "captcha": string
}
```

`Response`:

> | http code | content-type       | response                      |
> | --------- | ------------------ | ----------------------------- |
> | `200`     | `text/plain`       | `application/json`            |
> | `401`     | `text/plain`       | `Unauthorized`                |
> | `404`     | `application/json` | `{"error": 404}`              |
> | `500`     | `application/json` | `{"error": "need more data"}` |

</details>

---

<details>
 <summary><code>GET</code> <code><b>/getPartnerLogo/:name</b></code> <code>(GET Partner Logo)</code></summary>

`Response`:

> | http code | content-type                  | response                     |
> | --------- | ----------------------------- | ---------------------------- |
> | `200`     | `image/png+jpeg+jpg+gif+webp` | `RAW image file`             |
> | `404`     | `application/json`            | `{"error": "error message"}` |

</details>

---

<details>
 <summary><code>GET</code> <code><b>/getEvents/</b></code> <code>(GET all events from VTC)</code></summary>

`Response`:

> | http code | content-type       | response                             |
> | --------- | ------------------ | ------------------------------------ |
> | `200`     | `application/json` | `[Events type]`                      |
> | `500`     | `application/json` | `{"error": "Internal Server Error"}` |

[Events type](https://truckersmp.com/developers/api#operation/get-vtc-id-events)

</details>

---

<details>
 <summary><code>GET</code> <code><b>/getNews/</b></code> <code>(GET all news from VTC)</code></summary>

`Response`:

> | http code | content-type       | response                             |
> | --------- | ------------------ | ------------------------------------ |
> | `200`     | `application/json` | `[News type]`                        |
> | `500`     | `application/json` | `{"error": "Internal Server Error"}` |

[News type](https://truckersmp.com/developers/api#operation/get-vtc-id-news)

</details>

---

<details>
 <summary><code>GET</code> <code><b>/getMembers/</b></code> <code>(GET all members from VTC)</code></summary>

`Response`:

> | http code | content-type       | response                             |
> | --------- | ------------------ | ------------------------------------ |
> | `200`     | `application/json` | `[Members type]`                     |
> | `500`     | `application/json` | `{"error": "Internal Server Error"}` |

[Members type](https://truckersmp.com/developers/api#operation/get-vtc-id-members)

</details>

---

<details>
 <summary><code>GET</code> <code><b>/getNew/:id</b></code> <code>(GET specified member)</code></summary>

`Response`:

> | http code | content-type       | response                             |
> | --------- | ------------------ | ------------------------------------ |
> | `200`     | `application/json` | `[Member type]`                      |
> | `500`     | `application/json` | `{"error": "Internal Server Error"}` |

[Member type](https://truckersmp.com/developers/api#operation/get-player-id)

</details>

---

<details>
 <summary><code>GET</code> <code><b>/getMemberInfo/:id</b></code> <code>(GET specified new from specified VTC)</code></summary>

`Response`:

> | http code | content-type       | response                             |
> | --------- | ------------------ | ------------------------------------ |
> | `200`     | `application/json` | `[New type]`                         |
> | `500`     | `application/json` | `{"error": "Internal Server Error"}` |

[New type](https://truckersmp.com/developers/api#operation/get-vtc-id-news-news_id)

</details>

---

<details>
 <summary><code>GET</code> <code><b>/getSummary/</b></code> <code>(GET general summary of total members)</code></summary>

`Response`:

> | http code | content-type       | response                                                                                  |
> | --------- | ------------------ | ----------------------------------------------------------------------------------------- |
> | `200`     | `application/json` | `{"vtc_members":100,"discord_members":100,"staff_members":100,"last_member":member_type}` |
> | `404`     | `application/json` | `{"error": 404}`                                                                          |

[Member type](https://truckersmp.com/developers/api#operation/get-player-id)

</details>

---

<details>
 <summary><code>GET</code> <code><b>/getNextEvent/</b></code> <code>(GET general summary of total members)</code></summary>

`Response`:

> | http code | content-type       | response        |
> | --------- | ------------------ | --------------- |
> | `200`     | `application/json` | `[Events type]` |
> | `500`     | `application/json` | `{"error": 404` |

[Event type](https://truckersmp.com/developers/api#operation/get-vtc-id-events)

</details>

---

<details>
 <summary><code>GET</code> <code><b>/getHallOfFame/</b></code> <code>(GET Discord user role in hall-of-fame)</code></summary>

`BODY`;

```json
{
    "response": [
        {
            "id": "1234",
            "name": "role",
            "color": 10354688,
            "members": [
                {
                    "id": "1234",
                    "nick": "nickname",
                    "avatar": "avatar",
                    "joined_at": "2023-11-20T01:51:03.691Z",
                    "rolesNames": ["Mod", "Verificado"]
                },
                {
                    "id": "1234",
                    "nick": "nickname",
                    "avatar": "avatar",
                    "joined_at": "2023-10-13T01:39:50.382Z",
                    "rolesNames": ["Stream Notify", "Mod"]
                }
            ]
        }
    ]
}
```

`Response`:

> | http code | content-type       | response                             |
> | --------- | ------------------ | ------------------------------------ |
> | `200`     | `application/json` | `[Events type]`                      |
> | `404`     | `application/json` | `{"error": "Internal Server Error"}` |

[Event type](https://truckersmp.com/developers/api#operation/get-vtc-id-events)

</details>

---

<details>
 <summary><code>GET</code> <code><b>/getCastoresDiscordStaff/</b></code> <code>(GET Discord Reforma Staff)</code></summary>

`BODY`;

```json
{
    "response": [
        {
            "id": "1234",
            "name": "role",
            "color": 10354688,
            "members": [
                {
                    "id": "1234",
                    "nick": "nickname",
                    "avatar": "avatar",
                    "joined_at": "2023-11-20T01:51:03.691Z",
                    "rolesNames": ["Mod", "Verificado"]
                },
                {
                    "id": "1234",
                    "nick": "nickname",
                    "avatar": "avatar",
                    "joined_at": "2023-10-13T01:39:50.382Z",
                    "rolesNames": ["Stream Notify", "Mod"]
                }
            ]
        }
    ]
}
```

`Response`:

> | http code | content-type       | response           |
> | --------- | ------------------ | ------------------ |
> | `200`     | `application/json` | `application/json` |
> | `404`     | `application/json` | `{"error": 404}`   |

[Event type](https://truckersmp.com/developers/api#operation/get-vtc-id-events)

</details>

---

<details>
 <summary><code>GET</code> <code><b>/getCastoresDiscordSTeam/</b></code> <code>(GET Discord Reforma Staff Team)</code></summary>

`BODY`;

```json
{
    "response": [
        {
            "id": "1234",
            "name": "role",
            "color": 10354688,
            "members": [
                {
                    "id": "1234",
                    "nick": "nickname",
                    "avatar": "avatar",
                    "joined_at": "2023-11-20T01:51:03.691Z",
                    "rolesNames": ["Mod", "Verificado"]
                },
                {
                    "id": "1234",
                    "nick": "nickname",
                    "avatar": "avatar",
                    "joined_at": "2023-10-13T01:39:50.382Z",
                    "rolesNames": ["Stream Notify", "Mod"]
                }
            ]
        }
    ]
}
```

`Response`:

> | http code | content-type       | response           |
> | --------- | ------------------ | ------------------ |
> | `200`     | `application/json` | `application/json` |
> | `404`     | `application/json` | `{"error": 404}`   |

[Event type](https://truckersmp.com/developers/api#operation/get-vtc-id-events)

</details>
#   C a s t o r e s V T C _ W e b  
 #   C a s t o r e s - W e b  
 