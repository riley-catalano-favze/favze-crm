const FAVZE_MARK_DATAURI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAADYCAYAAADbJkePAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4nO2deZhdVZmv30olmzkkjA3NUEwXURAEaWUQNhZhnkFBZFBRUexuoRG1t3bb6r3bR8VGvLYgOIDIKMgMQlLJTgIyBNCQAAljEQIJZCIjySZVp//4ThVFpYZzzh6+tdZZ7/OchyRW7fUzOfWeNX6rBQcJwngEsBOwV/W1B7AJMKrPK+j361ZgHvAi8FLfV5pEi0v+v+CxizHAPsCewDbAP/R5bQ2MBipAd/W/FaALWAS8DrzR5/Uy8FT1107Roh0gK0EYjwH24z2x7AV8CNgwx2be5j0JPQrcnSbRSzk+32MP6wOfAPYH9gU+AuxcQDvzgCeBJ4BpwGRgZQHtlIaVsgnCeCxwIvApYBzSOymbZ4G7gbuAx9Ik6lLI4CmHbYFjgOOQ91ueH2S1sgaYiLzn7gFeU8iQCWtkUxXMSYhgDkdHMIOxEHkD3A08mCbRCuU8nuxsA3weOAXpOZvG34GrgGuAd3Sj1IbRsgnCeBRwBvAZzBPMYKTA/cBP0yR6WDuMpy5GIO+z84ETgJG6cWpiIfBL4H+qvzYWI2UThHEAnAN8B2jTTZOJycD/AyakSVTRDuMZlC2ALwJfopj5lzJ4B/g9cBkyv2gcRsmmKplzEcnsqBwnTx4HYmRiuVs7jKeXscDFwIXARspZ8qIC/Bn4KfCYcpb3YYRsHJZMf2Yi0rnFTyirMhr4OiKaTZWzFMlU4MfAfYiEVFGVTRDGLcDZwA9wWzL9eRF5E1yTJtFa7TBNxAbAPwPfAjZXzlImfwIuQHlOR002QRhvg8ymH6eVwQAeB85Nk2iWdpAm4HDgSmAX7SBKzEfmpe7VCqAimyCMPw1cAWym0b5hrEaGj5f7oVUhbAFcigzTPXA1MnxcXnbDpcomCOPNkWW6M8ps1xIeAj7ndybnRgvwWWR1ZgvlLKbxCvA5YEqZjZYmmyCMjwF+i5wX8QzMKuAS4Eq/apWJ7ZD32hHaQQymAvwM+A+kd104hcumutL0C2SjlKc2OoDz0iR6VTuIhRwBXI/vzdTKM8ietqeKbqhQ2QRhvAlwK/4TphGWAxcBv/MbAmuiFfge8F0M2dJhEauRs4YPFtlIYf8oQRhvjazv71tUG03CzciK1RrtIAazNXAD8EntIBaTAqch5/sKoRDZBGG8K/AA9m79No0EOClNoqXaQQzkEOAm5OCkJxtrkcWb24p4+Ii8HxiE8UeBv+JFkychMCUI4221gxjG55GyC140+TAS6UmfWcTDc5VNEMZHIZ/CW+b5XA8AHwYeCcJ4D+0gBtCC7E36HTJX48mPVuCPwBfyfnBuw6ggjE9CtkXbcCzfZhYDx6VJ9Ih2ECVakdXNC7SDNAEXIJtvcyGXT4UgjPdHiketl8fzPEOyAXBma1v7jK7OjtnaYUpmA+BGZKnWUzzHAsuQUriZySybIIx3QMbNY7PH8dTIKOD01rb2eV2dHYXvjzCEscjq5pHaQZqMI4Gl5CCcTMOoIIxHAw8jVeU9OvwX8APH9+JshWx09O8zHbqQRYqHsjykYdkEYTwSGTr5Txp9fgX8s6PC8aIxg7nIdTWLGn1AQ8Ooah2a/8EfqDSF/YGNW9vax3d1dmhnyRMvGnMYDXwQ2dPUEI0ufV8EfKXRRj2FcDGyVd8VvGjM4zjkZ78h6u7ZBGH8MWTjjz9/Yh6Htba1L+3q7Mhl9UARLxpzaUfOUL1e7zfWJYwgjNdDTod+sN6GPKXyxTSJfqsdokG8aMznVeQm0CX1fFO9w6jv4EVjA1cHYXy6dogG2BIvGhvYEakXVFdnpeZhVBDGewPXUcB5Kk/utAAntba1/62rs+N57TA1siWyX8uLxg72QFamHq/1G2oyU3WZ+1HMvIbUMzhrgGPSJJqoHWQYvGjsJAU+RI2X4tXaS7kYLxobWQ+4Kwjjj2sHGQIvGnsJkE2lNTFszyYI492B6fhzTzbzNhCmSTRdO0g/vGjsp4JUJJg53BfW0rP5JV40tjMGGF/94DAFLxo3aEEumazpCwel2v1u1lIGLjIX+ESaRJ3KOXpWnfZSzuHJj/2BJ4b6guF6Nv+eXxaPAWwHTKjeRqqFF42b/HC4Lxi0ZxOE8V7A07nG0eddZP7pDaRMQ4AMEQNgW+SHsRl4BpnDKfvu52YQTQX5uVmCfJi3VP87AnnP7Yi7lSw/wRAnw4eSzfUUVIu0ROYC44Fp1deMoW4pqNbmOaj6OhjYu4yQSjwJfDJNomUlteeyaJ5D5p86gMlINcWhGAPsCuwGfAw4Hjdqdk9BSlEMWH1gQNkEYbwz8AL2buCbDvwUuCVNoncbfUj1loivIvVYx+SUzSQmA+0l3DHuqmj+gNwoOSfjc1qQTXLHI1cG2/z3dCSD3D81mGyuxM4bLMcjkpmQZ22XIIw3RHp5/4Is87nEv6RJ9MsCn++iaJ4GvkbGYlKD0AIcjcyXHlzA84tmGtJbW+fnbx3ZVK8LeQWZx7CF2cA5aRLVvHW6Eap1fM4CfoI7d5YvA3ZPk2h+Ac/eAhleuCKaZUhP5lfIHUtFczDwc+zbUHsIMLX/Hw40TDofu0RzDfDRokUDkCZRJU2i64DdgUsp5w1XNKMpprfmmmj+iPy7/4Ly/t0fAg5ABNfwdIACpw70hwP1bGYi5x1MZznwlTSJbtAKEITxB4CrkFl4W3kOkfWqHJ/pkmjeBb6MfKhp8mHgeuzYBPkasur2vqHU+3o2QRjvhh2ieQL4iKZoANIkmgUcBnwf6NbM0iCzkRUpL5qBWQwcjr5oQOaJDkYugTSd7ZFNfu+j/zDq5HKyZOJW4KA0iV7SDgKQJlFXmkT/hVQwe0M5Tj28gIgmz7kal0QzG5nonKIdpA9LkcnjQu7izpl1hlK2yWYKcHaaRKl2kP6kSZQg1ecHXPYzjJcR0eQpR5dE04HMldRUOqFkVgOnI3NIJnMq/aZpen9TXYWqu65oiTwLHJwmUV2lCMsmCONRwG8w99bGTuDQNImy7g3pyxbID6gL2wJ+jWxxMH1Cdj1gEiJFU9kH2fMGvL9nc2L5WWpmHnC06aIBqG4i/DyyWmUac4DDvGgGpILcHPBVzBcNSGG0U5Bd8qbyvqFUX9mYOoRajogmzx+QQkmTqDtNokuAS7Sz9GEuIprOHJ/pimhWAicge1psuuhvPnAScmOliZzW9zcjoPca3cNU4gxPZGDRp5pIk+hS4Fz03wxvIKJ5OcdnuiKa5cARyO2uNvIkcJl2iEHYo/oC3uvZ7AmMVIkzNHOAq7VDZCFNoj8gn5rvKEWYj4gmz8lOV0SzDBHNX7WDZOT7mDucOqXnFz2yMfV6lu8PdUrbFtIkug9ZGi97zulNRDR53rDgimiWAuOQQv62swL4unaIQeg9amGybJ5HTtU6QZpEjyCbsoo4gzQQC5AT3bNyfOYWwATsF83byGa9wo+4lMjtmFl/areeX5gsm++lSeTC2aNe0iR6FnmTLyq4qUWIaJ7J8Zk9orG9xs8SpJc5ZAlLC6kAl2uHGIBdqXrGVNm8BNyiHaIIqgIYh3Tji2ABMnSakeMzXRHNYkQ0T2kHKYgbgLKrLw7H+lQrYI6orkRtr5tnHf6SJpGNZ41qIk2ivwFHIWPtPHkTKffpRbMui4BPAn/TDlIgq5FrcU3j/4D0bD6gHGQgOrQDFE2aRI8CxyFvkDyYh4jm2ZyeB+6IZiEiGiu3UNTJXdoBBmA3ENmYdsq7GztOtmYmTaLJyGbKrDtW5yJHEPKcDN4cN0SzANlDZuLkaRE8jkyAm0SvbHZRDtKfJ204lpAXaRL9Bfg0jW/8m4OI5oX8UrE50ru0XTRvIgW4h72t0SHWYt5h4N5h1IbKQfozQTtA2aRJdAdwBvVXgHsFEU2eO4NdEc18pEeT57DSFiZpB+hHb89mfeUg/XFtSbIm0iS6Fenh1CqclxDRdOYYwxXRzEN6NM8p59BitnaAfuwMjDRRNkXvQTGWNIluRw6vDTeH8zwimtdybN4V0byBiMa0H7gyMa0Oz0igzUTZmDa5VSppEt2JnCcZrEDYc8iqU561h1wRzVzgUETGzczr5LfKmRdbe9kYSJpE9yCrVP0Pb85ENuzNy7E5V0TzGtKjMe1TXYNu5O/DJFq9bAylenhzb947KPg0UsrzzRybcWV5ew4iGiPqUhuCaUd9Ro5AyguaQgWpL+IBqsvZBwI7IHM0C3J8fI9o9snxmRp0IkOnPFfkXMC0HfgjR2JWz8a0vyB1qtcI590ldkU0ryDL269qBzEQ036WjFuNagW21g7hOK6I5mVk6ORFMzAD3XarySjTZAPmHQp1CVdE8yIydLKmLnXJtGDez9FKL5vmwRXRPI/0aEwtg2kCY5E73E1ikZdNc7AZMB77RTMbmaMx+X4zE9hJO8AALB4BBNop+uFlky+bIT2aj2gHyUjPveo2XXGsxc7aAQZg0QjKL8I9HLbXtzUJV0TzLDJ0ynMzo8scrB2gHynVOZs8N4nlwSFBGG+sHcIBXBHNTKRHY9r71GSO0A7Qj0VAxUTZBEhVNU/juCKaGch74S3tIBaxHeZV33wRZC3eNNkAHK0dwGJcEc10RDR57ppuBsZpBxiAZ8Fc2RwThHGLdggLcUk07Zh3U4ANnK0dYAB6ZWPiMuIOyJXAntpxRTQzKOduLRf5EDK/ZRq9sjG1EPRF2gEswhXRzMT3aLLwNe0Ag9Armxk0Xmy7SM4OwrhNO4QFuCKaZxHR+DmaxtgUOEc7xAAspbplYUSaRKsxsyj0SOCb2iEMxxXRzMKvOmXlG8BG2iEGYCpSOqb3ZKip15GeF4TxttohDKXnCILtopmNiMbEhQpb2AVzP5gn9vyiRzamXkkaAJF2CAPpEc2+2kEy8gIiGr8zOBuXYd6xox7WkU2ik6MmvhaE8THaIQzCFdG8iD/rlAfHAMdrhxiERcicMPCebJ5GyiuaynVBGPsDmu6I5iX86e082Ar4tXaIIZhEn4qBI6C39OSdWolqYDPgliCMTe0qloEroukp5enr0WRjJHATcjzBVCb2/U3f0oF3lBykXj4O/Fg7hBKuiKYTEY1p14zYyI8wcwNfD13An/v+QV/ZPAQsLjVO/VwYhPG3tUOUzFjcEM0cfHHyvPg0stRtMhPot8LYK5s0idYCt5adqAF+FITxv2qHKImxyD+a7aLpuUCuUzeGE4wD/qAdogau7/8H/Suw//+SgmTl8iCMv6gdomBcEc1cpEfzinYQBzgUmVs16a63gXiHAaZl3iebNIlmIl12G7gqCOPPaocoCFdE8wYiGn9TZXYOBO4FNtAOUgN3MMBlkwPdLfPz4rPkQgtwbRDGp2oHyRlXRDMPf/d2XuwP3I+ZxxEG4o8D/eFAsvkLcl2GDbQCNwZhfKx2kJxwRTTzkR7NC9pBHGAf4EHMu5plMGYhDlmHdWSTJlE38LOiE+XIKOC2IIzbtYNkxJVVpzeRIwiztYM4wJ7Ih88Y7SB1cCmDXP072BWdvwOeKyxO/qwH3BWEsWlV5WulRzT7aQfJyFuIaGx675jKB4AO5HJBW5jPIEMoGEQ21WVw09fx+7MhcF8QxvtrB6kTV0SzEKlHY2K5EtvYFdl9u5V2kDr5ObBmsP9xqMvH78eelakeNgEeCMJ4b+0gNeKKaBYhPZqZ2kEcoA0RzTbKOeplBcOc0xpUNtXzUhczyPjLYMYC44Mw3kM7yDC4IprFSI9mxnBf6BmW7RHR2Hjo+Erg7aG+YNgbDIIwvhI4P69EJTIPOCRNIhOXXjdDVhhsF80SpEfzd+0gDrANMBnYTTtIAyxDrvwdskj9UMOoHr6NnSd0twE6gjDeQTtIP7ZEPr1sF83byC0IXjTZ2QqZDLZRNCAHpIe9DaOmu5mCMB6HfBLbyItID8eEanDbIG8q04d4w7EUGTo9qR3EATZH6r7spR2kQeYjE9orh/vCWno2pEk0HvhVxlBa7ApMCMJ4S+UcmyI9GttFsww5DOhFk50xyIe4raIBuJAaRAM1yqbKt7D3jMsHgQeDMB6r1P4I5KSuaXcw18ty5NL6adpBHGA08AB2b+K8Dbil1i+u64rb6qa5KfV+n0E8DoxLk2hZye3aPAztYQUimke0gzjAxsiW/oO0g2RgIXIDZ83X79TTsyFNooeA79YZyiT+CbgnCOMNS27XhpO6Q7ESOAovmjzYELgLu0UDcvtmXfd81SWbKj8Cbmzg+0zhE8AdQRivX2KbsxliZ6XhrASOBh7WDuIA6wO3Y3Y5z1r4MXUMn3qoWzbVzX7nYfe4fRzwpxILqM/GzrvLVyFXhUzVDuIAAfAnZChqMzfR4F1uDc+9VG+qnAbYfGPln4Azq2fBiqYF+TQ4rYS28uAdRDSJcg4XGIX8kJ6iHSQjDyEf1Ksb+eZME73VQ49TkO6hrVwHfK5aWqNoNkZWIA4soa0srAaOpd9VHJ6GaEVOQp+hHSQjzyPv22E37w1GI3M2vaRJNA34fJZnGMDZwBVBGJexwrYC6S2Yerc6iGiOx4smD1qBa7FfNAuQebuGRQPyl5GJrs6Oma1t7SOBQ7I+S5H9gDGtbe0PdHV2FN3WGuQ+nWMxr4TAGuBE7DvtbyIjkV7zmdpBMvIOcCQ5nOjP1LPpw/eQWXab+Trwf0tqayEy9jXpkGgKnIT9+4FMYCQydPqMdpCMVBBZPpbHw3KRTXW+4xzkznCbiYIw/k5Jbc1DzhfNKam9oUiBkxmkdqynLkYBNwCnawfJgYvI8abcXOcpgjDeEVmh0j6HlJV/S5PospLa2hVZWv6Hktrrz7vIKsk9Su27RI9obFlxHIrLkXNPuZH7pGgQxgchp1hH5f3skvlqmkRXltTWh5BaJmXXm30X+cG4q+R2XcSV5W2QKZFPIfd150Zecza9pEn0MPClvJ+rwBVBGJ9bUlvPIJu9lpbUHsBa5M5oL5rsBMDNuCGax4CzyFk0kMNq1EB0dXZMb21rX4bMYtvMCa1t7bO6OjueKaGteUjv5gzkzVskXdV2bJ/UN4EA2ax5knaQHHgZKYg2ZHnPRilENgBdnR2Ptra1V7D7HEgLcHJrW/v0rs6OMu5BmoscdjwdWdEogi5kleTWgp7fTKyH/D2eoB0kBxYjJV4LW7DIfRjVjx8CPy24jaIZiZyjKutMyyTgVGQ+JW+6gc8ixzQ82egRzfHaQXKgZxRS6AdqYT0bgK7ODlrb2icgm9dsu8+pL63Aaa1t7Q91dXa8WkJ7LyD3L51GfpP43chY/KacntfMrM97GzNtZwUimseLbqiUIlhBGI8Afo/sxbGZFUjxrUdLau8M4Hqy90B79kFdnzmRp6dMxFHaQXJgFXIMYUoZjZVWcS8I45HIp+qpZbVZEEuBT6ZJVNb5pqzCqQDnIlvnPdnYANnkZnuZCFA4bFtqec9q/Zg7EJvazCLg0DSJylilgsaFUwG+AFyTd6AmZAPgTuSYie2kyKT2A2U2Wnot4SCMNwDuA8Ky286Z+cgVMS+U1N5nkPM29QjnPOB3xcRpKjZERHO4dpAcUNsxrlK4PAjjTZCTxR/TaD9HXkOE01lSe/UI50vAb4qN0xRsCNyNLAvbTheyM1hlf1XRS98DkibRcmQoNV2j/RzZHrl18x9Lau9GpP7OcIW+voIXTR5shPQAXBBNz7YHtY2cKrIBSJNoCTLRNksrQ07sjAhn65La6zlRvGKQ//0C4NclZXGZjYB7sXtTag8V4HPIkQo11O9/qvYKpgI7aWfJyAwgTJNocUnt7Y68efau/v4dZDLY76PJzsaIaGwuCNcXI+bu1GUDEITxTohwyhqOFMUTwOFpEpV1oHIEcAByIX0HMofkycYmyALGwdpBcuIC4ArtEGCIbACCMN4d2aq/jXaWjDwCHKVw66YnO6OB+zG/IH2tXIjUpTECtTmb/qRJNBtZDn9DOUpWDgDur664eexhNFKp0BXRfBODRAMGyQYgTaLncUM4B+KFYxObIhvcDtAOkhP/gYEHoI2SDUB1k1wIvK4cJSsHAfcFYbyxdhDPkIxBirx/XDtITvyQ8gr314Uxczb9CcJ4V2QOZzvtLBmZChyTJtFgS9UePXpEY3NFgr78BPg2stRtHMbKBiAI410Q4WyvnSUjk4Fj0yRaqR3E08tYRDQf1Q6SE5cjtyEYKRowXDYAQRjvjAhnB+0sGUkQ4azSDuJhM+S4zL7aQXLiCuBrGCwasEA20LsPZxKwo3aWjEwEjvfCUWUzYALwEe0gOfEb4HyGP8KijhWyAQjCuA3pHdgunA5EOO9oB2lCNkdEs492kJy4DjmGYLxowCLZQK9wJgFtukkyMx440QunVDZHRL/3cF9oCTdR0JUrRWGVbKD31s1J2H+W6kFEOKu1gzQBronmz0hBtSKK4heGdbIBCMJ4B2RIZbtw/gKc7IVTKK4Nne5GCuGn2kHqxUrZAARhvD0inJ2Vo2TlfkQ4a7SDOIhronkAOBGw8r1irWwAgjDeDhHOLspRsnIvcKoXTq64tuo0ETgOKSViJVbLBnqFMwnYVTtLRu4BTvPCyQXXRDMVqWxp9aZQ62UDvQW4JiF1XWzmbkQ41o3HDcI10TyCXCK3XDtIVow7iNkIaRK9jhzefF45SlaOB26pXnnjqZ+encGuiGYa0qOxXjTgiGwA0iR6A6kXW+h9xSVwInBzEMajtINYhmtHEB5HanSXVfWxcJyRDbxPOLYXUT8JuMkLp2bG4p5ojgTe1g6SJ07JBiBNonmIcJ7TzpKRU4AbvXCGxYvGEpyTDUCaRPMR4TyrnSUjpwLXV+9J96xLj2j20w6SE86KBhyVDUCaRG8il4uVdR93UXwK+KMXzjr01KPxorEEJ5a+hyII462QczF7amfJyE3A2WkSrdUOYgBjkB6NK4WvnBcNONyz6SFNoreQHs4M7SwZOQO4NgjjVu0gynjRWIrzsgFIk2gB0A48rZ0lI2cC1zSxcHpqBnvRWEhTyAbeJ5zp2lkychbw+yYUjmvFyZtKNNBEsgFIk2ghIpy/a2fJyNnAb5tIOGOQE88uieYImkg00GSyAUiTaBFwOPA37SwZORf4TRMIp+cCuX/SDpITzu0MrhXnV6MGIwhjV7a33wSckyaRVVXbamRTZOjkReMATSsb6BWOC3s17gJOd6ziX0+P5mPaQXKiqUUDTS4bgCCMXbmsbDxwkiPXxHjROEjTywYgCGNXVjqmAselSbRMO0gGNkVqM7ty97YXTRUvmypV4bgwETkNOCpNosXaQRpgNPJv4EXjIF42fQjC2JXu+wxgXPV8mC140TiOl00/gjB25U0/Gzg8TaK52kFqYDQydDpAO0hOeNEMgJfNAFSF48Kb/xWgPU2iV7SDDMHGiNwP1A6SE140g9B0m/pqoTrBeiTwsHaWjOwETA3CeHftIIOwPnAn7ojmMbxoBsXLZhDSJFoOHIN8UtnMPwJTgjA27erZUcAtyIl8F3gM+YDyohkEL5shqPZwjsL+s1RbIcIZpx2kSitwLXKbhAt40dSAl80wpEm0BOka215idDRwfxDGX1bO0QJcAXxGOUdeeNHUiJ8grpEgjLcBpmD/zZsAlwLfSpOou+R2W6pt/1vJ7RaFF00deNnUQRDGOyDC2VE7Sw7cDpxV8vGG/wS+X2J7ReJFUydeNnUShPEuiHC21c6SA9OAE6q3URTNRcB/l9BOGXjRNICXTQMEYfwBYDIy8Wo7c4Bj0ySaWWAbXwSuLvD5ZeJF0yBeNg0ShPFeQIJc+2o7K4FLgF8XMI9zGrLE7cJ7zYsmAy68AdQIwng/YCKy0uMCE4Hz0iTqzOl5HwYeBTbI6XmaeNFkxMsmI0EYH4iUp9hIO0tOrAC+AVyVJlElw3M2Q+aEds4llS6PIvutvGgy4GWTA0EYh8D9yPZ7V3gWuAr4Q3WvUT20AvcgP6C240WTE142ORGE8ZFIec5AO0vOrEZEOhdYVH2tRoZGfV9dVOdm0uS7p0H3d3Ti5ooXTY542eRIEMYnArchn+xNy9rpv6V7yUvaMbLiRZMz/rhCjqRJdCfwWaDsnblGUVm1QDtCVrxoCsDLJmfSJLoZ+IJ2Di0qa1enlTU2l0D2oikKL5sCSJPoWuCr2jk0qCzt1I6QBS+aAvGyKYg0ia4ELtTOUTaVJS/ZOkHuRVMwXjYFkibR5bhzwrkmupfN0Y7QCF40JeBlUzBpEl2GbJJznkqlu1JZMU87Rr140ZSEl00JpEn0M+Cb2jmKprJqQUr3Wu0Y9eBFUyJNvR+kTLo6O/7a2ta+GjhcO0tRdL85fWRlyQvaMWrlUeSsk9VLZzbhZVMiXZ0dD7e2tadAu3aWIuie+xCVVW9px6gFLxoFvGxKpquz46HWtva1uHOrQC9dL90LXWu0YwyHF40SXjYKdHV2TG1ta+8GDtPOkheVd1e92/XKeNPfT140ipj+5nCWrs6OKa1t7QChcpRcqCx+vqV7wQyTz9p50SjjZaNIV2fHZFfmcLrnTWupLHtNO8ZgeNEYgF/6ViZNoh8BX8byw5sGb+bzojEELxsDSJPoauDTQKqdpREM3sznRWMQXjaGkCbRbcjd4iu0s9RLZcX8LgM383nRGIaXjUGkSdSBLIkv0s5SD5W3Xx6pnaEfXjQG4mVjGGkSTQMORspwWkHFrPmaiXjRGImXjYGkSTQLOBCYpZ2lFgySzY3A0XjRGImXjaGkSfQa8AnkOhRjqaQr1hpSme+/gbOwdJK9GfCyMZg0iRYie3Du1c4yEJVKhcrSThPma74BXIzl2wdcx8vGcNIkWg6cAHwPyHJpXO60tLRQWfqqZoR3kQLzP9MM4akNk7eXe/oRhPExwPXAGO0sPbz71BUo7RxeDJwOTNBo3FM/vmdjEWkS3QfsB0zXzgKqm/kmA3vjRWMVXjaWkSbRy8hK1XXKUSqV5a9T8ma+buA/kXksa7YGeAQvGwtJk2gVcC5wATJvoUFLZUNi0cYAAAGkSURBVOmrZQ7D5wCHAD9Ervr1WIafs7GcIIwPAG4Fti277bXP3ED3gpllNHUb8CVgSRmNeYrB92wsJ02iR4B9gQfKbruEzXxzgE9VX140luNl4wBpEr2J7Jw9BShlLbqyZll3gZv51gA/APZAem1GLfl7GsMPoxwjCOMNkWtjvgWsX0QblUqlUlk4s2XtMzcW8fjbkQ16rxTxcI8eXjaOEoRxG7KF/+Qint/14r10zX04z0c+BXwbGJ/nQz3m4GXjOEEYHwH8Atg9z+fmuJnvAeAnwCT8cMlp/JyN46RJ9CDwYeAScirMVenuyrqZrwvZCb0PciPlRLxonMf3bJqIIIzHICejzwf2bPQ5lZVv8u60yxv51hnALciGRNVDVZ7y8bJpQoIwbgEOQAqtHwtsUc/3dy98jrUza97APAu4ufp6rp52PG7hZdPkBGE8AvggcChyh9XewGbAWN4bZq+t/noEwNpZf36he/4TbcCofo9bATyJ1ODpeXXih0gevGw8g1CV0CbI8vlbQIAMvfYGbk6TqAvYCVgNrKq+VuJryngG4X8BQ2L03/HMQtYAAAAASUVORK5CYII=";
/* ===================== STORAGE COMPATIBILITY ===================== */
// window.storage only exists inside Claude.ai's artifact preview. Opened as a plain file
// (downloaded, hosted, or on a phone browser), it doesn't exist, so every save/load would
// throw and the app would never finish loading. This polyfill makes it work standalone too,
// backed by localStorage, so it's the same app whether viewed in Claude.ai or on your phone.
// Note: this local data is separate per browser/device until a real shared backend exists.
if(!window.storage){
  const LS_PREFIX = 'favze_crm_';
  window.storage = {
    async get(key){
      try{
        const raw = localStorage.getItem(LS_PREFIX+key);
        if(raw===null) return null;
        return { key, value: raw, shared:false };
      }catch(e){ return null; }
    },
    async set(key, value){
      try{
        localStorage.setItem(LS_PREFIX+key, value);
        return { key, value, shared:false };
      }catch(e){ console.error('localStorage set failed', e); return null; }
    },
    async delete(key){
      try{
        localStorage.removeItem(LS_PREFIX+key);
        return { key, deleted:true, shared:false };
      }catch(e){ return null; }
    },
    async list(prefix){
      try{
        const keys = Object.keys(localStorage)
          .filter(k=>k.startsWith(LS_PREFIX+(prefix||'')))
          .map(k=>k.slice(LS_PREFIX.length));
        return { keys, prefix, shared:false };
      }catch(e){ return null; }
    }
  };
}

/* ===================== SUPABASE (client photo uploads for content approval) =====================
   Photos attached to a content-calendar post (the ones a client reviews before it goes live) are
   compressed in the browser, then uploaded to a free Supabase Storage bucket, and only the
   resulting link is saved in this app's own data. This keeps large phone photos out of the
   window.storage payload entirely (which has a hard 5MB ceiling across ALL of the CRM's data).
   Publishable key is safe to expose here — it's the low-privilege, RLS-gated key Supabase
   designed for exactly this (browser code). Never put a secret/service_role key here. */
const SUPABASE_URL = 'https://ozbhlqgytfyjdgkoyhkt.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_35rPBJVeCiEETVdBP0dLlw_OmpU77Vd';
const SUPABASE_BUCKET = 'content-approvals';
let supabaseClient = null;
function getSupabaseClient(){
  if(supabaseClient) return supabaseClient;
  if(typeof window.supabase==='undefined'){ console.error('Supabase JS library did not load'); return null; }
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
  return supabaseClient;
}
// Shrinks a photo to max 1920px wide and re-encodes as WebP at 75% quality, entirely in the
// browser before it ever leaves the device. A typical 10MB phone photo becomes ~100-200KB.
function compressImageToWebP(file, maxWidth, quality){
  maxWidth = maxWidth || 1920;
  quality = quality || 0.75;
  return new Promise((resolve, reject)=>{
    const reader = new FileReader();
    reader.onload = (e)=>{
      const img = new Image();
      img.onload = ()=>{
        let w = img.width, h = img.height;
        if(w > maxWidth){ h = Math.round(h * (maxWidth/w)); w = maxWidth; }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        canvas.toBlob(blob=> blob ? resolve(blob) : reject(new Error('Compression failed')), 'image/webp', quality);
      };
      img.onerror = ()=> reject(new Error('Could not read that image'));
      img.src = e.target.result;
    };
    reader.onerror = ()=> reject(new Error('Could not read that file'));
    reader.readAsDataURL(file);
  });
}
// Compresses then uploads one photo to the shared Supabase bucket, returns its public URL.
async function uploadPhotoToSupabase(file, folder){
  if(!agencySupabaseSession){ throw new Error('Connect your agency account in Settings → Integrations before uploading photos'); }
  if(!agencyAccountRequest || !agencyAccountRequest.approved){ throw new Error('Your agency account is still waiting on approval before it can upload photos'); }
  const client = getSupabaseClient();
  if(!client) throw new Error('Supabase is not configured');
  const blob = await compressImageToWebP(file);
  const fileName = `${folder||'general'}/${Date.now()}-${Math.random().toString(36).slice(2,8)}.webp`;
  const { error: uploadError } = await client.storage.from(SUPABASE_BUCKET).upload(fileName, blob, { contentType:'image/webp' });
  if(uploadError) throw uploadError;
  const { data } = client.storage.from(SUPABASE_BUCKET).getPublicUrl(fileName);
  return data.publicUrl;
}

/* ===================== CLIENT PORTAL SYNC (shared content_items table) =====================
   The Favze Portal (a separate file the client logs into) reads and writes the same Supabase
   `content_items` table as this CRM. The two apps use different field shapes for a content
   item, so every sync translates the CRM's shape into the portal's shape before writing.
   Row Level Security on that table now requires a real login, so every synced row needs
   client_id set to that client's actual Supabase Auth user id (their portal login UID),
   not a placeholder string. Each CRM Contact carries its own portalUid, set when you approve
   that client's account in Settings -> Integrations -> Pending Approvals, so this supports
   any number of clients, not just one. */
function crmContentItemToPortalShape(item){
  const contact = item.contactId ? DATA.contacts.find(c=>c.id===item.contactId) : null;
  const status = item.approvalStatus==='Approved' ? 'approved'
    : (item.approvalStatus==='Rejected' || item.approvalStatus==='Revisions Requested') ? 'rejected'
    : 'pending';
  return {
    id: String(item.id),
    date: item.date || todayISO(),
    type: contentTypeMeta(item.type).label,
    typeValue: item.type || 'blog',
    title: item.title || contentTypeMeta(item.type).label,
    desc: item.description || '',
    caption: item.caption || '',
    status,
    visibleToClient: item.visibleToClient === true,
    // Store portal UIDs (not CRM contact IDs) so the portal can compare against its own CLIENT_ID
    assignedClients: (item.assignedClients || []).map(cid=>{ const c = DATA.contacts.find(x=>x.id===cid); return c && c.portalUid ? c.portalUid : null; }).filter(Boolean),
    copywritingStatus: item.copywritingStatus || '',
    designStatus: item.designStatus || '',
    pageUrl: item.pageUrl || '',
    project: contact ? contact.name : 'Favze',
    imageUrls: item.imageUrls || [],
    comments: (item.comments||[]).map(c=>{
      const author = c.fromPortal ? (c.portalAuthor||'Client') : ((DATA.users.find(u=>u.id===c.userId)||{}).name || 'Team member');
      return { author, role: c.fromPortal ? 'client' : 'agency', time: new Date(c.at||Date.now()).toLocaleString('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'}), text: c.text };
    }),
  };
}
async function syncContentItemToPortal(item){
  if(!agencySupabaseSession){ showToast('Connect your agency account in Settings → Integrations to sync with the portal'); return; }
  if(!agencyAccountRequest || !agencyAccountRequest.approved){ showToast('Your agency account is still waiting on approval, see Settings → Integrations'); return; }
  const client = getSupabaseClient();
  if(!client) return;
  // Build the set of portal UIDs to sync to: assigned clients take priority over the legacy contactId field
  const assignedUids = [];
  const assignedIds = item.assignedClients && item.assignedClients.length ? item.assignedClients : (item.contactId ? [item.contactId] : []);
  assignedIds.forEach(cid=>{
    const contact = DATA.contacts.find(c=>c.id===cid);
    if(contact && contact.portalUid) assignedUids.push(contact.portalUid);
  });
  if(!assignedUids.length){ showToast('Assign this item to at least one client with a linked Portal account first'); return; }
  const shape = crmContentItemToPortalShape(item);
  try{
    const rows = assignedUids.map(uid=>({ id: String(item.id), client_id: uid, data: shape, updated_at: new Date().toISOString() }));
    await client.from('content_items').upsert(rows);
  }catch(err){ console.error('Portal sync failed', err); showToast('Portal sync failed, check Settings → Integrations'); }
}
// Pulls every client's Approve/Reject decisions and any comments they've left in the portal
// back into this CRM. Run manually from Content Approval, mirrors the Form Submissions pattern.
// Works across every client at once -- the agency account can read any client's rows.
async function checkPortalUpdates(){
  if(!agencySupabaseSession){ showToast('Connect your agency account in Settings → Integrations first'); return; }
  if(!agencyAccountRequest || !agencyAccountRequest.approved){ showToast('Your agency account is still waiting on approval, see Settings → Integrations'); return; }
  const client = getSupabaseClient();
  if(!client){ showToast('Supabase is not configured'); return; }
  const submitted = DATA.contentCalendar.filter(i=>i.approvalStatus && i.approvalStatus!=='Not Submitted');
  if(!submitted.length){ showToast('Nothing submitted for client approval yet'); return; }
  try{
    const ids = submitted.map(i=>String(i.id));
    const { data, error } = await client.from('content_items').select('id,data').in('id', ids);
    if(error) throw error;
    let changed = false;
    (data||[]).forEach(row=>{
      const item = DATA.contentCalendar.find(x=>String(x.id)===row.id);
      if(!item || !row.data) return;
      const mappedStatus = row.data.status==='approved' ? 'Approved' : row.data.status==='rejected' ? 'Rejected' : 'Pending Review';
      if(item.approvalStatus!=='Approved' && item.approvalStatus!=='Rejected' && item.approvalStatus!==mappedStatus){
        item.approvalStatus = mappedStatus; changed = true;
      }
      (row.data.comments||[]).filter(pc=>pc.role==='client').forEach(pc=>{
        const alreadyHave = (item.comments||[]).some(c=>c.fromPortal && c.text===pc.text);
        if(!alreadyHave){
          item.comments = item.comments || [];
          item.comments.push({ id: uid(), userId:null, text: pc.text, at: new Date().toISOString(), fromPortal:true, portalAuthor: pc.author });
          changed = true;
        }
      });
    });
    if(changed){ await saveData(); render(); showToast('Pulled in updates from the client portal'); }
    else{ showToast('No new updates from the portal'); }
  }catch(err){ console.error(err); showToast('Could not reach the shared database'); }
}

/* ===================== DATA LAYER (no AI, pure storage + math) ===================== */
const STORAGE_KEY = 'favze-crm-contacts';
const SYNC_REV_KEY  = 'favze-crm-sync-rev';
const SYNC_DIRTY_KEY = 'favze-crm-sync-dirty';

/* ---- clickjacking protection ---- */
(function(){
  if(window.top !== window.self){
    try{ window.top.location = window.self.location; }catch(e){ document.body.style.display='none'; }
  }
})();

/* ---- safe data URL validator ---- */
function isSafeDataUrl(s){ return typeof s === 'string' && /^data:image\/(png|jpeg|jpg|gif|webp|svg\+xml);base64,/i.test(s); }
function isSafeHttpUrl(s){ return typeof s === 'string' && /^https?:\/\//i.test(s); }

/* ---- idle session timeout (30 minutes) ---- */
const IDLE_TIMEOUT_MS = 30 * 60 * 1000;
let _idleTimer = null;
function _resetIdleTimer(){
  clearTimeout(_idleTimer);
  _idleTimer = setTimeout(()=>{
    // only sign out if there is an active session
    if(typeof gateSignOut === 'function' && typeof agencySupabaseSession !== 'undefined' && agencySupabaseSession){
      showToast('Signed out after 30 minutes of inactivity.');
      gateSignOut();
    }
  }, IDLE_TIMEOUT_MS);
}
['click','keydown','mousemove','touchstart','scroll'].forEach(evt=>{
  document.addEventListener(evt, _resetIdleTimer, { passive: true });
});
let DATA = { contacts: [] };
let currentView = window.FAVZE_VIEW || 'dashboard';
// Cloud-sync state
let syncReady = false;   // true once the gate has opened and auth is confirmed
let knownRev  = 0;       // last rev we read from or wrote to crm_data
let dirtySync = false;   // local has unsaved changes relative to knownRev
let syncDebounceTimer = null;

// Persist and restore rev/dirty across page navigations
function loadSyncState(){
  try{ const r = localStorage.getItem(SYNC_REV_KEY);  if(r!==null) knownRev  = Number(r); }catch(e){}
  try{ const d = localStorage.getItem(SYNC_DIRTY_KEY); if(d!==null) dirtySync = d==='1'; }catch(e){}
}
function saveSyncState(){
  try{ localStorage.setItem(SYNC_REV_KEY,  String(knownRev));  }catch(e){}
  try{ localStorage.setItem(SYNC_DIRTY_KEY, dirtySync ? '1' : '0'); }catch(e){}
}
function setSyncStatus(msg, style){
  // style: 'ok' | 'saving' | 'conflict' | 'offline'
  const el = document.getElementById('crmSyncStatus');
  if(!el) return;
  el.textContent = msg;
  const colors = { ok:'#6ee7b7', saving:'#93c5fd', conflict:'#fca5a5', offline:'#d1d5db' };
  el.style.color = colors[style||'ok'] || '#c3d6ec';
}

async function pullRemote(){
  if(!syncReady) return;
  const sb = getSupabaseClient();
  if(!sb) return;
  setSyncStatus('Syncing…', 'saving');
  try{
    const { data: rows, error } = await sb.from('crm_data').select('rev,data,updated_at').eq('id','main');
    if(error){ setSyncStatus('Offline', 'offline'); return; }
    if(!rows || rows.length===0){
      // No remote row yet — push local data up
      await pushRemote(true);
      return;
    }
    const remote = rows[0];
    const remoteRev = Number(remote.rev);
    if(remoteRev === knownRev){
      // Remote matches what we last knew — push only if local has changes
      if(dirtySync){ await pushRemote(); } else { setSyncStatus('Synced', 'ok'); }
      return;
    }
    if(remoteRev > knownRev){
      if(!dirtySync){
        // Remote is newer and local is clean — load remote
        DATA = remote.data;
        ensureDataShape();
        knownRev = remoteRev; dirtySync = false; saveSyncState();
        await localSave();
        setSyncStatus('Synced', 'ok');
        render();
        return;
      }
      // Remote is newer AND local is dirty — conflict
      setSyncStatus('Conflict - see banner', 'conflict');
      showConflictBanner(remote);
      return;
    }
    // knownRev > remoteRev — we are ahead; push
    await pushRemote();
  }catch(e){ console.error('pullRemote error', e); setSyncStatus('Offline', 'offline'); }
}

async function pushRemote(isInsert){
  if(!syncReady) return;
  const sb = getSupabaseClient();
  if(!sb){ setSyncStatus('Offline', 'offline'); return; }
  setSyncStatus('Saving…', 'saving');
  const nextRev = knownRev + 1;
  let userId;
  try{
    const { data: { user }, error: userErr } = await sb.auth.getUser();
    if(userErr) throw userErr;
    userId = user?.id;
  }catch(e){ console.error('pushRemote: session expired or missing', e); setSyncStatus('Offline', 'offline'); return; }
  const payload = { id:'main', data: DATA, rev: nextRev, updated_at: new Date().toISOString(), updated_by: userId };
  let error;
  if(isInsert){
    ({ error } = await sb.from('crm_data').upsert(payload, { onConflict:'id' }));
  } else {
    ({ error } = await sb.from('crm_data').update({ data: DATA, rev: nextRev, updated_at: payload.updated_at, updated_by: payload.updated_by })
        .eq('id','main').eq('rev', knownRev));
    if(!error){
      // If 0 rows matched (someone else updated concurrently), re-pull
      const { count } = await sb.from('crm_data').select('rev',{count:'exact',head:true}).eq('id','main').eq('rev',nextRev);
      if(count===0){ await pullRemote(); return; }
    }
  }
  if(error){ console.error('pushRemote error', error); setSyncStatus('Offline', 'offline'); return; }
  knownRev = nextRev; dirtySync = false; saveSyncState();
  setSyncStatus('Saved', 'ok');
}

function schedulePush(){
  if(!syncReady) return;
  if(syncDebounceTimer) clearTimeout(syncDebounceTimer);
  syncDebounceTimer = setTimeout(()=>{ syncDebounceTimer=null; pushRemote(); }, 1500);
}

function ensureDataShape(){
  // Top-level arrays -- every key render functions access must be here
  // so that data pulled from a remote device (which may predate some migrations)
  // never reaches the render with an undefined collection.
  const arrays = [
    'contacts','projects','tasks','reminders','workflows','emailLog','deals',
    'savedViews','customFields','callLogs','campaigns','companies','dealStages',
    'emailLists','emailTemplates','events','contentCalendar','contentApprovals',
    'timeOffRequests','tagDefinitions','trainingCourses','announcements',
    'candidates','openRoles','priceQuotes','proposals','serviceRequests',
    'segments','supportTickets','serviceCatalog','wikiPages','crmFeatureRequests',
    'portalFeatureRequests','formSubmissions','users','roles','notifications',
    'digestQueue','smsLog','incidentReports','timesheetApprovals','brandGuidelines',
  ];
  arrays.forEach(k=>{ if(!DATA[k]) DATA[k] = []; });
  // Top-level objects
  if(!DATA.profile) DATA.profile = { name:'', role:'', defaultView:'dashboard', avatarDataUrl:null };
  if(!DATA.settings) DATA.settings = {};
}

async function localSave(){
  const payload = JSON.stringify(DATA);
  try{ await window.storage.set(STORAGE_KEY, payload, false); }catch(e){}
}

function showConflictBanner(remote){
  let banner = document.getElementById('crmConflictBanner');
  if(banner) return;
  banner = document.createElement('div');
  banner.id = 'crmConflictBanner';
  banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9999;background:#b91c1c;color:#fff;padding:12px 20px;display:flex;align-items:center;gap:12px;font-size:14px;';
  banner.innerHTML = `<span style="flex:1">Your local changes conflict with an update from another device. Keep which version?</span>
    <button id="crmConflictKeepLocal" style="padding:6px 14px;border-radius:6px;border:none;background:#fff;color:#b91c1c;font-weight:700;cursor:pointer;">Keep mine</button>
    <button id="crmConflictKeepRemote" style="padding:6px 14px;border-radius:6px;border:none;background:rgba(255,255,255,.2);color:#fff;font-weight:700;cursor:pointer;">Use other device</button>`;
  document.body.prepend(banner);
  document.getElementById('crmConflictKeepLocal').onclick = async ()=>{
    banner.remove(); await pushRemote(true);
  };
  document.getElementById('crmConflictKeepRemote').onclick = async ()=>{
    DATA = remote.data; ensureDataShape();
    knownRev = Number(remote.rev); dirtySync = false; saveSyncState();
    await localSave(); banner.remove(); setSyncStatus('Synced','ok'); render();
  };
}
function pageFor(v){ return 'crm-'+v+'.html'; }
const AFTER_KEY = 'favze-crm-after';
function goToView(v, after){
  try{ if(after) sessionStorage.setItem(AFTER_KEY, JSON.stringify(after)); else sessionStorage.removeItem(AFTER_KEY); }catch(e){}
  window.location.href = pageFor(v);
}
function runAfterNavigation(){
  let a = null;
  try{ a = JSON.parse(sessionStorage.getItem(AFTER_KEY)||'null'); sessionStorage.removeItem(AFTER_KEY); }catch(e){}
  if(!a) return;
  if(a.t==='settingsTab') switchSettingsTab(a.v);
  else if(a.t==='toast') showToast(a.v);
  else if(a.t==='quote'){
    const tierEl = document.getElementById('pc_tier'); if(tierEl && a.tier) tierEl.value = a.tier;
    const coEl = document.getElementById('pc_companyId'); if(coEl && a.companyId) coEl.value = a.companyId;
    if(a.toast) showToast(a.toast);
  }
  else if(a.t==='open'){
    if(a.kind==='contact') openEditModal(a.id);
    else if(a.kind==='deal') openEditDeal(a.id);
    else if(a.kind==='project') openEditProject(a.id);
    else if(a.kind==='task') openEditTask(a.id);
    else if(a.kind==='reminder') openEditReminder(a.id);
  }
  else if(a.t==='savedView') applySavedView(a.id);
}
let editingId = null;
let searchTerm = '';
let selectedContactIds = new Set();
let tagFilter = null;
let listViewFilter = null;
let listSortMode = 'newest';
function setListSortMode(mode){ listSortMode = mode; render(); }
let ownerFilter = null;
let serviceFilter = null;
let cfFilterField = '';
let cfFilterValue = '';

function uid(){ return 'c_' + Math.random().toString(36).slice(2,9); }
function todayISO(){ return new Date().toISOString().slice(0,10); }
function daysBetween(a,b){ return Math.round((new Date(b) - new Date(a)) / 86400000); }
function fmtDate(iso){
  if(!iso) return '-';
  const d = new Date(iso+'T00:00:00');
  const mm = String(d.getMonth()+1).padStart(2,'0');
  const dd = String(d.getDate()).padStart(2,'0');
  const yyyy = d.getFullYear();
  const fmt = (DATA.settings && DATA.settings.dateFormat) || 'MDY';
  if(fmt==='DMY') return `${dd}/${mm}/${yyyy}`;
  if(fmt==='YMD') return `${yyyy}-${mm}-${dd}`;
  return `${mm}/${dd}/${yyyy}`;
}
function fmtMoney(n){
  const sym = (DATA.settings && DATA.settings.currencySymbol) || '$';
  const locale = (DATA.settings && DATA.settings.numberFormat==='period') ? 'de-DE' : 'en-US';
  return sym + Number(n||0).toLocaleString(locale);
}
function currentScope(){
  const user = DATA.users.find(u=>u.id===DATA.profile.activeUserId);
  const role = user ? DATA.roles.find(r=>r.id===user.roleId) : null;
  return { scope: role ? role.scope : 'all', userId: user ? user.id : null, userName: user ? user.name : null, canManageSettings: role ? !!role.canManageSettings : true };
}

/* ===================== OUTLOOK / MICROSOFT GRAPH (free, client-side, no backend) =====================
   Uses MSAL.js with the Authorization Code + PKCE flow, which is safe to run entirely in the browser
   (no client secret needed). Requires the person running this CRM to register a free Azure AD app and
   paste the Client ID into Settings -> Email. Instructions are shown right there. */
const OUTLOOK_SCOPES = ['Mail.Send','Mail.Read','User.Read'];
let msalInstance = null;
let outlookAccount = null;
function outlookConfigured(){ return !!(DATA.settings && DATA.settings.outlookClientId); }
function getMsalInstance(){
  if(typeof msal==='undefined') return null;
  const clientId = DATA.settings.outlookClientId;
  if(!clientId) return null;
  if(msalInstance && msalInstance.__clientId===clientId) return msalInstance;
  msalInstance = new msal.PublicClientApplication({
    auth: {
      clientId,
      authority: 'https://login.microsoftonline.com/common',
      redirectUri: window.location.origin + window.location.pathname.replace(/[^/]*$/, '') + 'favze-crm.html',
    },
    cache: { cacheLocation: 'sessionStorage', storeAuthStateInCookie: false },
  });
  msalInstance.__clientId = clientId;
  return msalInstance;
}
async function restoreOutlookSession(){
  const app = getMsalInstance();
  if(!app) return;
  try{
    await app.initialize();
    await app.handleRedirectPromise();
    const accounts = app.getAllAccounts();
    if(accounts.length){ outlookAccount = accounts[0]; app.setActiveAccount(outlookAccount); }
  }catch(e){ console.error('Outlook session restore failed', e); }
}
async function connectOutlook(){
  const clientIdInput = document.getElementById('outlook_client_id');
  const clientId = clientIdInput ? clientIdInput.value.trim() : DATA.settings.outlookClientId;
  if(!clientId){ showToast('Paste your Azure App Client ID first'); return; }
  DATA.settings.outlookClientId = clientId;
  await saveData();
  const app = getMsalInstance();
  if(!app){ showToast('Microsoft sign-in library did not load, check your internet connection'); return; }
  try{
    await app.initialize();
    const result = await app.loginPopup({ scopes: OUTLOOK_SCOPES });
    outlookAccount = result.account;
    app.setActiveAccount(outlookAccount);
    showToast('Outlook connected as ' + outlookAccount.username);
    refreshSettingsBody();
  }catch(err){
    console.error(err);
    showToast('Connection failed: ' + (err.errorMessage || err.message || 'unknown error').slice(0,140));
  }
}
async function disconnectOutlook(){
  const app = getMsalInstance();
  if(app && outlookAccount){
    try{ await app.logoutPopup({ account: outlookAccount }); }catch(e){ console.error(e); }
  }
  outlookAccount = null;
  showToast('Outlook disconnected');
  refreshSettingsBody();
}
async function getOutlookToken(){
  const app = getMsalInstance();
  if(!app) throw new Error('Outlook is not configured yet');
  await app.initialize();
  const accounts = app.getAllAccounts();
  if(!accounts.length) throw new Error('Not connected to Outlook');
  const account = accounts[0];
  try{
    const result = await app.acquireTokenSilent({ scopes: OUTLOOK_SCOPES, account });
    return result.accessToken;
  }catch(e){
    const result = await app.acquireTokenPopup({ scopes: OUTLOOK_SCOPES, account });
    return result.accessToken;
  }
}
async function sendViaOutlook(to, subject, bodyHtml){
  try{
    const token = await getOutlookToken();
    const res = await fetch('https://graph.microsoft.com/v1.0/me/sendMail', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: {
          subject,
          body: { contentType: 'HTML', content: bodyHtml },
          toRecipients: [{ emailAddress: { address: to } }],
        },
        saveToSentItems: true,
      }),
    });
    if(!res.ok){ const t = await res.text(); throw new Error(t); }
    showToast('Email sent via Outlook');
    return true;
  }catch(err){
    console.error(err);
    showToast('Could not send via Outlook: ' + (err.message || 'unknown error').slice(0,140));
    return false;
  }
}
function openComposeEmailModal(toEmail, defaultSubject, defaultBody){
  document.getElementById('modalTitle').textContent = 'Send Email';
  document.getElementById('modalBody').innerHTML = `
    ${!outlookAccount ? `<div class="field" style="background:var(--paper); border-radius:8px; padding:10px 12px; font-size:12px; color:var(--slate);">Outlook isn't connected yet. <a onclick="closeModal(); switchView('settings'); setTimeout(()=>switchSettingsTab('integrations'),0);" style="cursor:pointer; color:var(--teal-text); font-weight:700;">Connect it in Settings → Integrations</a>, or use the mailto: link instead.</div>` : ''}
    <div class="field"><label>To</label><input id="em_to" value="${esc(toEmail||'')}" placeholder="name@company.com"></div>
    <div class="field"><label>Subject</label><input id="em_subject" value="${esc(defaultSubject||'')}"></div>
    <div class="field"><label>Message</label><textarea id="em_body" rows="10">${esc(defaultBody||'')}</textarea></div>
    ${outlookAccount ? `<p style="font-size:11px; color:var(--slate);">Sends from your connected Outlook account (${esc(outlookAccount.username)}).</p>` : ''}
  `;
  document.getElementById('modalFoot').innerHTML = `<button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="submitComposeEmail()" ${!outlookAccount?'disabled':''}>Send via Outlook</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
async function submitComposeEmail(){
  const to = document.getElementById('em_to').value.trim();
  const subject = document.getElementById('em_subject').value.trim();
  const body = document.getElementById('em_body').value;
  if(!to || !subject){ showToast('To and subject are required'); return; }
  if(!outlookAccount){ showToast('Connect Outlook in Settings first'); return; }
  const ok = await sendViaOutlook(to, subject, body.replace(/\n/g,'<br>'));
  if(ok) closeModal();
}

function scopedContacts(list){
  const {scope, userId} = currentScope();
  if(scope!=='own' || !userId) return list;
  return list.filter(c=>c.assignedTo===userId);
}
function scopedDeals(list){
  const {scope, userId} = currentScope();
  if(scope!=='own' || !userId) return list;
  return list.filter(d=>d.assignedTo===userId);
}
function validateContactProgression(merged){
  const missing = [];
  const req = (DATA.settings && DATA.settings.requiredStandardFields) || [];
  if(req.includes('phone') && !merged.phone) missing.push('Phone');
  if(req.includes('email') && !merged.email) missing.push('Email');
  if(req.includes('dealValue') && !(Number(merged.dealValue)>0)) missing.push('Deal value');
  DATA.customFields.filter(f=> f.requiredForProgression && (!f.appliesTo || f.appliesTo.includes('all') || f.appliesTo.includes(merged.type))).forEach(f=>{
    const v = merged.customFields && merged.customFields[f.id];
    if(v==null || v===''){ missing.push(f.name); }
  });
  return missing;
}
function validateDealProgression(deal, contact){
  const missing = [];
  if(DATA.settings.requireDealContactForWon && !deal.contactId) missing.push('Linked contact');
  if(DATA.settings.requireDealValueForWon && !(Number(deal.value)>0)) missing.push('Deal value');
  return missing;
}

// No business data lives in the source code. The app starts empty; every contact
// comes from real usage (or, once migrated, from the backend database).
const SEED = [];
function shiftDate(days){ const d=new Date(); d.setDate(d.getDate()+days); return d.toISOString().slice(0,10); }

// A standard digital marketing agency lead process. Used by the Deals Kanban board.
function defaultProfile(){
  return {
    customerId:'', customerStatus:'', contactStatus:'', preferredContactMethod:'', bestTimeToContact:'',
    jobTitle:'', decisionMaker:false, billingContact:false, marketingContact:false, technicalContact:false,
    decisionAuthority:'', buyingInfluence:'',
    decisionMakerName:'', decisionMakerTitle:'', otherDecisionMakers:'',
    contactDetails:{firstName:'',lastName:'',department:'',workEmail:'',personalEmail:'',mobilePhone:'',officePhone:'',extension:'',linkedinPersonal:''},
    salesActivity:{consultationScheduled:'',lastCallOutcome:'',lastMeetingDate:'',lastInteractionType:''},
    documents:[],
    leadScore:'', leadTemperature:'', probabilityToClose:'', expectedCloseDate:'', expectedStartDate:'', campaignName:'', budgetRange:'',
    convertedToAccount:false, convertedDate:'',
  };
}
// A Company is the parent business record. Multiple Contacts (people) can point at the
// same Company via contact.companyId, so "industry," "contract," "branding," and every
// other business-level attribute lives here once instead of being copied onto every person.
function defaultCompany(){
  return {
    id:'', name:'', dateAdded:'',
    industry:'', businessType:'', companySize:'', employees:'', websiteUrl:'', annualRevenue:0,
    companyEmail:'', companyPhone:'',
    address:{street:'',city:'',state:'',zip:'',country:'',timezone:''},
    social:{facebook:'',instagram:'',linkedinCompany:'',twitter:'',tiktok:'',youtube:'',pinterest:'',threads:'',reddit:'',gbp:''},
    marketing:{targetAudience:'',primaryGoal:'',painPoints:'',businessDescription:'',idealCustomer:'',competitors:'',geoMarket:'',businessModel:'',customerType:'',monthlyBudget:'',optIn:false,referralSource:''},
    techStack:[],
    currentMarketingAgency:'', runningPaidAds:false, seoStatus:'', gaConnected:false, gscConnected:false,
    website:{builder:'',cms:'',crmUsing:'',hostingProvider:'',domainRegistrar:'',sslActive:false,launchDate:'',redesignNeeded:false},
    assets:{ga4:'',gsc:'',gtm:'',googleAdsId:'',merchantCenter:'',metaBM:'',metaAdAccount:'',metaPixel:'',fbPageId:'',igBusinessId:'',linkedinInsight:'',tiktokPixel:'',pinterestTag:'',clarityId:'',hotjarId:'',bingWebmaster:'',callrail:''},
    branding:{guidelinesUrl:'',logoUrl:'',colors:'',fonts:'',voice:'',assetsFolder:''},
    contract:{clientSince:'',retainerType:'',monthlyRetainer:0,contractStart:'',contractEnd:'',autoRenew:false,ltv:0,estMonthlyHours:'',assetQuota:''},
    billing:{paymentTerms:'',monthlyInvoice:0,lastInvoice:'',nextInvoice:'',lastPaymentDate:'',delinquencyRisk:''},
    health:{nps:'',temperature:'',renewalProbability:'',churnRisk:'',rating:''},
    compliance:[],
    internal:{accountManager:'',salesRep:'',projectManager:'',seoSpecialist:'',adsSpecialist:'',designer:'',developer:'',copywriter:'',priority:''}
  };
}
function slugStage(name){ return 'stg_' + String(name).toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_+|_+$/g,''); }
const DEFAULT_DEAL_STAGES = [
  {id: slugStage('New Inquiry'), name:'New Inquiry', kind:'open'},
  {id: slugStage('Consultation Scheduled'), name:'Consultation Scheduled', kind:'open'},
  {id: slugStage('Consultation No-Show'), name:'Consultation No-Show', kind:'open'},
  {id: slugStage('Consultation Completed'), name:'Consultation Completed', kind:'open'},
  {id: slugStage('Proposal Sent'), name:'Proposal Sent', kind:'open'},
  {id: slugStage('Negotiation'), name:'Negotiation', kind:'open'},
  {id: slugStage('Won'), name:'Won', kind:'won'},
  {id: slugStage('Lost'), name:'Lost', kind:'lost'},
];
function getStage(id){ return DATA.dealStages.find(s=>s.id===id) || DATA.dealStages[0]; }
function stageName(id){ return getStage(id) ? getStage(id).name : id; }
function isWonStage(id){ const s=getStage(id); return s && s.kind==='won'; }
function isLostStage(id){ const s=getStage(id); return s && s.kind==='lost'; }
function isOpenStage(id){ const s=getStage(id); return s && s.kind==='open'; }

/* ===================== STORAGE ===================== */
// Bumping this forces a reseed even if old sample data was already saved to storage.
const DATA_VERSION = 'v2-real-data';

async function loadData(){
  loadSyncState();
  try{
    const versionRes = await getSafe(STORAGE_KEY + '-version');
    if(versionRes !== DATA_VERSION){
      DATA = { contacts: SEED, projects: [], tasks: [], reminders: [], workflows: [], emailLog: [], deals: [], savedViews: [], customFields: [], callLogs: [], campaigns: [] };
      await saveData(true); // pre-auth seed — don't push to cloud
      await window.storage.set(STORAGE_KEY + '-version', DATA_VERSION, false);
    } else {
      const res = await window.storage.get(STORAGE_KEY, false);
      DATA = (res && res.value) ? JSON.parse(res.value) : { contacts: SEED, projects: [], tasks: [], reminders: [], workflows: [], emailLog: [], deals: [], savedViews: [], customFields: [], callLogs: [], campaigns: [] };
    }
  }catch(err){
    console.error('Storage error on load', err);
    DATA = { contacts: SEED, projects: [], tasks: [], reminders: [], workflows: [], emailLog: [], deals: [], savedViews: [], customFields: [], callLogs: [], campaigns: [] };
  }
  // If a previous save failed to reach real storage, a local backup exists with changes
  // that never made it. That backup is newer than whatever real storage returned above,
  // so prefer it, then try to push it to real storage now that we're loading fresh.
  try{
    const backup = localStorage.getItem(STORAGE_KEY + '_backup');
    if(backup){
      DATA = JSON.parse(backup);
      showToast('Recovered changes that failed to save last time, saving them now');
      await saveData(true); // pre-auth; cloud push happens in pullRemote() after gate
    }
  }catch(e){ console.error('Backup recovery failed', e); }
  // Migrate older saved data that predates newer sections, without touching existing contacts.
  let migrated = false;
  if(!DATA.projects){ DATA.projects = []; migrated = true; }
  if(!DATA.tasks){ DATA.tasks = []; migrated = true; }
  if(!DATA.reminders){ DATA.reminders = []; migrated = true; }
  if(!DATA.workflows){ DATA.workflows = []; migrated = true; }
  if(!DATA.emailLog){ DATA.emailLog = []; migrated = true; }
  if(!DATA.deals){ DATA.deals = []; migrated = true; }
  if(!DATA.savedViews){ DATA.savedViews = []; migrated = true; }
  if(!DATA.customFields){ DATA.customFields = []; migrated = true; }
  DATA.customFields.forEach(f=>{ if(!f.appliesTo){ f.appliesTo = ['all']; migrated = true; } });
  DATA.customFields.forEach(f=>{
    if(f.reminderEnabled===undefined){ f.reminderEnabled = false; migrated = true; }
    if(f.reminderDaysBefore===undefined){ f.reminderDaysBefore = 0; migrated = true; }
  });
  if(!DATA.callLogs){ DATA.callLogs = []; migrated = true; }
  if(!DATA.campaigns){ DATA.campaigns = []; migrated = true; }
  DATA.campaigns.forEach(cm=>{
    if(cm.channels===undefined){ cm.channels = ['Email Marketing']; migrated = true; }
    if(cm.goal===undefined){ cm.goal = ''; migrated = true; }
    if(cm.companyId===undefined){ cm.companyId = null; migrated = true; }
    if(cm.projectId===undefined){ cm.projectId = null; migrated = true; }
    if(cm.dealId===undefined){ cm.dealId = null; migrated = true; }
    if(cm.startDate===undefined){ cm.startDate = null; migrated = true; }
    if(cm.endDate===undefined){ cm.endDate = null; migrated = true; }
    if(cm.subjectB===undefined){ cm.subjectB = ''; migrated = true; }
    if(cm.scheduledFor===undefined){ cm.scheduledFor = null; migrated = true; }
    if(cm.abResults===undefined){ cm.abResults = null; migrated = true; }
    if(cm._scheduleReminded===undefined){ cm._scheduleReminded = false; migrated = true; }
  });
  if(!DATA.dealStages){ DATA.dealStages = DEFAULT_DEAL_STAGES.map(s=>({...s})); migrated = true; }
  if(!DATA._stagesUpgradedToConsultationFlow){
    const oldNames = ['New Inquiry','Discovery Call','Proposal Sent','Negotiation','Won','Lost'];
    const currentNames = DATA.dealStages.map(s=>s.name);
    const matchesOldDefault = currentNames.length===oldNames.length && currentNames.every((n,i)=>n===oldNames[i]);
    if(matchesOldDefault){
      const remap = {};
      remap[slugStage('New Inquiry')] = slugStage('New Inquiry');
      remap[slugStage('Discovery Call')] = slugStage('Consultation Scheduled');
      remap[slugStage('Proposal Sent')] = slugStage('Proposal Sent');
      remap[slugStage('Negotiation')] = slugStage('Negotiation');
      remap[slugStage('Won')] = slugStage('Won');
      remap[slugStage('Lost')] = slugStage('Lost');
      DATA.dealStages = DEFAULT_DEAL_STAGES.map(s=>({...s}));
      DATA.deals.forEach(d=>{ if(remap[d.stage]) d.stage = remap[d.stage]; });
    } else if(!DATA.dealStages.some(s=>s.name.toLowerCase().includes('no-show') || s.name.toLowerCase().includes('no show'))){
      // Stages were already customized — add the No-Show stage without touching anything else.
      const scheduledIdx = DATA.dealStages.findIndex(s=>/consultation|discovery|call/i.test(s.name));
      const insertAt = scheduledIdx>=0 ? scheduledIdx+1 : Math.max(0, DATA.dealStages.length-2);
      DATA.dealStages.splice(insertAt, 0, {id: slugStage('Consultation No-Show'), name:'Consultation No-Show', kind:'open'});
    }
    DATA._stagesUpgradedToConsultationFlow = true;
    migrated = true;
  }
  if(!DATA._stageSequenceSeeded){
    DEFAULT_STAGE_SEQUENCE.forEach(seq=>{
      const stage = DATA.dealStages.find(s=>s.id===slugStage(seq.stage));
      if(!stage) return; // don't seed against a stage that doesn't exist in this install
      if(DATA.workflows.some(w=>w.trigger.type==='deal_stage' && w.trigger.stageId===stage.id)) return; // don't duplicate
      DATA.workflows.push({
        id: uid(), dateAdded: todayISO(), name: seq.name,
        trigger: { type:'deal_stage', contactType:null, stageId: stage.id },
        subject: seq.subject, body: seq.body, active: true,
      });
    });
    DATA._stageSequenceSeeded = true;
    migrated = true;
  }
  DATA.deals.forEach(d=>{
    if(d.stage && !DATA.dealStages.find(s=>s.id===d.stage)){
      const bySlug = DATA.dealStages.find(s=>s.id===slugStage(d.stage));
      d.stage = bySlug ? bySlug.id : DATA.dealStages[0].id;
      migrated = true;
    }
    if(d.onboardingCreated===undefined){ d.onboardingCreated = true; migrated = true; }
  });
  if(!DATA.profile){ DATA.profile = { name:'Riley Catalano', role:'Founder, Favze', defaultView:'dashboard', avatarDataUrl:null }; migrated = true; }
  if(!DATA.profile.defaultView){ DATA.profile.defaultView = 'dashboard'; migrated = true; }
  if(DATA.profile.avatarDataUrl===undefined){ DATA.profile.avatarDataUrl = null; migrated = true; }
  if(!DATA.settings){
    DATA.settings = {
      theme:'light', accent:'#0A89A3', logoDataUrl:null,
      currencySymbol:'$', timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/Indiana/Indianapolis',
      requiredStandardFields: [], requireDealContactForWon:false, requireDealValueForWon:false,
    };
    migrated = true;
  }
  if(DATA.settings.requiredStandardFields===undefined){ DATA.settings.requiredStandardFields = []; migrated = true; }
  if(DATA.settings.requireDealContactForWon===undefined){ DATA.settings.requireDealContactForWon = false; migrated = true; }
  if(DATA.settings.requireDealValueForWon===undefined){ DATA.settings.requireDealValueForWon = false; migrated = true; }
  if(DATA.settings.currencySymbol===undefined){ DATA.settings.currencySymbol = '$'; migrated = true; }
  if(DATA.settings.logoDataUrl===undefined){ DATA.settings.logoDataUrl = null; migrated = true; }
  if(!DATA.settings.quietHours){
    DATA.settings.quietHours = { enabled:false, start:'18:00', end:'08:00', days:{sun:true,mon:true,tue:true,wed:true,thu:true,fri:true,sat:true} };
    migrated = true;
  }
  if(DATA.settings.snoozeUntil===undefined){ DATA.settings.snoozeUntil = null; migrated = true; }
  if(DATA.settings.sessionTimeoutMinutes===undefined){ DATA.settings.sessionTimeoutMinutes = 0; migrated = true; }
  if(!DATA.settings.networkAccess){ DATA.settings.networkAccess = { enabled:false, allowedIPs:[] }; migrated = true; }
  if(!DATA.settings.roundRobin){ DATA.settings.roundRobin = { enabled:false, lastAssignedIndex:-1 }; migrated = true; }
  if(DATA.settings.taskEscalationEnabled===undefined){ DATA.settings.taskEscalationEnabled = false; migrated = true; }
  if(DATA.settings.customDomain===undefined){ DATA.settings.customDomain = ''; migrated = true; }
  if(DATA.settings.loginWelcomeText===undefined){ DATA.settings.loginWelcomeText = ''; migrated = true; }
  if(!DATA.settings.dateFormat){ DATA.settings.dateFormat = 'MDY'; migrated = true; }
  if(!DATA.settings.numberFormat){ DATA.settings.numberFormat = 'comma'; migrated = true; }
  if(!DATA.settings.onboarding){ DATA.settings.onboarding = { connectedEmail:false, dismissed:false }; migrated = true; }
  (DATA.users||[]).forEach(u=>{
    if(u.outOfOffice===undefined){ u.outOfOffice = false; migrated = true; }
    if(u.managerId===undefined){ u.managerId = null; migrated = true; }
    if(u.department===undefined){ u.department = 'Marketing'; migrated = true; }
    if(u.avatarDataUrl===undefined){ u.avatarDataUrl = null; migrated = true; }
    if(u.hireDate===undefined){ u.hireDate = ''; migrated = true; }
    if(u.birthday===undefined){ u.birthday = ''; migrated = true; }
    if(!u.trainingStatus){ u.trainingStatus = {}; migrated = true; }
  });
  if(!DATA.events){ DATA.events = []; migrated = true; }
  if(!DATA.contentCalendar){ DATA.contentCalendar = []; migrated = true; }
  if(!DATA.timeOffRequests){ DATA.timeOffRequests = []; migrated = true; }
  DATA.events.forEach(e=>{ if(!e.eventType){ e.eventType = 'meeting'; migrated = true; } });
  DATA.contentCalendar.forEach(i=>{
    if(!i.comments){ i.comments = []; migrated = true; }
    if(!i.likes){ i.likes = []; migrated = true; }
    if(!i.platforms){ i.platforms = []; migrated = true; }
    if(i.threadMode===undefined){ i.threadMode = false; migrated = true; }
    if(!i.threadSegments){ i.threadSegments = []; migrated = true; }
    if(i.scheduledTime===undefined){ i.scheduledTime = ''; migrated = true; }
    if(!i.publishStatus){ i.publishStatus = 'draft'; migrated = true; }
    if(i.accountHandle===undefined){ i.accountHandle = ''; migrated = true; }
    if(i.approvalStatus===undefined){ i.approvalStatus = 'Not Submitted'; migrated = true; }
    if(!i.imageUrls){ i.imageUrls = []; migrated = true; }
  });
  DATA.tasks.forEach(t=>{
    if(t.assignedTo===undefined){ t.assignedTo = null; migrated = true; }
    if(t.escalated===undefined){ t.escalated = false; migrated = true; }
  });
  if(!DATA.tagDefinitions){ DATA.tagDefinitions = []; migrated = true; }
  if(DATA.settings.brevoConfigured===undefined){ DATA.settings.brevoConfigured = false; migrated = true; }
  if(DATA.settings.brevoFromEmail===undefined){ DATA.settings.brevoFromEmail = 'hello@favze.com'; migrated = true; }
  if(DATA.settings.brevoFromName===undefined){ DATA.settings.brevoFromName = 'Favze'; migrated = true; }
  if(DATA.settings.brevoApiKey===undefined){ DATA.settings.brevoApiKey = ''; migrated = true; }
  if(!DATA.emailLists){
    DATA.emailLists = [
      {id: uid(), name:'Favze Insider', description:'Stats and news newsletter subscribers.'},
      {id: uid(), name:'Favze Intel', description:'Deep-dive newsletter subscribers.'},
      {id: uid(), name:'Marketing', description:'General marketing and promotions list.'},
    ];
    migrated = true;
  }
  DATA.contacts.forEach(c=>{ if(!c.emailLists){ c.emailLists = []; migrated = true; } });
  DATA.contacts.forEach(c=>{ if(!c.tags){ c.tags = []; migrated = true; } });
  DATA.contacts.forEach(c=>{ if(!c.services){ c.services = []; migrated = true; } });
  DATA.contacts.forEach(c=>{ if(!c.profile){ c.profile = defaultProfile(); migrated = true; } });
  DATA.contacts.forEach(c=>{ if(c.portalUid===undefined){ c.portalUid = null; migrated = true; } });
  DATA.contacts.forEach(c=>{
    const def = defaultProfile();
    let changed = false;
    if(!c.profile.contactDetails){ c.profile.contactDetails = def.contactDetails; changed = true; }
    if(!c.profile.salesActivity){ c.profile.salesActivity = def.salesActivity; changed = true; }
    if(!c.profile.documents){ c.profile.documents = []; changed = true; }
    if(c.profile.decisionAuthority===undefined){ c.profile.decisionAuthority = ''; c.profile.buyingInfluence=''; c.profile.contactStatus=''; c.profile.preferredContactMethod=''; c.profile.bestTimeToContact=''; changed = true; }
    if(c.profile.marketing && c.profile.marketing.optIn===undefined){ c.profile.marketing.optIn = false; c.profile.marketing.referralSource=''; changed = true; }
    if(c.profile.budgetRange===undefined){ c.profile.budgetRange = ''; changed = true; }
    if(c.profile.leadScore===undefined){
      Object.assign(c.profile, {
        leadScore:'', leadTemperature:'', probabilityToClose:'', expectedCloseDate:'', expectedStartDate:'', campaignName:'',
        currentMarketingAgency:'', runningPaidAds:false, seoStatus:'', gaConnected:false, gscConnected:false,
        convertedToAccount:false, convertedDate:'', annualRevenue:0, companyEmail:'', companyPhone:'',
        decisionMakerName:'', decisionMakerTitle:'', otherDecisionMakers:''
      });
      changed = true;
    }
    if(!c.lastModified){ c.lastModified = c.dateAdded || todayISO(); changed = true; }
    if(changed) migrated = true;
  });
  if(!DATA.companies){ DATA.companies = []; migrated = true; }
  // Give every contact a linked Company record. If a contact still carries the old
  // per-contact business fields (industry, contract, branding, etc. from before Companies
  // existed as their own table), pull them onto a new Company instead of leaving them
  // stranded, then hand off to that Company going forward.
  DATA.contacts.forEach(c=>{
    if(c.companyId && DATA.companies.find(co=>co.id===c.companyId)) return;
    const legacy = c.profile || {};
    const co = defaultCompany();
    co.id = uid();
    co.name = c.company || c.name || 'Unnamed Company';
    co.dateAdded = c.dateAdded || todayISO();
    ['industry','businessType','companySize','employees','websiteUrl','annualRevenue','companyEmail','companyPhone',
     'techStack','currentMarketingAgency','runningPaidAds','seoStatus','gaConnected','gscConnected','compliance'].forEach(k=>{
      if(legacy[k]!==undefined) co[k] = legacy[k];
    });
    ['address','social','marketing','website','assets','branding','contract','billing','health','internal'].forEach(k=>{
      if(legacy[k] && typeof legacy[k]==='object'){
        const safe = Object.fromEntries(Object.entries(legacy[k]).filter(([p])=>p!=='__proto__'&&p!=='constructor'&&p!=='prototype'));
        co[k] = {...co[k], ...safe};
      }
    });
    DATA.companies.push(co);
    c.companyId = co.id;
    migrated = true;
  });
  if(!DATA.emailTemplates){ DATA.emailTemplates = []; migrated = true; }
  if(!DATA.trainingCourses){ DATA.trainingCourses = []; migrated = true; }
  DATA.trainingCourses.forEach(c=>{
    if(!c.type){ c.type = 'mandatory'; migrated = true; }
    if(c.provider===undefined){ c.provider = ''; migrated = true; }
    if(c.url===undefined){ c.url = ''; migrated = true; }
  });
  if(!DATA._optionalCoursesSeeded){
    DEFAULT_OPTIONAL_COURSES.forEach(oc=>{
      DATA.trainingCourses.push({ id: uid(), name: oc.name, provider: oc.provider, url: oc.url, type:'optional', dateAdded: todayISO() });
    });
    DATA._optionalCoursesSeeded = true;
    migrated = true;
  }
  if(!DATA.announcements){ DATA.announcements = []; migrated = true; }
  DATA.announcements.forEach(a=>{ if(!a.readBy){ a.readBy = []; migrated = true; } });
  if(!DATA.candidates){ DATA.candidates = []; migrated = true; }
  if(!DATA.openRoles){ DATA.openRoles = []; migrated = true; }
  if(!DATA.settings.pricingBaseline){
    DATA.settings.pricingBaseline = { overhead:60000, teamCount:4, avgSalary:65000, weeklyHours:40, weeksPerYear:48, utilization:70, margin:35 };
    migrated = true;
  }
  if(!DATA.priceQuotes){ DATA.priceQuotes = []; migrated = true; }
  DATA.priceQuotes.forEach(q=>{
    if(!q.status){ q.status = 'Draft'; migrated = true; }
    if(q.dealId===undefined){ q.dealId = null; migrated = true; }
    if(q.lossReason===undefined){ q.lossReason = ''; migrated = true; }
    if(q.lossNotes===undefined){ q.lossNotes = ''; migrated = true; }
  });
  if(!DATA.proposals){ DATA.proposals = []; migrated = true; }
  DATA.proposals.forEach(p=>{
    if(p.dealId===undefined){ p.dealId = null; migrated = true; }
    if(p.followUpDate===undefined){ p.followUpDate = ''; migrated = true; }
    if(p.lossReason===undefined){ p.lossReason = ''; migrated = true; }
    if(p.reminderId===undefined){ p.reminderId = null; migrated = true; }
  });
  if(!DATA.serviceRequests){ DATA.serviceRequests = []; migrated = true; }
  if(!DATA.segments){ DATA.segments = []; migrated = true; }
  if(!DATA.supportTickets){ DATA.supportTickets = []; migrated = true; }
  DATA.supportTickets.forEach(t=>{ if(!t.comments){ t.comments = []; migrated = true; } });
  if(!DATA.contentApprovals){ DATA.contentApprovals = []; migrated = true; }
  DATA.contentApprovals.forEach(c=>{ if(!c.comments){ c.comments = []; migrated = true; } });
  if(!DATA._contentApprovalsFoldedIn && DATA.contentApprovals.length){
    DATA.contentApprovals.forEach(c=>{
      DATA.contentCalendar.push({
        id: uid(), type:'blog', date: (c.dateAdded||todayISO()),
        title: c.title||'', description: c.description||'', caption:'', mediaUrl: c.contentUrl||'',
        platforms: [], threadMode:false, threadSegments:[], scheduledTime:'', accountHandle:'',
        publishStatus:'draft', comments: c.comments||[], likes: [],
        contactId: DATA.contacts.find(ct=>ct.companyId===c.companyId && ct.type==='customer')?.id || null,
        approvalStatus: c.status || 'Pending Review',
        dateAdded: c.dateAdded || todayISO(),
      });
    });
    DATA._contentApprovalsFoldedIn = true;
    migrated = true;
  }
  if(!DATA.serviceCatalog){ DATA.serviceCatalog = []; migrated = true; }
  if(!DATA._serviceCatalogSeeded){
    DEFAULT_SERVICE_CATALOG.forEach(s=> DATA.serviceCatalog.push({ id: uid(), dateAdded: todayISO(), status:'active', deepDiveUrl:'', ...s }));
    DATA._serviceCatalogSeeded = true;
    migrated = true;
  } else {
    const existingSlugs = new Set(DATA.serviceCatalog.map(s=>s.slug));
    DEFAULT_SERVICE_CATALOG.forEach(s=>{
      if(!existingSlugs.has(s.slug)){
        DATA.serviceCatalog.push({ id: uid(), dateAdded: todayISO(), status:'active', deepDiveUrl:'', ...s });
        migrated = true;
      }
    });
  }
  DATA.serviceCatalog.forEach(s=>{ if(s.deepDiveUrl===undefined){ s.deepDiveUrl = ''; migrated = true; } });
  if(!DATA.brandGuidelines){ DATA.brandGuidelines = JSON.parse(JSON.stringify(DEFAULT_BRAND_GUIDELINES)); migrated = true; }
  if(!DATA.wikiPages){ DATA.wikiPages = []; migrated = true; }
  if(!DATA.crmFeatureRequests){ DATA.crmFeatureRequests = []; migrated = true; }
  if(!DATA.portalFeatureRequests){ DATA.portalFeatureRequests = []; migrated = true; }
  if(!DATA.formSubmissions){ DATA.formSubmissions = []; migrated = true; }
  if(DATA.settings.formSubmissionsEndpointUrl === undefined){
    DATA.settings.formSubmissionsEndpointUrl = null;
    DATA.settings.formSubmissionsApiKey = null;
    DATA.settings.formSubmissionsLastId = 0;
    migrated = true;
  }
  if(DATA.settings.portalClientUid !== undefined){ delete DATA.settings.portalClientUid; migrated = true; }
  DATA.wikiPages.forEach(p=>{
    if(p.section===undefined){ p.section = p.category || WIKI_SECTIONS[0]; migrated = true; }
    if(p.docUrl===undefined){ p.docUrl = ''; migrated = true; }
    if(p.description===undefined){ p.description = (p.content||'').slice(0,140); migrated = true; }
  });
  DATA.projects.forEach(p=>{
    if(p.companyId===undefined){ p.companyId = null; migrated = true; }
    if(p.startDate===undefined){ p.startDate = ''; migrated = true; }
    if(!p.billingModel){ p.billingModel = 'hourly'; migrated = true; }
    if(p.hourlyRate===undefined){ p.hourlyRate = 0; migrated = true; }
    if(p.flatMonthlyRate===undefined){ p.flatMonthlyRate = 0; migrated = true; }
    if(p.budgetedHours===undefined){ p.budgetedHours = 0; migrated = true; }
  });
  DATA.tasks.forEach(t=>{
    if(t.projectId===undefined){ t.projectId = null; migrated = true; }
    if(t.hours===undefined){ t.hours = 0; migrated = true; }
  });
  (DATA.users||[]).forEach(u=>{ if(u.costRate===undefined){ u.costRate = 0; migrated = true; } });
  if(!DATA.incidentReports){ DATA.incidentReports = []; migrated = true; }
  if(!DATA.settings.mergeFallbacks){ DATA.settings.mergeFallbacks = {}; migrated = true; }
  if(!DATA.settings.stageDemotion){ DATA.settings.stageDemotion = { enabled:false, inactivityDays:90 }; migrated = true; }
  if(!DATA.settings.hotkeys){
    DATA.settings.hotkeys = {
      newContact: 'alt+c', quickNote: 'alt+n', newTask: 'alt+t', newDeal: 'alt+d',
      focusSearch: 'alt+/', openSettings: 'alt+s'
    };
    migrated = true;
  }
  if(!DATA.settings.callProtocol){ DATA.settings.callProtocol = 'tel'; migrated = true; }
  if(!DATA.settings.billableDefaults){ DATA.settings.billableDefaults = { tasks:false, calls:true }; migrated = true; }
  if(!DATA.timesheetApprovals){ DATA.timesheetApprovals = []; migrated = true; }
  DATA.tasks.forEach(t=>{ if(t.billable===undefined){ t.billable = false; migrated = true; } });
  DATA.tasks.forEach(t=>{ if(t.recurrence===undefined){ t.recurrence = null; migrated = true; } });
  DATA.callLogs.forEach(cl=>{ if(cl.billable===undefined){ cl.billable = true; migrated = true; } });
  if(DATA.settings.customCallUrlPattern===undefined){ DATA.settings.customCallUrlPattern = 'https://voip.example.com/call?number={number}'; migrated = true; }
  if(DATA.settings.outlookClientId===undefined){ DATA.settings.outlookClientId = ''; migrated = true; }
  if(DATA.settings.emailSendEndpointUrl===undefined){ DATA.settings.emailSendEndpointUrl = null; migrated = true; }
  if(!DATA.settings.navCustomization){ DATA.settings.navCustomization = {}; migrated = true; }
  if(!DATA.settings.alertChannels){
    DATA.settings.alertChannels = {};
    ALERT_EVENTS.forEach(e=>{ DATA.settings.alertChannels[e.key] = {inApp:true, email:false, sms:false}; });
    migrated = true;
  }
  ALERT_EVENTS.forEach(e=>{ if(!DATA.settings.alertChannels[e.key]){ DATA.settings.alertChannels[e.key] = {inApp:true, email:false, sms:false}; migrated = true; } });
  if(DATA.settings.digestMode===undefined){ DATA.settings.digestMode = false; migrated = true; }
  if(!DATA.settings.digestTime){ DATA.settings.digestTime = '08:00'; migrated = true; }
  if(!DATA.notifications){ DATA.notifications = []; migrated = true; }
  if(!DATA.smsLog){ DATA.smsLog = []; migrated = true; }
  if(!DATA.digestQueue){ DATA.digestQueue = []; migrated = true; }
  if(!DATA.roles){
    DATA.roles = [
      {id: uid(), name:'CEO', description:'Full access to every contact, deal, campaign, report, and setting. Manages billing, team, and roles.', scope:'all', canManageSettings:true},
      {id: uid(), name:'Account Manager', description:'Owns assigned Client accounts: notes, calls, renewals, and upsell deals.', scope:'own', canManageSettings:false},
      {id: uid(), name:'Sales / Business Development', description:'Works Prospects and Leads, creates and moves Deals through the pipeline.', scope:'own', canManageSettings:false},
      {id: uid(), name:'Marketing Specialist', description:'Runs Campaigns, Workflows, and Email Log. Read-only on Deals and Contacts.', scope:'all', canManageSettings:false},
      {id: uid(), name:'Copywriter & Editor', description:'Writes and edits copy across email, blog, social, and web content. Full visibility into Companies (for brand voice/guidelines) and the Content Calendar, no settings access.', scope:'all', canManageSettings:false},
      {id: uid(), name:'Client Support', description:'Views Clients and Past Clients, logs calls and notes, no delete access.', scope:'own', canManageSettings:false},
      {id: uid(), name:'Viewer / Reporting', description:'Read-only access to the Dashboard and Reports, nothing editable.', scope:'all', canManageSettings:false},
    ];
    migrated = true;
  }
  DATA.roles.forEach(r=>{
    if(!r.scope){ r.scope='all'; migrated=true; }
    if(r.name==='Owner / Admin'){ r.name='CEO'; migrated=true; }
    if(r.canManageSettings===undefined){ r.canManageSettings = (r.name==='CEO'); migrated=true; }
  });
  if(!DATA.roles.some(r=>r.name==='Copywriter & Editor')){
    DATA.roles.push({id: uid(), name:'Copywriter & Editor', description:'Writes and edits copy across email, blog, social, and web content. Full visibility into Companies (for brand voice/guidelines) and the Content Calendar, no settings access.', scope:'all', canManageSettings:false});
    migrated = true;
  }
  if(!DATA.users){
    DATA.users = [{ id: uid(), name: DATA.profile.name, email:'', roleId: DATA.roles[0] ? DATA.roles[0].id : null, outOfOffice:false, managerId:null, department:'Marketing', avatarDataUrl:null, hireDate:'', birthday:'', trainingStatus:{}, costRate:0 }];
    migrated = true;
  }
  if(!DATA.profile.activeUserId && DATA.users.length){ DATA.profile.activeUserId = DATA.users[0].id; migrated = true; }
  DATA.callLogs.forEach(cl=>{ if(cl.loggedBy===undefined){ cl.loggedBy = DATA.profile.activeUserId || null; migrated = true; } });
  if(!DATA._dealsSeeded && DATA.deals.length===0 && DATA.contacts.length){
    DATA.contacts.forEach(c=>{
      const stage = c.type==='customer' ? slugStage('Won') : c.type==='past_customer' ? slugStage('Lost') : c.type==='lead' ? slugStage('Consultation Scheduled') : slugStage('New Inquiry');
      DATA.deals.push({
        id: uid(), name: c.name + ' deal', contactId: c.id, contactName: c.name,
        value: Number(c.dealValue||0), stage, dateAdded: c.dateAdded || todayISO(),
        wonDate: c.type==='customer' ? (c.wonDate||todayISO()) : null,
        closeDate: null
      });
    });
    DATA._dealsSeeded = true;
    migrated = true;
  }
  if(migrated){ await saveData(true); } // migration saves are pre-auth; don't push
  if(window.FAVZE_VIEW==='home'){ window.location.replace(pageFor(DATA.profile.defaultView || 'dashboard')); return; }
  applySettings();
  applyBranding();
  renderSidebarNav();
  renderProfile();
  checkOverdueTriggers();
  checkTaskEscalation();
  checkStageDemotions();
  checkCustomDateReminders();
  checkRenewalReminders();
  checkScheduledCampaigns();
  await restoreOutlookSession();
  await restoreAgencySupabaseSession();
  const gateOpen = await applyAuthGate();
  if(gateOpen){
    syncReady = true;
    await pullRemote();
    addSyncUI();
  }
  resetInactivityTimer();
  render();
  runAfterNavigation();
}
function hexToRgbArr(hex){
  hex = hex.replace('#','');
  if(hex.length===3) hex = hex.split('').map(c=>c+c).join('');
  const num = parseInt(hex,16);
  return [(num>>16)&255, (num>>8)&255, num&255];
}
function relLuminance([r,g,b]){
  const a = [r,g,b].map(v=>{ v/=255; return v<=0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); });
  return 0.2126*a[0] + 0.7152*a[1] + 0.0722*a[2];
}
function contrastRatio(hex1, hex2){
  const l1 = relLuminance(hexToRgbArr(hex1)), l2 = relLuminance(hexToRgbArr(hex2));
  const lighter = Math.max(l1,l2), darker = Math.min(l1,l2);
  return (lighter+0.05)/(darker+0.05);
}
// Given any accent color, returns a shade of it that reads at WCAG AA (4.5:1) as text,
// against both white and light backgrounds in light mode, or against dark backgrounds
// in dark mode. This is what makes the accent color picker safe even for custom colors.
function accessibleTextShade(hex, isDark){
  let [r,g,b] = hexToRgbArr(hex);
  const bg = isDark ? '#0B121C' : '#FFFFFF';
  for(let i=0;i<60;i++){
    const cur = '#' + [r,g,b].map(v=>Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0')).join('');
    if(contrastRatio(cur, bg) >= 4.5) return cur;
    if(isDark){ r=r+(255-r)*0.08; g=g+(255-g)*0.08; b=b+(255-b)*0.08; }
    else{ r*=0.94; g*=0.94; b*=0.94; }
  }
  return isDark ? '#FFFFFF' : '#000000';
}
function rgbArrToHex([r,g,b]){
  return '#' + [r,g,b].map(v=>Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0')).join('');
}
// For any arbitrary color (tags, time-off types, content types) used as a solid
// background with white text on top, darkens it just enough that the white text
// stays readable at WCAG AA, regardless of what color was originally picked.
function safeBgForWhiteText(hex){
  let [r,g,b] = hexToRgbArr(hex);
  for(let i=0;i<60;i++){
    const cur = rgbArrToHex([r,g,b]);
    if(contrastRatio('#FFFFFF', cur) >= 4.5) return cur;
    r*=0.94; g*=0.94; b*=0.94;
  }
  return '#000000';
}
function applySettings(){
  const isDark = DATA.settings.theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  const accent = isSafeColor(DATA.settings.accent) ? DATA.settings.accent : '#0A89A3';
  document.documentElement.style.setProperty('--teal', accent);
  document.documentElement.style.setProperty('--teal-text', accessibleTextShade(accent, isDark));
  // Solid backgrounds with white text on top need to stay dark enough regardless of
  // theme (unlike text color, which needs to flip light/dark to match the page).
  document.documentElement.style.setProperty('--teal-solid', safeBgForWhiteText(accent));
}
/* ===================== SETUP PROGRESS CHECKLIST ===================== */
function onboardingSteps(){
  return [
    { key:'invitedTeam', label:'Invite your team', sub:`${DATA.users.length} member(s) added`, auto: DATA.users.length > 1 },
    { key:'customizedStages', label:'Customize your pipeline stages', sub:'Rename stages to your own terms', auto: DATA.dealStages.some(s=>!DEFAULT_DEAL_STAGES.find(d=>d.id===s.id && d.name===s.name)) },
    { key:'addedFirstContact', label:'Add your first real contact', sub:`${DATA.contacts.length} contact(s) on file`, auto: DATA.contacts.length > 1 },
    { key:'connectedEmail', label:'Connect email delivery', sub:'Manual, no provider connected yet', auto: DATA.settings.onboarding.connectedEmail },
  ];
}
function renderOnboardingChecklist(){
  if(DATA.settings.onboarding.dismissed) return '';
  const steps = onboardingSteps();
  const allDone = steps.every(s=>s.auto);
  if(allDone) return '';
  return `
    <div class="onboard-banner">
      <button class="ob-close" onclick="dismissOnboarding()">${iconX()}</button>
      <h3>Finish setting up Favze CRM</h3>
      <p>A few steps to get everything running. Click a step you've done manually to check it off.</p>
      <div class="ob-steps">
        ${steps.map(s=>`
          <div class="ob-step ${s.auto?'done':''}" onclick="${s.key==='connectedEmail'?`toggleOnboardingStep('${s.key}')`:''}">
            <div class="ob-check">${s.auto?iconCheck():''}</div>
            <div><div class="ob-label">${esc(s.label)}</div><div class="ob-sub">${esc(s.sub)}</div></div>
          </div>`).join('')}
      </div>
    </div>`;
}
async function toggleOnboardingStep(key){
  DATA.settings.onboarding[key] = !DATA.settings.onboarding[key];
  await saveData();
  render();
}
async function dismissOnboarding(){
  DATA.settings.onboarding.dismissed = true;
  await saveData();
  render();
}

/* ===================== SIDEBAR CUSTOMIZER ===================== */
const NAV_ITEMS = [
  {key:'dashboard', label:'Dashboard', group:'Overview', countId:null, icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>'},
  {key:'companies', label:'Companies', group:'Sales', countId:'cnt-company', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="7" width="18" height="14" rx="1"/><path d="M8 7V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3M9 12h.01M15 12h.01M9 16h.01M15 16h.01"/></svg>'},
  {key:'allcontacts', label:'Contacts', group:'Sales', countId:'cnt-allcontacts', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>'},
  {key:'prospect', label:'Prospects', group:'Sales', countId:'cnt-prospect', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>'},
  {key:'lead', label:'Leads', group:'Sales', countId:'cnt-lead', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>'},
  {key:'deals', label:'Deals', group:'Sales', countId:'cnt-deal', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="18" rx="1"/><rect x="10.5" y="3" width="7" height="18" rx="1"/><rect x="18" y="3" width="3" height="18" rx="1"/></svg>'},
  {key:'customer', label:'Clients', group:'Sales', countId:'cnt-customer', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>'},
  {key:'past_customer', label:'Past Clients', group:'Sales', countId:'cnt-past_customer', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v5h5"/><path d="M3.05 13a9 9 0 1 0 2.12-8.36L3 8"/></svg>'},
  {key:'quotes', label:'Quotes', group:'Sales', countId:'cnt-quote', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h4"/></svg>'},
  {key:'proposals', label:'Proposals', group:'Sales', countId:'cnt-proposal', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><rect x="9" y="1" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h6"/></svg>'},
  {key:'pricecalc', label:'Pricing Calculator', group:'Sales', countId:null, icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 6h6M9 10h1M14 10h1M9 14h1M14 14h1M9 18h1M14 18h1"/></svg>'},
  {key:'servicerequests', label:'Service Requests', group:'Client Requests', countId:'cnt-servicerequest', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>'},
  {key:'supporttickets', label:'Support Tickets', group:'Client Requests', countId:'cnt-supportticket', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"/><path d="M13 5v2M13 11v2M13 17v2"/></svg>'},
  {key:'contentapproval', label:'Content Approval', group:'Client Requests', countId:'cnt-contentapproval', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>'},
  {key:'project', label:'Projects', group:'Work', countId:'cnt-project', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M8 4v0"/></svg>'},
  {key:'task', label:'Tasks', group:'Work', countId:'cnt-task', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>'},
  {key:'reminder', label:'Reminders', group:'Work', countId:'cnt-reminder', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>'},
  {key:'calls', label:'Calls', group:'Work', countId:'cnt-call', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'},
  {key:'emaillog', label:'Email Log', group:'Work', countId:'cnt-emaillog', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'},
  {key:'calendar', label:'Work Calendar', group:'Work', countId:null, icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>'},
  {key:'contentcal', label:'Content Calendar', group:'Marketing', countId:null, icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><circle cx="9" cy="15" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="15" r="1.5" fill="currentColor" stroke="none"/></svg>'},
  {key:'campaign', label:'Campaigns', group:'Marketing', countId:'cnt-campaign', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>'},
  {key:'templates', label:'Email Marketing', group:'Marketing', countId:null, icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h10M7 13h6"/></svg>'},
  {key:'crossposter', label:'Social Media', group:'Marketing', countId:null, icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-3.9M8.6 13.5l6.8 3.9"/></svg>'},
  {key:'workflow', label:'Automations', group:'Marketing', countId:'cnt-workflow', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6"/><circle cx="18" cy="12" r="3"/><path d="M9 6h4a5 5 0 0 1 5 5v0"/><path d="M9 18h4a5 5 0 0 0 5-5v0"/></svg>'},
  {key:'segments', label:'Segments', group:'Marketing', countId:'cnt-segment', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>'},
  {key:'reports', label:'Reports', group:'Insights', countId:null, icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="12" width="4" height="9"/><rect x="10" y="6" width="4" height="15"/><rect x="17" y="3" width="4" height="18"/></svg>'},
  {key:'timesheets', label:'Timesheets', group:'Insights', countId:null, icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/><path d="M12 2v2M12 20v2"/></svg>'},
  {key:'settings', label:'Settings', group:'Settings', countId:null, icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'},
  {key:'customfields', label:'Custom Fields', group:'Settings', countId:null, icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1 14h6"/><path d="M9 8h6"/><path d="M17 16h6"/></svg>'},
  {key:'announcements', label:'Announcements', group:'Company', countId:'cnt-announcement', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>'},
  {key:'servicecatalog', label:'Service Catalog', group:'Company', countId:'cnt-service', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>'},
  {key:'brandguidelines', label:'Brand Guidelines', group:'Company', countId:null, icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="8.5" cy="10.5" r="1.3" fill="currentColor" stroke="none"/><circle cx="12" cy="8" r="1.3" fill="currentColor" stroke="none"/><circle cx="15.5" cy="10.5" r="1.3" fill="currentColor" stroke="none"/><path d="M12 21a9 9 0 0 1 0-18c1.1 0 2 .8 2 2 0 .6-.2 1-.5 1.4-.3.4-.5.8-.5 1.3 0 .8.7 1.3 1.5 1.3H16a4 4 0 0 1 4 4c0 4.4-3.6 8-8 8z"/></svg>'},
  {key:'wiki', label:'Company Wiki', group:'Company', countId:'cnt-wiki', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'},
  {key:'featurerequests', label:'Feature Requests', group:'Company', countId:'cnt-featurerequests', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"/></svg>'},
  {key:'formsubmissions', label:'Form Submissions', group:'Sales', countId:'cnt-formsubmission', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/></svg>'},
  {key:'integrations', label:'Integrations', group:'Settings', countId:null, icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z"/></svg>'},
  {key:'team', label:'Team', group:'People', countId:null, icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>'},
  {key:'candidates', label:'Candidates', group:'People', countId:'cnt-candidate', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/></svg>'},
  {key:'timeoff', label:'Time Off', group:'People', countId:'cnt-timeoff', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>'},
  {key:'training', label:'Training', group:'People', countId:null, icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5Z"/><path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5"/></svg>'},
  {key:'incidents', label:'Incident Reports', group:'People', countId:null, restricted:true, icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01"/><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/></svg>'},
];
const NAV_GROUPS = ['Overview','Company','Sales','Client Requests','Marketing','Work','People','Insights','Settings'];
function navCustom(key){ return (DATA.settings.navCustomization && DATA.settings.navCustomization[key]) || {pinned:false, hidden:false}; }
function navItemHTML(item){
  return `<a class="nav-item" data-view="${item.key}" href="${pageFor(item.key)}">${item.icon}${esc(item.label)} ${item.countId?`<span class="nav-count" id="${item.countId}">0</span>`:''}</a>`;
}
function renderSidebarNav(){
  const nav = document.getElementById('sideNav');
  if(!nav) return;
  const canSeeRestricted = currentScope().canManageSettings;
  const visible = NAV_ITEMS.filter(item => (item.key==='dashboard' || !navCustom(item.key).hidden) && (!item.restricted || canSeeRestricted));
  const pinned = visible.filter(item => navCustom(item.key).pinned);
  let html = '';
  if(pinned.length){
    html += `<div class="nav-label">Pinned</div>`;
    pinned.forEach(item => html += navItemHTML(item));
  }
  NAV_GROUPS.forEach(g=>{
    const itemsInGroup = visible.filter(item => item.group===g && !navCustom(item.key).pinned);
    if(itemsInGroup.length){
      html += `<div class="nav-label">${g}</div>`;
      itemsInGroup.forEach(item => html += navItemHTML(item));
    }
  });
  nav.innerHTML = html;
}
async function toggleNavPin(key, checked){
  DATA.settings.navCustomization = DATA.settings.navCustomization || {};
  DATA.settings.navCustomization[key] = { ...navCustom(key), pinned: checked };
  await saveData();
  renderSidebarNav();
  render();
}
async function toggleNavHide(key, checked){
  DATA.settings.navCustomization = DATA.settings.navCustomization || {};
  DATA.settings.navCustomization[key] = { ...navCustom(key), hidden: checked };
  await saveData();
  renderSidebarNav();
  if(checked && currentView===key){ switchView('dashboard'); }
  render();
}

function applyBranding(){
  const markEl = document.getElementById('sidebarMark') || document.querySelector('.mark');
  if(!markEl) return;
  const safeLogoUrl = DATA.settings.logoDataUrl && isSafeDataUrl(DATA.settings.logoDataUrl) ? DATA.settings.logoDataUrl : null;
  const src = safeLogoUrl || FAVZE_MARK_DATAURI;
  const alt = safeLogoUrl ? 'Company logo' : 'Favze logo mark';
  markEl.innerHTML = `<img src="${src}" alt="${alt}">`;
}
/* ===================== IMAGE UPLOAD COMPRESSION ===================== */
// Every photo (logo, profile, team avatars) lives inside the same single storage key
// alongside all other data, which has a hard 5MB ceiling. Rather than just rejecting
// anything over ~2MB, resize + recompress on upload so stored images stay small
// (usually under 100-200KB) no matter what size photo someone picks.
const MAX_UPLOAD_SOURCE_BYTES = 10 * 1024 * 1024; // 10MB — sanity guard before we even try to process it
function compressImageFile(file, maxDim, quality){
  maxDim = maxDim || 400;
  quality = quality || 0.82;
  return new Promise((resolve, reject)=>{
    if(file.size > MAX_UPLOAD_SOURCE_BYTES){ reject(new Error('That file is too large, try a smaller image (under 10MB).')); return; }
    const reader = new FileReader();
    reader.onload = (e)=>{
      const img = new Image();
      img.onload = ()=>{
        let w = img.width, h = img.height;
        if(w>=h){ if(w>maxDim){ h=Math.round(h*maxDim/w); w=maxDim; } }
        else{ if(h>maxDim){ w=Math.round(w*maxDim/h); h=maxDim; } }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = ()=> reject(new Error('Could not read that image'));
      img.src = e.target.result;
    };
    reader.onerror = ()=> reject(new Error('Could not read that file'));
    reader.readAsDataURL(file);
  });
}

async function handleLogoUpload(input){
  const file = input.files[0];
  if(!file) return;
  try{
    const compressed = await compressImageFile(file, 300, 0.85);
    DATA.settings.logoDataUrl = compressed;
    await saveData();
    applyBranding();
    refreshSettingsBody();
    showToast('Logo updated');
  }catch(err){
    showToast(err.message || 'Could not process that image');
  }
  input.value = '';
}
function renderProfile(){
  document.getElementById('profileName').textContent = DATA.profile.name;
  document.getElementById('profileRole').textContent = DATA.profile.role;
  const avatarEl = document.getElementById('profileAvatar');
  if(DATA.profile.avatarDataUrl && isSafeDataUrl(DATA.profile.avatarDataUrl)){
    avatarEl.innerHTML = `<img src="${DATA.profile.avatarDataUrl}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">`;
  } else {
    avatarEl.textContent = initials(DATA.profile.name);
  }
}
async function getSafe(key){
  try{
    const res = await window.storage.get(key, false);
    return res ? res.value : null;
  }catch(e){
    return null;
  }
}
async function saveData(skipSync){
  const payload = JSON.stringify(DATA);
  try{
    const result = await window.storage.set(STORAGE_KEY, payload, false);
    if(!result){ throw new Error('empty response'); }
    try{ localStorage.removeItem(STORAGE_KEY + '_backup'); }catch(e){}
  }catch(err){
    console.error('Storage error', err);
    let backedUp = false;
    try{ localStorage.setItem(STORAGE_KEY + '_backup', payload); backedUp = true; }catch(e){}
    showToast(backedUp
      ? 'Save failed, changes backed up locally. Try again or refresh once the issue clears.'
      : 'Save failed. Changes may not persist.');
  }
  // Mark dirty and schedule a cloud push (unless this is a pre-auth seed save)
  if(!skipSync && syncReady){
    dirtySync = true; saveSyncState();
    schedulePush();
  }
}

/* ===================== CALCULATIONS (pure math, no AI) ===================== */
/* ===================== LEAD SCORING (pure math, no AI — fully transparent) ===================== */
const LEAD_SCORE_BUDGET_POINTS = {
  'Under $500': 5, '$500–$1,500': 10, '$1,500–$3,000': 15,
  '$3,000–$5,000': 20, '$5,000–$10,000': 23, '$10,000+': 25,
};
const LEAD_SCORE_AUTHORITY_POINTS = {
  'Final Decision Maker': 15, 'Influencer': 8, 'Recommender': 8,
  'Gatekeeper': 3, 'User': 3, 'Unknown': 0,
};
function computeSourceConversionRate(source){
  if(!source) return 0;
  const fromSource = DATA.contacts.filter(c=>c.source===source);
  if(fromSource.length < 2) return 0; // not enough data yet to trust the rate
  const converted = fromSource.filter(c=>c.type==='customer'||c.type==='past_customer').length;
  return converted / fromSource.length;
}
function computeLeadScore(contact){
  const budgetPts = LEAD_SCORE_BUDGET_POINTS[contact.profile && contact.profile.budgetRange] || 0;
  const servicePts = Math.min(20, (contact.services||[]).length * 5);
  const sourceRate = computeSourceConversionRate(contact.source);
  const sourcePts = Math.round(sourceRate * 20);
  const authorityPts = LEAD_SCORE_AUTHORITY_POINTS[contact.profile && contact.profile.buyingInfluence] || 0;
  const notesCount = (contact.notes||[]).length;
  const callsCount = DATA.callLogs.filter(cl=>cl.contactId===contact.id).length;
  const emailsCount = DATA.emailLog.filter(l=>l.contactId===contact.id).length;
  const engagementPts = Math.min(20, (notesCount + callsCount + emailsCount) * 2);
  const total = budgetPts + servicePts + sourcePts + authorityPts + engagementPts;
  return {
    total,
    breakdown: [
      {label:'Budget range', points: budgetPts, max:25, note: contact.profile.budgetRange || 'Not set'},
      {label:'Service interest', points: servicePts, max:20, note: `${(contact.services||[]).length} service(s) selected`},
      {label:'Source quality', points: sourcePts, max:20, note: contact.source ? `${Math.round(sourceRate*100)}% of "${contact.source}" leads have converted` : 'No source set'},
      {label:'Decision authority', points: authorityPts, max:15, note: contact.profile.buyingInfluence || 'Not set'},
      {label:'Engagement', points: engagementPts, max:20, note: `${notesCount} note(s), ${callsCount} call(s), ${emailsCount} email(s)`},
    ],
  };
}
function scoreBadgeClass(score){
  if(score>=65) return 'customer';
  if(score>=35) return 'lead';
  return 'prospect';
}
function openLeadScoreBreakdown(id){
  const c = DATA.contacts.find(x=>x.id===id);
  if(!c) return;
  const s = computeLeadScore(c);
  document.getElementById('modalTitle').textContent = `${c.name} - Priority Score`;
  document.getElementById('modalBody').innerHTML = `
    <div style="text-align:center; margin-bottom:18px;">
      <div class="mono" style="font-size:40px; font-weight:700; color:var(--navy-deep);">${s.total}</div>
      <div style="font-size:12px; color:var(--slate);">out of 100 - pure math from data already on this contact, nothing modeled or guessed</div>
    </div>
    ${s.breakdown.map(b=>`
      <div style="margin-bottom:12px;">
        <div style="display:flex; justify-content:space-between; font-size:12.5px; margin-bottom:4px;"><span style="font-weight:700; color:var(--ink);">${esc(b.label)}</span><span class="mono" style="color:var(--slate);">${b.points}/${b.max}</span></div>
        <div class="k-bar"><div class="k-bar-fill" style="width:${(b.points/b.max*100)}%;"></div></div>
        <div style="font-size:11px; color:var(--slate); margin-top:3px;">${esc(b.note)}</div>
      </div>`).join('')}
  `;
  document.getElementById('modalFoot').innerHTML = `<div></div><button class="btn-ghost" onclick="closeModal()">Close</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}

function calc(){
  const c = scopedContacts(DATA.contacts);
  const deals = scopedDeals(DATA.deals);
  const prospects = c.filter(x=>x.type==='prospect');
  const leads = c.filter(x=>x.type==='lead');
  const customers = c.filter(x=>x.type==='customer');
  const pastCustomers = c.filter(x=>x.type==='past_customer');

  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().slice(0,10);
  const revenueThisMonth = deals
    .filter(d=>isWonStage(d.stage) && d.wonDate && d.wonDate >= monthStart)
    .reduce((s,d)=>s+Number(d.value||0),0);

  const newLeadsThisWeek = leads.filter(x=> daysBetween(x.dateAdded, todayISO()) <= 7).length;

  const followUpsDue = c.filter(x=> x.followUpDate && !x.followUpDone && x.followUpDate <= todayISO()).length;

  const activeCustomers = customers.length;

  const everBecameLead = leads.length + customers.length + pastCustomers.length;
  const leadToCustomerRate = everBecameLead > 0 ? ((customers.length+pastCustomers.length)/everBecameLead*100) : 0;

  const withResponse = c.filter(x=>x.responseHours!=null && x.responseHours!=='');
  const avgResponseTime = withResponse.length ? (withResponse.reduce((s,x)=>s+Number(x.responseHours),0)/withResponse.length) : 0;

  const withFollowUp = c.filter(x=>x.followUpDate);
  const onTime = withFollowUp.filter(x=>x.followUpDone).length;
  const followUpsOnTimeRate = withFollowUp.length ? (onTime/withFollowUp.length*100) : 0;

  const activePipelineValue = deals.filter(d=>isOpenStage(d.stage)).reduce((s,d)=>s+Number(d.value||0),0);

  const activeClientCompanyIds = new Set(DATA.contacts.filter(x=>x.type==='customer' && x.companyId).map(x=>x.companyId));
  const mrr = DATA.companies.filter(co=> activeClientCompanyIds.has(co.id) && Number(co.contract.monthlyRetainer||0)>0)
    .reduce((s,co)=>s+Number(co.contract.monthlyRetainer||0),0);

  const renewalsDue = DATA.companies.filter(co=>co.contract.contractEnd)
    .map(co=>({ company: co, daysUntil: Math.round((new Date(co.contract.contractEnd+'T00:00:00') - new Date(todayISO()+'T00:00:00')) / 86400000) }))
    .filter(r=>r.daysUntil<=60)
    .sort((a,b)=>a.daysUntil-b.daysUntil);

  const priorityLeads = [...prospects, ...leads]
    .map(x=>({ contact:x, score: computeLeadScore(x).total }))
    .sort((a,b)=>b.score-a.score)
    .slice(0,5);

  return {prospects,leads,customers,pastCustomers,revenueThisMonth,newLeadsThisWeek,followUpsDue,activeCustomers,leadToCustomerRate,avgResponseTime,followUpsOnTimeRate,activePipelineValue,mrr,renewalsDue,priorityLeads};
}

/* ===================== RENDER ===================== */
function render(){
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active', n.dataset.view===currentView));
  const k = calc();
  document.getElementById('cnt-prospect').textContent = k.prospects.length;
  document.getElementById('cnt-lead').textContent = k.leads.length;
  document.getElementById('cnt-customer').textContent = k.customers.length;
  document.getElementById('cnt-past_customer').textContent = k.pastCustomers.length;
  document.getElementById('cnt-project').textContent = DATA.projects.filter(p=>p.status!=='Complete').length;
  document.getElementById('cnt-task').textContent = DATA.tasks.filter(t=>!t.done).length;
  document.getElementById('cnt-reminder').textContent = DATA.reminders.filter(r=>!r.done).length;
  document.getElementById('cnt-workflow').textContent = DATA.workflows.filter(w=>w.active).length;
  document.getElementById('cnt-emaillog').textContent = DATA.emailLog.length;
  document.getElementById('cnt-deal').textContent = DATA.deals.filter(d=>isOpenStage(d.stage)).length;
  document.getElementById('cnt-company').textContent = DATA.companies.length;
  document.getElementById('cnt-timeoff').textContent = DATA.timeOffRequests.filter(r=>r.status==='pending').length;
  document.getElementById('cnt-call').textContent = DATA.callLogs.length;
  document.getElementById('cnt-campaign').textContent = DATA.campaigns.filter(c=>c.status==='draft').length;
  document.getElementById('cnt-announcement').textContent = unreadAnnouncementsForCurrentUser();
  document.getElementById('cnt-candidate').textContent = DATA.candidates.length;
  document.getElementById('cnt-service').textContent = DATA.serviceCatalog.length;
  document.getElementById('cnt-wiki').textContent = DATA.wikiPages.length;
  document.getElementById('cnt-featurerequests').textContent = DATA.crmFeatureRequests.length + DATA.portalFeatureRequests.length;
  document.getElementById('cnt-formsubmission').textContent = DATA.formSubmissions.filter(s=>s.status==='new').length;
  document.getElementById('cnt-allcontacts').textContent = DATA.contacts.length;
  document.getElementById('cnt-quote').textContent = DATA.priceQuotes.length;
  document.getElementById('cnt-proposal').textContent = DATA.proposals.length;
  document.getElementById('cnt-servicerequest').textContent = DATA.serviceRequests.length;
  document.getElementById('cnt-supportticket').textContent = DATA.supportTickets.filter(t=>t.status!=='Resolved' && t.status!=='Closed').length;
  document.getElementById('cnt-contentapproval').textContent = DATA.contentCalendar.filter(i=>i.approvalStatus==='Pending Review').length;
  document.getElementById('cnt-segment').textContent = DATA.segments.length;

  const labelMap = {dashboard:'New Contact', companies:'New Company', allcontacts:'New Contact', quotes:'New Quote', proposals:'New Proposal', pricecalc:'Save Quote', servicerequests:'New Request', supporttickets:'New Ticket', contentapproval:'Go to Content Calendar', segments:'New Segment', team:'Manage Team', announcements:'New Announcement', servicecatalog:'New Service', brandguidelines:'Edit', wiki:'New Page', featurerequests: featureRequestTypeMode==='crm' ? 'New CRM Idea' : 'New Portal Idea', formsubmissions:'Add Submission', integrations:'Configure', candidates: candidatesViewMode==='roles' ? 'New Open Role' : 'Upload Resumes', timeoff:'Request Time Off', training:'Manage Courses', incidents:'File a Report', prospect:'New Contact', lead:'New Contact', customer:'New Contact', past_customer:'New Contact', project:'New Project', task:'New Task', reminder:'New Reminder', workflow:'New Workflow', emaillog:'New Workflow', deals:'New Deal', calls:'Log a Call', reports:'New Contact', timesheets:'New Contact', customfields:'New Custom Field', campaign:'New Campaign', calendar:'New Meeting', contentcal:'New Content', templates: emailMarketingTabMode==='lists' ? 'New List' : 'New Template', crossposter:'New Cross-Post'};
  document.getElementById('btnNewLabel').textContent = labelMap[currentView] || 'New Contact';

  const content = document.getElementById('content');
  if(currentView === 'dashboard'){
    content.innerHTML = renderDashboard(k);
  } else if(currentView === 'companies'){
    content.innerHTML = renderCompaniesView();
  } else if(currentView === 'allcontacts'){
    content.innerHTML = renderAllContactsView();
  } else if(currentView === 'quotes'){
    content.innerHTML = renderQuotesView();
  } else if(currentView === 'proposals'){
    content.innerHTML = renderProposalsView();
    loadEsignProposals();
  } else if(currentView === 'pricecalc'){
    content.innerHTML = renderPriceCalculatorView();
  } else if(currentView === 'servicerequests'){
    content.innerHTML = renderServiceRequestsView();
  } else if(currentView === 'supporttickets'){
    content.innerHTML = renderSupportTicketsView();
  } else if(currentView === 'contentapproval'){
    content.innerHTML = renderContentApprovalView();
  } else if(currentView === 'segments'){
    content.innerHTML = renderSegmentsView();
  } else if(currentView === 'team'){
    content.innerHTML = renderTeamView();
  } else if(currentView === 'candidates'){
    content.innerHTML = renderCandidatesView();
  } else if(currentView === 'announcements'){
    content.innerHTML = renderAnnouncementsView();
  } else if(currentView === 'servicecatalog'){
    content.innerHTML = renderServiceCatalogView();
  } else if(currentView === 'brandguidelines'){
    content.innerHTML = renderBrandGuidelinesView();
  } else if(currentView === 'wiki'){
    content.innerHTML = renderWikiView();
  } else if(currentView === 'featurerequests'){
    content.innerHTML = renderFeatureRequestsView();
  } else if(currentView === 'formsubmissions'){
    content.innerHTML = renderFormSubmissionsView();
  } else if(currentView === 'integrations'){
    content.innerHTML = renderIntegrationsPageView();
  } else if(currentView === 'timeoff'){
    content.innerHTML = renderTimeOffLogView();
  } else if(currentView === 'training'){
    content.innerHTML = renderTrainingView();
  } else if(currentView === 'incidents'){
    content.innerHTML = currentScope().canManageSettings ? renderIncidentReportsView() : renderAccessRestricted();
  } else if(currentView === 'deals'){
    content.innerHTML = renderDealsView();
    bindKanbanDragDrop();
  } else if(currentView === 'campaign'){
    content.innerHTML = renderCampaignsView();
  } else if(currentView === 'project'){
    content.innerHTML = renderProjectsView();
  } else if(currentView === 'task'){
    content.innerHTML = renderTasksView();
  } else if(currentView === 'reminder'){
    content.innerHTML = renderRemindersView();
  } else if(currentView === 'workflow'){
    content.innerHTML = renderWorkflowsView();
  } else if(currentView === 'emaillog'){
    content.innerHTML = renderEmailLogView();
  } else if(currentView === 'templates'){
    content.innerHTML = renderTemplatesView();
  } else if(currentView === 'calls'){
    content.innerHTML = renderCallsView();
  } else if(currentView === 'calendar'){
    content.innerHTML = renderCalendarView();
  } else if(currentView === 'contentcal'){
    content.innerHTML = renderContentCalendarView();
  } else if(currentView === 'crossposter'){
    content.innerHTML = renderCrossPosterView();
  } else if(currentView === 'reports'){
    content.innerHTML = renderReportsView();
  } else if(currentView === 'timesheets'){
    content.innerHTML = renderTimesheetsView();
  } else if(currentView === 'customfields'){
    content.innerHTML = renderCustomFieldsView();
  } else if(currentView === 'settings'){
    content.innerHTML = renderSettingsPage();
  } else {
    content.innerHTML = renderListView(currentView, k);
  }
}

function badgeClass(type){ return type; }
function typeLabel(type){ return {prospect:'Prospect', lead:'Lead', customer:'Client', past_customer:'Past Client'}[type] || type; }

function renderDashboard(k){
  const newest = [...DATA.contacts].sort((a,b)=> b.dateAdded.localeCompare(a.dateAdded)).slice(0,5);
  const followUps = [...DATA.contacts].filter(x=>x.followUpDate).sort((a,b)=> a.followUpDate.localeCompare(b.followUpDate)).slice(0,6);
  const firstName = (DATA.profile.name||'').split(' ')[0] || 'there';

  return `
    ${renderOnboardingChecklist()}
    <div class="page-head">
      <div><h1>Good morning, ${esc(firstName)}.</h1><p>Here's where every prospect, lead and customer stands today.</p></div>
      <div class="date-pill">${new Date().toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</div>
    </div>
    <div class="stat-row">
      <div class="stat-card"><div class="stat-top"><div class="stat-icon navy">${iconRevenue()}</div></div><h2>${fmtMoney(k.revenueThisMonth)}</h2><div class="label">Revenue this month</div></div>
      <div class="stat-card"><div class="stat-top"><div class="stat-icon blue">${iconLead()}</div></div><h2>${k.newLeadsThisWeek}</h2><div class="label">New leads this week</div></div>
      <div class="stat-card"><div class="stat-top"><div class="stat-icon amber">${iconClock()}</div></div><h2>${k.followUpsDue}</h2><div class="label">Follow ups due</div></div>
      <div class="stat-card"><div class="stat-top"><div class="stat-icon green">${iconCustomer()}</div></div><h2>${k.activeCustomers}</h2><div class="label">Active clients</div></div>
    </div>
    <div style="display:flex; gap:16px; margin-bottom:24px; flex-wrap:wrap;">
      <div class="stat-card" style="flex:1; min-width:220px;"><div class="stat-top"><div class="stat-icon green">${iconRevenue()}</div></div><h2>${fmtMoney(k.mrr)}</h2><div class="label">Monthly recurring revenue</div></div>
      <div class="stat-card" style="flex:1; min-width:220px;"><div class="stat-top"><div class="stat-icon amber">${iconClock()}</div></div><h2>${k.renewalsDue.length}</h2><div class="label">Renewals due in 60 days</div></div>
    </div>
    <div class="panel" style="margin-bottom:16px;">
      <div class="panel-head"><h3>Renewals Due</h3></div>
      <div class="followup-list">
        ${k.renewalsDue.length ? k.renewalsDue.slice(0,6).map(r=>{
          const isOverdue = r.daysUntil<0;
          const cls = isOverdue ? 'overdue' : (r.daysUntil<=14 ? 'today' : 'soon');
          const label = isOverdue ? `${Math.abs(r.daysUntil)}d overdue` : (r.daysUntil===0 ? 'Today' : `${r.daysUntil}d`);
          return `
          <div class="fu-item">
            <div class="fu-body" onclick="openEditCompany('${r.company.id}')">
              <div class="fu-name">${esc(r.company.name)}</div>
              <div class="fu-note">${fmtMoney(r.company.contract.monthlyRetainer)}/mo${r.company.contract.autoRenew?' · auto-renew on':' · auto-renew not confirmed'}</div>
            </div>
            <div class="fu-due ${cls}">${label}</div>
          </div>`;
        }).join('') : `<div class="fu-item"><div class="fu-body"><div class="fu-name">No renewals due in the next 60 days</div></div></div>`}
      </div>
    </div>
    <div class="panel" style="margin-bottom:16px;">
      <div class="panel-head"><h3>Priority Leads</h3><a class="view-all" onclick="switchView('lead')">View all leads</a></div>
      <div class="followup-list">
        ${k.priorityLeads.length ? k.priorityLeads.map(p=>`
          <div class="fu-item">
            <div class="fu-body" onclick="openEditModal('${p.contact.id}')">
              <div class="fu-name">${esc(p.contact.name)}</div>
              <div class="fu-note">${typeLabel(p.contact.type)}${p.contact.company?' · '+esc(p.contact.company):''}</div>
            </div>
            <div class="fu-due" style="cursor:pointer;" onclick="openLeadScoreBreakdown('${p.contact.id}')"><span class="badge ${scoreBadgeClass(p.score)}">${p.score}</span></div>
          </div>`).join('') : `<div class="fu-item"><div class="fu-body"><div class="fu-name">No prospects or leads to score yet</div></div></div>`}
      </div>
    </div>
    <div class="grid-2">
      <div class="panel">
        <div class="panel-head"><h3>Newest contacts</h3><a class="view-all" onclick="switchView('lead')">View leads</a></div>
        <table><thead><tr><th>Contact</th><th>Source</th><th>Type</th><th>Added</th></tr></thead>
        <tbody>
          ${newest.length ? newest.map(x=>`
            <tr onclick="openEditModal('${x.id}')">
              <td><div class="lead-name">${esc(x.name)}</div><div class="lead-sub">${esc(x.company||'')}</div></td>
              <td class="src">${esc(x.source||'-')}</td>
              <td><span class="badge ${badgeClass(x.type)}">${typeLabel(x.type)}</span></td>
              <td class="mono">${fmtDate(x.dateAdded)}</td>
            </tr>`).join('') : `<tr class="empty-row"><td colspan="4">No contacts yet. Add your first one.</td></tr>`}
        </tbody></table>
      </div>
      <div class="panel">
        <div class="panel-head"><h3>Follow ups</h3></div>
        <div class="followup-list">
          ${followUps.length ? followUps.map(x=>renderFollowUpItem(x)).join('') : `<div class="fu-item"><div class="fu-body"><div class="fu-name">No follow ups scheduled</div></div></div>`}
        </div>
      </div>
    </div>
    <div class="grid-2">
      <div class="panel">
        <div class="panel-head"><h3>Open tasks</h3><a class="view-all" onclick="switchView('task')">View all tasks</a></div>
        <div class="followup-list">
          ${renderTaskOrReminderItems(DATA.tasks, 'task')}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><h3>Reminders</h3><a class="view-all" onclick="switchView('reminder')">View all reminders</a></div>
        <div class="followup-list">
          ${renderTaskOrReminderItems(DATA.reminders, 'reminder')}
        </div>
      </div>
    </div>
    <div class="panel" style="padding:20px 20px 22px;">
      <div class="kpi-head-row">
        <h3 style="font-size:19px;">KPIs</h3>
        <div class="kpi-flag">${iconCheck()} Calculated from your data. No AI scoring</div>
      </div>
      <div class="kpi-grid">
        <div class="kpi-card"><div class="k-label">Lead to client rate</div><div class="k-value">${k.leadToCustomerRate.toFixed(1)}%</div><div class="k-bar"><div class="k-bar-fill" style="width:${Math.min(k.leadToCustomerRate,100)}%;"></div></div><div class="k-formula">(clients + past clients) ÷ everyone who was ever a lead</div></div>
        <div class="kpi-card"><div class="k-label">Avg. response time</div><div class="k-value">${k.avgResponseTime.toFixed(1)}h</div><div class="k-bar"><div class="k-bar-fill" style="width:${Math.min(k.avgResponseTime*8,100)}%;"></div></div><div class="k-formula">sum(first reply hours) ÷ contacts with a logged reply</div></div>
        <div class="kpi-card"><div class="k-label">Follow ups on time</div><div class="k-value">${k.followUpsOnTimeRate.toFixed(0)}%</div><div class="k-bar"><div class="k-bar-fill" style="width:${k.followUpsOnTimeRate}%;"></div></div><div class="k-formula">follow ups marked done ÷ total follow ups</div></div>
        <div class="kpi-card"><div class="k-label">Active pipeline value</div><div class="k-value">${fmtMoney(k.activePipelineValue)}</div><div class="k-bar"><div class="k-bar-fill" style="width:${Math.min(k.activePipelineValue/100,100)}%;"></div></div><div class="k-formula">sum(deal value) across open prospects and leads</div></div>
      </div>
    </div>
  `;
}

function renderFollowUpItem(x){
  const isOverdue = x.followUpDate < todayISO() && !x.followUpDone;
  const isToday = x.followUpDate === todayISO() && !x.followUpDone;
  const cls = x.followUpDone ? 'done' : (isOverdue ? 'overdue' : (isToday ? 'today' : 'soon'));
  const dueLabel = x.followUpDone ? 'Done' : (isOverdue ? `${Math.abs(daysBetween(todayISO(),x.followUpDate))}d late` : (isToday ? 'Today' : fmtDate(x.followUpDate)));
  const lastNote = x.notes && x.notes.length ? x.notes[x.notes.length-1].text : '';
  return `
    <div class="fu-item">
      <div class="fu-check ${cls==='done'?'done':(cls==='overdue'?'overdue':'')}" onclick="toggleFollowUp(event,'${x.id}')">${x.followUpDone?iconCheck():''}</div>
      <div class="fu-body" onclick="openEditModal('${x.id}')">
        <div class="fu-name">${esc(x.name)}</div>
        <div class="fu-note">${esc(lastNote)}</div>
      </div>
      <div class="fu-due ${cls}">${dueLabel}</div>
    </div>`;
}

function renderListView(type, k){
  const map = {prospect:k.prospects, lead:k.leads, customer:k.customers, past_customer:k.pastCustomers};
  let rows = map[type];
  if(searchTerm){
    const s = searchTerm.toLowerCase();
    rows = rows.filter(x => (x.name+x.company+x.source).toLowerCase().includes(s));
  }
  if(tagFilter){
    rows = rows.filter(x => (x.tags||[]).includes(tagFilter));
  }
  if(listViewFilter){
    rows = rows.filter(x => (x.emailLists||[]).includes(listViewFilter));
  }
  if(cfFilterField){
    const needle = cfFilterValue.trim().toLowerCase();
    rows = rows.filter(x => {
      const val = x.customFields && x.customFields[cfFilterField];
      if(!needle) return val!=null && val!=='';
      return val!=null && String(val).toLowerCase().includes(needle);
    });
  }
  if(ownerFilter){
    rows = rows.filter(x => x.assignedTo===ownerFilter);
  }
  if(serviceFilter){
    rows = rows.filter(x => (x.services||[]).includes(serviceFilter));
  }
  const scoreSortable = (type==='prospect' || type==='lead');
  if(scoreSortable && listSortMode==='score'){
    rows = [...rows].sort((a,b)=> computeLeadScore(b).total - computeLeadScore(a).total);
  } else {
    rows = [...rows].sort((a,b)=> b.dateAdded.localeCompare(a.dateAdded));
  }
  const titleMap = {prospect:'Prospects', lead:'Leads', customer:'Clients', past_customer:'Past Clients'};
  const subMap = {
    prospect:'People and businesses identified as a fit, not contacted about a deal yet.',
    lead:'Active conversations in the pipeline, moving toward a deal.',
    customer:'Signed, active accounts.',
    past_customer:'Former clients, contracts ended.'
  };
  const views = DATA.savedViews.filter(v=>v.view===type);
  const selectedCount = rows.filter(r=>selectedContactIds.has(r.id)).length;
  const relevantFields = DATA.customFields.filter(f=> !f.appliesTo || f.appliesTo.includes('all') || f.appliesTo.includes(type));
  return `
    <div class="page-head">
      <div><h1>${titleMap[type]}</h1><p>${subMap[type]}</p></div>
      <div class="csv-actions">
        <button class="btn-small" onclick="openConvertModal('${type}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" style="vertical-align:-2px;"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg> Convert</button>
        <button class="btn-small" onclick="exportContactsCSV('${type}')">${iconDownload()} Export CSV</button>
        <button class="btn-small" onclick="document.getElementById('csvFileInput').click()">${iconUpload()} Import CSV</button>
        <div class="date-pill">${rows.length} total</div>
      </div>
    </div>
    <div class="view-chips">
      ${views.map(v=>`<span class="view-chip ${v.searchTerm===searchTerm?'active':''}" onclick="applySavedView('${v.id}')">${esc(v.name)}<span class="vc-x" onclick="event.stopPropagation(); deleteSavedView('${v.id}')">${iconX()}</span></span>`).join('')}
      ${searchTerm ? `<span class="view-chip-save" onclick="saveCurrentView('${type}')">+ Save "${esc(searchTerm)}" as a view</span>` : ''}
    </div>
    ${scoreSortable ? `
    <div class="view-chips">
      <span class="view-chip ${listSortMode==='newest'?'active':''}" onclick="setListSortMode('newest')">Newest</span>
      <span class="view-chip ${listSortMode==='score'?'active':''}" onclick="setListSortMode('score')">Priority Score</span>
    </div>` : ''}
    ${DATA.tagDefinitions.length ? `
    <div class="view-chips">
      ${DATA.tagDefinitions.map(t=>`
        <span class="view-chip ${tagFilter===t.id?'active':''}" style="${tagFilter===t.id&&isSafeColor(t.color)?`background:${t.color}; border-color:${t.color};`:''}" onclick="setTagFilter('${t.id}')">
          <span style="width:8px; height:8px; border-radius:50%; background:${tagFilter===t.id?'#fff':(isSafeColor(t.color)?t.color:'var(--teal)')}; display:inline-block; margin-right:5px;"></span>${esc(t.name)}
        </span>`).join('')}
      ${tagFilter ? `<span class="view-chip" onclick="setTagFilter(null)">${iconX()} Clear tag filter</span>` : ''}
    </div>` : ''}
    <div class="view-chips">
      <select onchange="setListViewFilter(this.value)" style="padding:7px 12px; border-radius:99px; border:1px solid var(--line); font-size:12px; font-weight:600;">
        <option value="">Any email list</option>
        ${DATA.emailLists.map(l=>`<option value="${l.id}" ${listViewFilter===l.id?'selected':''}>${esc(l.name)}</option>`).join('')}
      </select>
      <select onchange="setCFFilterField(this.value)" style="padding:7px 12px; border-radius:99px; border:1px solid var(--line); font-size:12px; font-weight:600;">
        <option value="">Any custom field</option>
        ${relevantFields.map(f=>`<option value="${f.id}" ${cfFilterField===f.id?'selected':''}>${esc(f.name)}</option>`).join('')}
      </select>
      ${cfFilterField ? `<input value="${esc(cfFilterValue)}" onchange="setCFFilterValue(this.value)" placeholder="Value contains..." style="padding:7px 12px; border-radius:99px; border:1px solid var(--line); font-size:12px; width:150px;">` : ''}
      <select onchange="setOwnerFilter(this.value)" style="padding:7px 12px; border-radius:99px; border:1px solid var(--line); font-size:12px; font-weight:600;">
        <option value="">Any account owner</option>
        ${DATA.users.map(u=>`<option value="${u.id}" ${ownerFilter===u.id?'selected':''}>${esc(u.name)}</option>`).join('')}
      </select>
      <select onchange="setServiceFilter(this.value)" style="padding:7px 12px; border-radius:99px; border:1px solid var(--line); font-size:12px; font-weight:600;">
        <option value="">Any service interest</option>
        ${FAVZE_SERVICES.map(s=>`<option value="${s.value}" ${serviceFilter===s.value?'selected':''}>${esc(s.label)}</option>`).join('')}
      </select>
      ${listViewFilter || cfFilterField || ownerFilter || serviceFilter ? `<span class="view-chip" onclick="clearAdvancedFilters()">${iconX()} Clear filters</span>` : ''}
    </div>
    ${selectedCount ? `
    <div class="bulk-bar">
      <span class="bulk-count">${selectedCount} selected</span>
      <select id="bulkTypeSelect">
        <option value="prospect">Set type: Prospect</option>
        <option value="lead">Set type: Lead</option>
        <option value="customer">Set type: Client</option>
        <option value="past_customer">Set type: Past Client</option>
      </select>
      <button class="bulk-apply" onclick="bulkApplyType()">Apply</button>
      <input type="date" id="bulkFollowUpDate">
      <button class="bulk-apply" onclick="bulkApplyFollowUp()">Set follow up</button>
      <button class="bulk-del" onclick="bulkDeleteSelected('${type}')">Delete selected</button>
      <button class="bulk-cancel" onclick="clearSelection()">Cancel</button>
    </div>` : ''}
    <div class="panel">
      <table>
        <thead><tr><th><input type="checkbox" class="row-check" onchange="toggleSelectAll(this,'${type}')" ${rows.length && selectedCount===rows.length?'checked':''}></th><th>Contact</th>${scoreSortable?'<th>Score</th>':''}<th>Source</th><th>Stage</th><th>Deal value</th><th>Follow up</th><th>Added</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(x=>`
            <tr>
              <td onclick="event.stopPropagation();"><input type="checkbox" class="row-check" ${selectedContactIds.has(x.id)?'checked':''} onchange="toggleSelectRow('${x.id}')"></td>
              <td onclick="openEditModal('${x.id}')">
                <div class="lead-name">${esc(x.name)}</div><div class="lead-sub">${esc(x.company||'')}</div>
                ${(x.tags||[]).length ? `<div style="display:flex; gap:4px; margin-top:4px; flex-wrap:wrap;">${x.tags.map(tid=>{ const t=DATA.tagDefinitions.find(td=>td.id===tid); return t ? `<span style="font-size:9.5px; font-weight:700; padding:1px 7px; border-radius:99px; background:${t.color}22; color:${accessibleTextShade(t.color, document.documentElement.dataset.theme==='dark')};">${esc(t.name)}</span>` : ''; }).join('')}</div>` : ''}
              </td>
              ${scoreSortable ? `<td onclick="event.stopPropagation(); openLeadScoreBreakdown('${x.id}');"><span class="badge ${scoreBadgeClass(computeLeadScore(x).total)}" style="cursor:pointer;">${computeLeadScore(x).total}</span></td>` : ''}
              <td class="src" onclick="openEditModal('${x.id}')">${esc(x.source||'-')}</td>
              <td onclick="openEditModal('${x.id}')">${esc(x.stage||'-')}</td>
              <td class="mono" onclick="openEditModal('${x.id}')">${fmtMoney(x.dealValue)}</td>
              <td onclick="openEditModal('${x.id}')">${x.followUpDate ? (x.followUpDone ? '<span class="badge customer">Done</span>' : (x.followUpDate<todayISO() ? '<span class="badge hot">Overdue</span>' : fmtDate(x.followUpDate))) : '-'}</td>
              <td class="mono" onclick="openEditModal('${x.id}')">${fmtDate(x.dateAdded)}</td>
            </tr>`).join('') : `<tr class="empty-row"><td colspan="${scoreSortable?8:7}">No ${titleMap[type].toLowerCase()} yet.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

let allContactsTypeFilter = 'all';
function setAllContactsTypeFilter(t){ allContactsTypeFilter = t; render(); }
function renderAllContactsView(){
  let rows = [...DATA.contacts];
  if(allContactsTypeFilter!=='all') rows = rows.filter(c=>c.type===allContactsTypeFilter);
  if(searchTerm){ const s=searchTerm.toLowerCase(); rows = rows.filter(x=>(x.name+(x.company||'')+(x.source||'')).toLowerCase().includes(s)); }
  rows.sort((a,b)=> b.dateAdded.localeCompare(a.dateAdded));
  return `
    <div class="page-head">
      <div><h1>Contacts</h1><p>Every contact across every stage, in one place.</p></div>
      <div class="date-pill">${rows.length} total</div>
    </div>
    <div class="view-chips">
      <span class="view-chip ${allContactsTypeFilter==='all'?'active':''}" onclick="setAllContactsTypeFilter('all')">All</span>
      <span class="view-chip ${allContactsTypeFilter==='prospect'?'active':''}" onclick="setAllContactsTypeFilter('prospect')">Prospects</span>
      <span class="view-chip ${allContactsTypeFilter==='lead'?'active':''}" onclick="setAllContactsTypeFilter('lead')">Leads</span>
      <span class="view-chip ${allContactsTypeFilter==='customer'?'active':''}" onclick="setAllContactsTypeFilter('customer')">Clients</span>
      <span class="view-chip ${allContactsTypeFilter==='past_customer'?'active':''}" onclick="setAllContactsTypeFilter('past_customer')">Past Clients</span>
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>Contact</th><th>Type</th><th>Source</th><th>Stage</th><th>Deal value</th><th>Added</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(x=>`
            <tr onclick="openEditModal('${x.id}')">
              <td><div class="lead-name">${esc(x.name)}</div><div class="lead-sub">${esc(x.company||'')}</div></td>
              <td><span class="badge ${badgeClass(x.type)}">${typeLabel(x.type)}</span></td>
              <td class="src">${esc(x.source||'-')}</td>
              <td>${esc(x.stage||'-')}</td>
              <td class="mono">${fmtMoney(x.dealValue)}</td>
              <td class="mono">${fmtDate(x.dateAdded)}</td>
            </tr>`).join('') : `<tr class="empty-row"><td colspan="6">No contacts yet.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

function renderTaskOrReminderItems(list, kind){
  const open = [...list].filter(x=>!x.done).sort((a,b)=> (a.dueDate||'9999').localeCompare(b.dueDate||'9999')).slice(0,6);
  if(!open.length) return `<div class="fu-item"><div class="fu-body"><div class="fu-name">Nothing open</div></div></div>`;
  return open.map(x=>{
    const isOverdue = x.dueDate && x.dueDate < todayISO();
    const isToday = x.dueDate === todayISO();
    const cls = isOverdue ? 'overdue' : (isToday ? 'today' : 'soon');
    const dueLabel = !x.dueDate ? 'No date' : (isOverdue ? `${Math.abs(daysBetween(todayISO(),x.dueDate))}d late` : (isToday ? 'Today' : fmtDate(x.dueDate)));
    const title = kind==='task' ? x.title : x.text;
    return `
      <div class="fu-item">
        <div class="fu-check ${isOverdue?'overdue':''}" onclick="toggleDone(event,'${kind}','${x.id}')">${x.done?iconCheck():''}</div>
        <div class="fu-body" onclick="${kind==='task'?`openEditTask('${x.id}')`:`openEditReminder('${x.id}')`}">
          <div class="fu-name">${kind==='task' && x.recurrence ? '↻ ' : ''}${esc(title)}</div>
          <div class="fu-note">${kind==='task' && x.priority ? esc(x.priority)+' priority' : ''}${kind==='task' && x.project ? ' · '+esc(x.project) : ''}</div>
        </div>
        <div class="fu-due ${cls}">${dueLabel}</div>
      </div>`;
  }).join('');
}

function renderProjectsView(){
  let rows = [...DATA.projects];
  if(searchTerm){ const s=searchTerm.toLowerCase(); rows = rows.filter(x=>(x.name+x.client+x.description).toLowerCase().includes(s)); }
  rows.sort((a,b)=> (a.dueDate||'9999').localeCompare(b.dueDate||'9999'));
  return `
    <div class="page-head">
      <div><h1>Projects</h1><p>Active build work across Favze, HRC, and ABI.</p></div>
      <div class="date-pill">${rows.length} total</div>
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>Project</th><th>Client</th><th>Status</th><th>Due</th><th>Added</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(x=>`
            <tr onclick="openEditProject('${x.id}')">
              <td><div class="lead-name">${esc(x.name)}</div><div class="lead-sub">${esc(x.description||'')}</div></td>
              <td class="src">${esc(x.client||'-')}</td>
              <td><span class="badge ${x.status==='Complete'?'customer':(x.status==='In Progress'?'lead':'prospect')}">${esc(x.status)}</span></td>
              <td class="mono">${fmtDate(x.dueDate)}</td>
              <td class="mono">${fmtDate(x.dateAdded)}</td>
            </tr>`).join('') : `<tr class="empty-row"><td colspan="5">No projects yet.</td></tr>`}
        </tbody>
      </table>
    </div>`;
}

function renderTasksView(){
  let rows = [...DATA.tasks];
  if(searchTerm){ const s=searchTerm.toLowerCase(); rows = rows.filter(x=>(x.title+ (x.project||'')).toLowerCase().includes(s)); }
  rows.sort((a,b)=> Number(a.done)-Number(b.done) || (a.dueDate||'9999').localeCompare(b.dueDate||'9999'));
  return `
    <div class="page-head">
      <div><h1>Tasks</h1><p>Everything on your plate, in one list.</p></div>
      <div class="date-pill">${rows.filter(x=>!x.done).length} open</div>
    </div>
    <div class="panel">
      <table>
        <thead><tr><th></th><th>Task</th><th>Project</th><th>Priority</th><th>Due</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(x=>{
            const isOverdue = x.dueDate && x.dueDate < todayISO() && !x.done;
            return `
            <tr>
              <td style="width:40px;" onclick="event.stopPropagation();"><div class="fu-check ${x.done?'done':(isOverdue?'overdue':'')}" onclick="toggleDone(event,'task','${x.id}')">${x.done?iconCheck():''}</div></td>
              <td onclick="openEditTask('${x.id}')"><div class="lead-name" style="${x.done?'text-decoration:line-through; color:var(--slate);':''}">${x.recurrence?'↻ ':''}${esc(x.title)}</div></td>
              <td class="src" onclick="openEditTask('${x.id}')">${esc(x.project||'-')}</td>
              <td onclick="openEditTask('${x.id}')">${esc(x.priority||'-')}</td>
              <td class="mono" onclick="openEditTask('${x.id}')">${x.done?'Done':(isOverdue?'Overdue':fmtDate(x.dueDate))}</td>
            </tr>`;}).join('') : `<tr class="empty-row"><td colspan="5">No tasks yet.</td></tr>`}
        </tbody>
      </table>
    </div>`;
}

function renderRemindersView(){
  let rows = [...DATA.reminders];
  if(searchTerm){ const s=searchTerm.toLowerCase(); rows = rows.filter(x=>x.text.toLowerCase().includes(s)); }
  rows.sort((a,b)=> Number(a.done)-Number(b.done) || (a.dueDate||'9999').localeCompare(b.dueDate||'9999'));
  return `
    <div class="page-head">
      <div><h1>Reminders</h1><p>Quick things not worth a full task or contact.</p></div>
      <div class="date-pill">${rows.filter(x=>!x.done).length} open</div>
    </div>
    <div class="panel">
      <div class="followup-list">
        ${rows.length ? rows.map(x=>{
          const isOverdue = x.dueDate && x.dueDate < todayISO() && !x.done;
          const isToday = x.dueDate === todayISO() && !x.done;
          const cls = x.done ? 'done' : (isOverdue ? 'overdue' : (isToday ? 'today' : 'soon'));
          const dueLabel = x.done ? 'Done' : (!x.dueDate ? 'No date' : (isOverdue ? `${Math.abs(daysBetween(todayISO(),x.dueDate))}d late` : (isToday ? 'Today' : fmtDate(x.dueDate))));
          const linkedContact = x.contactId ? DATA.contacts.find(c=>c.id===x.contactId) : null;
          return `
          <div class="fu-item">
            <div class="fu-check ${x.done?'done':(isOverdue?'overdue':'')}" onclick="toggleDone(event,'reminder','${x.id}')">${x.done?iconCheck():''}</div>
            <div class="fu-body" onclick="openEditReminder('${x.id}')">
              <div class="fu-name" style="${x.done?'text-decoration:line-through; color:var(--slate);':''}">${esc(x.text)}</div>
              ${linkedContact ? `<div class="fu-sub" style="font-size:11.5px; color:var(--slate);">${esc(linkedContact.name)}</div>` : ''}
            </div>
            <div class="fu-due ${cls}">${dueLabel}</div>
          </div>`;
        }).join('') : `<div class="fu-item"><div class="fu-body"><div class="fu-name">No reminders yet.</div></div></div>`}
      </div>
    </div>`;
}

function nextRecurrenceDate(dateStr, recurrence){
  const base = dateStr ? new Date(dateStr+'T00:00:00') : new Date(todayISO()+'T00:00:00');
  if(recurrence==='weekly') base.setDate(base.getDate()+7);
  else if(recurrence==='biweekly') base.setDate(base.getDate()+14);
  else if(recurrence==='monthly') base.setMonth(base.getMonth()+1);
  else return null;
  return base.toISOString().slice(0,10);
}
async function toggleDone(e, kind, id){
  e.stopPropagation();
  const list = kind==='task' ? DATA.tasks : DATA.reminders;
  const item = list.find(x=>x.id===id);
  if(!item) return;
  item.done = !item.done;
  let recreated = false;
  if(kind==='task' && item.done && item.recurrence){
    const nextDue = nextRecurrenceDate(item.dueDate, item.recurrence);
    DATA.tasks.push({
      id: uid(), title: item.title, project: item.project, priority: item.priority,
      dueDate: nextDue, assignedTo: item.assignedTo, billable: item.billable,
      recurrence: item.recurrence, dateAdded: todayISO(), done:false, escalated:false,
    });
    recreated = true;
  }
  await saveData();
  render();
  showToast(item.done ? (recreated ? 'Marked done - next occurrence created' : 'Marked done') : 'Reopened');
}

/* ===================== AUTOMATION ENGINE (no AI — rule matching only) ===================== */
function getMergeRawValue(tagRaw, contact){
  const tag = tagRaw.trim().toLowerCase();
  if(tag==='name') return contact.name||'';
  if(tag==='company') return contact.company||'';
  if(tag==='stage') return contact.stage||'';
  if(tag==='source') return contact.source||'';
  if(tag==='phone') return contact.phone||'';
  if(tag==='email') return contact.email||'';
  if(tag==='type') return typeLabel(contact.type);
  if(tag==='dealvalue') return contact.dealValue ? fmtMoney(contact.dealValue) : '';
  if(tag==='followupdate') return contact.followUpDate ? fmtDate(contact.followUpDate) : '';
  if(tag.startsWith('field.')){
    const fname = tagRaw.trim().slice(6).trim().toLowerCase();
    const f = DATA.customFields.find(cf=>cf.name.toLowerCase()===fname);
    if(f && contact.customFields) return contact.customFields[f.id] || '';
    return '';
  }
  return '';
}
function getMergeValue(tagRaw, contact){
  const val = getMergeRawValue(tagRaw, contact);
  if(val) return val;
  const fallbacks = DATA.settings.mergeFallbacks || {};
  return fallbacks[tagRaw.trim().toLowerCase()] || '';
}
function fillTemplate(str, contact){
  let out = str||'';
  for(let i=0;i<20;i++){
    const re = /\{\{#if\s+([\w.]+)\}\}([\s\S]*?)(?:\{\{#else\}\}([\s\S]*?))?\{\{\/if\}\}/i;
    if(!re.test(out)) break;
    out = out.replace(re, (m, tag, truthyContent, falsyContent)=>{
      const val = getMergeRawValue(tag, contact);
      return val ? truthyContent : (falsyContent||'');
    });
  }
  out = out.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (m, tag)=> getMergeValue(tag, contact));
  return out;
}
function mergeTagReferenceHTML(){
  const standardTags = [
    ['{{name}}','Contact name'], ['{{company}}','Company'], ['{{stage}}','Stage'], ['{{source}}','Source'],
    ['{{phone}}','Phone'], ['{{email}}','Email'], ['{{type}}','Contact type'], ['{{dealValue}}','Deal value'], ['{{followUpDate}}','Follow-up date'],
  ];
  return `
    <div style="background:var(--paper); border-radius:8px; padding:12px; margin-top:8px;">
      <div style="font-size:11px; font-weight:700; color:var(--ink); margin-bottom:6px;">Merge codes (click to copy)</div>
      <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:8px;">
        ${standardTags.map(([code,label])=>`<span class="mono" title="${esc(label)}" onclick="copyMergeCode('${code}')" style="cursor:pointer; background:var(--white); border:1px solid var(--line); border-radius:6px; padding:3px 8px; font-size:11px;">${code}</span>`).join('')}
        ${DATA.customFields.map(f=>`<span class="mono" title="${esc(f.name)}" onclick="copyMergeCode('{{field.${esc(f.name)}}}')" style="cursor:pointer; background:var(--white); border:1px solid var(--line); border-radius:6px; padding:3px 8px; font-size:11px;">{{field.${esc(f.name)}}}</span>`).join('')}
      </div>
      <div style="font-size:11px; color:var(--slate);"><b style="color:var(--ink);">Conditional logic:</b> <span class="mono">{{#if company}}Hi {{company}} team{{#else}}Hi there{{/if}}</span></div>
      <div style="font-size:11px; color:var(--slate); margin-top:4px;">Set default fallback text for any blank tag in Settings → Pipeline → Merge Tag Defaults.</div>
    </div>
  `;
}
function copyMergeCode(code){
  navigator.clipboard.writeText(code).then(()=> showToast(`Copied ${code}`)).catch(()=> showToast('Could not copy, select and copy manually'));
}

/* ===================== "#" MERGE TAG POPUP (Zoho-style, live while typing) ===================== */
let mergeTagPopupState = null;
function allMergeTagOptions(){
  const standard = [
    ['{{name}}','Contact name'], ['{{company}}','Company'], ['{{stage}}','Stage'], ['{{source}}','Source'],
    ['{{phone}}','Phone'], ['{{email}}','Email'], ['{{type}}','Contact type'], ['{{dealValue}}','Deal value'], ['{{followUpDate}}','Follow-up date'],
  ];
  const custom = DATA.customFields.map(f=>[`{{field.${f.name}}}`, f.name]);
  return [...standard, ...custom];
}
function bindMergeTagPopup(textareaId){
  const el = document.getElementById(textareaId);
  if(!el || el.dataset.mergeTagBound) return;
  el.dataset.mergeTagBound = '1';
  el.addEventListener('input', ()=>onMergeTagInput(textareaId));
  el.addEventListener('keydown', (e)=>onMergeTagKeydown(e, textareaId));
  el.addEventListener('blur', ()=>{ setTimeout(closeMergeTagPopup, 150); });
}
function onMergeTagInput(textareaId){
  const el = document.getElementById(textareaId);
  if(!el) return;
  const pos = el.selectionStart;
  const textBefore = el.value.slice(0, pos);
  const hashIdx = textBefore.lastIndexOf('#');
  if(hashIdx===-1){ closeMergeTagPopup(); return; }
  const query = textBefore.slice(hashIdx+1);
  if(/\s/.test(query) || query.length>24){ closeMergeTagPopup(); return; }
  const options = allMergeTagOptions().filter(([code,label])=> code.toLowerCase().includes(query.toLowerCase()) || label.toLowerCase().includes(query.toLowerCase()));
  if(!options.length){ closeMergeTagPopup(); return; }
  showMergeTagPopup(textareaId, hashIdx, options);
}
function showMergeTagPopup(textareaId, hashIdx, options){
  mergeTagPopupState = {textareaId, hashIdx, options, activeIndex:0};
  let popup = document.getElementById('mergeTagPopup');
  if(!popup){
    popup = document.createElement('div');
    popup.id = 'mergeTagPopup';
    popup.style.cssText = 'position:absolute; z-index:9999; background:var(--white); border:1px solid var(--line); border-radius:8px; box-shadow:0 12px 30px -10px rgba(3,31,66,.3); max-height:220px; overflow-y:auto; min-width:220px;';
    document.body.appendChild(popup);
  }
  const el = document.getElementById(textareaId);
  const rect = el.getBoundingClientRect();
  popup.style.left = (rect.left + window.scrollX) + 'px';
  popup.style.top = (rect.bottom + window.scrollY + 4) + 'px';
  renderMergeTagPopupOptions();
  popup.style.display = 'block';
}
function renderMergeTagPopupOptions(){
  const popup = document.getElementById('mergeTagPopup');
  if(!popup || !mergeTagPopupState) return;
  popup.innerHTML = mergeTagPopupState.options.map(([code,label], i)=>`
    <div onmousedown="event.preventDefault(); selectMergeTagOption(${i})" style="padding:8px 12px; cursor:pointer; font-size:12.5px; display:flex; justify-content:space-between; gap:10px; ${i===mergeTagPopupState.activeIndex?'background:var(--teal-soft);':''}">
      <span class="mono" style="color:var(--navy-deep); font-weight:700;">${esc(code)}</span>
      <span style="color:var(--slate);">${esc(label)}</span>
    </div>`).join('');
}
function selectMergeTagOption(i){
  if(!mergeTagPopupState) return;
  const [code] = mergeTagPopupState.options[i];
  const el = document.getElementById(mergeTagPopupState.textareaId);
  const pos = el.selectionStart;
  const before = el.value.slice(0, mergeTagPopupState.hashIdx);
  const after = el.value.slice(pos);
  el.value = before + code + after;
  const newPos = before.length + code.length;
  el.setSelectionRange(newPos, newPos);
  el.focus();
  closeMergeTagPopup();
}
function onMergeTagKeydown(e, textareaId){
  if(!mergeTagPopupState || mergeTagPopupState.textareaId!==textareaId) return;
  if(e.key==='ArrowDown'){ e.preventDefault(); mergeTagPopupState.activeIndex = Math.min(mergeTagPopupState.options.length-1, mergeTagPopupState.activeIndex+1); renderMergeTagPopupOptions(); }
  else if(e.key==='ArrowUp'){ e.preventDefault(); mergeTagPopupState.activeIndex = Math.max(0, mergeTagPopupState.activeIndex-1); renderMergeTagPopupOptions(); }
  else if(e.key==='Enter'){ e.preventDefault(); selectMergeTagOption(mergeTagPopupState.activeIndex); }
  else if(e.key==='Escape'){ closeMergeTagPopup(); }
}
function closeMergeTagPopup(){
  mergeTagPopupState = null;
  const popup = document.getElementById('mergeTagPopup');
  if(popup) popup.style.display = 'none';
}

function triggerLabel(t){
  if(t.type==='new_contact') return `New ${t.contactType==='any'?'contact':typeLabel(t.contactType)} added`;
  if(t.type==='type_change') return `Contact becomes ${typeLabel(t.contactType)}`;
  if(t.type==='deal_stage') return `Deal reaches "${stageName(t.stageId)}"`;
  if(t.type==='overdue') return `Follow up goes overdue`;
  return 'Unknown trigger';
}
/* ===================== ALERTS: In-App / Email / SMS + Daily Digest ===================== */
const ALERT_EVENTS = [
  {key:'lead_assigned', label:'New Lead Assigned'},
  {key:'deal_closed', label:'Deal Closed'},
  {key:'followup_overdue', label:'Follow-up Overdue'},
  {key:'task_assigned', label:'New Task Assigned'},
  {key:'campaign_sent', label:'Campaign Sent'},
  {key:'task_escalated', label:'Task Escalated to Manager'},
  {key:'announcement_posted', label:'New Announcement'},
];
function eventLabel(key){ return (ALERT_EVENTS.find(e=>e.key===key)||{}).label || key; }
function isQuietNow(){
  if(DATA.settings.snoozeUntil && new Date(DATA.settings.snoozeUntil) > new Date()) return true;
  const q = DATA.settings.quietHours;
  if(!q || !q.enabled) return false;
  const now = new Date();
  const dayKeys = ['sun','mon','tue','wed','thu','fri','sat'];
  if(!q.days[dayKeys[now.getDay()]]) return false;
  const [sh,sm] = q.start.split(':').map(Number);
  const [eh,em] = q.end.split(':').map(Number);
  const startMin = sh*60+sm, endMin = eh*60+em;
  const curMin = now.getHours()*60+now.getMinutes();
  if(startMin===endMin) return false;
  return startMin < endMin ? (curMin>=startMin && curMin<endMin) : (curMin>=startMin || curMin<endMin);
}
async function notifyEvent(eventKey, message, contact){
  const cfg = (DATA.settings.alertChannels && DATA.settings.alertChannels[eventKey]) || {inApp:true, email:false, sms:false};
  const now = new Date().toISOString();
  const quiet = isQuietNow();
  if(cfg.inApp){
    DATA.notifications.unshift({ id: uid(), eventKey, message, contactName: contact?contact.name:'', at: now, read:false, muted: quiet });
    updateNotifBadge();
    if(!quiet) showToast(message);
  }
  if(cfg.sms){
    DATA.smsLog.unshift({ id: uid(), eventKey, message, contactName: contact?contact.name:'', at: now });
  }
  if(cfg.email){
    if(DATA.settings.digestMode){
      DATA.digestQueue.push({ id: uid(), eventKey, message, contactName: contact?contact.name:'', at: now });
    } else {
      DATA.emailLog.unshift({
        id: uid(), workflowId:null, workflowName: 'Alert: ' + eventLabel(eventKey),
        contactId: contact?contact.id:null, contactName: contact?contact.name:'System',
        subject: eventLabel(eventKey), body: message, triggeredAt: now
      });
    }
  }
  await saveData();
}
function updateNotifBadge(){
  const badge = document.getElementById('notifBadge');
  if(!badge) return;
  const unread = DATA.notifications.filter(n=>!n.read).length;
  badge.style.display = unread ? 'flex' : 'none';
  badge.textContent = unread > 9 ? '9+' : unread;
}
function toggleNotifDropdown(){
  const box = document.getElementById('notifDropdown');
  const isOpen = box.classList.contains('open');
  if(isOpen){ box.classList.remove('open'); return; }
  box.innerHTML = DATA.notifications.length ? DATA.notifications.slice(0,15).map(n=>`
    <div class="notif-item ${n.read?'':'unread'}">
      <div class="ni-msg">${esc(n.message)}</div>
      <div class="ni-time">${n.contactName?esc(n.contactName)+' · ':''}${new Date(n.at).toLocaleString('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'})}</div>
    </div>`).join('') : `<div class="gsr-empty">No notifications yet.</div>`;
  box.classList.add('open');
  DATA.notifications.forEach(n=>n.read=true);
  saveData();
  updateNotifBadge();
}
document.addEventListener('click', (e)=>{
  const dropdown = document.getElementById('notifDropdown');
  if(dropdown && dropdown.classList.contains('open') && !e.target.closest('.icon-btn') && !e.target.closest('.global-search-results')){
    dropdown.classList.remove('open');
  }
});
async function sendDigestNow(){
  if(!DATA.digestQueue.length){ showToast('Nothing queued for the digest'); return; }
  const lines = DATA.digestQueue.map(q=> `- ${eventLabel(q.eventKey)}${q.contactName?' - '+q.contactName:''}: ${q.message}`).join('\n');
  DATA.emailLog.unshift({
    id: uid(), workflowId:null, workflowName: 'Daily Digest',
    contactId:null, contactName:'System',
    subject: `Favze CRM Daily Digest - ${DATA.digestQueue.length} update(s)`,
    body: lines, triggeredAt: new Date().toISOString()
  });
  const count = DATA.digestQueue.length;
  DATA.digestQueue = [];
  await saveData();
  refreshSettingsBody();
  showToast(`Digest sent with ${count} update(s)`);
}

function fireWorkflow(workflow, contact){
  if(contact.unsubscribed) return;
  DATA.emailLog.unshift({
    id: uid(), workflowId: workflow.id, workflowName: workflow.name,
    contactId: contact.id, contactName: contact.name,
    subject: fillTemplate(workflow.subject, contact),
    body: fillTemplate(workflow.body, contact),
    triggeredAt: new Date().toISOString()
  });
  showToast(`Automation fired: "${workflow.name}" for ${contact.name}`);
}
function evaluateWorkflowsForContact(contact, event){
  DATA.workflows.filter(w=>w.active).forEach(w=>{
    let match = false;
    if(w.trigger.type==='new_contact' && event.kind==='created' && (w.trigger.contactType==='any' || w.trigger.contactType===contact.type)) match = true;
    if(w.trigger.type==='type_change' && event.kind==='type_changed' && event.to===w.trigger.contactType && event.from!==event.to) match = true;
    if(match) fireWorkflow(w, contact);
  });
}
function evaluateWorkflowsForDeal(deal, event){
  const contact = DATA.contacts.find(c=>c.id===deal.contactId);
  if(!contact) return;
  DATA.workflows.filter(w=>w.active).forEach(w=>{
    if(w.trigger.type==='deal_stage' && event.kind==='stage_changed' && w.trigger.stageId===deal.stage){
      fireWorkflow(w, contact);
    }
  });
}
/* ===================== DEFAULT CONSULTATION-STAGE EMAIL SEQUENCE (seeded once, fully editable after) ===================== */
const DEFAULT_STAGE_SEQUENCE = [
  { stage:'New Inquiry', name:'New Inquiry - Fast Acknowledgment',
    subject:"Got your info, {{name}} - here's what happens next",
    body:`Hi {{name}},

Thanks for reaching out to Favze. I wanted to get back to you fast, because when you're evaluating marketing partners, momentum matters.

Here's what happens next: we'll get you on a quick call to understand where {{#if company}}{{company}} is{{#else}}your business is{{/if}} today and where you want it to go. No canned pitch, just a real conversation about what's actually holding your growth back and whether we're the right fit to fix it.

Keep an eye out for a scheduling link, or feel free to grab a time that works for you directly.

Talk soon,
The Favze Team` },
  { stage:'Consultation Scheduled', name:'Consultation Scheduled - Confirmation & Prep',
    subject:"You're booked - quick prep for our call",
    body:`Hi {{name}},

Looking forward to our conversation. To make the most of our time together, it helps if you come in with:

- Your #1 marketing goal for the next 6 months
- What's working right now, and what isn't
- A rough budget range you're working with

This isn't a sales pitch on our end, it's a real conversation about whether we're the right fit. If something comes up and you need to reschedule, just reply to this email, no problem at all.

See you soon,
The Favze Team` },
  { stage:'Consultation No-Show', name:'Consultation No-Show - Warm Re-Engagement',
    subject:"Totally get it, {{name}} - let's find a better time",
    body:`Hi {{name}},

Life happens, no worries at all about missing our call. I didn't want to just let it go without checking in.

If you're still interested in talking through {{#if company}}{{company}}'s{{#else}}your{{/if}} marketing, I'd love to find a time that actually works. Just reply here or grab a new slot whenever's convenient.

If timing isn't right anymore, that's totally fine too, just let me know and I'll stop following up.

Best,
The Favze Team` },
  { stage:'Consultation Completed', name:'Consultation Completed - Recap & Next Step',
    subject:"Great talking with you, {{name}} - here's a quick recap",
    body:`Hi {{name}},

Really enjoyed our conversation today. Based on what you shared, here's what I'm hearing as the priority: getting {{#if company}}{{company}}{{#else}}your business{{/if}} more consistent, qualified leads without you having to think about marketing every day.

Next step on our end: I'll put together a proposal tailored to what we discussed, not a generic package, built around your actual goals. You should have it within the next couple of business days.

In the meantime, if anything else comes to mind, just reply here.

Talk soon,
The Favze Team` },
  { stage:'Proposal Sent', name:'Proposal Sent - Framing & Next Step',
    subject:"Your proposal is ready, {{name}}",
    body:`Hi {{name}},

Attached is the proposal we discussed, built specifically around what {{#if company}}{{company}}{{#else}}you{{/if}} told me matters most, not a one-size-fits-all package.

A few things worth knowing as you review it:
- Everything in here maps directly back to the goals we talked about
- Happy to walk through it live if that's easier than reading cold, just grab time on my calendar
- Pricing is valid for the next 14 days

Let me know what questions come up. I'd rather over-explain than have you guessing.

Best,
The Favze Team` },
  { stage:'Negotiation', name:'Negotiation - Address Objections Directly',
    subject:"Let's make this work, {{name}}",
    body:`Hi {{name}},

Appreciate you taking the time to dig into the details with me. I want to make sure this feels like the right decision, not just a good pitch.

If there's a specific part of the proposal giving you pause, whether that's scope, timeline, or investment, let's talk it through directly. I'd much rather adjust something real than have you walk away over a misunderstanding.

What's the biggest thing still on your mind?

Best,
The Favze Team` },
  { stage:'Won', name:'Deal Won - Warm Welcome',
    subject:"Welcome to Favze, {{name}}",
    body:`Hi {{name}},

Officially official, welcome aboard. Genuinely excited to get started with {{#if company}}{{company}}{{#else}}you{{/if}}.

Here's what happens next: our team is putting together your onboarding checklist right now, kickoff call, account access, brand assets, the works. You'll hear from us shortly to get that first call on the calendar.

Thanks for trusting us with this, we don't take it lightly.

Talk soon,
The Favze Team` },
  { stage:'Lost', name:'Deal Lost - Professional Close',
    subject:"No hard feelings, {{name}}",
    body:`Hi {{name}},

Thanks for considering Favze, and for the time you spent talking things through with us. I know these decisions aren't easy.

If it's useful, I'd genuinely love to know what tipped the decision, no agenda, just want to keep getting better. And if anything changes down the line, our door's always open.

Wishing {{#if company}}{{company}}{{#else}}you{{/if}} the best with whatever direction you go.

Best,
The Favze Team` },
];
/* ===================== ROUND-ROBIN LEAD ROUTING ===================== */
function getNextRoundRobinUser(){
  const eligible = DATA.users.filter(u=>!isUserOutToday(u.id));
  if(!eligible.length) return null;
  const rr = DATA.settings.roundRobin;
  let idx = (rr.lastAssignedIndex + 1) % eligible.length;
  rr.lastAssignedIndex = idx;
  return eligible[idx];
}

/* ===================== TASK ESCALATION (48h overdue -> manager) ===================== */
/* ===================== AUTOMATED STAGE DEMOTION ===================== */
function lastActivityDate(contact){
  const dates = [contact.dateAdded];
  (contact.notes||[]).forEach(n=> dates.push(n.date));
  DATA.emailLog.filter(l=>l.contactId===contact.id).forEach(l=> dates.push(l.triggeredAt.slice(0,10)));
  DATA.callLogs.filter(cl=>cl.contactId===contact.id).forEach(cl=> dates.push(cl.date));
  if(contact.followUpDone && contact.followUpDate) dates.push(contact.followUpDate);
  return dates.filter(Boolean).sort().slice(-1)[0] || contact.dateAdded;
}
// Scans every date-type custom field flagged for automated reminders. For any contact
// with that field filled in, creates one real Reminder on the configured lead day,
// linked back to that contact. Runs once per day per contact/field pair, tracked via
// a small marker on the contact so it never duplicates.
function checkCustomDateReminders(){
  const dateFields = DATA.customFields.filter(f=>f.type==='date' && f.reminderEnabled);
  if(!dateFields.length) return;
  let changed = false;
  const today = todayISO();
  DATA.contacts.forEach(c=>{
    if(!c.customFields) return;
    dateFields.forEach(f=>{
      if(!f.appliesTo || (!f.appliesTo.includes('all') && !f.appliesTo.includes(c.type))) return;
      const dateVal = c.customFields[f.id];
      if(!dateVal) return;
      const leadDays = f.reminderDaysBefore || 0;
      const remindOn = shiftDateFrom(dateVal, -leadDays);
      if(remindOn !== today) return;
      c._customDateReminded = c._customDateReminded || {};
      const markerKey = f.id + ':' + dateVal;
      if(c._customDateReminded[markerKey]) return; // already created, don't duplicate
      DATA.reminders.push({
        id: uid(), dateAdded: today, done:false, contactId: c.id,
        text: `${c.name} - ${f.name}${leadDays>0?` in ${leadDays} day${leadDays===1?'':'s'}`:' is today'} (${fmtDate(dateVal)})`,
        dueDate: today,
      });
      c._customDateReminded[markerKey] = true;
      changed = true;
    });
  });
  if(changed) saveData();
}
function shiftDateFrom(dateStr, days){
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0,10);
}
function checkRenewalReminders(){
  let changed = false;
  const today = todayISO();
  DATA.companies.forEach(co=>{
    if(!co.contract.contractEnd) return;
    const remindOn = shiftDateFrom(co.contract.contractEnd, -60);
    if(remindOn !== today) return;
    co._renewalReminded = co._renewalReminded || {};
    if(co._renewalReminded[co.contract.contractEnd]) return;
    DATA.reminders.push({
      id: uid(), dateAdded: today, done:false, contactId: null,
      text: `${co.name}'s contract renews in 60 days (${fmtDate(co.contract.contractEnd)}) - confirm renewal`,
      dueDate: today,
    });
    co._renewalReminded[co.contract.contractEnd] = true;
    changed = true;
  });
  if(changed) saveData();
}

function checkStageDemotions(){
  const sd = DATA.settings.stageDemotion;
  if(!sd || !sd.enabled) return;
  let changed = false;
  DATA.contacts.forEach(c=>{
    if(c.type!=='lead') return;
    const last = lastActivityDate(c);
    if(daysBetween(last, todayISO()) >= sd.inactivityDays){
      c.type = 'prospect';
      c.stage = 'Demoted (inactive)';
      c.notes = (c.notes||[]).concat([{ text: `Auto-demoted from Lead to Prospect after ${sd.inactivityDays}+ days with no CRM activity (last activity: ${fmtDate(last)}).`, date: todayISO() }]);
      changed = true;
    }
  });
  if(changed) saveData();
}

function checkTaskEscalation(){
  if(!DATA.settings.taskEscalationEnabled) return;
  let changed = false;
  DATA.tasks.forEach(t=>{
    if(t.done || t.escalated || !t.dueDate || !t.assignedTo) return;
    if(daysBetween(t.dueDate, todayISO()) < 2) return;
    const owner = DATA.users.find(u=>u.id===t.assignedTo);
    if(!owner || !owner.managerId) return;
    const manager = DATA.users.find(u=>u.id===owner.managerId);
    if(!manager) return;
    t.assignedTo = manager.id;
    t.escalated = true;
    changed = true;
    notifyEvent('task_escalated', `"${t.title}" was overdue 48h+ and reassigned from ${owner.name} to ${manager.name}`, null);
  });
  if(changed) saveData();
}

function checkOverdueTriggers(){
  const workflows = DATA.workflows.filter(w=>w.active && w.trigger.type==='overdue');
  let changed = false;
  DATA.contacts.forEach(c=>{
    if(c.followUpDate && !c.followUpDone && c.followUpDate < todayISO()){
      c.triggeredWorkflowIds = c.triggeredWorkflowIds || [];
      workflows.forEach(w=>{
        if(!c.triggeredWorkflowIds.includes(w.id)){
          fireWorkflow(w, c);
          c.triggeredWorkflowIds.push(w.id);
          changed = true;
        }
      });
      if(!c._overdueAlerted){
        notifyEvent('followup_overdue', `Follow up with ${c.name} is overdue`, c);
        c._overdueAlerted = true;
        changed = true;
      }
    } else if(c.followUpDone){
      if(c.triggeredWorkflowIds && c.triggeredWorkflowIds.length){ c.triggeredWorkflowIds = []; changed = true; }
      if(c._overdueAlerted){ c._overdueAlerted = false; changed = true; }
    }
  });
  if(changed) saveData();
}

function renderWorkflowsView(){
  let rows = [...DATA.workflows];
  return `
    <div class="page-head">
      <div><h1>Workflows</h1><p>Rules that watch your CRM data and fire an email when a condition matches. Every trigger here runs on your real records, nothing is predicted or AI-scored.</p></div>
      <div class="date-pill">${rows.filter(w=>w.active).length} active</div>
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>Workflow</th><th>Trigger</th><th>Subject</th><th>Status</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(w=>`
            <tr onclick="openEditWorkflow('${w.id}')">
              <td><div class="lead-name">${esc(w.name)}</div></td>
              <td class="src">${esc(triggerLabel(w.trigger))}</td>
              <td class="src">${esc(w.subject)}</td>
              <td><span class="badge ${w.active?'customer':'prospect'}">${w.active?'Active':'Paused'}</span></td>
            </tr>`).join('') : `<tr class="empty-row"><td colspan="4">No workflows yet. Add one to start triggering emails off your CRM.</td></tr>`}
        </tbody>
      </table>
    </div>`;
}

/* ===================== CAMPAIGNS (bulk email marketing) ===================== */
const AUDIENCE_OPTIONS = [
  {value:'all', label:'All contacts'},
  {value:'prospect', label:'Prospects'},
  {value:'lead', label:'Leads'},
  {value:'customer', label:'Clients'},
  {value:'past_customer', label:'Past Clients'},
];
function audienceLabel(v){ return (AUDIENCE_OPTIONS.find(a=>a.value===v)||{}).label || v; }
function audienceContacts(audienceType, tagId, listId){
  return DATA.contacts.filter(c =>
    (audienceType==='all' || c.type===audienceType) &&
    !c.unsubscribed &&
    (!tagId || (c.tags||[]).includes(tagId)) &&
    (!listId || (c.emailLists||[]).includes(listId))
  );
}
function renderCampaignsView(){
  const rows = [...DATA.campaigns].sort((a,b)=> (b.sentAt||b.dateAdded||'').localeCompare(a.sentAt||a.dateAdded||''));
  return `
    <div class="page-head">
      <div><h1>Campaigns</h1><p>Full marketing initiatives across any mix of channels, not just email blasts. Link a campaign to a company, project, or deal to keep everything connected.</p></div>
      <div class="date-pill">${rows.length} total</div>
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>Campaign</th><th>Channels</th><th>Linked To</th><th>Status</th><th>Recipients</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(cm=>{
            const co = cm.companyId ? DATA.companies.find(c=>c.id===cm.companyId) : null;
            const proj = cm.projectId ? DATA.projects.find(p=>p.id===cm.projectId) : null;
            return `
            <tr onclick="openCampaignDetail('${cm.id}')">
              <td><div class="lead-name">${esc(cm.name)}</div>${cm.goal?`<div class="lead-sub">${esc(cm.goal)}</div>`:''}</td>
              <td class="src">${(cm.channels||[]).length ? (cm.channels||[]).slice(0,3).map(ch=>esc(ch)).join(', ') + ((cm.channels||[]).length>3?` +${cm.channels.length-3}`:'') : '-'}</td>
              <td class="src">${co ? esc(co.name) : (proj ? esc(proj.name) : '-')}</td>
              <td>
                <span class="badge ${cm.status==='sent'?'customer':(cm.status==='scheduled'?'lead':'prospect')}">${cm.status==='sent'?'Sent':(cm.status==='scheduled'?'Scheduled':'Draft')}</span>
                ${cm.status==='scheduled' && cm.scheduledFor ? `<div style="font-size:10.5px; color:var(--slate); margin-top:3px;">${new Date(cm.scheduledFor).toLocaleString('en-US')}</div>` : ''}
              </td>
              <td class="mono">${cm.recipientCount||0}</td>
            </tr>`;
          }).join('') : `<tr class="empty-row"><td colspan="5">No campaigns yet. Create one to plan your first initiative.</td></tr>`}
        </tbody>
      </table>
    </div>`;
}
let editingCampaignId = null;
function openNewCampaignModal(){
  editingCampaignId = null;
  document.getElementById('modalPanel').style.maxWidth = '620px';
  document.getElementById('modalTitle').textContent = 'New Campaign';
  document.getElementById('modalBody').innerHTML = campaignFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="saveCampaignForm()">Save draft</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
  bindCampaignAudiencePreview();
  onCampaignChannelToggle();
  bindMergeTagPopup('cm_body');
  bindHtmlDropZone('cm_body','cm_name');
}
function openCampaignDetail(id){
  const cm = DATA.campaigns.find(x=>x.id===id);
  if(!cm) return;
  editingCampaignId = id;
  document.getElementById('modalPanel').style.maxWidth = '620px';
  if(cm.status==='sent'){
    const co = cm.companyId ? DATA.companies.find(c=>c.id===cm.companyId) : null;
    const proj = cm.projectId ? DATA.projects.find(p=>p.id===cm.projectId) : null;
    document.getElementById('modalTitle').textContent = cm.name;
    document.getElementById('modalBody').innerHTML = `
      ${cm.goal ? `<div class="field"><label>Goal</label><input value="${esc(cm.goal)}" readonly></div>` : ''}
      <div class="field"><label>Channels</label><input value="${esc((cm.channels||[]).join(', ')||'-')}" readonly></div>
      <div class="field-row">
        <div class="field"><label>Linked to</label><input value="${co?esc(co.name):(proj?esc(proj.name):'-')}" readonly></div>
        <div class="field"><label>Dates</label><input value="${cm.startDate?fmtDate(cm.startDate):'-'}${cm.endDate?' – '+fmtDate(cm.endDate):''}" readonly></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Audience</label><input value="${esc(audienceLabel(cm.audienceType))}" readonly></div>
        <div class="field"><label>Recipients</label><input value="${cm.recipientCount||0}" readonly></div>
      </div>
      <div class="field"><label>Subject</label><input value="${esc(cm.subject)}" readonly></div>
      ${cm.abResults ? `<div class="field"><label>A/B Split</label><input value="Subject A → ${cm.abResults.countA} · Subject B → ${cm.abResults.countB}" readonly></div>` : ''}
      <div class="field"><label>Body</label><textarea rows="6" readonly>${esc(cm.body)}</textarea></div>
      <div class="field"><label>Sent</label><input value="${cm.sentAt ? new Date(cm.sentAt).toLocaleString('en-US') : '-'}" readonly></div>
    `;
    document.getElementById('modalFoot').innerHTML = `
      <button class="btn-danger" onclick="deleteCampaign('${id}')">Delete</button>
      <div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Close</button><button class="btn-primary" onclick="sendCampaign('${id}')">Send again</button></div>`;
  } else {
    document.getElementById('modalTitle').textContent = cm.name;
    document.getElementById('modalBody').innerHTML = campaignFormHTML(cm);
    document.getElementById('modalFoot').innerHTML = `
      <button class="btn-danger" onclick="deleteCampaign('${id}')">Delete</button>
      <div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="saveCampaignForm()">Save draft</button><button class="btn-ghost" onclick="scheduleCampaign('${id}')">Schedule</button><button class="btn-primary" onclick="sendCampaign('${id}')">Send now</button></div>`;
    bindCampaignAudiencePreview();
    onCampaignChannelToggle();
    bindMergeTagPopup('cm_body');
    bindHtmlDropZone('cm_body','cm_name');
  }
  document.getElementById('modalBackdrop').classList.add('open');
}
const CAMPAIGN_CHANNELS = ['Email Marketing','Social Media','SEO','Local SEO','GEO','AEO','PPC','Google Ads','Meta Ads','Content Marketing','Website Launch','Branding Campaign','Product Launch','Events','Webinars','SMS'];
function campaignFormHTML(cm){
  cm = cm || {name:'', goal:'', channels:['Email Marketing'], companyId:'', dealId:'', projectId:'', startDate:'', endDate:'', audienceType:'lead', tagFilter:'', listFilter:'', subject:'', subjectB:'', body:'', scheduledFor:''};
  const companies = [...DATA.companies].sort((a,b)=>a.name.localeCompare(b.name));
  const emailOn = (cm.channels||[]).includes('Email Marketing');
  return `
    <div class="field"><label>Campaign name</label><input id="cm_name" value="${esc(cm.name)}" placeholder="e.g. Q3 Local SEO Push - Elkhart County"></div>
    <div class="field"><label>Goal (optional)</label><input id="cm_goal" value="${esc(cm.goal)}" placeholder="e.g. 20 new qualified leads by end of quarter"></div>
    <div class="field">
      <label>Channels</label>
      <div style="display:flex; flex-wrap:wrap; gap:8px;">
        ${CAMPAIGN_CHANNELS.map(ch=>{
          const on = (cm.channels||[]).includes(ch);
          return `<label style="display:flex; align-items:center; gap:6px; padding:6px 11px; border-radius:99px; border:1.5px solid ${on?'var(--teal)':'var(--line)'}; background:${on?'var(--teal-soft)':'var(--paper)'}; cursor:pointer; font-size:12px; font-weight:600; color:var(--ink);">
            <input type="checkbox" class="cm-channel-check" value="${esc(ch)}" ${on?'checked':''} onchange="onCampaignChannelToggle(this)" style="width:auto;">
            ${esc(ch)}
          </label>`;
        }).join('')}
      </div>
    </div>
    <div class="field-row">
      <div class="field"><label>Start date</label><input id="cm_startDate" type="date" value="${cm.startDate||''}"></div>
      <div class="field"><label>End date</label><input id="cm_endDate" type="date" value="${cm.endDate||''}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Linked Company (optional)</label>
        <select id="cm_companyId">
          <option value="">None</option>
          ${companies.map(co=>`<option value="${co.id}" ${cm.companyId===co.id?'selected':''}>${esc(co.name)}</option>`).join('')}
        </select>
      </div>
      <div class="field"><label>Linked Project (optional)</label>
        <select id="cm_projectId">
          <option value="">None</option>
          ${DATA.projects.map(p=>`<option value="${p.id}" ${cm.projectId===p.id?'selected':''}>${esc(p.name)}</option>`).join('')}
        </select>
      </div>
    </div>
    <div id="cm_emailSection" style="${emailOn?'':'display:none;'} border-top:1px dashed var(--line); margin-top:6px; padding-top:14px;">
      <label style="display:block; font-size:11.5px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:10px;">Email Marketing details</label>
      <div class="field-row">
        <div class="field"><label>Audience</label>
          <select id="cm_audience">${AUDIENCE_OPTIONS.map(a=>`<option value="${a.value}" ${cm.audienceType===a.value?'selected':''}>${a.label}</option>`).join('')}</select>
        </div>
        <div class="field"><label>Tag segment (optional)</label>
          <select id="cm_tag">
            <option value="">Any tag</option>
            ${DATA.tagDefinitions.map(t=>`<option value="${t.id}" ${cm.tagFilter===t.id?'selected':''}>${esc(t.name)}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="field"><label>Email list (optional)</label>
        <select id="cm_list">
          <option value="">Any list</option>
          ${DATA.emailLists.map(l=>`<option value="${l.id}" ${cm.listFilter===l.id?'selected':''}>${esc(l.name)}</option>`).join('')}
        </select>
      </div>
      <div class="rec-hint" id="cm_audienceCount" style="margin-top:-6px; margin-bottom:8px;"></div>
      ${DATA.emailTemplates.length ? `
      <div class="field"><label>Start from a template (optional)</label>
        <select onchange="applyTemplateTo('cm', this.value)">
          <option value="">Choose a saved template...</option>
          ${DATA.emailTemplates.map(t=>`<option value="${t.id}">${esc(t.name)}</option>`).join('')}
        </select>
      </div>` : ''}
      <div class="field"><label>Email subject</label><input id="cm_subject" value="${esc(cm.subject)}" placeholder="e.g. Your July marketing recap, {{name}}"></div>
      <div class="field">
        <label style="display:flex; align-items:center; gap:8px; text-transform:none; font-weight:500; font-size:12.5px; color:var(--ink);">
          <input type="checkbox" id="cm_abToggle" ${cm.subjectB?'checked':''} onchange="document.getElementById('cm_subjectBWrap').style.display=this.checked?'':'none';" style="width:auto;">
          A/B test the subject line
        </label>
      </div>
      <div class="field" id="cm_subjectBWrap" style="${cm.subjectB?'':'display:none;'}">
        <label>Subject Line B</label>
        <input id="cm_subjectB" value="${esc(cm.subjectB||'')}" placeholder="An alternate subject to split-test against">
        <p style="font-size:11px; color:var(--slate); margin-top:6px;">Recipients split roughly 50/50 between Subject A and B, real split, logged per contact in Email Log. Automated open-rate winner detection needs a connected send provider (Integrations → Brevo).</p>
      </div>
      <div class="field">
        <label>Email body</label>
        <div style="display:flex; gap:8px; margin-bottom:8px;">
          <button type="button" class="btn-small" onclick="triggerHtmlImport('cm_body','cm_name')">${iconUpload()} Import HTML file</button>
          <span class="rec-hint">or drag an .html file onto the box below.</span>
        </div>
        <textarea id="cm_body" class="merge-tag-input" rows="7" style="border-style:dashed;" placeholder="Use {{name}}, {{company}}, {{stage}}, {{source}} to personalize, drop an .html file, or type # for a list">${esc(cm.body)}</textarea>${mergeTagReferenceHTML()}
      </div>
      <div class="field">
        <label>Schedule for later (optional)</label>
        <input id="cm_scheduledFor" type="datetime-local" value="${cm.scheduledFor||''}">
        <p style="font-size:11px; color:var(--slate); margin-top:6px;">Sets a reminder for when it's time to send, this CRM can't fire an unattended send while closed unless a provider is connected in Integrations.</p>
      </div>
      <div class="field" style="background:var(--paper); border-radius:8px; padding:10px 12px; font-size:11.5px; color:var(--slate);">
        Sending logs a personalized email per recipient to Email Log and, if Outlook is connected, actually sends. Unsubscribed contacts are automatically excluded.
      </div>
    </div>
  `;
}
function onCampaignChannelToggle(){
  const emailOn = Array.from(document.querySelectorAll('.cm-channel-check')).some(c=>c.checked && c.value==='Email Marketing');
  const sec = document.getElementById('cm_emailSection');
  if(sec) sec.style.display = emailOn ? '' : 'none';
}
function bindCampaignAudiencePreview(){
  const sel = document.getElementById('cm_audience');
  const tagSel = document.getElementById('cm_tag');
  const listSel = document.getElementById('cm_list');
  const out = document.getElementById('cm_audienceCount');
  if(!sel || !out) return;
  const update = ()=>{ out.textContent = `${audienceContacts(sel.value, tagSel.value, listSel.value).length} contact(s) will receive this`; };
  update();
  sel.addEventListener('change', update);
  tagSel.addEventListener('change', update);
  listSel.addEventListener('change', update);
}
function readCampaignFormPayload(){
  const nameEl = document.getElementById('cm_name');
  if(!nameEl) return null; // read-only "already sent" view has no editable form
  return {
    name: nameEl.value.trim(),
    goal: document.getElementById('cm_goal').value.trim(),
    channels: Array.from(document.querySelectorAll('.cm-channel-check')).filter(c=>c.checked).map(c=>c.value),
    startDate: document.getElementById('cm_startDate').value || null,
    endDate: document.getElementById('cm_endDate').value || null,
    companyId: document.getElementById('cm_companyId').value || null,
    projectId: document.getElementById('cm_projectId').value || null,
    audienceType: document.getElementById('cm_audience') ? document.getElementById('cm_audience').value : 'lead',
    tagFilter: document.getElementById('cm_tag') ? (document.getElementById('cm_tag').value || null) : null,
    listFilter: document.getElementById('cm_list') ? (document.getElementById('cm_list').value || null) : null,
    subject: document.getElementById('cm_subject') ? document.getElementById('cm_subject').value.trim() : '',
    subjectB: (document.getElementById('cm_abToggle') && document.getElementById('cm_abToggle').checked) ? document.getElementById('cm_subjectB').value.trim() : '',
    body: document.getElementById('cm_body') ? document.getElementById('cm_body').value.trim() : '',
    scheduledFor: document.getElementById('cm_scheduledFor') ? (document.getElementById('cm_scheduledFor').value || null) : null,
  };
}
async function saveCampaignForm(){
  const payload = readCampaignFormPayload();
  if(!payload){ showToast('Nothing to save from this view'); return; }
  if(!payload.name){ showToast('Campaign name is required'); return; }
  if(editingCampaignId){
    Object.assign(DATA.campaigns.find(x=>x.id===editingCampaignId), payload);
  } else {
    DATA.campaigns.push({ id: uid(), dateAdded: todayISO(), status:'draft', recipientCount:0, sentAt:null, ...payload });
  }
  await saveData(); closeModal(); render();
  showToast(editingCampaignId ? 'Campaign updated' : 'Campaign saved as draft');
}
async function sendCampaign(id){
  let cm = DATA.campaigns.find(x=>x.id===id);
  const payload = readCampaignFormPayload();
  if(payload){
    if(!payload.name){ showToast('Campaign name is required'); return; }
    if(!cm){
      cm = { id: uid(), dateAdded: todayISO(), status:'draft', recipientCount:0, sentAt:null, ...payload };
      DATA.campaigns.push(cm);
    } else {
      Object.assign(cm, payload);
    }
  }
  if(!cm){ showToast('Campaign not found'); return; }
  if(!(cm.channels||[]).includes('Email Marketing')){ showToast('This campaign has no Email Marketing channel to send, saved as draft'); await saveData(); closeModal(); render(); return; }
  if(!cm.subject){ showToast('Add a subject line before sending'); return; }
  const recipients = audienceContacts(cm.audienceType, cm.tagFilter, cm.listFilter);
  if(!recipients.length){ showToast('No eligible recipients for this audience'); return; }
  let countA = 0, countB = 0;
  recipients.forEach((contact,i)=>{
    const useB = !!(cm.subjectB && i % 2 === 1);
    const subjectToUse = useB ? cm.subjectB : cm.subject;
    if(useB) countB++; else countA++;
    DATA.emailLog.unshift({
      id: uid(), workflowId: null, workflowName: `Campaign: ${cm.name}`, campaignId: cm.id,
      contactId: contact.id, contactName: contact.name,
      subject: fillTemplate(subjectToUse, contact),
      body: fillTemplate(cm.body, contact),
      abVariant: cm.subjectB ? (useB ? 'B' : 'A') : null,
      triggeredAt: new Date().toISOString()
    });
  });
  cm.status = 'sent';
  cm.recipientCount = recipients.length;
  cm.sentAt = new Date().toISOString();
  cm.abResults = cm.subjectB ? { countA, countB } : null;
  await notifyEvent('campaign_sent', `"${cm.name}" sent to ${recipients.length} contact(s)`, null);
  await saveData(); closeModal(); render();
  showToast(cm.subjectB ? `Sent - ${countA} got Subject A, ${countB} got Subject B` : `Campaign sent to ${recipients.length} contact(s)`);
}
async function scheduleCampaign(id){
  let cm = DATA.campaigns.find(x=>x.id===id);
  const payload = readCampaignFormPayload();
  if(payload){
    if(!payload.name){ showToast('Campaign name is required'); return; }
    if(!cm){
      cm = { id: uid(), dateAdded: todayISO(), status:'draft', recipientCount:0, sentAt:null, ...payload };
      DATA.campaigns.push(cm);
    } else {
      Object.assign(cm, payload);
    }
  }
  if(!cm){ showToast('Campaign not found'); return; }
  const scheduledFor = document.getElementById('cm_scheduledFor') ? document.getElementById('cm_scheduledFor').value : '';
  if(!scheduledFor){ showToast('Pick a date and time first'); return; }
  cm.status = 'scheduled';
  cm.scheduledFor = scheduledFor;
  cm._scheduleReminded = false;
  await saveData(); closeModal(); render();
  showToast("Campaign scheduled - you'll get a reminder when it's time to send");
}
function checkScheduledCampaigns(){
  let changed = false;
  const now = new Date();
  DATA.campaigns.forEach(cm=>{
    if(cm.status==='scheduled' && cm.scheduledFor && new Date(cm.scheduledFor) <= now && !cm._scheduleReminded){
      DATA.reminders.push({
        id: uid(), dateAdded: todayISO(), done:false, contactId:null,
        text: `Campaign "${cm.name}" was scheduled for now, open it and hit Send`,
        dueDate: todayISO(),
      });
      cm._scheduleReminded = true;
      changed = true;
    }
  });
  if(changed) saveData();
}
async function deleteCampaign(id){
  DATA.campaigns = DATA.campaigns.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Campaign deleted');
}

/* ===================== OPT-OUTS (dedicated, visible) ===================== */
function renderOptOutsSection(){
  const rows = DATA.contacts.filter(c=>c.unsubscribed).sort((a,b)=>b.dateAdded.localeCompare(a.dateAdded));
  return `
    <div style="margin-top:28px;">
      <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:4px;">
        <div style="font-size:15px; font-weight:700; color:var(--navy-deep);">Opt-Outs</div>
        <span class="date-pill" style="font-size:11px;">${rows.length} opted out</span>
      </div>
      <p style="font-size:12px; color:var(--slate); margin-bottom:12px;">Everyone who's unsubscribed. Campaigns and workflows automatically skip everyone here, no exceptions.</p>
      <div class="panel">
        <table>
          <thead><tr><th>Contact</th><th>Email</th><th>Type</th><th>Added</th><th></th></tr></thead>
          <tbody>
            ${rows.length ? rows.map(x=>`
              <tr onclick="openEditModal('${x.id}')">
                <td><div class="lead-name">${esc(x.name)}</div><div class="lead-sub">${esc(x.company||'')}</div></td>
                <td class="src">${esc(x.email||'-')}</td>
                <td><span class="badge ${badgeClass(x.type)}">${typeLabel(x.type)}</span></td>
                <td class="mono">${fmtDate(x.dateAdded)}</td>
                <td onclick="event.stopPropagation();"><button class="btn-small" onclick="resubscribeContact('${x.id}')">Resubscribe</button></td>
              </tr>`).join('') : `<tr class="empty-row"><td colspan="5">Nobody's opted out. Good sign.</td></tr>`}
          </tbody>
        </table>
      </div>
    </div>`;
}
async function resubscribeContact(id){
  const c = DATA.contacts.find(x=>x.id===id);
  if(!c) return;
  c.unsubscribed = false;
  await saveData(); render();
  showToast(`${c.name} resubscribed`);
}

/* ===================== EMAIL TEMPLATES (reusable, HTML import, paste code) ===================== */
let emailMarketingTabMode = 'templates';
function setEmailMarketingTabMode(m){ emailMarketingTabMode = m; render(); }
function renderTemplatesView(){
  return `
    <div class="page-head">
      <div><h1>Email Marketing</h1><p>Templates and subscriber lists, one module, both feeding Campaigns and Automations.</p></div>
    </div>
    <div class="feed-toggle">
      <span class="${emailMarketingTabMode==='templates'?'active':''}" onclick="setEmailMarketingTabMode('templates')">Templates</span>
      <span class="${emailMarketingTabMode==='lists'?'active':''}" onclick="setEmailMarketingTabMode('lists')">Lists</span>
    </div>
    ${emailMarketingTabMode==='templates' ? renderTemplatesListSection() : renderEmailListsView()}
  `;
}
function renderTemplatesListSection(){
  const rows = [...DATA.emailTemplates].sort((a,b)=>(b.dateAdded||'').localeCompare(a.dateAdded||''));
  return `
    <div class="date-pill" style="margin-bottom:14px;">${rows.length} template${rows.length===1?'':'s'}</div>
    <div class="panel">
      <table>
        <thead><tr><th>Name</th><th>Subject</th><th>Format</th><th>Updated</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(t=>`
            <tr onclick="openEditTemplate('${t.id}')">
              <td><div class="lead-name">${esc(t.name)}</div></td>
              <td class="src">${esc(t.subject||'-')}</td>
              <td><span class="badge ${t.isHtml?'lead':'customer'}">${t.isHtml?'HTML':'Plain / merge text'}</span></td>
              <td class="mono">${fmtDate(t.dateAdded)}</td>
            </tr>`).join('') : `<tr class="empty-row"><td colspan="4">No templates yet. Import an HTML email or start from scratch.</td></tr>`}
        </tbody>
      </table>
    </div>`;
}
let editingTemplateId = null;
function openNewTemplateModal(){
  editingTemplateId = null;
  document.getElementById('modalPanel').style.maxWidth = '680px';
  document.getElementById('modalTitle').textContent = 'New Email Template';
  document.getElementById('modalBody').innerHTML = templateFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="saveTemplateForm()">Save template</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
  bindMergeTagPopup('tpl_body');
  bindHtmlDropZone('tpl_body','tpl_name');
}
function openEditTemplate(id){
  editingTemplateId = id;
  const t = DATA.emailTemplates.find(x=>x.id===id);
  if(!t) return;
  document.getElementById('modalPanel').style.maxWidth = '680px';
  document.getElementById('modalTitle').textContent = t.name;
  document.getElementById('modalBody').innerHTML = templateFormHTML(t);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-danger" onclick="deleteTemplate('${id}')">Delete</button>
    <div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveTemplateForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
  bindMergeTagPopup('tpl_body');
  bindHtmlDropZone('tpl_body','tpl_name');
}
function templateFormHTML(t){
  t = t || { name:'', subject:'', preheader:'', body:'', isHtml:false };
  return `
    <div class="field-row">
      <div class="field"><label>Template name</label><input id="tpl_name" value="${esc(t.name)}" placeholder="e.g. Favze Insider base template"></div>
      <div class="field"><label>Format</label>
        <select id="tpl_isHtml">
          <option value="0" ${!t.isHtml?'selected':''}>Plain / merge text</option>
          <option value="1" ${t.isHtml?'selected':''}>Raw HTML</option>
        </select>
      </div>
    </div>
    <div class="field"><label>Subject</label><input id="tpl_subject" value="${esc(t.subject)}" placeholder="e.g. Your {{company}} marketing recap"></div>
    <div class="field"><label>Preheader / preview text</label><input id="tpl_preheader" value="${esc(t.preheader)}" placeholder="Shows next to the subject line in the inbox, before the body is opened"></div>
    <div class="field">
      <label>Body</label>
      <div style="display:flex; gap:8px; margin-bottom:8px;">
        <button type="button" class="btn-small" onclick="triggerHtmlImport('tpl_body','tpl_name')">${iconUpload()} Import HTML file</button>
        <span class="rec-hint">or drag an .html file straight onto the box below, or paste code directly.</span>
      </div>
      <textarea id="tpl_body" rows="12" style="font-family:'JetBrains Mono',monospace; font-size:12px; border-style:dashed;" placeholder="Paste your HTML email code here, drop an .html file, or write plain text with merge tags">${esc(t.body)}</textarea>
      ${mergeTagReferenceHTML()}
    </div>
  `;
}
async function saveTemplateForm(){
  const name = document.getElementById('tpl_name').value.trim();
  if(!name){ showToast('Template name is required'); return; }
  const payload = {
    name,
    isHtml: document.getElementById('tpl_isHtml').value==='1',
    subject: document.getElementById('tpl_subject').value.trim(),
    preheader: document.getElementById('tpl_preheader').value.trim(),
    body: document.getElementById('tpl_body').value,
  };
  if(editingTemplateId){
    Object.assign(DATA.emailTemplates.find(x=>x.id===editingTemplateId), payload);
  } else {
    DATA.emailTemplates.push({ id: uid(), dateAdded: todayISO(), ...payload });
  }
  await saveData(); closeModal(); render();
  showToast(editingTemplateId ? 'Template updated' : 'Template saved');
}
async function deleteTemplate(id){
  DATA.emailTemplates = DATA.emailTemplates.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Template deleted');
}
let htmlImportTarget = null;
function triggerHtmlImport(textareaId, nameFieldId){
  htmlImportTarget = { textareaId, nameFieldId };
  document.getElementById('htmlEmailInput').click();
}
async function importHtmlFileToTextarea(file, textareaId, nameFieldId){
  if(!file) return;
  if(!/\.html?$/i.test(file.name)){ showToast('That\'s not an .html file'); return; }
  const text = await file.text();
  const bodyEl = document.getElementById(textareaId);
  if(bodyEl) bodyEl.value = text;
  if(nameFieldId){
    const nameEl = document.getElementById(nameFieldId);
    if(nameEl && !nameEl.value) nameEl.value = file.name.replace(/\.html?$/i,'');
  }
  if(textareaId==='tpl_body'){
    const isHtmlEl = document.getElementById('tpl_isHtml');
    if(isHtmlEl) isHtmlEl.value = '1';
  }
  showToast(`Imported ${file.name}`);
}
async function handleHTMLImport(input){
  const file = input.files[0];
  if(!file || !htmlImportTarget) return;
  await importHtmlFileToTextarea(file, htmlImportTarget.textareaId, htmlImportTarget.nameFieldId);
  input.value = '';
  htmlImportTarget = null;
}
function bindHtmlDropZone(textareaId, nameFieldId){
  const el = document.getElementById(textareaId);
  if(!el || el.dataset.dropBound) return;
  el.dataset.dropBound = '1';
  el.addEventListener('dragover', (e)=>{ e.preventDefault(); e.stopPropagation(); el.style.borderColor='var(--teal)'; el.style.background='var(--teal-soft)'; });
  el.addEventListener('dragleave', (e)=>{ e.preventDefault(); e.stopPropagation(); el.style.borderColor=''; el.style.background=''; });
  el.addEventListener('drop', async (e)=>{
    e.preventDefault(); e.stopPropagation();
    el.style.borderColor=''; el.style.background='';
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if(!file) return;
    await importHtmlFileToTextarea(file, textareaId, nameFieldId);
  });
}
function applyTemplateTo(prefix, templateId){
  const t = DATA.emailTemplates.find(x=>x.id===templateId);
  if(!t) return;
  const subjectEl = document.getElementById(prefix+'_subject');
  const bodyEl = document.getElementById(prefix+'_body');
  if(subjectEl) subjectEl.value = t.subject;
  if(bodyEl) bodyEl.value = t.body;
  showToast(`Applied "${t.name}"`);
}

function renderEmailLogView(){
  const rows = [...DATA.emailLog];
  return `
    <div class="page-head">
      <div><h1>Email Log</h1><p>Every email a workflow has triggered. This is a simulated send log - connect a real email provider to actually deliver these.</p></div>
      <div class="date-pill">${rows.length} triggered</div>
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>Contact</th><th>Source</th><th>Subject</th><th>Triggered</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(l=>`
            <tr onclick="openEmailLogDetail('${l.id}')">
              <td><div class="lead-name">${esc(l.contactName)}</div></td>
              <td class="src">${esc(l.workflowName)}</td>
              <td class="src">${esc(l.subject)}</td>
              <td class="mono">${new Date(l.triggeredAt).toLocaleString('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'})}</td>
            </tr>`).join('') : `<tr class="empty-row"><td colspan="4">No emails triggered yet.</td></tr>`}
        </tbody>
      </table>
    </div>`;
}
function openEmailLogDetail(id){
  const l = DATA.emailLog.find(x=>x.id===id);
  if(!l) return;
  document.getElementById('modalTitle').textContent = 'Triggered email';
  document.getElementById('modalBody').innerHTML = `
    <div class="field"><label>To</label><input value="${esc(l.contactName)}" readonly></div>
    <div class="field"><label>Subject</label><input value="${esc(l.subject)}" readonly></div>
    <div class="field"><label>Body</label><textarea rows="8" readonly>${esc(l.body)}</textarea></div>
    <div class="field"><label>Triggered by</label><input value="${esc(l.workflowName)}" readonly></div>
  `;
  document.getElementById('modalFoot').innerHTML = `<div></div><button class="btn-ghost" onclick="closeModal()">Close</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}

/* ===================== ANNOUNCEMENTS (global + department) ===================== */
function announcementVisibleTo(a, user){
  if(!user) return a.scope==='all';
  return a.scope==='all' || a.scope===user.department;
}
function unreadAnnouncementsForCurrentUser(){
  const {userId} = currentScope();
  const user = DATA.users.find(u=>u.id===userId);
  if(!user) return 0;
  return DATA.announcements.filter(a=> announcementVisibleTo(a,user) && !(a.readBy||[]).includes(userId)).length;
}
function markAnnouncementsSeenByCurrentUser(list){
  const {userId} = currentScope();
  if(!userId) return;
  let changed = false;
  list.forEach(a=>{
    a.readBy = a.readBy || [];
    if(!a.readBy.includes(userId)){ a.readBy.push(userId); changed = true; }
  });
  if(changed) saveData();
}
function renderAnnouncementsView(){
  const {userId} = currentScope();
  const user = DATA.users.find(u=>u.id===userId);
  const visible = DATA.announcements.filter(a=> announcementVisibleTo(a, user));
  markAnnouncementsSeenByCurrentUser(visible);
  const sorted = [...visible].sort((a,b)=> (Number(b.pinned)-Number(a.pinned)) || (b.dateAdded||'').localeCompare(a.dateAdded||''));
  const canPost = currentScope().canManageSettings;
  return `
    <div class="page-head">
      <div><h1>Announcements</h1><p>Company-wide or department-specific updates, newest first. Pinned items always stay on top.</p></div>
      ${canPost ? `<button class="btn-new" onclick="openNewAnnouncementModal()" style="position:static;">${iconPlus()} <span>New Announcement</span></button>` : ''}
    </div>
    ${sorted.length ? sorted.map(a=>{
      const author = DATA.users.find(u=>u.id===a.authorId);
      const seenCount = (a.readBy||[]).length;
      const totalAudience = DATA.users.filter(u=>announcementVisibleTo(a,u)).length;
      return `
      <div class="feed-card">
        <div class="feed-head">
          <div class="feed-avatar" style="background:${avatarColor(a.authorId||a.id)};">${esc(initials(author?author.name:'FZ'))}</div>
          <div>
            <div class="feed-who">${esc(author?author.name:'Team')}</div>
            <div class="feed-meta">
              ${a.pinned?`<span class="badge hot">Pinned</span> `:''}
              <span class="badge ${a.scope==='all'?'customer':'lead'}">${a.scope==='all'?'Everyone':esc(a.scope)}</span>
              &nbsp;${fmtDate(a.dateAdded)}
            </div>
          </div>
        </div>
        <div class="feed-title" style="cursor:default;">${esc(a.title)}</div>
        <div class="feed-desc">${esc(a.body)}</div>
        <div class="feed-actions">
          <span class="feed-action-btn" style="cursor:default;">${iconCheck()} Seen by ${seenCount}/${totalAudience}</span>
          ${canPost ? `
          <button class="feed-action-btn" onclick="toggleAnnouncementPin('${a.id}')">${iconGear()} ${a.pinned?'Unpin':'Pin'}</button>
          <button class="feed-action-btn" onclick="openEditAnnouncement('${a.id}')">${iconGear()} Edit</button>
          <button class="feed-action-btn" onclick="deleteAnnouncement('${a.id}')">${iconX()} Delete</button>` : ''}
        </div>
      </div>`;
    }).join('') : `<div class="feed-empty">No announcements yet.${canPost?' Post one to get started.':''}</div>`}
  `;
}
let editingAnnouncementId = null;
function openNewAnnouncementModal(){
  editingAnnouncementId = null;
  document.getElementById('modalTitle').textContent = 'New Announcement';
  document.getElementById('modalBody').innerHTML = announcementFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="saveAnnouncementForm()">Post announcement</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function openEditAnnouncement(id){
  editingAnnouncementId = id;
  const a = DATA.announcements.find(x=>x.id===id);
  if(!a) return;
  document.getElementById('modalTitle').textContent = 'Edit Announcement';
  document.getElementById('modalBody').innerHTML = announcementFormHTML(a);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-danger" onclick="deleteAnnouncement('${id}')">Delete</button>
    <div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveAnnouncementForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function announcementFormHTML(a){
  a = a || {title:'', body:'', scope:'all', pinned:false};
  return `
    <div class="field"><label>Title</label><input id="an_title" value="${esc(a.title)}" placeholder="e.g. Office closed July 4th"></div>
    <div class="field"><label>Message</label><textarea id="an_body" rows="5" placeholder="What's the update">${esc(a.body)}</textarea></div>
    <div class="field"><label>Audience</label>
      <select id="an_scope">
        <option value="all" ${a.scope==='all'?'selected':''}>Everyone (global)</option>
        ${DEPARTMENT_OPTIONS.map(d=>`<option value="${esc(d)}" ${a.scope===d?'selected':''}>${esc(d)} department only</option>`).join('')}
      </select>
    </div>
    <div class="field" style="display:flex; align-items:center; gap:8px;">
      <input type="checkbox" id="an_pinned" ${a.pinned?'checked':''} style="width:auto;">
      <label style="margin:0; text-transform:none; font-size:13px; font-weight:500; color:var(--ink);">Pin to top</label>
    </div>
  `;
}
async function saveAnnouncementForm(){
  const title = document.getElementById('an_title').value.trim();
  const body = document.getElementById('an_body').value.trim();
  if(!title || !body){ showToast('Title and message are both required'); return; }
  const payload = {
    title, body,
    scope: document.getElementById('an_scope').value,
    pinned: document.getElementById('an_pinned').checked,
  };
  if(editingAnnouncementId){
    Object.assign(DATA.announcements.find(x=>x.id===editingAnnouncementId), payload);
  } else {
    const {userId} = currentScope();
    const a = { id: uid(), dateAdded: todayISO(), authorId: userId, readBy: userId?[userId]:[], ...payload };
    DATA.announcements.unshift(a);
    await notifyEvent('announcement_posted', `${payload.scope==='all'?'New announcement':'New '+payload.scope+' announcement'}: ${title}`, null);
  }
  await saveData(); closeModal(); render();
  showToast(editingAnnouncementId ? 'Announcement updated' : 'Announcement posted');
}
async function deleteAnnouncement(id){
  DATA.announcements = DATA.announcements.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Announcement deleted');
}
async function toggleAnnouncementPin(id){
  const a = DATA.announcements.find(x=>x.id===id);
  if(!a) return;
  a.pinned = !a.pinned;
  await saveData(); render();
}

/* ===================== CANDIDATES: free, local resume screening ===================== */
/* No LLM, no API calls, no data ever leaves the browser. Mirrors the standalone
   spaCy/scikit-learn/PyPDF2 Python screener, reimplemented in plain JS so it can
   run entirely client-side (Python libraries can't run in a browser). PDF text
   extraction uses pdf.js (loaded via CDN in <head>). */

const RESUME_CURRENT_YEAR = new Date().getFullYear();
const RESUME_STOPWORDS = new Set(['a','an','the','and','or','but','of','in','on','at','to','for','with','by','from','is','are','was','were','be','been','being','it','this','that','as','i','we','you','they','he','she','their','our','your','my','will','can','have','has','had','not']);

const RESUME_SKILL_SYNONYMS = {
  "python":       ["python", "django", "flask", "fastapi", "pyspark", "pandas", "numpy"],
  "javascript":   ["javascript", "js", "typescript", "node.js", "nodejs", "react", "react.js", "vue", "vue.js", "angular", "next.js", "nextjs"],
  "sql":          ["sql", "postgres", "postgresql", "mysql", "sql server", "mssql", "sqlite", "t-sql", "pl/sql"],
  "nosql":        ["nosql", "mongodb", "dynamodb", "cassandra", "redis", "firestore"],
  "java":         ["java", "spring", "spring boot", "hibernate", "j2ee"],
  "c#":           ["c#", "csharp", ".net", "dotnet", "asp.net"],
  "cloud/aws":    ["aws", "amazon web services", "ec2", "s3", "lambda", "cloudformation"],
  "cloud/azure":  ["azure", "microsoft azure"],
  "cloud/gcp":    ["gcp", "google cloud", "google cloud platform"],
  "docker":       ["docker", "containerization", "containerisation"],
  "kubernetes":   ["kubernetes", "k8s"],
  "machine learning": ["machine learning", "scikit-learn", "sklearn", "tensorflow", "pytorch", "keras", "deep learning", "natural language processing"],
  "data analysis": ["data analysis", "data analytics", "excel", "power bi", "tableau", "looker", "data visualization", "data visualisation"],
  "project management": ["project management", "pmp", "scrum", "agile", "kanban", "jira"],
  "seo": ["seo", "search engine optimization", "search engine optimisation"],
  "email marketing": ["email marketing", "hubspot", "mailchimp", "klaviyo", "zoho campaigns"],
  "google analytics": ["google analytics", "ga4", "gtm", "google tag manager"],
  "content marketing": ["content marketing", "copywriting", "content strategy"],
  "social media marketing": ["social media marketing", "social media management", "facebook ads", "meta ads", "instagram marketing"],
  "paid advertising": ["paid advertising", "ppc", "google ads", "paid search", "paid social"],
  "crm": ["crm", "salesforce", "hubspot crm", "zoho crm"],
  "communication": ["communication skills", "public speaking", "presentation skills"],
  "leadership": ["leadership", "team lead", "people management", "managed a team", "mentoring"],
};
const RESUME_ALIAS_TO_CANONICAL = {};
const RESUME_ALIAS_LIST = [];
Object.entries(RESUME_SKILL_SYNONYMS).forEach(([canonical, aliases])=>{
  aliases.forEach(alias=>{
    RESUME_ALIAS_TO_CANONICAL[alias.toLowerCase()] = canonical;
    RESUME_ALIAS_LIST.push(alias.toLowerCase());
  });
});
RESUME_ALIAS_LIST.sort((a,b)=>b.length-a.length);

const SENIORITY_LEVELS = {
  "intern":0, "internship":0, "trainee":0,
  "junior":1, "entry-level":1, "entry level":1, "associate":1,
  "mid-level":2, "mid level":2,
  "senior":3, "sr":3,
  "lead":4, "principal":4, "staff":4,
  "manager":5, "head":5, "director":6, "vp":7, "vice president":7,
};
const DEFAULT_SENIORITY_RANK = 2;
const NEGATION_CUES = new Set(["no","not","never","none","zero","without","lack","lacking","lacks","excluding","absent","nor","neither"]);
const NEGATION_WINDOW = 6;
const STUFFING_MIN_RAW_COUNT = 6;
const STUFFING_MIN_RATIO = 0.012;
const STUFFING_GENERAL_RATIO = 0.06;
const RESUME_WEIGHT_TFIDF = 0.35;
const RESUME_WEIGHT_SKILLS = 0.65;
const RESUME_MAX_SKILL_WEIGHT = 1.5 * 1.2;
const SENIORITY_GAP_THRESHOLD = 2;
const SENIORITY_GAP_PENALTY = 0.70;

function escapeRegex(s){ return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function seniorityRankLabel(rank){
  const entry = Object.entries(SENIORITY_LEVELS).find(([k,v])=>v===rank);
  return entry ? entry[0] : 'mid-level';
}
function detectSeniorityRank(text){
  const lower = text.toLowerCase();
  let found = [];
  Object.entries(SENIORITY_LEVELS).forEach(([kw,rank])=>{
    if(new RegExp('\\b'+escapeRegex(kw)+'\\b').test(lower)) found.push(rank);
  });
  return found.length ? Math.max(...found) : null;
}
function getRequiredSeniorityRank(jdText){
  const r = detectSeniorityRank(jdText);
  return r===null ? DEFAULT_SENIORITY_RANK : r;
}
function recencyWeight(year){
  if(year===null || year===undefined) return 1.0;
  const yearsAgo = RESUME_CURRENT_YEAR - year;
  if(yearsAgo<=3) return 1.5;
  if(yearsAgo<=7) return 1.0;
  return 0.6;
}
function seniorityWeightForBlock(blockRank, requiredRank){
  if(blockRank===null || blockRank===undefined) return 1.0;
  if(blockRank>=requiredRank) return 1.2;
  return (requiredRank - blockRank)===1 ? 1.0 : 0.5;
}
const RESUME_YEAR_RE = /\b(19[5-9]\d|20[0-3]\d)\b/g;
const RESUME_PRESENT_RE = /\b(present|current|ongoing|now)\b/i;
function splitIntoDatedBlocks(text){
  const lines = text.split('\n').filter(l=>l.trim());
  const blocks = [];
  let cur = {text:'', year:null, seniorityRank:null};
  lines.forEach(line=>{
    const years = (line.match(RESUME_YEAR_RE)||[]).map(y=>parseInt(y,10));
    const hasPresent = RESUME_PRESENT_RE.test(line);
    const lineSeniority = detectSeniorityRank(line);
    const startsNew = years.length>0 || hasPresent;
    if(startsNew && cur.text.trim()){ blocks.push(cur); cur = {text:'', year:null, seniorityRank:null}; }
    if(years.length) cur.year = Math.max(...years);
    if(hasPresent) cur.year = RESUME_CURRENT_YEAR;
    if(lineSeniority!==null) cur.seniorityRank = lineSeniority;
    cur.text += line + '\n';
  });
  if(cur.text.trim()) blocks.push(cur);
  if(!blocks.length) blocks.push({text, year:null, seniorityRank:null});
  return blocks;
}
function isNegatedContext(sentence, matchIndex){
  const before = sentence.slice(0, matchIndex).trim();
  if(!before) return false;
  const words = before.split(/\s+/).slice(-NEGATION_WINDOW);
  return words.some(w=> NEGATION_CUES.has(w.toLowerCase().replace(/[^\w']/g,'')) || /n't$/.test(w.toLowerCase()));
}
function extractRequiredSkills(jdText){
  const found = new Set();
  const lower = jdText.toLowerCase();
  RESUME_ALIAS_LIST.forEach(alias=>{
    if(new RegExp('\\b'+escapeRegex(alias)+'\\b').test(lower)) found.add(RESUME_ALIAS_TO_CANONICAL[alias]);
  });
  return found;
}
function scoreResumeSkills(resumeText, requiredRank){
  const blocks = splitIntoDatedBlocks(resumeText);
  const skillBestWeight = {};
  const skillRawCount = {};
  const negatedOnly = new Set();
  const positivelySeen = new Set();

  blocks.forEach(block=>{
    const blockText = block.text;
    if(!blockText.trim()) return;
    const combinedWeight = recencyWeight(block.year) * seniorityWeightForBlock(block.seniorityRank, requiredRank);
    const sentences = blockText.split(/[.\n!?]+/);
    sentences.forEach(sentence=>{
      RESUME_ALIAS_LIST.forEach(alias=>{
        const re = new RegExp('\\b'+escapeRegex(alias)+'\\b', 'gi');
        let m;
        while((m = re.exec(sentence))){
          const canonical = RESUME_ALIAS_TO_CANONICAL[alias];
          skillRawCount[canonical] = (skillRawCount[canonical]||0) + 1;
          if(isNegatedContext(sentence, m.index)){
            if(!positivelySeen.has(canonical)) negatedOnly.add(canonical);
          } else {
            positivelySeen.add(canonical);
            negatedOnly.delete(canonical);
            skillBestWeight[canonical] = Math.max(skillBestWeight[canonical]||0, combinedWeight);
          }
        }
      });
    });
  });
  return {skillBestWeight, skillRawCount, negatedOnly};
}
function detectKeywordStuffing(resumeText, skillRawCount){
  const words = (resumeText.toLowerCase().match(/[a-z']+/g) || []).filter(w=>!RESUME_STOPWORDS.has(w) && w.length>2);
  const total = words.length || 1;
  for(const canonical in skillRawCount){
    const count = skillRawCount[canonical];
    if(count>=STUFFING_MIN_RAW_COUNT && (count/total)>=STUFFING_MIN_RATIO) return true;
  }
  const freq = {};
  words.forEach(w=> freq[w]=(freq[w]||0)+1);
  let maxCount = 0;
  Object.values(freq).forEach(c=>{ if(c>maxCount) maxCount=c; });
  return maxCount>=6 && (maxCount/total)>=STUFFING_GENERAL_RATIO;
}
function resumeTokenize(text){
  return (text.toLowerCase().match(/[a-z']+/g) || []).filter(w=>!RESUME_STOPWORDS.has(w) && w.length>1);
}
function tfidfSimilarity(jdText, resumeText){
  const docs = [resumeTokenize(jdText), resumeTokenize(resumeText)];
  const vocab = new Set();
  docs.forEach(d=>d.forEach(w=>vocab.add(w)));
  const vocabArr = Array.from(vocab);
  if(!vocabArr.length) return 0;
  const tf = docs.map(doc=>{
    const counts = {};
    doc.forEach(w=> counts[w]=(counts[w]||0)+1);
    const vec = {};
    vocabArr.forEach(w=> vec[w] = doc.length ? (counts[w]||0)/doc.length : 0);
    return vec;
  });
  const idf = {};
  vocabArr.forEach(w=>{
    const df = docs.filter(d=>d.includes(w)).length;
    idf[w] = Math.log((1+docs.length)/(1+df)) + 1;
  });
  const tfidfVecs = tf.map(vec=>{
    const out = {};
    vocabArr.forEach(w=> out[w] = vec[w]*idf[w]);
    return out;
  });
  let dot=0, magA=0, magB=0;
  vocabArr.forEach(w=>{
    const a = tfidfVecs[0][w]||0, b = tfidfVecs[1][w]||0;
    dot += a*b; magA += a*a; magB += b*b;
  });
  if(magA===0 || magB===0) return 0;
  return dot/(Math.sqrt(magA)*Math.sqrt(magB));
}
function guessCandidateName(resumeText, filename){
  const firstLines = resumeText.split('\n').map(l=>l.trim()).filter(Boolean).slice(0,6);
  for(const line of firstLines){
    const words = line.split(/\s+/);
    if(words.length>=2 && words.length<=4 && words.every(w=>/^[A-Z][a-zA-Z'.-]*$/.test(w)) && line.length<40){
      return line;
    }
  }
  return filename.replace(/\.pdf$/i,'').replace(/[_-]+/g,' ').replace(/\b\w/g, c=>c.toUpperCase());
}
function scoreCandidateAgainstRole(jdText, resumeText, requiredSkillsSet, requiredRank, filename){
  const tfidfScore = tfidfSimilarity(jdText, resumeText);
  const {skillBestWeight, skillRawCount, negatedOnly} = scoreResumeSkills(resumeText, requiredRank);

  let matchedSkills=[], missingSkills=[], skillScore=0;
  if(requiredSkillsSet.size){
    matchedSkills = Array.from(requiredSkillsSet).filter(s=> skillBestWeight[s]!==undefined);
    missingSkills = Array.from(requiredSkillsSet).filter(s=> skillBestWeight[s]===undefined);
    const weightSum = matchedSkills.reduce((s,sk)=> s+skillBestWeight[sk], 0);
    skillScore = Math.min(1, weightSum / (requiredSkillsSet.size * RESUME_MAX_SKILL_WEIGHT));
  }

  const negatedRequired = Array.from(requiredSkillsSet).filter(s=> negatedOnly.has(s));
  const negationPenalty = 0.05 * negatedRequired.length;

  let rawScore = (RESUME_WEIGHT_TFIDF*tfidfScore) + (RESUME_WEIGHT_SKILLS*skillScore) - negationPenalty;
  rawScore = Math.max(0, Math.min(1, rawScore));

  let candidateMaxRank = null;
  splitIntoDatedBlocks(resumeText).forEach(b=>{
    if(b.seniorityRank!==null && b.seniorityRank!==undefined){
      candidateMaxRank = candidateMaxRank===null ? b.seniorityRank : Math.max(candidateMaxRank, b.seniorityRank);
    }
  });
  let seniorityGapFlag = false;
  if(candidateMaxRank!==null && (requiredRank - candidateMaxRank)>=SENIORITY_GAP_THRESHOLD){
    rawScore *= SENIORITY_GAP_PENALTY;
    seniorityGapFlag = true;
  }

  return {
    name: guessCandidateName(resumeText, filename),
    filename,
    scorePct: Math.round(rawScore*1000)/10,
    tfidfPct: Math.round(tfidfScore*1000)/10,
    skillPct: Math.round(skillScore*1000)/10,
    matchedSkills, missingSkills,
    negatedSkills: negatedRequired,
    stuffingFlag: detectKeywordStuffing(resumeText, skillRawCount),
    seniorityGapFlag,
  };
}
async function extractPdfText(file){
  if(typeof pdfjsLib==='undefined'){ throw new Error('PDF reader library did not load (check your internet connection)'); }
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({data: arrayBuffer}).promise;
  let text = '';
  for(let i=1;i<=pdf.numPages;i++){
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map(it=>it.str).join(' ') + '\n';
  }
  return text;
}

/* ---- UI ---- */
let candidatesViewMode = 'leaderboard';
let selectedRoleId = null;
function setCandidatesViewMode(m){ candidatesViewMode = m; render(); }
function setSelectedRole(id){ selectedRoleId = id; render(); }
function renderCandidatesView(){
  return `
    <div class="page-head">
      <div><h1>Candidates</h1><p>Free, local resume screening - no AI API calls, nothing leaves this browser. Negation detection, recency weighting, seniority matching, synonym expansion, and keyword-stuffing flags, all computed client-side.</p></div>
      <div class="date-pill">${DATA.candidates.length} candidate${DATA.candidates.length===1?'':'s'} scored</div>
    </div>
    <div class="feed-toggle">
      <span class="${candidatesViewMode==='leaderboard'?'active':''}" onclick="setCandidatesViewMode('leaderboard')">Leaderboard</span>
      <span class="${candidatesViewMode==='roles'?'active':''}" onclick="setCandidatesViewMode('roles')">Open Roles</span>
    </div>
    ${candidatesViewMode==='leaderboard' ? renderCandidateLeaderboard() : renderOpenRolesList()}
  `;
}
function renderOpenRolesList(){
  const roles = [...DATA.openRoles].sort((a,b)=>(b.dateAdded||'').localeCompare(a.dateAdded||''));
  return `
    <div class="panel">
      <table>
        <thead><tr><th>Role</th><th>Required Skills Detected</th><th>Seniority</th><th>Candidates</th><th></th></tr></thead>
        <tbody>
          ${roles.length ? roles.map(r=>{
            const count = DATA.candidates.filter(c=>c.roleId===r.id).length;
            return `
            <tr onclick="openEditRole('${r.id}')">
              <td><div class="lead-name">${esc(r.title)}</div></td>
              <td class="src">${(r.requiredSkills||[]).length ? esc(r.requiredSkills.join(', ')) : '(none detected - add more to the job description)'}</td>
              <td class="src">${esc(seniorityRankLabel(r.requiredRank))}</td>
              <td class="mono">${count}</td>
              <td onclick="event.stopPropagation();"><button class="btn-small" onclick="deleteOpenRole('${r.id}')">Delete</button></td>
            </tr>`;
          }).join('') : `<tr class="empty-row"><td colspan="5">No open roles yet. Add one to start screening resumes against it.</td></tr>`}
        </tbody>
      </table>
    </div>`;
}
function renderCandidateLeaderboard(){
  const roles = DATA.openRoles;
  if(!roles.length){
    return `<div class="feed-empty">No open roles yet. Switch to "Open Roles" above and paste in a job description first.</div>`;
  }
  const role = DATA.openRoles.find(r=>r.id===selectedRoleId) || roles[0];
  selectedRoleId = role.id;
  const rows = [...DATA.candidates].filter(c=>c.roleId===role.id).sort((a,b)=>b.scorePct-a.scorePct);
  return `
    <div class="view-chips">
      <select onchange="setSelectedRole(this.value)" style="padding:8px 12px; border-radius:99px; border:1px solid var(--line); font-size:12px; font-weight:700;">
        ${roles.map(r=>`<option value="${r.id}" ${r.id===role.id?'selected':''}>${esc(r.title)}</option>`).join('')}
      </select>
      <button class="btn-small" onclick="document.getElementById('candidateUploadInput').click()">${iconUpload()} Upload Resumes (PDF)</button>
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>#</th><th>Candidate</th><th>Overall Match</th><th>Keyword Overlap</th><th>Weighted Skill Match</th><th>Flags</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map((c,i)=>`
            <tr onclick="openCandidateDetail('${c.id}')">
              <td class="mono">${i+1}</td>
              <td><div class="lead-name">${esc(c.name)}</div><div class="lead-sub">${esc(c.filename)}</div></td>
              <td class="mono" style="font-weight:700;">${c.scorePct}%</td>
              <td class="mono">${c.tfidfPct}%</td>
              <td class="mono">${c.skillPct}%</td>
              <td>${c.stuffingFlag?'<span class="badge hot">⚠️ Stuffing</span> ':''}${c.seniorityGapFlag?'<span class="badge past_customer">⚠️ Seniority Gap</span>':''}</td>
            </tr>`).join('') : `<tr class="empty-row"><td colspan="6">No candidates scored against this role yet. Click "Upload Resumes" to build the leaderboard.</td></tr>`}
        </tbody>
      </table>
    </div>`;
}
function openCandidateDetail(id){
  const c = DATA.candidates.find(x=>x.id===id);
  if(!c) return;
  document.getElementById('modalTitle').textContent = c.name;
  document.getElementById('modalBody').innerHTML = `
    <div class="field-row">
      <div class="field"><label>Overall Match</label><input value="${c.scorePct}%" readonly></div>
      <div class="field"><label>File</label><input value="${esc(c.filename)}" readonly></div>
    </div>
    <div class="field"><label>Matched Skills</label><textarea rows="2" readonly>${esc(c.matchedSkills.join(', ')||'(none)')}</textarea></div>
    <div class="field"><label>Missing Skills</label><textarea rows="2" readonly>${esc(c.missingSkills.join(', ')||'(none)')}</textarea></div>
    ${c.negatedSkills.length ? `<div class="field"><label>Explicitly NOT held (negated in resume)</label><textarea rows="2" readonly>${esc(c.negatedSkills.join(', '))}</textarea></div>` : ''}
    ${c.stuffingFlag ? `<p style="font-size:12px; color:var(--red-text); font-weight:700;">⚠️ Keyword stuffing flagged - a term repeats unnaturally often. Score kept, worth a human look.</p>` : ''}
    ${c.seniorityGapFlag ? `<p style="font-size:12px; color:var(--amber-text); font-weight:700;">⚠️ Seniority gap - matching skills mostly come from a level below what this role asks for.</p>` : ''}
  `;
  document.getElementById('modalFoot').innerHTML = `<button class="btn-danger" onclick="deleteCandidate('${id}')">Delete</button><button class="btn-ghost" onclick="closeModal()">Close</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
async function deleteCandidate(id){
  DATA.candidates = DATA.candidates.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Candidate removed');
}
let editingRoleFormId = null;
function openNewRoleModal(){
  editingRoleFormId = null;
  document.getElementById('modalPanel').style.maxWidth = '620px';
  document.getElementById('modalTitle').textContent = 'New Open Role';
  document.getElementById('modalBody').innerHTML = roleFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="saveRoleFormForCandidates()">Save role</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function openEditRole(id){
  editingRoleFormId = id;
  const r = DATA.openRoles.find(x=>x.id===id);
  if(!r) return;
  document.getElementById('modalPanel').style.maxWidth = '620px';
  document.getElementById('modalTitle').textContent = r.title;
  document.getElementById('modalBody').innerHTML = roleFormHTML(r);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-danger" onclick="deleteOpenRole('${id}')">Delete</button>
    <div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveRoleFormForCandidates()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function roleFormHTML(r){
  r = r || {title:'', jdText:''};
  return `
    <div class="field"><label>Role title</label><input id="role_title" value="${esc(r.title)}" placeholder="e.g. Senior Email Marketing Specialist"></div>
    <div class="field"><label>Job description</label><textarea id="role_jd" rows="10" placeholder="Paste the full job posting, including seniority (Senior/Lead/Junior/Intern) and required skills">${esc(r.jdText)}</textarea></div>
    <p style="font-size:11px; color:var(--slate);">Skills are detected from a built-in taxonomy (Python/Django/Flask, SQL/Postgres/MySQL, React/Vue, HubSpot, SEO, and more). Scoring runs entirely in this browser, nothing is sent anywhere.</p>
  `;
}
async function saveRoleFormForCandidates(){
  const title = document.getElementById('role_title').value.trim();
  const jdText = document.getElementById('role_jd').value.trim();
  if(!title || !jdText){ showToast('Title and job description are both required'); return; }
  const requiredSkills = Array.from(extractRequiredSkills(jdText));
  const requiredRank = getRequiredSeniorityRank(jdText);
  if(editingRoleFormId){
    Object.assign(DATA.openRoles.find(x=>x.id===editingRoleFormId), {title, jdText, requiredSkills, requiredRank});
  } else {
    const r = { id: uid(), title, jdText, requiredSkills, requiredRank, dateAdded: todayISO() };
    DATA.openRoles.push(r);
    selectedRoleId = r.id;
  }
  await saveData(); closeModal(); render();
  showToast(editingRoleFormId ? 'Role updated' : 'Role added');
}
async function deleteOpenRole(id){
  DATA.openRoles = DATA.openRoles.filter(x=>x.id!==id);
  DATA.candidates = DATA.candidates.filter(c=>c.roleId!==id);
  if(selectedRoleId===id) selectedRoleId = null;
  await saveData(); closeModal(); render();
  showToast('Role deleted');
}
async function handleCandidateUpload(input){
  const files = Array.from(input.files||[]);
  if(!files.length) return;
  const role = DATA.openRoles.find(r=>r.id===selectedRoleId) || DATA.openRoles[0];
  if(!role){ showToast('Add an open role first'); input.value=''; return; }
  showToast(`Scoring ${files.length} resume(s)...`);
  const requiredSkillsSet = new Set(role.requiredSkills||[]);
  let scored = 0;
  for(const file of files){
    try{
      const text = await extractPdfText(file);
      if(!text.trim()) continue;
      const result = scoreCandidateAgainstRole(role.jdText, text, requiredSkillsSet, role.requiredRank, file.name);
      DATA.candidates.push({ id: uid(), roleId: role.id, dateAdded: todayISO(), ...result });
      scored++;
    }catch(err){
      console.error('Resume scoring failed', file.name, err);
      showToast(`Could not read ${file.name}`);
    }
  }
  await saveData();
  input.value = '';
  render();
  showToast(`Scored ${scored} resume(s)`);
}

/* ===================== DEALS (Kanban pipeline) ===================== */
/* ===================== COMPANIES (the parent business record) ===================== */
/* ===================== EMPLOYEE DIRECTORY + CELEBRATIONS ===================== */
function daysUntilAnnual(dateStr){
  if(!dateStr) return null;
  const today = new Date(todayISO()+'T00:00:00');
  const [,, mm, dd] = dateStr.match(/(\d{4})-(\d{2})-(\d{2})/) || [];
  if(!mm) return null;
  let next = new Date(today.getFullYear()+'-'+mm+'-'+dd+'T00:00:00');
  if(next < today){ next = new Date((today.getFullYear()+1)+'-'+mm+'-'+dd+'T00:00:00'); }
  return Math.round((next - today) / 86400000);
}
function yearsSince(dateStr){
  if(!dateStr) return null;
  const start = new Date(dateStr+'T00:00:00');
  const today = new Date(todayISO()+'T00:00:00');
  let years = today.getFullYear() - start.getFullYear();
  const hadAnniversaryYet = (today.getMonth() > start.getMonth()) || (today.getMonth()===start.getMonth() && today.getDate()>=start.getDate());
  if(!hadAnniversaryYet) years--;
  return years;
}
let teamViewMode = 'directory';
function setTeamViewMode(m){ teamViewMode = m; render(); }
function renderTeamView(){
  return `
    <div class="page-head">
      <div><h1>Team</h1><p>Directory info, celebrations, and the reporting-line org chart, all in one place.</p></div>
      <div class="date-pill">${DATA.users.length} team member${DATA.users.length===1?'':'s'}</div>
    </div>
    <div class="feed-toggle">
      <span class="${teamViewMode==='directory'?'active':''}" onclick="setTeamViewMode('directory')">Directory</span>
      <span class="${teamViewMode==='orgchart'?'active':''}" onclick="setTeamViewMode('orgchart')">Org Chart</span>
    </div>
    ${teamViewMode==='directory' ? renderTeamDirectory() : renderTeamOrgChart()}
  `;
}
function renderTeamDirectory(){
  const users = [...DATA.users].sort((a,b)=>a.name.localeCompare(b.name));
  const celebrations = [];
  users.forEach(u=>{
    const bDays = daysUntilAnnual(u.birthday);
    if(bDays!==null) celebrations.push({name:u.name, avatar:u.avatarDataUrl, type:'Birthday', days:bDays, detail:'', badge:'past_customer'});
    const hDays = daysUntilAnnual(u.hireDate);
    if(hDays!==null){ const yrs = yearsSince(u.hireDate)+1; celebrations.push({name:u.name, avatar:u.avatarDataUrl, type:'Work Anniversary', days:hDays, detail:`${yrs} year${yrs===1?'':'s'}`, badge:'lead'}); }
  });
  DATA.companies.forEach(co=>{
    const cDays = daysUntilAnnual(co.contract.clientSince);
    if(cDays!==null){
      const yrs = yearsSince(co.contract.clientSince)+1;
      celebrations.push({name:co.name, avatar:null, type:'Client Anniversary', days:cDays, detail:`${yrs} year${yrs===1?'':'s'} as a client${yrs>=1?' - worth a testimonial ask':''}`, badge:'customer', companyId:co.id});
    }
  });
  celebrations.sort((a,b)=>a.days-b.days);
  const upcoming = celebrations.filter(c=>c.days<=60).slice(0,10);
  return `
    <div class="panel" style="padding:18px 22px; margin-bottom:20px;">
      <div style="font-size:12px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:12px;">Upcoming Celebrations (next 60 days)</div>
      ${upcoming.length ? upcoming.map(c=>`
        <div style="display:flex; justify-content:space-between; align-items:center; padding:9px 0; border-bottom:1px solid var(--line); ${c.companyId?'cursor:pointer;':''}" ${c.companyId?`onclick="openEditCompany('${c.companyId}')"`:''}>
          <div style="display:flex; align-items:center; gap:10px;">
            <div style="width:30px; height:30px; border-radius:50%; overflow:hidden; background:var(--teal-solid); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
              ${(c.avatar && isSafeDataUrl(c.avatar)) ? `<img src="${c.avatar}" style="width:100%; height:100%; object-fit:cover;">` : `<span style="color:#fff; font-weight:700; font-size:11px;">${esc(initials(c.name))}</span>`}
            </div>
            <div><b style="font-size:13px;">${esc(c.name)}</b> <span style="font-size:12.5px; color:var(--slate);">· ${c.type}${c.detail?' · '+c.detail:''}</span></div>
          </div>
          <span class="badge ${c.badge}">${c.days===0?'Today':c.days===1?'Tomorrow':`In ${c.days} days`}</span>
        </div>`).join('') : `<p style="font-size:12.5px; color:var(--slate);">No birthdays, work anniversaries, or client anniversaries in the next 60 days. Add birth/hire dates in Settings → Users, and "Client Since" on a Company's Contract tab, to populate this.</p>`}
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:14px;">
      ${users.map(u=>{
        const role = DATA.roles.find(r=>r.id===u.roleId);
        return `
        <div class="panel" style="padding:18px;">
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
            <div style="width:44px; height:44px; border-radius:50%; overflow:hidden; background:var(--teal-solid); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
              ${(u.avatarDataUrl && isSafeDataUrl(u.avatarDataUrl)) ? `<img src="${u.avatarDataUrl}" style="width:100%; height:100%; object-fit:cover;">` : `<span style="color:#fff; font-weight:700; font-size:15px;">${esc(initials(u.name))}</span>`}
            </div>
            <div>
              <div style="font-weight:700; font-size:14px;">${esc(u.name)}${isUserOutToday(u.id)?' <span style="color:var(--red-text); font-size:10.5px; font-weight:700;">· Out</span>':''}</div>
              <div style="font-size:12px; color:var(--slate);">${role?esc(role.name):'No role'} · ${esc(u.department||'-')}</div>
            </div>
          </div>
          <div style="font-size:12px; color:var(--slate); line-height:1.8;">
            ${u.email?`<div>${esc(u.email)}</div>`:''}
            ${u.hireDate?`<div>Hired ${fmtDate(u.hireDate)} (${yearsSince(u.hireDate)} yr${yearsSince(u.hireDate)===1?'':'s'})</div>`:''}
            ${u.birthday?`<div>Birthday ${new Date(u.birthday+'T00:00:00').toLocaleDateString('en-US',{month:'long',day:'numeric'})}</div>`:''}
          </div>
        </div>`;
      }).join('')}
    </div>`;
}

/* ===================== TIME OFF LOG (central log, not just calendar pills) ===================== */
let timeOffLogFilter = 'all';
function renderTimeOffLogView(){
  let rows = [...DATA.timeOffRequests].sort((a,b)=> (b.requestedAt||'').localeCompare(a.requestedAt||''));
  if(timeOffLogFilter!=='all') rows = rows.filter(r=>r.status===timeOffLogFilter);
  const pendingCount = DATA.timeOffRequests.filter(r=>r.status==='pending').length;
  return `
    <div class="page-head">
      <div><h1>Time Off</h1><p>Every vacation, sick, and personal day request in one log, Pending → Approved → Rejected.</p></div>
      <button class="btn-new" onclick="openTimeOffModal()">${iconPlus()} <span>Request Time Off</span></button>
    </div>
    <div class="view-chips">
      ${['all','pending','approved','rejected'].map(s=>`<span class="view-chip ${timeOffLogFilter===s?'active':''}" onclick="setTimeOffLogFilter('${s}')">${s==='all'?'All':s.charAt(0).toUpperCase()+s.slice(1)}${s==='pending'&&pendingCount?` (${pendingCount})`:''}</span>`).join('')}
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>Employee</th><th>Type</th><th>Dates</th><th>Notes</th><th>Status</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(r=>{
            const user = DATA.users.find(u=>u.id===r.userId);
            const t = timeOffTypeMeta(r.type);
            const canDecide = r.status==='pending' && canApproveTimeOff(r);
            return `
            <tr onclick="openTimeOffDetail('${r.id}')">
              <td><div class="lead-name">${esc(user?user.name:'Unknown')}</div></td>
              <td><span style="font-size:11px; font-weight:700; padding:3px 10px; border-radius:99px; background:${safeBgForWhiteText(t.color)}; color:#fff;">${t.label}</span></td>
              <td class="mono">${fmtDate(r.startDate)}${r.endDate && r.endDate!==r.startDate ? ' – '+fmtDate(r.endDate) : ''}</td>
              <td class="src">${esc(r.notes||'-')}</td>
              <td onclick="event.stopPropagation();">
                ${canDecide ? `
                <select onchange="decideTimeOff('${r.id}', this.value)" style="padding:6px 10px; border-radius:6px; border:1px solid var(--line); font-size:12px; font-weight:700;">
                  <option value="pending" selected>Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>` : `<span class="badge ${r.status==='approved'?'customer':r.status==='rejected'?'past_customer':'lead'}">${r.status.charAt(0).toUpperCase()+r.status.slice(1)}</span>`}
              </td>
            </tr>`;
          }).join('') : `<tr class="empty-row"><td colspan="5">No ${timeOffLogFilter==='all'?'':timeOffLogFilter+' '}time off requests yet.</td></tr>`}
        </tbody>
      </table>
    </div>`;
}
function setTimeOffLogFilter(s){ timeOffLogFilter = s; render(); }

/* ===================== TRAINING MODULE MATRIX ===================== */
/* ===================== ORG CHART (built from Settings → Users manager relationships) ===================== */
function orgCardHTML(u){
  const role = DATA.roles.find(r=>r.id===u.roleId);
  return `
    <div class="org-card" onclick="switchView('settings', {t:'settingsTab', v:'users'});" style="cursor:pointer;" title="Edit in Settings → Users">
      <div class="org-avatar">${(u.avatarDataUrl && isSafeDataUrl(u.avatarDataUrl)) ? `<img src="${u.avatarDataUrl}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">` : esc(initials(u.name))}</div>
      <div class="org-name">${esc(u.name)}</div>
      <div class="org-role">${role?esc(role.name):esc(u.department||'No role')}</div>
    </div>`;
}
function orgNodeHTML(u, visited){
  if(visited.has(u.id)) return `<li>${orgCardHTML(u)}</li>`; // cycle guard: stop descending if we've seen this person already
  visited.add(u.id);
  const reports = DATA.users.filter(r=>r.managerId===u.id && r.id!==u.id);
  return `
    <li>
      ${orgCardHTML(u)}
      ${reports.length ? `<ul>${reports.map(r=>orgNodeHTML(r, visited)).join('')}</ul>` : ''}
    </li>`;
}
/* ===================== INCIDENT REPORTS (confidential, CEO-role only) ===================== */
const INCIDENT_TYPES = ['Safety Violation','Workplace Injury','HR Complaint','Harassment','Policy Violation','Other'];
function renderAccessRestricted(){
  return `
    <div class="feed-empty" style="padding:80px 20px;">
      <div style="font-size:15px; font-weight:700; color:var(--ink); margin-bottom:6px;">This section is restricted</div>
      <div style="font-size:13px; color:var(--slate);">Only the CEO role can view Incident Reports. If you believe you should have access, check your role in Settings → Users.</div>
    </div>`;
}
function renderIncidentReportsView(){
  const rows = [...DATA.incidentReports].sort((a,b)=> (b.fileDate||'').localeCompare(a.fileDate||''));
  const openCount = rows.filter(r=>r.investigationStatus==='Open').length;
  return `
    <div class="page-head">
      <div><h1>Incident Reports</h1><p>Confidential. Hidden from every role except CEO in this app, this list itself lives in the same saved data as everything else, so real confidentiality still depends on who has access to that data, not just this screen.</p></div>
      <button class="btn-new" onclick="openNewIncidentModal()">${iconPlus()} <span>File a Report</span></button>
    </div>
    <div class="stat-row" style="margin-bottom:20px;">
      <div class="stat-card"><div class="label">Total on File</div><h2>${rows.length}</h2></div>
      <div class="stat-card"><div class="label">Open Investigations</div><h2>${openCount}</h2></div>
      <div class="stat-card"><div class="label">Resolved</div><h2>${rows.length-openCount}</h2></div>
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>File Date</th><th>Type</th><th>Involved</th><th>Status</th><th>Filed By</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(r=>{
            const involved = DATA.users.find(u=>u.id===r.involvedUserId);
            const filer = DATA.users.find(u=>u.id===r.reportedBy);
            return `
            <tr onclick="openEditIncident('${r.id}')">
              <td class="mono">${fmtDate(r.fileDate)}</td>
              <td class="src">${esc(r.type)}</td>
              <td>${involved?esc(involved.name):esc(r.involvedOther||'-')}</td>
              <td><span class="badge ${r.investigationStatus==='Resolved'?'customer':'lead'}">${r.investigationStatus}</span></td>
              <td class="src">${filer?esc(filer.name):'-'}</td>
            </tr>`;
          }).join('') : `<tr class="empty-row"><td colspan="5">Nothing on file.</td></tr>`}
        </tbody>
      </table>
    </div>`;
}
let editingIncidentId = null;
function openNewIncidentModal(){
  editingIncidentId = null;
  document.getElementById('modalPanel').style.maxWidth = '560px';
  document.getElementById('modalTitle').textContent = 'File an Incident Report';
  document.getElementById('modalBody').innerHTML = incidentFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="saveIncidentForm()">File report</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function openEditIncident(id){
  if(!currentScope().canManageSettings) return;
  editingIncidentId = id;
  const r = DATA.incidentReports.find(x=>x.id===id);
  if(!r) return;
  document.getElementById('modalPanel').style.maxWidth = '560px';
  document.getElementById('modalTitle').textContent = 'Incident Report';
  document.getElementById('modalBody').innerHTML = incidentFormHTML(r);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-danger" onclick="deleteIncident('${id}')">Delete</button>
    <div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveIncidentForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function incidentFormHTML(r){
  r = r || { fileDate: todayISO(), type: INCIDENT_TYPES[0], involvedUserId:'', involvedOther:'', description:'', investigationStatus:'Open', resolutionNotes:'' };
  return `
    <div class="field-row">
      <div class="field"><label>File Date</label><input id="inc_fileDate" type="date" value="${r.fileDate}"></div>
      <div class="field"><label>Type of Incident</label>
        <select id="inc_type">${INCIDENT_TYPES.map(t=>`<option value="${esc(t)}" ${r.type===t?'selected':''}>${esc(t)}</option>`).join('')}</select>
      </div>
    </div>
    <div class="field-row">
      <div class="field"><label>Involved employee (if applicable)</label>
        <select id="inc_involvedUserId">
          <option value="">Not a current employee / N/A</option>
          ${DATA.users.map(u=>`<option value="${u.id}" ${r.involvedUserId===u.id?'selected':''}>${esc(u.name)}</option>`).join('')}
        </select>
      </div>
      <div class="field"><label>Or name (contractor, visitor, etc.)</label><input id="inc_involvedOther" value="${esc(r.involvedOther||'')}"></div>
    </div>
    <div class="field"><label>Description of incident</label><textarea id="inc_description" rows="4">${esc(r.description)}</textarea></div>
    <div class="field"><label>Investigation Status</label>
      <select id="inc_investigationStatus">
        <option value="Open" ${r.investigationStatus==='Open'?'selected':''}>Open</option>
        <option value="Resolved" ${r.investigationStatus==='Resolved'?'selected':''}>Resolved</option>
      </select>
    </div>
    <div class="field"><label>Official resolution notes</label><textarea id="inc_resolutionNotes" rows="4" placeholder="Findings, actions taken, sign-off">${esc(r.resolutionNotes||'')}</textarea></div>
    <p style="font-size:11px; color:var(--slate);">Only the CEO role can see this log at all. Everyone else, including the person filing this if they aren't CEO, has no way to view it back inside this app.</p>
  `;
}
async function saveIncidentForm(){
  const fileDate = document.getElementById('inc_fileDate').value || todayISO();
  const payload = {
    fileDate,
    type: document.getElementById('inc_type').value,
    involvedUserId: document.getElementById('inc_involvedUserId').value || null,
    involvedOther: document.getElementById('inc_involvedOther').value.trim(),
    description: document.getElementById('inc_description').value.trim(),
    investigationStatus: document.getElementById('inc_investigationStatus').value,
    resolutionNotes: document.getElementById('inc_resolutionNotes').value.trim(),
  };
  if(editingIncidentId){
    Object.assign(DATA.incidentReports.find(x=>x.id===editingIncidentId), payload);
  } else {
    DATA.incidentReports.push({ id: uid(), dateAdded: todayISO(), reportedBy: currentScope().userId, ...payload });
  }
  await saveData(); closeModal(); render();
  showToast(editingIncidentId ? 'Report updated' : 'Report filed');
}
async function deleteIncident(id){
  DATA.incidentReports = DATA.incidentReports.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Report deleted');
}

function renderTeamOrgChart(){
  const users = DATA.users;
  const visited = new Set();
  // Roots: nobody manages them, or their manager reference is dangling (deleted user, etc.)
  const roots = users.filter(u=> !u.managerId || !users.find(m=>m.id===u.managerId));
  return `
    ${users.length ? `
    <p style="font-size:12px; color:var(--slate); margin-bottom:14px;">Built straight from the Manager field in Settings → Users, change reporting lines there and this updates itself. <a onclick="switchView('settings', {t:'settingsTab', v:'users'});" style="cursor:pointer; color:var(--teal-text); font-weight:700;">Edit reporting lines</a></p>
    <div class="panel" style="overflow-x:auto; padding:30px 20px;">
      <ul class="org-tree">
        ${roots.map(u=>orgNodeHTML(u, visited)).join('')}
      </ul>
    </div>
    ${users.length > visited.size ? `
    <div class="panel" style="margin-top:16px; padding:16px 20px;">
      <div style="font-size:12px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:10px;">Not shown above (circular reporting line)</div>
      <div class="org-unassigned">${users.filter(u=>!visited.has(u.id)).map(u=>orgCardHTML(u)).join('')}</div>
    </div>` : ''}
    ` : `<div class="feed-empty">No team members yet. Add your team in Settings → Users first.</div>`}
  `;
}

const DEFAULT_OPTIONAL_COURSES = [
  { provider:'HubSpot Academy', name:'Inbound Marketing Certification', url:'https://academy.hubspot.com/courses/inbound-marketing' },
  { provider:'HubSpot Academy', name:'Content Marketing Certification', url:'https://academy.hubspot.com/courses/content-marketing' },
  { provider:'HubSpot Academy', name:'Social Media Marketing Certification', url:'https://academy.hubspot.com/courses/social-media' },
  { provider:'HubSpot Academy', name:'Email Marketing Certification', url:'https://academy.hubspot.com/courses/email-marketing' },
  { provider:'HubSpot Academy', name:'SEO Certification', url:'https://academy.hubspot.com/courses/seo-training' },
  { provider:'HubSpot Academy', name:'Digital Marketing Certification', url:'https://academy.hubspot.com/courses/digital-marketing' },
  { provider:'Semrush Academy', name:'SEO Fundamentals Course', url:'https://www.semrush.com/academy/courses/seo-fundamentals-course/' },
  { provider:'Semrush Academy', name:'Semrush SEO Toolkit Course', url:'https://www.semrush.com/academy/courses/seo-toolkit-course/' },
  { provider:'Semrush Academy', name:'Advertising with Semrush Course', url:'https://www.semrush.com/academy/courses/advertising-with-semrush-course/' },
  { provider:'Google Skillshop', name:'Google Ads Search Certification', url:'https://skillshop.exceedlms.com/student/catalog' },
  { provider:'Google Skillshop', name:'Google Analytics (GA4) Certification', url:'https://skillshop.exceedlms.com/student/catalog' },
  { provider:'Google Skillshop', name:'Google Digital Marketing & E-commerce', url:'https://grow.google/certificates/digital-marketing-ecommerce/' },
  { provider:'LinkedIn Learning', name:'SEO Foundations', url:'https://www.linkedin.com/learning/seo-foundations' },
  { provider:'LinkedIn Learning', name:'Digital Marketing Foundations', url:'https://www.linkedin.com/learning/digital-marketing-foundations' },
  { provider:'LinkedIn Learning', name:'Social Media Marketing Foundations', url:'https://www.linkedin.com/learning/social-media-marketing-foundations' },
];
function renderTrainingView(){
  const mandatoryCourses = DATA.trainingCourses.filter(c=>c.type!=='optional');
  const optionalCourses = DATA.trainingCourses.filter(c=>c.type==='optional');
  const users = [...DATA.users].sort((a,b)=>a.name.localeCompare(b.name));
  const totalCells = users.length * mandatoryCourses.length;
  const completeCells = users.reduce((sum,u)=> sum + mandatoryCourses.filter(c=> (u.trainingStatus||{})[c.id]==='complete').length, 0);
  const optProviders = Array.from(new Set(optionalCourses.map(c=>c.provider || 'Other'))).sort();
  const {userId: currentUserId} = currentScope();

  return `
    <div class="page-head">
      <div><h1>Training</h1><p>Mandatory courses your team is required to complete. Optional courses below are self-tracked, no manager sign-off needed.</p></div>
      <div class="csv-actions">
        <button class="btn-small" onclick="openManageCoursesModal()">${iconGear()} Manage Mandatory Courses</button>
        <button class="btn-small" onclick="openManageOptionalCoursesModal()">${iconGear()} Manage Optional Courses</button>
        <div class="date-pill">${totalCells ? Math.round(completeCells/totalCells*100) : 0}% mandatory complete</div>
      </div>
    </div>

    <div style="font-size:15px; font-weight:700; color:var(--navy-deep); margin-bottom:10px;">Mandatory</div>
    ${mandatoryCourses.length ? `
    <div class="panel" style="overflow-x:auto; margin-bottom:28px;">
      <table style="min-width:${400+mandatoryCourses.length*140}px;">
        <thead>
          <tr>
            <th style="position:sticky; left:0; background:var(--white); z-index:1;">Employee</th>
            ${mandatoryCourses.map(c=>`<th style="text-align:center;">${c.url ? `<a href="${safeHref(c.url)}" target="_blank" rel="noopener noreferrer" style="color:var(--teal-text);">${esc(c.name)} ↗</a>` : esc(c.name)}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${users.map(u=>`
            <tr>
              <td style="position:sticky; left:0; background:var(--white); z-index:1;"><div class="lead-name">${esc(u.name)}</div></td>
              ${mandatoryCourses.map(c=>{
                const status = (u.trainingStatus||{})[c.id] || 'pending';
                const isComplete = status==='complete';
                return `<td style="text-align:center; cursor:pointer;" onclick="toggleTraining('${u.id}','${c.id}')">
                  <span class="badge ${isComplete?'customer':'lead'}" style="cursor:pointer;">${isComplete?'Complete':'Pending'}</span>
                </td>`;
              }).join('')}
            </tr>`).join('')}
        </tbody>
      </table>
    </div>` : `<div class="feed-empty" style="margin-bottom:28px;">No mandatory courses set up yet. Click "Manage Mandatory Courses" to add your first one.</div>`}

    <div style="font-size:15px; font-weight:700; color:var(--navy-deep); margin-bottom:4px;">Optional - free certifications</div>
    <p style="font-size:12px; color:var(--slate); margin-bottom:14px;">Pre-loaded free courses from HubSpot Academy, Semrush Academy, Google Skillshop, and LinkedIn Learning. Everyone tracks their own progress here.</p>
    ${optionalCourses.length ? optProviders.map(provider=>`
      <div class="panel" style="padding:16px 20px; margin-bottom:14px;">
        <div style="font-size:12px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:6px;">${esc(provider)}</div>
        ${optionalCourses.filter(c=>(c.provider||'Other')===provider).map(c=>{
          const user = DATA.users.find(u=>u.id===currentUserId);
          const status = user ? ((user.trainingStatus||{})[c.id] || 'not_started') : 'not_started';
          const completedCount = DATA.users.filter(u=>(u.trainingStatus||{})[c.id]==='complete').length;
          return `
          <div class="role-user-row">
            <div>
              <div class="ru-name">${esc(c.name)}</div>
              <div class="ru-sub">${c.url ? `<a href="${safeHref(c.url)}" target="_blank" rel="noopener noreferrer" style="color:var(--teal-text); font-weight:600;">Take this course ↗</a> · ` : ''}${completedCount} team member${completedCount===1?'':'s'} completed</div>
            </div>
            <select onchange="setOptionalTrainingStatus('${c.id}', this.value)" style="padding:7px 10px; border-radius:7px; border:1px solid var(--line); font-size:12px; font-weight:700;">
              <option value="not_started" ${status==='not_started'?'selected':''}>Not Started</option>
              <option value="in_progress" ${status==='in_progress'?'selected':''}>In Progress</option>
              <option value="complete" ${status==='complete'?'selected':''}>Complete</option>
            </select>
          </div>`;
        }).join('')}
      </div>`).join('') : `<div class="feed-empty">No optional courses yet. Click "Manage Optional Courses" to add one.</div>`}
  `;
}
async function toggleTraining(userId, courseId){
  const u = DATA.users.find(x=>x.id===userId);
  if(!u) return;
  u.trainingStatus = u.trainingStatus || {};
  u.trainingStatus[courseId] = u.trainingStatus[courseId]==='complete' ? 'pending' : 'complete';
  await saveData(); render();
}
async function setOptionalTrainingStatus(courseId, status){
  const {userId} = currentScope();
  const u = DATA.users.find(x=>x.id===userId);
  if(!u){ showToast('Set an active user in Settings → Users first'); return; }
  u.trainingStatus = u.trainingStatus || {};
  u.trainingStatus[courseId] = status;
  await saveData(); render();
  showToast('Progress updated');
}
function openManageCoursesModal(){
  const mandatoryCourses = DATA.trainingCourses.filter(c=>c.type!=='optional');
  document.getElementById('modalPanel').style.maxWidth = '520px';
  document.getElementById('modalTitle').textContent = 'Manage Mandatory Courses';
  document.getElementById('modalBody').innerHTML = `
    <div class="calls-mini" style="margin-bottom:14px;">
      ${mandatoryCourses.length ? mandatoryCourses.map(c=>`
        <div class="call-mini-item" style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
          <div>
            <div>${c.provider?esc(c.provider)+' - ':''}${esc(c.name)}</div>
            ${c.url ? `<a href="${safeHref(c.url)}" target="_blank" rel="noopener noreferrer" style="font-size:11px; color:var(--teal-text); font-weight:600;">Open Course ↗</a>` : `<span style="font-size:11px; color:var(--slate);">No link yet</span>`}
          </div>
          <div style="display:flex; gap:6px; flex-shrink:0;">
            <button type="button" class="btn-small" onclick="openEditCourseLink('${c.id}')">${iconGear()}</button>
            <button type="button" class="btn-small" onclick="deleteCourse('${c.id}')">Remove</button>
          </div>
        </div>`).join('') : '<div class="call-mini-item" style="color:var(--slate);">No courses yet.</div>'}
    </div>
    <div class="field-row">
      <input id="new_course_provider" placeholder="Provider (optional, e.g. SHRM, OSHA)">
      <input id="new_course_name" placeholder="Course name">
    </div>
    <input id="new_course_url" placeholder="Link to the course (optional)" style="margin-top:8px;">
    <button type="button" class="btn-small" onclick="addCourse()" style="margin-top:8px;">${iconPlus()} Add</button>
  `;
  document.getElementById('modalFoot').innerHTML = `<div></div><button class="btn-ghost" onclick="closeModal(); render();">Done</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
async function addCourse(){
  const name = document.getElementById('new_course_name').value.trim();
  if(!name){ showToast('Name the course first'); return; }
  const provider = document.getElementById('new_course_provider').value.trim();
  const url = document.getElementById('new_course_url').value.trim();
  DATA.trainingCourses.push({ id: uid(), name, provider, url, type:'mandatory', dateAdded: todayISO() });
  await saveData();
  openManageCoursesModal();
}
function openEditCourseLink(id){
  const c = DATA.trainingCourses.find(x=>x.id===id);
  if(!c) return;
  document.getElementById('modalPanel').style.maxWidth = '460px';
  document.getElementById('modalTitle').textContent = 'Edit Course';
  document.getElementById('modalBody').innerHTML = `
    ${fld('ec_name','Course name',c.name,'')}
    ${fld('ec_provider','Provider (optional)',c.provider,'e.g. SHRM, OSHA, HR Certify')}
    ${fld('ec_url','Link to the course',c.url,'https://...')}
  `;
  document.getElementById('modalFoot').innerHTML = `<div></div><div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="openManageCoursesModal()">Cancel</button><button class="btn-primary" onclick="saveCourseLink('${id}')">Save</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
async function saveCourseLink(id){
  const c = DATA.trainingCourses.find(x=>x.id===id);
  if(!c) return;
  const name = document.getElementById('ec_name').value.trim();
  if(!name){ showToast('Course name is required'); return; }
  c.name = name;
  c.provider = document.getElementById('ec_provider').value.trim();
  c.url = document.getElementById('ec_url').value.trim();
  await saveData();
  openManageCoursesModal();
  showToast('Course updated');
}
function openManageOptionalCoursesModal(){
  const optionalCourses = DATA.trainingCourses.filter(c=>c.type==='optional');
  document.getElementById('modalPanel').style.maxWidth = '520px';
  document.getElementById('modalTitle').textContent = 'Manage Optional Courses';
  document.getElementById('modalBody').innerHTML = `
    <div class="calls-mini" style="margin-bottom:14px;">
      ${optionalCourses.length ? optionalCourses.map(c=>`
        <div class="call-mini-item" style="display:flex; justify-content:space-between; align-items:center;">
          <span>${c.provider?esc(c.provider)+' - ':''}${esc(c.name)}</span>
          <button type="button" class="btn-small" onclick="deleteCourse('${c.id}')">Remove</button>
        </div>`).join('') : '<div class="call-mini-item" style="color:var(--slate);">No optional courses yet.</div>'}
    </div>
    <div class="field-row">
      <input id="new_opt_provider" placeholder="Provider (e.g. HubSpot Academy)">
      <input id="new_opt_name" placeholder="Course name">
    </div>
    <input id="new_opt_url" placeholder="Link to the course" style="margin-top:8px;">
    <button type="button" class="btn-small" onclick="addOptionalCourse()" style="margin-top:8px;">${iconPlus()} Add optional course</button>
  `;
  document.getElementById('modalFoot').innerHTML = `<div></div><button class="btn-ghost" onclick="closeModal(); render();">Done</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
async function addOptionalCourse(){
  const provider = document.getElementById('new_opt_provider').value.trim();
  const name = document.getElementById('new_opt_name').value.trim();
  const url = document.getElementById('new_opt_url').value.trim();
  if(!name){ showToast('Name the course first'); return; }
  DATA.trainingCourses.push({ id: uid(), name, provider, url, type:'optional', dateAdded: todayISO() });
  await saveData();
  openManageOptionalCoursesModal();
}
async function deleteCourse(id){
  const course = DATA.trainingCourses.find(c=>c.id===id);
  const isOptional = course && course.type==='optional';
  DATA.trainingCourses = DATA.trainingCourses.filter(c=>c.id!==id);
  DATA.users.forEach(u=>{ if(u.trainingStatus) delete u.trainingStatus[id]; });
  await saveData();
  isOptional ? openManageOptionalCoursesModal() : openManageCoursesModal();
}

function renderCompaniesView(){
  const rows = [...DATA.companies].sort((a,b)=> (b.dateAdded||'').localeCompare(a.dateAdded||''));
  return `
    <div class="page-head">
      <div><h1>Companies</h1><p>The business itself. Every contact links to one of these, so a company's data lives in one place no matter how many people work there.</p></div>
      <div class="date-pill">${rows.length} total</div>
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>Company</th><th>Industry</th><th>Contacts</th><th>Account Manager</th><th>Added</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(co=>{
            const linkedContacts = DATA.contacts.filter(c=>c.companyId===co.id);
            const mgr = DATA.users.find(u=>u.id===co.internal.accountManager);
            return `
            <tr onclick="openEditCompany('${co.id}')">
              <td><div class="lead-name">${esc(co.name)}</div>${co.websiteUrl?`<div class="lead-sub">${esc(co.websiteUrl)}</div>`:''}</td>
              <td class="src">${esc(co.industry||'-')}</td>
              <td>${linkedContacts.length} contact${linkedContacts.length===1?'':'s'}</td>
              <td class="src">${mgr?esc(mgr.name):'-'}</td>
              <td class="mono">${fmtDate(co.dateAdded)}</td>
            </tr>`;
          }).join('') : `<tr class="empty-row"><td colspan="5">No companies yet. Add a contact and a company record is created for you automatically, or add one directly here.</td></tr>`}
        </tbody>
      </table>
    </div>`;
}
let editingCompanyId = null;
function openNewCompanyModal(){
  editingCompanyId = null;
  document.getElementById('modalPanel').style.maxWidth = '640px';
  document.getElementById('modalTitle').textContent = 'New Company';
  document.getElementById('modalBody').innerHTML = companyFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="saveCompanyForm()">Add company</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function openEditCompany(id){
  editingCompanyId = id;
  const co = DATA.companies.find(x=>x.id===id);
  if(!co) return;
  document.getElementById('modalPanel').style.maxWidth = '640px';
  document.getElementById('modalTitle').textContent = co.name;
  document.getElementById('modalBody').innerHTML = companyFormHTML(co);
  const linked = DATA.contacts.filter(c=>c.companyId===id);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-danger" onclick="deleteCompany('${id}')" ${linked.length?'disabled title="Reassign or delete linked contacts first"':''}>Delete</button>
    <div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveCompanyForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
/* ===================== CLIENT SNAPSHOT (everything about this company, one place) ===================== */
function companySnapshotTabHTML(co){
  if(!co.id){
    return `<p style="font-size:12.5px; color:var(--slate); padding:10px 0 20px;">Save this company first, then this tab shows everything happening with them in one place: deals, quotes, proposals, tickets, and content.</p>`;
  }
  const linkedContacts = DATA.contacts.filter(c=>c.companyId===co.id);
  const contactIds = new Set(linkedContacts.map(c=>c.id));

  const deals = DATA.deals.filter(d=>contactIds.has(d.contactId));
  const openDeals = deals.filter(d=>isOpenStage(d.stage));
  const openDealValue = openDeals.reduce((s,d)=>s+Number(d.value||0),0);

  const quotes = DATA.priceQuotes.filter(q=>q.companyId===co.id).sort((a,b)=>(b.dateAdded||'').localeCompare(a.dateAdded||''));
  const proposals = DATA.proposals.filter(p=>p.companyId===co.id).sort((a,b)=>(b.updatedAt||b.dateAdded||'').localeCompare(a.updatedAt||a.dateAdded||''));
  const tickets = DATA.supportTickets.filter(t=>t.companyId===co.id).sort((a,b)=>(b.updatedAt||b.dateAdded||'').localeCompare(a.updatedAt||a.dateAdded||''));
  const openTickets = tickets.filter(t=>t.status!=='Resolved' && t.status!=='Closed');
  const requests = DATA.serviceRequests.filter(r=>r.companyId===co.id).sort((a,b)=>(b.updatedAt||b.dateAdded||'').localeCompare(a.updatedAt||a.dateAdded||''));
  const content = DATA.contentCalendar.filter(i=>contactIds.has(i.contactId)).sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  const pendingContent = content.filter(i=>i.approvalStatus==='Pending Review' || i.approvalStatus==='Revisions Requested');

  let renewalBanner = '';
  if(co.contract.contractEnd){
    const daysUntil = Math.round((new Date(co.contract.contractEnd+'T00:00:00') - new Date(todayISO()+'T00:00:00')) / 86400000);
    if(daysUntil<=60){
      const urgent = daysUntil<=14;
      renewalBanner = `<div style="background:${urgent?'var(--red-soft)':'var(--amber-soft)'}; border:1px solid ${urgent?'var(--red)':'var(--amber)'}; border-radius:9px; padding:12px 14px; margin-bottom:16px; font-size:12.5px; color:${urgent?'var(--red-text)':'var(--amber-text)'};">
        ${daysUntil<0 ? `Contract ended ${Math.abs(daysUntil)} day${Math.abs(daysUntil)===1?'':'s'} ago${co.contract.autoRenew?' (marked auto-renew)':', check renewal status'}.` : `Contract ends in ${daysUntil} day${daysUntil===1?'':'s'}${co.contract.autoRenew?' (auto-renew is on)':', renewal not confirmed yet'}.`}
      </div>`;
    }
  }

  return `
    ${renewalBanner}
    <div class="stat-row" style="margin-bottom:18px;">
      <div class="stat-card" style="padding:14px;"><div class="label">Open Deal Value</div><h2 style="font-size:19px;">${fmtMoney(openDealValue)}</h2></div>
      <div class="stat-card" style="padding:14px;"><div class="label">MRR</div><h2 style="font-size:19px;">${fmtMoney(co.contract.monthlyRetainer)}</h2></div>
      <div class="stat-card" style="padding:14px;"><div class="label">Open Tickets</div><h2 style="font-size:19px;">${openTickets.length}</h2></div>
      <div class="stat-card" style="padding:14px;"><div class="label">Pending Content</div><h2 style="font-size:19px;">${pendingContent.length}</h2></div>
    </div>

    ${snapshotSectionHTML('Deals', deals, d=>`<div class="ru-name">${esc(d.name)}</div><div class="ru-sub">${esc(stageName(d.stage))} · ${fmtMoney(d.value)}</div>`, d=>`closeModal(); openEditDeal('${d.id}');`)}
    ${snapshotSectionHTML('Quotes', quotes, q=>`<div class="ru-name">${esc(q.tier)}</div><div class="ru-sub">${esc(q.status)} · ${fmtMoney(q.finalPrice)}</div>`, q=>`closeModal(); openQuoteDetail('${q.id}');`)}
    ${snapshotSectionHTML('Proposals', proposals, p=>`<div class="ru-name">${esc(p.title)}</div><div class="ru-sub">${esc(p.status)}</div>`, p=>`closeModal(); openEditProposal('${p.id}');`)}
    ${snapshotSectionHTML('Support Tickets', tickets, t=>`<div class="ru-name">${esc(t.subject)}</div><div class="ru-sub">${esc(t.status)} · ${esc(t.priority)}</div>`, t=>`closeModal(); openTicketDetail('${t.id}');`)}
    ${snapshotSectionHTML('Service Requests', requests, r=>`<div class="ru-name">${esc(r.title)}</div><div class="ru-sub">${esc(r.status)}</div>`, r=>`closeModal(); openEditServiceRequest('${r.id}');`)}
    ${snapshotSectionHTML('Content', content, i=>`<div class="ru-name">${esc(i.title||contentTypeMeta(i.type).label)}</div><div class="ru-sub">${esc(i.approvalStatus||'Not Submitted')} · ${fmtDate(i.date)}</div>`, i=>`closeModal(); openEditContent('${i.id}');`)}
  `;
}
function snapshotSectionHTML(title, items, rowFn, clickFn){
  return `
    <div style="margin-bottom:18px;">
      <div style="font-size:11.5px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:8px;">${esc(title)}${items.length ? ` (${items.length})` : ''}</div>
      ${items.length ? items.slice(0,8).map(item=>`<div class="role-user-row" style="cursor:pointer;" onclick="${clickFn(item)}">${rowFn(item)}</div>`).join('') : `<p style="font-size:12px; color:var(--slate);">Nothing here yet.</p>`}
      ${items.length>8 ? `<p style="font-size:11px; color:var(--slate); margin-top:4px;">+${items.length-8} more</p>` : ''}
    </div>
  `;
}

function companyFormHTML(co){
  co = co || defaultCompany();
  const linked = co.id ? DATA.contacts.filter(c=>c.companyId===co.id) : [];
  const tabs = [['snapshot','Snapshot'],['info','Company Info'],['social','Social Media'],['marketing','Marketing Profile'],['website','Website & Assets'],['branding','Branding'],['contract','Contract & Billing'],['pricing','Pricing Calculator'],['health','Client Health'],['compliance','Compliance'],['internal','Internal Team']];
  return `
    <div class="settings-tabs" style="margin-bottom:14px;">
      ${tabs.map(([k,label],i)=>`<span class="settings-tab company-tab-btn ${i===0?'active':''}" data-tab="${k}" onclick="switchCompanyTab('${k}')">${label}</span>`).join('')}
    </div>

    <div class="company-tab-panel" data-tab="snapshot" style="display:block;">
      ${companySnapshotTabHTML(co)}
    </div>

    <div class="company-tab-panel" data-tab="info" style="display:none;">
      ${fld('co_name','Company Name',co.name,'Required')}
      ${row2(fld('co_industry','Industry',co.industry,'e.g. Veterinary, Manufacturing'), fld('co_businessType','Business Type',co.businessType,'e.g. LLC, Franchise'))}
      ${row2(fld('co_companySize','Company Size',co.companySize,'e.g. Small, Mid-market'), fld('co_employees','Number of Employees',co.employees,'','number'))}
      ${fld('co_websiteUrl','Website URL',co.websiteUrl,'https://')}
      ${row2(fld('co_companyEmail','Company Email',co.companyEmail,'','email'), fld('co_companyPhone','Company Phone',co.companyPhone,'','tel'))}
      ${fld('co_annualRevenue','Annual Revenue ($)',co.annualRevenue,'','number')}
      ${row2(fld('co_street','Street Address',co.address.street,''), fld('co_city','City',co.address.city,''))}
      ${row2(fld('co_state','State',co.address.state,''), fld('co_zip','ZIP Code',co.address.zip,''))}
      ${row2(fld('co_country','Country',co.address.country,''), selFld('co_timezone','Time Zone',TIMEZONE_OPTIONS,co.address.timezone))}
      ${linked.length ? `
      <div class="field" style="border-top:1px solid var(--line); margin-top:14px; padding-top:14px;">
        <label>Contacts at this company</label>
        <div class="calls-mini">${linked.map(c=>`<div class="call-mini-item" style="cursor:pointer;" onclick="closeModal(); openEditModal('${c.id}');">${esc(c.name)}${c.profile.jobTitle?' · '+esc(c.profile.jobTitle):''}</div>`).join('')}</div>
      </div>` : ''}
    </div>

    <div class="company-tab-panel" data-tab="social" style="display:none;">
      ${row2(fld('co_facebook','Facebook URL',co.social.facebook,''), fld('co_instagram','Instagram URL',co.social.instagram,''))}
      ${row2(fld('co_linkedinCompany','LinkedIn Company URL',co.social.linkedinCompany,''), fld('co_twitter','X (Twitter) URL',co.social.twitter,''))}
      ${row2(fld('co_tiktok','TikTok URL',co.social.tiktok,''), fld('co_youtube','YouTube URL',co.social.youtube,''))}
      ${row2(fld('co_pinterest','Pinterest URL',co.social.pinterest,''), fld('co_threads','Threads URL',co.social.threads,''))}
      ${row2(fld('co_reddit','Reddit URL',co.social.reddit,''), fld('co_gbp','Google Business Profile URL',co.social.gbp,''))}
    </div>

    <div class="company-tab-panel" data-tab="marketing" style="display:none;">
      ${taFld('co_targetAudience','Target Audience',co.marketing.targetAudience,'Who they sell to')}
      ${taFld('co_primaryGoal','Primary Goal',co.marketing.primaryGoal,'')}
      ${taFld('co_painPoints','Current Pain Points',co.marketing.painPoints,'')}
      ${taFld('co_businessDescription','Business Description',co.marketing.businessDescription,'')}
      ${taFld('co_idealCustomer','Ideal Customer',co.marketing.idealCustomer,'')}
      ${taFld('co_competitors','Primary Competitors',co.marketing.competitors,'')}
      ${row2(fld('co_geoMarket','Geographic Market',co.marketing.geoMarket,''), selFld('co_businessModelType','B2B / B2C / D2C',['B2B','B2C','D2C'],co.marketing.customerType))}
      ${row2(selFld('co_businessModel','Business Model',['Lead Generation','Ecommerce','SaaS','Local Business'],co.marketing.businessModel), fld('co_monthlyBudget','Monthly Marketing Budget ($)',co.marketing.monthlyBudget,'','number'))}
      <div style="border-top:1px solid var(--line); margin:14px 0; padding-top:14px;">
        ${fld('co_referralSource','Referral Source',co.marketing.referralSource,'')}
        ${chkFld('co_marketingOptIn','Marketing Opt-In (explicit consent on file)', co.marketing.optIn)}
      </div>
    </div>

    <div class="company-tab-panel" data-tab="website" style="display:none;">
      ${row2(fld('co_builder','Website Builder',co.website.builder,''), fld('co_cms','CMS Platform',co.website.cms,''))}
      ${row2(fld('co_crmUsing','CRM Currently Using',co.website.crmUsing,''), fld('co_hostingProvider','Hosting Provider',co.website.hostingProvider,''))}
      ${row2(fld('co_domainRegistrar','Domain Registrar',co.website.domainRegistrar,''), fld('co_launchDate','Website Launch Date',co.website.launchDate,'','date'))}
      <div style="display:flex; gap:16px; margin-bottom:14px; flex-wrap:wrap;">
        ${chkFld('co_sslActive','SSL Active', co.website.sslActive)}
        ${chkFld('co_redesignNeeded','Website Redesign Needed', co.website.redesignNeeded)}
        ${chkFld('co_runningPaidAds','Running Paid Ads', co.runningPaidAds)}
      </div>
      <div style="display:flex; gap:16px; margin-bottom:14px;">
        ${chkFld('co_gaConnected','Google Analytics Connected', co.gaConnected)}
        ${chkFld('co_gscConnected','Google Search Console Connected', co.gscConnected)}
      </div>
      ${row2(fld('co_currentMarketingAgency','Current Marketing Agency',co.currentMarketingAgency,''), selFld('co_seoStatus','SEO Status',SEO_STATUS_OPTIONS,co.seoStatus))}
      <div style="border-top:1px solid var(--line); margin:14px 0; padding-top:14px;">
        <label style="display:block; font-size:11.5px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:10px;">Marketing Assets (tracking IDs)</label>
        ${row2(fld('co_ga4','Google Analytics 4 Property ID',co.assets.ga4,''), fld('co_gsc','Google Search Console Property',co.assets.gsc,''))}
        ${row2(fld('co_gtm','Google Tag Manager ID',co.assets.gtm,''), fld('co_googleAdsId','Google Ads Customer ID',co.assets.googleAdsId,''))}
        ${row2(fld('co_merchantCenter','Google Merchant Center ID',co.assets.merchantCenter,''), fld('co_metaBM','Meta Business Manager ID',co.assets.metaBM,''))}
        ${row2(fld('co_metaAdAccount','Meta Ad Account ID',co.assets.metaAdAccount,''), fld('co_metaPixel','Meta Pixel ID',co.assets.metaPixel,''))}
        ${row2(fld('co_fbPageId','Facebook Page ID',co.assets.fbPageId,''), fld('co_igBusinessId','Instagram Business ID',co.assets.igBusinessId,''))}
        ${row2(fld('co_linkedinInsight','LinkedIn Insight Tag ID',co.assets.linkedinInsight,''), fld('co_tiktokPixel','TikTok Pixel ID',co.assets.tiktokPixel,''))}
        ${row2(fld('co_pinterestTag','Pinterest Tag ID',co.assets.pinterestTag,''), fld('co_clarityId','Microsoft Clarity ID',co.assets.clarityId,''))}
        ${row2(fld('co_hotjarId','Hotjar Site ID',co.assets.hotjarId,''), fld('co_bingWebmaster','Bing Webmaster Tools ID',co.assets.bingWebmaster,''))}
        ${fld('co_callrail','CallRail Tracking Number',co.assets.callrail,'')}
      </div>
    </div>

    <div class="company-tab-panel" data-tab="branding" style="display:none;">
      ${row2(fld('co_guidelinesUrl','Brand Guidelines URL',co.branding.guidelinesUrl,''), fld('co_logoUrl','Logo Files URL',co.branding.logoUrl,''))}
      ${row2(fld('co_colors','Brand Colors',co.branding.colors,'e.g. Navy #064187, Teal #0A89A3'), fld('co_fonts','Fonts',co.branding.fonts,''))}
      ${fld('co_voice','Brand Voice',co.branding.voice,'')}
      ${fld('co_assetsFolder','Brand Assets Folder',co.branding.assetsFolder,'')}
    </div>

    <div class="company-tab-panel" data-tab="contract" style="display:none;">
      ${row2(fld('co_clientSince','Client Since',co.contract.clientSince,'','date'), selFld('co_retainerType','Retainer Type',['Monthly Retainer','Project-Based','Hourly','Performance-Based'],co.contract.retainerType))}
      ${row2(fld('co_monthlyRetainer','Monthly Retainer ($)',co.contract.monthlyRetainer,'','number'), fld('co_ltv','Lifetime Contract Value ($)',co.contract.ltv,'','number'))}
      ${row2(fld('co_contractStart','Contract Start',co.contract.contractStart,'','date'), fld('co_contractEnd','Contract End',co.contract.contractEnd,'','date'))}
      ${row2(fld('co_estMonthlyHours','Estimated Monthly Hours',co.contract.estMonthlyHours,'','number'), fld('co_assetQuota','Monthly Asset Quota',co.contract.assetQuota,''))}
      ${chkFld('co_autoRenew','Auto Renew', co.contract.autoRenew)}
      <div style="border-top:1px solid var(--line); margin:14px 0; padding-top:14px;">
        <label style="display:block; font-size:11.5px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:10px;">Billing</label>
        ${row2(selFld('co_paymentTerms','Payment Terms',['Due on Receipt','Net 15','Net 30','Net 60'],co.billing.paymentTerms), fld('co_monthlyInvoice','Monthly Invoice ($)',co.billing.monthlyInvoice,'','number'))}
        ${row2(fld('co_lastInvoice','Last Invoice',co.billing.lastInvoice,'','date'), fld('co_nextInvoice','Next Invoice',co.billing.nextInvoice,'','date'))}
        ${row2(fld('co_lastPaymentDate','Last Payment Date',co.billing.lastPaymentDate,'','date'), selFld('co_delinquencyRisk','Payment Delinquency Risk',['Low','Medium','High'],co.billing.delinquencyRisk))}
      </div>
    </div>

    <div class="company-tab-panel" data-tab="pricing" style="display:none;">
      <div id="companyPricingTabPanel">${companyPricingTabHTML(co.id)}</div>
    </div>

    <div class="company-tab-panel" data-tab="health" style="display:none;">
      ${row2(fld('co_nps','Latest NPS',co.health.nps,'0-10','number'), selFld('co_temperature','Client Temperature Status',['Hot','Warm','Cool','Cold'],co.health.temperature))}
      ${row2(selFld('co_renewalProbability','Renewal Probability',['High','Medium','Low'],co.health.renewalProbability), selFld('co_churnRisk','Churn Risk',['Low','Medium','High'],co.health.churnRisk))}
      ${selFld('co_rating','Overall Client Rating',['5 - Excellent','4 - Good','3 - Fair','2 - Poor','1 - Critical'],co.health.rating)}
    </div>

    <div class="company-tab-panel" data-tab="compliance" style="display:none;">
      <div class="field">
        <label>Applicable compliance requirements</label>
        <div style="display:flex; flex-wrap:wrap; gap:8px;">
          ${COMPLIANCE_OPTIONS.map(opt=>{
            const on = (co.compliance||[]).includes(opt);
            return `<label style="display:flex; align-items:center; gap:6px; padding:6px 11px; border-radius:99px; border:1.5px solid ${on?'var(--red)':'var(--line)'}; background:${on?'var(--red-soft)':'var(--paper)'}; cursor:pointer; font-size:12px; font-weight:600; color:var(--ink);">
              <input type="checkbox" class="co-compliance-check" value="${esc(opt)}" ${on?'checked':''} onchange="this.closest('label').style.background=this.checked?'var(--red-soft)':'var(--paper)'; this.closest('label').style.borderColor=this.checked?'var(--red)':'var(--line)';" style="width:auto;">
              ${esc(opt)}
            </label>`;
          }).join('')}
        </div>
      </div>
    </div>

    <div class="company-tab-panel" data-tab="internal" style="display:none;">
      ${row2(userSelFld('co_accountManager','Account Manager',co.internal.accountManager), userSelFld('co_salesRep','Sales Representative',co.internal.salesRep))}
      ${row2(userSelFld('co_projectManager','Project Manager',co.internal.projectManager), userSelFld('co_seoSpecialist','SEO Specialist',co.internal.seoSpecialist))}
      ${row2(userSelFld('co_adsSpecialist','Ads Specialist',co.internal.adsSpecialist), userSelFld('co_designer','Designer',co.internal.designer))}
      ${row2(userSelFld('co_developer','Developer',co.internal.developer), userSelFld('co_copywriter','Copywriter',co.internal.copywriter))}
      ${selFld('co_priority','Priority Level',['Low','Standard','High','VIP'],co.internal.priority)}
      ${row2(fld('co_techStackNote','Tech stack currently using','','',''),'')}
      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:-8px;">
        ${TECH_STACK_OPTIONS.map(s=>{
          const on = (co.techStack||[]).includes(s);
          return `<label style="display:flex; align-items:center; gap:6px; padding:6px 11px; border-radius:99px; border:1.5px solid ${on?'var(--navy)':'var(--line)'}; background:${on?'var(--navy-soft)':'var(--paper)'}; cursor:pointer; font-size:12px; font-weight:600; color:var(--ink);">
            <input type="checkbox" class="co-techstack-check" value="${esc(s)}" ${on?'checked':''} onchange="this.closest('label').style.background=this.checked?'var(--navy-soft)':'var(--paper)'; this.closest('label').style.borderColor=this.checked?'var(--navy)':'var(--line)';" style="width:auto;">
            ${esc(s)}
          </label>`;
        }).join('')}
      </div>
    </div>
  `;
}
function switchCompanyTab(tab){
  document.querySelectorAll('.company-tab-panel').forEach(p=> p.style.display = p.dataset.tab===tab ? 'block' : 'none');
  document.querySelectorAll('.company-tab-btn').forEach(b=> b.classList.toggle('active', b.dataset.tab===tab));
}

/* ===================== PRICING CALCULATOR (Company tab) ===================== */
/* Phase 1 lives in Settings → Pricing (agency-wide baseline). Phase 2/3 are scoped
   per company here and saved as quotes tied to that company's id. Pure math, no AI. */
function fmtMoneyDec(n){ return ((DATA.settings && DATA.settings.currencySymbol)||'$') + Number(n||0).toFixed(2); }
function computePricingBaseline(){
  const b = DATA.settings.pricingBaseline;
  const wages = b.teamCount * b.avgSalary;
  const capacity = b.overhead + wages;
  const billableHours = b.teamCount * b.weeklyHours * b.weeksPerYear * (b.utilization/100);
  const hourlyCost = billableHours > 0 ? capacity / billableHours : 0;
  return { wages, capacity, billableHours, hourlyCost, margin: b.margin };
}
function computePriceQuoteMath(baseline, scope){
  const deliveryCost = scope.pricingType==='HOURLY' ? (scope.scopeHours * baseline.hourlyCost) : scope.flatCost;
  const passThroughCost = scope.passThrough * (1 + scope.passMarkup/100);
  const marginValid = baseline.margin > 0 && baseline.margin < 100;
  const minViableLabor = marginValid ? (deliveryCost / (1 - baseline.margin/100)) : deliveryCost;
  const finalPrice = Math.ceil(minViableLabor + passThroughCost); // round UP to nearest whole dollar
  return { deliveryCost, passThroughCost, minViableLabor, finalPrice, marginValid };
}
let companyPricingType = 'HOURLY';
function companyPricingTabHTML(companyId){
  companyPricingType = 'HOURLY';
  if(!companyId){
    return `<p style="font-size:12.5px; color:var(--slate); padding:10px 0 20px;">Save this company first, then come back here to build and save price quotes for them.</p>`;
  }
  const baseline = computePricingBaseline();
  const initial = computePriceQuoteMath(baseline, {pricingType:'HOURLY', scopeHours:20, flatCost:0, passThrough:0, passMarkup:15});
  const companyQuotes = DATA.priceQuotes.filter(q=>q.companyId===companyId).sort((a,b)=>(b.dateAdded||'').localeCompare(a.dateAdded||''));
  return `
    <div style="background:var(--paper); border:1px solid var(--line); border-radius:9px; padding:12px 14px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px;">
      <div style="font-size:12px; color:var(--slate);">Agency true internal hourly cost <span style="font-size:10.5px;">(Settings → Pricing)</span></div>
      <div class="mono" style="font-weight:700; color:var(--teal-text);">${baseline.hourlyCost ? fmtMoneyDec(baseline.hourlyCost)+'/hr' : '- set your baseline first'}</div>
    </div>

    <div class="field"><label>Service Tier</label><input type="text" id="cop_tier" placeholder="e.g. SEO Retainer - Growth Tier"></div>

    <div style="display:flex; border:1.5px solid var(--line); border-radius:8px; overflow:hidden; margin-bottom:14px;">
      <button type="button" id="cop_seg_hourly" onclick="setCompanyPricingType('${companyId}','HOURLY')" style="flex:1; padding:9px; background:var(--navy); color:#fff; font-size:12px; font-weight:700; border:none; cursor:pointer;">Hourly</button>
      <button type="button" id="cop_seg_flat" onclick="setCompanyPricingType('${companyId}','FLAT_RATE')" style="flex:1; padding:9px; background:var(--paper); color:var(--slate); font-size:12px; font-weight:700; border:none; border-left:1.5px solid var(--line); cursor:pointer;">Flat Rate</button>
    </div>

    <div id="cop_wrap_hourly">
      <div class="field"><label>Total Scope Hours</label><input type="number" id="cop_scopeHours" min="0" step="0.5" value="20" oninput="updateCompanyPriceLedger('${companyId}')"></div>
    </div>
    <div id="cop_wrap_flat" style="display:none;">
      <div class="field"><label>Flat Rate Internal Cost ($)</label><input type="number" id="cop_flatCost" min="0" step="10" value="0" oninput="updateCompanyPriceLedger('${companyId}')"></div>
    </div>

    ${row2(
      `<div class="field"><label>3rd-Party Pass-Through ($)</label><input type="number" id="cop_passThrough" min="0" step="10" value="0" oninput="updateCompanyPriceLedger('${companyId}')"></div>`,
      `<div class="field"><label>Pass-Through Markup (%)</label><input type="number" id="cop_passMarkup" min="0" max="100" step="1" value="15" oninput="updateCompanyPriceLedger('${companyId}')"></div>`
    )}

    <div style="background:var(--navy-black); border-radius:12px; padding:16px 18px; color:#dbe7f4; margin:14px 0;">
      <div style="font-size:10.5px; text-transform:uppercase; letter-spacing:.5px; color:#7c93ac; margin-bottom:8px;">Price Trail</div>
      <div style="display:flex; justify-content:space-between; font-size:12px; padding:6px 0; border-bottom:1px solid rgba(255,255,255,.08);"><span>Direct Delivery Cost</span><span class="mono" id="cop_out_delivery">${fmtMoneyDec(initial.deliveryCost)}</span></div>
      <div style="display:flex; justify-content:space-between; font-size:12px; padding:6px 0; border-bottom:1px solid rgba(255,255,255,.08);"><span>Adjusted Pass-Through</span><span class="mono" id="cop_out_passthrough">${fmtMoneyDec(initial.passThroughCost)}</span></div>
      <div style="display:flex; justify-content:space-between; font-size:12px; padding:6px 0;"><span>Minimum Viable Labor Price</span><span class="mono" id="cop_out_minlabor">${initial.marginValid ? fmtMoneyDec(initial.minViableLabor) : 'Fix margin in Settings'}</span></div>
      <div style="margin-top:10px; padding-top:10px; border-top:1px dashed rgba(255,255,255,.2); display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:12px; color:#cdeef4;">Final Client Price</span>
        <span class="mono" id="cop_out_final" style="font-size:22px; font-weight:700; color:#fff;">${fmtMoney(initial.finalPrice)}</span>
      </div>
    </div>

    <button type="button" class="btn-small" onclick="saveCompanyPriceQuote('${companyId}')">${iconPlus()} Save this quote</button>

    <div style="margin-top:18px; border-top:1px solid var(--line); padding-top:14px;">
      <label style="display:block; font-size:11.5px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:10px;">Saved Quotes for this Company</label>
      ${companyQuotes.length ? companyQuotes.map(q=>`
        <div class="role-user-row">
          <div>
            <div class="ru-name">${esc(q.tier)}</div>
            <div class="ru-sub">${q.pricingType==='HOURLY' ? q.scopeHours+' hrs' : 'Flat: '+fmtMoney(q.flatCost||0)} · ${fmtDate(q.dateAdded)}</div>
          </div>
          <div style="display:flex; align-items:center; gap:10px;">
            <span class="mono" style="font-weight:700; color:var(--navy-deep);">${fmtMoney(q.finalPrice)}</span>
            <button class="btn-small" onclick="deleteCompanyPriceQuote('${companyId}','${q.id}')">Delete</button>
          </div>
        </div>`).join('') : `<p style="font-size:12px; color:var(--slate);">No quotes saved for this company yet.</p>`}
    </div>
  `;
}
function setCompanyPricingType(companyId, type){
  companyPricingType = type;
  const hb = document.getElementById('cop_seg_hourly'), fb = document.getElementById('cop_seg_flat');
  hb.style.background = type==='HOURLY' ? 'var(--navy)' : 'var(--paper)';
  hb.style.color = type==='HOURLY' ? '#fff' : 'var(--slate)';
  fb.style.background = type==='FLAT_RATE' ? 'var(--navy)' : 'var(--paper)';
  fb.style.color = type==='FLAT_RATE' ? '#fff' : 'var(--slate)';
  document.getElementById('cop_wrap_hourly').style.display = type==='HOURLY' ? '' : 'none';
  document.getElementById('cop_wrap_flat').style.display = type==='FLAT_RATE' ? '' : 'none';
  updateCompanyPriceLedger(companyId);
}
function getCompanyScopeInputs(){
  const gv = (id, fb)=>{ const el=document.getElementById(id); if(!el) return fb; const v=parseFloat(el.value); return isNaN(v)?fb:v; };
  return {
    pricingType: companyPricingType,
    scopeHours: gv('cop_scopeHours', 0),
    flatCost: gv('cop_flatCost', 0),
    passThrough: gv('cop_passThrough', 0),
    passMarkup: gv('cop_passMarkup', 0),
  };
}
function updateCompanyPriceLedger(companyId){
  const deliveryEl = document.getElementById('cop_out_delivery');
  if(!deliveryEl) return;
  const baseline = computePricingBaseline();
  const result = computePriceQuoteMath(baseline, getCompanyScopeInputs());
  deliveryEl.textContent = fmtMoneyDec(result.deliveryCost);
  document.getElementById('cop_out_passthrough').textContent = fmtMoneyDec(result.passThroughCost);
  document.getElementById('cop_out_minlabor').textContent = result.marginValid ? fmtMoneyDec(result.minViableLabor) : 'Fix margin in Settings';
  document.getElementById('cop_out_final').textContent = fmtMoney(result.finalPrice);
}
async function saveCompanyPriceQuote(companyId){
  const tier = document.getElementById('cop_tier').value.trim();
  if(!tier){ showToast('Name this service tier first'); return; }
  const baseline = computePricingBaseline();
  const scope = getCompanyScopeInputs();
  const result = computePriceQuoteMath(baseline, scope);
  if(!result.marginValid){ showToast('Fix Target Net Margin in Settings → Pricing first'); return; }
  DATA.priceQuotes.push({
    id: uid(), companyId, tier, pricingType: scope.pricingType,
    scopeHours: scope.pricingType==='HOURLY' ? scope.scopeHours : null,
    flatCost: scope.pricingType==='FLAT_RATE' ? scope.flatCost : null,
    passThrough: scope.passThrough, passMarkup: scope.passMarkup,
    deliveryCost: result.deliveryCost, passThroughCost: result.passThroughCost,
    minViableLabor: result.minViableLabor, finalPrice: result.finalPrice,
    status: 'Draft', dateAdded: todayISO(),
  });
  await saveData();
  document.getElementById('companyPricingTabPanel').innerHTML = companyPricingTabHTML(companyId);
  showToast('Quote saved');
}
async function deleteCompanyPriceQuote(companyId, quoteId){
  DATA.priceQuotes = DATA.priceQuotes.filter(q=>q.id!==quoteId);
  await saveData();
  document.getElementById('companyPricingTabPanel').innerHTML = companyPricingTabHTML(companyId);
  showToast('Quote deleted');
}

/* ===================== PRICING CALCULATOR: standalone page (nav, under Pipeline/Companies) ===================== */
let pcPricingType = 'HOURLY';
function renderPriceCalculatorView(){
  const baseline = computePricingBaseline();
  const b = DATA.settings.pricingBaseline;
  const companies = [...DATA.companies].sort((a,b)=>a.name.localeCompare(b.name));
  const initial = computePriceQuoteMath(baseline, {pricingType:'HOURLY', scopeHours:20, flatCost:0, passThrough:0, passMarkup:15});
  return `
    <div class="page-head">
      <div><h1>Pricing Calculator</h1><p>Your true internal hourly cost, margin-protected, scoped per company. Pure math, no AI involved.</p></div>
    </div>

    <div class="grid-2">
      <div class="panel" style="padding:22px;">
        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:14px;">
          <h3 style="font-size:19px;">Agency Baseline</h3>
          <span class="date-pill" style="font-size:10.5px;">Phase 1</span>
        </div>
        <div class="field-row">
          <div class="field"><label>Base Overhead (Annual)</label><input type="number" id="pc_overhead" min="0" step="100" value="${b.overhead}" onchange="setPricingBaselineFieldAndRefresh('overhead', this.value)"></div>
          <div class="field"><label>Team Count</label><input type="number" id="pc_teamCount" min="1" step="1" value="${b.teamCount}" onchange="setPricingBaselineFieldAndRefresh('teamCount', this.value)"></div>
        </div>
        <div class="field-row">
          <div class="field"><label>Avg. Salary (Annual)</label><input type="number" id="pc_avgSalary" min="0" step="500" value="${b.avgSalary}" onchange="setPricingBaselineFieldAndRefresh('avgSalary', this.value)"></div>
          <div class="field"><label>Weekly Hours</label><input type="number" id="pc_weeklyHours" min="1" step="1" value="${b.weeklyHours}" onchange="setPricingBaselineFieldAndRefresh('weeklyHours', this.value)"></div>
        </div>
        <div class="field-row">
          <div class="field"><label>Weeks / Year</label><input type="number" id="pc_weeksPerYear" min="1" step="1" value="${b.weeksPerYear}" onchange="setPricingBaselineFieldAndRefresh('weeksPerYear', this.value)"></div>
          <div class="field"><label>Target Utilization (%)</label><input type="number" id="pc_utilization" min="1" max="100" step="1" value="${b.utilization}" onchange="setPricingBaselineFieldAndRefresh('utilization', this.value)"></div>
        </div>
        <div class="field"><label>Target Net Margin (%)</label><input type="number" id="pc_margin" min="1" max="95" step="1" value="${b.margin}" onchange="setPricingBaselineFieldAndRefresh('margin', this.value)"></div>
        <div class="stat-row" style="margin-top:14px; margin-bottom:0;">
          <div class="stat-card" style="padding:12px;"><div class="label">Annual Wages</div><h2 style="font-size:17px;">${fmtMoney(baseline.wages)}</h2></div>
          <div class="stat-card" style="padding:12px;"><div class="label">Annual Capacity</div><h2 style="font-size:17px;">${fmtMoney(baseline.capacity)}</h2></div>
          <div class="stat-card" style="padding:12px;"><div class="label">Billable Hrs/Yr</div><h2 style="font-size:17px;">${Math.round(baseline.billableHours).toLocaleString('en-US')}</h2></div>
          <div class="stat-card" style="padding:12px; background:var(--teal-soft); border-color:var(--teal);"><div class="label">True Hourly Cost</div><h2 style="font-size:17px; color:var(--teal-text);">${baseline.hourlyCost?fmtMoneyDec(baseline.hourlyCost)+'/hr':'-'}</h2></div>
        </div>
      </div>

      <div class="panel" style="padding:22px;">
        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:14px;">
          <h3 style="font-size:19px;">Scope This Service</h3>
          <span class="date-pill" style="font-size:10.5px;">Phase 2</span>
        </div>
        <div class="field"><label>Company (optional)</label>
          <select id="pc_companyId">
            <option value="">No company / general quote</option>
            ${companies.map(c=>`<option value="${c.id}">${esc(c.name)}</option>`).join('')}
          </select>
        </div>
        <div class="field"><label>Service Tier</label><input type="text" id="pc_tier" placeholder="e.g. SEO Retainer - Growth Tier"></div>
        <div style="display:flex; border:1.5px solid var(--line); border-radius:8px; overflow:hidden; margin-bottom:14px;">
          <button type="button" id="pc_seg_hourly" onclick="setPcPricingType('HOURLY')" style="flex:1; padding:9px; background:var(--navy); color:#fff; font-size:12px; font-weight:700; border:none; cursor:pointer;">Hourly</button>
          <button type="button" id="pc_seg_flat" onclick="setPcPricingType('FLAT_RATE')" style="flex:1; padding:9px; background:var(--paper); color:var(--slate); font-size:12px; font-weight:700; border:none; border-left:1.5px solid var(--line); cursor:pointer;">Flat Rate</button>
        </div>
        <div id="pc_wrap_hourly">
          <div class="field"><label>Total Scope Hours</label><input type="number" id="pc_scopeHours" min="0" step="0.5" value="20" oninput="updatePriceCalcLedger()"></div>
        </div>
        <div id="pc_wrap_flat" style="display:none;">
          <div class="field"><label>Flat Rate Internal Cost ($)</label><input type="number" id="pc_flatCost" min="0" step="10" value="0" oninput="updatePriceCalcLedger()"></div>
        </div>
        ${row2(
          `<div class="field"><label>3rd-Party Pass-Through ($)</label><input type="number" id="pc_passThrough" min="0" step="10" value="0" oninput="updatePriceCalcLedger()"></div>`,
          `<div class="field"><label>Pass-Through Markup (%)</label><input type="number" id="pc_passMarkup" min="0" max="100" step="1" value="15" oninput="updatePriceCalcLedger()"></div>`
        )}
      </div>
    </div>

    <div class="panel" style="padding:0; overflow:hidden; margin-bottom:16px;">
      <div style="background:var(--navy-black); padding:22px 24px; color:#dbe7f4;">
        <div style="font-size:10.5px; text-transform:uppercase; letter-spacing:.5px; color:#7c93ac; margin-bottom:12px;">Phase 3 · Price Trail</div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(110px,1fr)); gap:16px; margin-bottom:16px;">
          <div><div style="font-size:11px; color:#9aafc6; margin-bottom:4px;">Direct Delivery Cost</div><div class="mono" id="pc_out_delivery" style="font-size:16px; font-weight:700;">${fmtMoneyDec(initial.deliveryCost)}</div></div>
          <div><div style="font-size:11px; color:#9aafc6; margin-bottom:4px;">Adjusted Pass-Through</div><div class="mono" id="pc_out_passthrough" style="font-size:16px; font-weight:700;">${fmtMoneyDec(initial.passThroughCost)}</div></div>
          <div><div style="font-size:11px; color:#9aafc6; margin-bottom:4px;">Min. Viable Labor Price</div><div class="mono" id="pc_out_minlabor" style="font-size:16px; font-weight:700;">${initial.marginValid?fmtMoneyDec(initial.minViableLabor):'Fix margin above'}</div></div>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; padding-top:16px; border-top:1px dashed rgba(255,255,255,.2); flex-wrap:wrap; gap:12px;">
          <div>
            <div style="font-size:11px; color:#cdeef4; text-transform:uppercase; letter-spacing:.5px;">Final Client Price</div>
            <div class="mono" id="pc_out_final" style="font-size:36px; font-weight:700; color:#fff; line-height:1.1;">${fmtMoney(initial.finalPrice)}</div>
          </div>
          <button type="button" onclick="savePriceCalcQuote()" style="background:#fff; color:var(--navy-deep); font-weight:700; font-size:13px; padding:12px 22px; border-radius:9px; border:none; cursor:pointer;">Save this quote</button>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-head"><h3 style="font-size:19px;">Saved Quotes</h3></div>
      <div id="pc_savedQuotesTable">${renderPriceCalcSavedQuotesTable()}</div>
    </div>
  `;
}
function renderPriceCalcSavedQuotesTable(){
  const rows = [...DATA.priceQuotes].sort((a,b)=>(b.dateAdded||'').localeCompare(a.dateAdded||''));
  return `
    <table>
      <thead><tr><th>Company</th><th>Service Tier</th><th>Type</th><th>Scope</th><th>Final Price</th><th>Saved</th><th></th></tr></thead>
      <tbody>
        ${rows.length ? rows.map(q=>{
          const co = DATA.companies.find(c=>c.id===q.companyId);
          const scopeText = q.pricingType==='HOURLY' ? `${q.scopeHours} hr${q.scopeHours===1?'':'s'}` : `Flat: ${fmtMoney(q.flatCost||0)}`;
          return `
          <tr>
            <td><div class="lead-name">${esc(co?co.name:'General / no company')}</div></td>
            <td class="src">${esc(q.tier)}</td>
            <td><span class="badge ${q.pricingType==='HOURLY'?'lead':'prospect'}">${q.pricingType==='HOURLY'?'Hourly':'Flat Rate'}</span></td>
            <td class="mono">${scopeText}</td>
            <td class="mono" style="font-weight:700; color:var(--navy-deep);">${fmtMoney(q.finalPrice)}</td>
            <td class="mono" style="color:var(--slate); font-size:12px;">${fmtDate(q.dateAdded)}</td>
            <td><div style="display:flex; gap:8px;"><button class="btn-small" onclick="loadPriceCalcQuote('${q.id}')">Load</button><button class="btn-small" onclick="deletePriceCalcQuoteGlobal('${q.id}')">Delete</button></div></td>
          </tr>`;
        }).join('') : `<tr class="empty-row"><td colspan="7">No quotes saved yet. Build one above and click "Save this quote."</td></tr>`}
      </tbody>
    </table>`;
}
function setPcPricingType(type){
  pcPricingType = type;
  const hb = document.getElementById('pc_seg_hourly'), fb = document.getElementById('pc_seg_flat');
  hb.style.background = type==='HOURLY' ? 'var(--navy)' : 'var(--paper)';
  hb.style.color = type==='HOURLY' ? '#fff' : 'var(--slate)';
  fb.style.background = type==='FLAT_RATE' ? 'var(--navy)' : 'var(--paper)';
  fb.style.color = type==='FLAT_RATE' ? '#fff' : 'var(--slate)';
  document.getElementById('pc_wrap_hourly').style.display = type==='HOURLY' ? '' : 'none';
  document.getElementById('pc_wrap_flat').style.display = type==='FLAT_RATE' ? '' : 'none';
  updatePriceCalcLedger();
}
function getPcScopeInputs(){
  const gv = (id, fb)=>{ const el=document.getElementById(id); if(!el) return fb; const v=parseFloat(el.value); return isNaN(v)?fb:v; };
  return { pricingType: pcPricingType, scopeHours: gv('pc_scopeHours',0), flatCost: gv('pc_flatCost',0), passThrough: gv('pc_passThrough',0), passMarkup: gv('pc_passMarkup',0) };
}
function updatePriceCalcLedger(){
  const el = document.getElementById('pc_out_delivery');
  if(!el) return;
  const baseline = computePricingBaseline();
  const result = computePriceQuoteMath(baseline, getPcScopeInputs());
  el.textContent = fmtMoneyDec(result.deliveryCost);
  document.getElementById('pc_out_passthrough').textContent = fmtMoneyDec(result.passThroughCost);
  document.getElementById('pc_out_minlabor').textContent = result.marginValid ? fmtMoneyDec(result.minViableLabor) : 'Fix margin above';
  document.getElementById('pc_out_final').textContent = fmtMoney(result.finalPrice);
}
async function setPricingBaselineFieldAndRefresh(key, value){
  const v = Number(value);
  DATA.settings.pricingBaseline[key] = isNaN(v) ? 0 : v;
  await saveData();
  render();
}
async function savePriceCalcQuote(){
  const tierEl = document.getElementById('pc_tier');
  if(!tierEl){ showToast('Open the Pricing Calculator page first'); return; }
  const tier = tierEl.value.trim();
  if(!tier){ showToast('Name this service tier first'); return; }
  const baseline = computePricingBaseline();
  const scope = getPcScopeInputs();
  const result = computePriceQuoteMath(baseline, scope);
  if(!result.marginValid){ showToast('Fix Target Net Margin first (must be between 1% and 95%)'); return; }
  const companyId = document.getElementById('pc_companyId').value || null;
  DATA.priceQuotes.push({
    id: uid(), companyId, tier, pricingType: scope.pricingType,
    scopeHours: scope.pricingType==='HOURLY' ? scope.scopeHours : null,
    flatCost: scope.pricingType==='FLAT_RATE' ? scope.flatCost : null,
    passThrough: scope.passThrough, passMarkup: scope.passMarkup,
    deliveryCost: result.deliveryCost, passThroughCost: result.passThroughCost,
    minViableLabor: result.minViableLabor, finalPrice: result.finalPrice,
    status: 'Draft', dateAdded: todayISO(),
  });
  await saveData();
  document.getElementById('pc_savedQuotesTable').innerHTML = renderPriceCalcSavedQuotesTable();
  showToast('Quote saved');
}
function loadPriceCalcQuote(id){
  const q = DATA.priceQuotes.find(x=>x.id===id);
  if(!q) return;
  document.getElementById('pc_companyId').value = q.companyId || '';
  document.getElementById('pc_tier').value = q.tier;
  document.getElementById('pc_passThrough').value = q.passThrough;
  document.getElementById('pc_passMarkup').value = q.passMarkup;
  setPcPricingType(q.pricingType);
  if(q.pricingType==='HOURLY'){ document.getElementById('pc_scopeHours').value = q.scopeHours; }
  else { document.getElementById('pc_flatCost').value = q.flatCost; }
  updatePriceCalcLedger();
  showToast('Quote loaded into the calculator');
  window.scrollTo({top:0, behavior:'smooth'});
}
async function deletePriceCalcQuoteGlobal(id){
  DATA.priceQuotes = DATA.priceQuotes.filter(x=>x.id!==id);
  await saveData();
  document.getElementById('pc_savedQuotesTable').innerHTML = renderPriceCalcSavedQuotesTable();
  showToast('Quote deleted');
}

/* ===================== QUOTES (status tracking across all saved quotes) ===================== */
const QUOTE_STATUSES = ['Draft','Sent','Accepted','Rejected'];
const LOSS_REASON_OPTIONS = ['Budget','Timing','Chose a competitor','No response / ghosted','Scope mismatch','Other'];
function quoteStatusBadgeClass(status){
  return {Draft:'prospect', Sent:'lead', Accepted:'customer', Rejected:'past_customer'}[status] || 'prospect';
}
function findPrimaryContactForCompany(companyId){
  return DATA.contacts.find(c=>c.companyId===companyId) || null;
}
/* ===================== CLIENT ONBOARDING CHECKLIST (auto-created when a deal closes) ===================== */
const CLIENT_ONBOARDING_TEMPLATE = [
  'Schedule kickoff call',
  'Send welcome email with team contact info',
  'Collect account access (website, social, ads, analytics)',
  'Upload brand assets and guidelines to the company record',
  'Set up first month in the Content Calendar',
  'Confirm billing details and first invoice date',
  'Schedule first 30-day check-in call',
];
function createClientOnboardingChecklist(companyId, dealName){
  const co = companyId ? DATA.companies.find(c=>c.id===companyId) : null;
  const projectName = `Onboarding: ${co ? co.name : dealName}`;
  DATA.projects.push({
    id: uid(), name: projectName, client: co ? co.name : '', status:'In Progress',
    dueDate: null, description: 'Auto-created onboarding checklist for a newly won deal.', dateAdded: todayISO(),
  });
  CLIENT_ONBOARDING_TEMPLATE.forEach((title, i)=>{
    DATA.tasks.push({
      id: uid(), title, project: projectName, priority: i===0 ? 'High' : 'Medium',
      dueDate: null, done:false, assignedTo:null, billable:false, dateAdded: todayISO(), escalated:false,
    });
  });
  showToast(`Onboarding checklist created${co ? ' for ' + co.name : ''}`);
}

function createDealFromQuote(q){
  const wonStage = DATA.dealStages.find(s=>s.kind==='won') || DATA.dealStages[0];
  const contact = findPrimaryContactForCompany(q.companyId);
  const co = DATA.companies.find(c=>c.id===q.companyId);
  const deal = {
    id: uid(), name: q.tier, contactId: contact ? contact.id : null,
    contactName: contact ? contact.name : (co ? co.name : ''), value: q.finalPrice,
    stage: wonStage.id, dateAdded: todayISO(), wonDate: todayISO(), closeDate: null,
    assignedTo: currentScope().userId, onboardingCreated: true,
  };
  DATA.deals.push(deal);
  createClientOnboardingChecklist(q.companyId, deal.name);
  if(contact && contact.type!=='customer'){
    const prevType = contact.type;
    contact.type = 'customer'; contact.wonDate = todayISO();
    evaluateWorkflowsForContact(contact, {kind:'type_changed', from:prevType, to:'customer'});
  }
  notifyEvent('deal_closed', `"${deal.name}" won via accepted quote (${fmtMoney(deal.value)})`, contact);
  return deal;
}
async function cascadeQuoteAccepted(q){
  if(q.dealId && DATA.deals.find(d=>d.id===q.dealId)) return;
  const deal = createDealFromQuote(q);
  q.dealId = deal.id;
}
let quotesStatusFilter = 'all';
function setQuotesStatusFilter(s){ quotesStatusFilter = s; render(); }
function renderQuotesView(){
  let rows = [...DATA.priceQuotes];
  if(quotesStatusFilter!=='all') rows = rows.filter(q=>q.status===quotesStatusFilter);
  if(searchTerm){
    const s = searchTerm.toLowerCase();
    rows = rows.filter(q=> (q.tier+' '+((DATA.companies.find(c=>c.id===q.companyId)||{}).name||'')).toLowerCase().includes(s));
  }
  rows.sort((a,b)=>(b.dateAdded||'').localeCompare(a.dateAdded||''));
  return `
    <div class="page-head">
      <div><h1>Quotes</h1><p>Every price quote you've built, tracked from Draft through Accepted or Rejected. Accepting a quote automatically creates a Deal. New quotes are built in the Pricing Calculator.</p></div>
      <div class="date-pill">${DATA.priceQuotes.length} total</div>
    </div>
    <div class="view-chips">
      <span class="view-chip ${quotesStatusFilter==='all'?'active':''}" onclick="setQuotesStatusFilter('all')">All</span>
      ${QUOTE_STATUSES.map(s=>`<span class="view-chip ${quotesStatusFilter===s?'active':''}" onclick="setQuotesStatusFilter('${s}')">${s}</span>`).join('')}
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>Company</th><th>Service Tier</th><th>Type</th><th>Final Price</th><th>Status</th><th>Saved</th><th></th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(q=>{
            const co = DATA.companies.find(c=>c.id===q.companyId);
            return `
            <tr>
              <td onclick="openQuoteDetail('${q.id}')"><div class="lead-name">${esc(co?co.name:'General / no company')}</div></td>
              <td class="src" onclick="openQuoteDetail('${q.id}')">${esc(q.tier)}</td>
              <td onclick="openQuoteDetail('${q.id}')"><span class="badge ${q.pricingType==='HOURLY'?'lead':'prospect'}">${q.pricingType==='HOURLY'?'Hourly':'Flat Rate'}</span></td>
              <td class="mono" onclick="openQuoteDetail('${q.id}')" style="font-weight:700; color:var(--navy-deep);">${fmtMoney(q.finalPrice)}</td>
              <td onclick="event.stopPropagation();">
                <select onchange="setQuoteStatus('${q.id}', this.value)" style="padding:6px 10px; border-radius:6px; border:1px solid var(--line); font-size:12px; font-weight:700;">
                  ${QUOTE_STATUSES.map(s=>`<option value="${s}" ${q.status===s?'selected':''}>${s}</option>`).join('')}
                </select>
                ${q.status==='Rejected' && q.lossReason ? `<div style="font-size:10.5px; color:var(--red-text); margin-top:4px;">${esc(q.lossReason)}</div>` : ''}
                ${q.dealId ? `<div style="font-size:10.5px; color:var(--teal-text); margin-top:4px; cursor:pointer;" onclick="event.stopPropagation(); switchView('deals');">→ View Deal</div>` : ''}
              </td>
              <td class="mono" onclick="openQuoteDetail('${q.id}')">${fmtDate(q.dateAdded)}</td>
              <td onclick="event.stopPropagation();"><button class="btn-small" onclick="deletePriceCalcQuoteGlobal('${q.id}')">Delete</button></td>
            </tr>`;
          }).join('') : `<tr class="empty-row"><td colspan="7">No quotes yet. Build one in the Pricing Calculator.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}
async function setQuoteStatus(id, status){
  const q = DATA.priceQuotes.find(x=>x.id===id);
  if(!q) return;
  if(status==='Rejected'){ openLossReasonModal(id, 'quote'); render(); return; }
  q.status = status;
  if(status!=='Rejected') q.lossReason = '';
  if(status==='Accepted'){ await cascadeQuoteAccepted(q); }
  await saveData(); render();
  showToast('Quote status updated');
}
let pendingLossReasonTarget = null;
function openLossReasonModal(id, kind){
  pendingLossReasonTarget = {id, kind};
  document.getElementById('modalTitle').textContent = 'Why was this rejected?';
  document.getElementById('modalBody').innerHTML = `
    <div class="field"><label>Reason</label>
      <select id="loss_reason">${LOSS_REASON_OPTIONS.map(r=>`<option value="${esc(r)}">${esc(r)}</option>`).join('')}</select>
    </div>
    <div class="field"><label>Notes (optional)</label><textarea id="loss_notes" rows="3" placeholder="Any extra context"></textarea></div>
    <p style="font-size:11px; color:var(--slate);">This feeds the Win/Loss Reasons breakdown in Reports, so patterns actually surface over time instead of getting lost.</p>
  `;
  document.getElementById('modalFoot').innerHTML = `<button class="btn-ghost" onclick="closeModal(); render();">Cancel</button><button class="btn-primary" onclick="confirmLossReason()">Mark Rejected</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
async function confirmLossReason(){
  if(!pendingLossReasonTarget) return;
  const reason = document.getElementById('loss_reason').value;
  const notes = document.getElementById('loss_notes').value.trim();
  const {id, kind} = pendingLossReasonTarget;
  const record = kind==='quote' ? DATA.priceQuotes.find(x=>x.id===id) : DATA.proposals.find(x=>x.id===id);
  if(record){
    record.status = 'Rejected';
    record.lossReason = reason;
    record.lossNotes = notes;
    if(kind==='proposal') record.updatedAt = new Date().toISOString();
  }
  pendingLossReasonTarget = null;
  await saveData(); closeModal(); render();
  showToast('Marked Rejected');
}
function openQuoteDetail(id){
  const q = DATA.priceQuotes.find(x=>x.id===id);
  if(!q) return;
  const co = DATA.companies.find(c=>c.id===q.companyId);
  document.getElementById('modalTitle').textContent = q.tier;
  document.getElementById('modalBody').innerHTML = `
    <div class="field-row">
      <div class="field"><label>Company</label><input value="${esc(co?co.name:'General / no company')}" readonly></div>
      <div class="field"><label>Status</label><input value="${esc(q.status)}" readonly></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Pricing Type</label><input value="${q.pricingType==='HOURLY'?'Hourly':'Flat Rate'}" readonly></div>
      <div class="field"><label>Scope</label><input value="${q.pricingType==='HOURLY'?q.scopeHours+' hrs':fmtMoney(q.flatCost||0)}" readonly></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Direct Delivery Cost</label><input value="${fmtMoneyDec(q.deliveryCost)}" readonly></div>
      <div class="field"><label>Adjusted Pass-Through</label><input value="${fmtMoneyDec(q.passThroughCost)}" readonly></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Min. Viable Labor Price</label><input value="${fmtMoneyDec(q.minViableLabor)}" readonly></div>
      <div class="field"><label>Final Client Price</label><input value="${fmtMoney(q.finalPrice)}" readonly></div>
    </div>
    <div class="field"><label>Saved</label><input value="${fmtDate(q.dateAdded)}" readonly></div>
    ${q.status==='Rejected' && q.lossReason ? `<div class="field"><label>Loss Reason</label><input value="${esc(q.lossReason)}${q.lossNotes?' - '+esc(q.lossNotes):''}" readonly></div>` : ''}
    ${q.dealId ? `<p style="font-size:12px; color:var(--teal-text); font-weight:700;">Linked to a Deal in your pipeline (created when accepted).</p>` : ''}
  `;
  document.getElementById('modalFoot').innerHTML = `<button class="btn-danger" onclick="deletePriceCalcQuoteGlobal('${id}')">Delete</button><button class="btn-ghost" onclick="closeModal()">Close</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}

/* ===================== PROPOSALS ===================== */
const PROPOSAL_STATUSES = ['Draft','Sent','Accepted','Rejected'];
let editingProposalId = null;
function renderProposalsView(){
  let rows = [...DATA.proposals];
  if(searchTerm){
    const s = searchTerm.toLowerCase();
    rows = rows.filter(p=> (p.title+' '+((DATA.companies.find(c=>c.id===p.companyId)||{}).name||'')).toLowerCase().includes(s));
  }
  rows.sort((a,b)=>(b.updatedAt||b.dateAdded||'').localeCompare(a.updatedAt||a.dateAdded||''));
  return `
    <div class="page-head">
      <div><h1>Proposals</h1><p>Build proposals inside the CRM, send for e-signature, and auto-convert signed prospects to clients.</p></div>
      <div style="display:flex; gap:8px;">
        <button class="btn-primary" onclick="openNewEsignProposalModal()">+ E-Sign Proposal</button>
        <button class="btn-ghost" onclick="openNewProposalModal()">+ Internal Proposal</button>
      </div>
    </div>
    <div class="panel" style="margin-bottom:20px;">
      <div style="font-weight:700; font-size:13px; margin-bottom:12px; color:var(--ink);">E-Sign Proposals</div>
      <div id="esign-proposals-wrap" style="font-size:13px; color:var(--slate);">Loading...</div>
    </div>
    <div class="panel">
      <div style="font-weight:700; font-size:13px; margin-bottom:12px; color:var(--ink);">Internal Proposals</div>
      <table>
        <thead><tr><th>Title</th><th>Company</th><th>Linked Quote</th><th>Status</th><th>Updated</th><th></th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(p=>{
            const co = DATA.companies.find(c=>c.id===p.companyId);
            const q = DATA.priceQuotes.find(x=>x.id===p.quoteId);
            return `
            <tr onclick="openEditProposal('${p.id}')">
              <td><div class="lead-name">${esc(p.title)}</div></td>
              <td class="src">${esc(co?co.name:'-')}</td>
              <td class="src">${q ? esc(q.tier)+' · '+fmtMoney(q.finalPrice) : '-'}</td>
              <td>
                <span class="badge ${quoteStatusBadgeClass(p.status)}">${esc(p.status)}</span>
                ${p.status==='Rejected' && p.lossReason ? `<div style="font-size:10.5px; color:var(--red-text); margin-top:3px;">${esc(p.lossReason)}</div>` : ''}
                ${p.dealId ? `<div style="font-size:10.5px; color:var(--teal-text); margin-top:3px;">→ Deal created</div>` : ''}
              </td>
              <td class="mono">${fmtDate((p.updatedAt||p.dateAdded||'').slice(0,10))}</td>
              <td onclick="event.stopPropagation();">
                <button class="btn-small" onclick="exportProposalToPDF('${p.id}')">${iconDownload()} Export</button>
                <button class="btn-small" onclick="sendProposalViaOutlook('${p.id}')">${iconMail()} Email</button>
              </td>
            </tr>`;
          }).join('') : `<tr class="empty-row"><td colspan="6">No internal proposals yet. Click "Internal Proposal" to add one.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}
async function loadEsignProposals(){
  const wrap = document.getElementById('esign-proposals-wrap');
  if(!wrap) return;
  if(!agencySupabaseSession || !agencyAccountRequest || !agencyAccountRequest.approved){
    wrap.innerHTML = 'Connect your agency account in Settings to use e-sign proposals.';
    return;
  }
  const sb = getSupabaseClient();
  if(!sb){ wrap.innerHTML = 'Could not load.'; return; }
  try{
    const { data, error } = await sb.from('proposals').select('id,prospect_name,prospect_email,title,status,signed_at,created_at,client_id').order('created_at',{ascending:false});
    if(error) throw error;
    const rows = data || [];
    if(!rows.length){ wrap.innerHTML = '<span style="color:var(--slate);">No e-sign proposals sent yet. Click "E-Sign Proposal" to create and send one.</span>'; return; }
    const statusColor = s => s==='signed'?'#276749':s==='declined'?'#9b2c2c':s==='sent'?'#2b6cb0':'#744210';
    const statusBg = s => s==='signed'?'#c6f6d5':s==='declined'?'#fed7d7':s==='sent'?'#bee3f8':'#fefcbf';
    wrap.innerHTML = `<table style="width:100%; border-collapse:collapse; font-size:13px;">
      <thead><tr style="color:var(--slate); font-size:11.5px; border-bottom:1px solid var(--line);">
        <th style="text-align:left; padding:6px;">Title</th>
        <th style="text-align:left; padding:6px;">Prospect</th>
        <th style="text-align:left; padding:6px;">Status</th>
        <th style="text-align:left; padding:6px;">Sent</th>
        <th style="text-align:left; padding:6px;">Signed</th>
        <th style="padding:6px;"></th>
      </tr></thead>
      <tbody>${rows.map(p=>`<tr style="border-top:1px solid var(--line);">
        <td style="padding:7px 6px; font-weight:600;">${esc(p.title)}</td>
        <td style="padding:7px 6px; color:var(--slate);">${esc(p.prospect_name||'')} ${p.prospect_email?`<div style="font-size:11px;">${esc(p.prospect_email)}</div>`:''}</td>
        <td style="padding:7px 6px;"><span style="background:${statusBg(p.status)}; color:${statusColor(p.status)}; border-radius:4px; padding:2px 7px; font-size:11.5px; font-weight:600;">${p.status}</span>${p.status==='signed'&&!p.client_id?` <button class="btn-small" onclick="convertSignedProspectToClient('${p.id}','${esc(p.prospect_email)}','${esc(p.prospect_name)}')">Convert to client</button>`:''}</td>
        <td style="padding:7px 6px; color:var(--slate); font-size:11.5px;">${fmtDate(p.created_at?.slice(0,10))}</td>
        <td style="padding:7px 6px; color:var(--slate); font-size:11.5px;">${p.signed_at?fmtDate(p.signed_at.slice(0,10)):'-'}</td>
        <td style="padding:7px 6px;"><button class="btn-small" onclick="openEsignProposalDetail('${p.id}')">View</button></td>
      </tr>`).join('')}</tbody>
    </table>`;
  }catch(err){ console.error(err); wrap.innerHTML = 'Could not load e-sign proposals.'; }
}
function openNewEsignProposalModal(){
  if(!agencySupabaseSession || !agencyAccountRequest || !agencyAccountRequest.approved){
    showToast('Connect your agency account in Settings first');
    return;
  }
  document.getElementById('modalPanel').style.maxWidth = '700px';
  document.getElementById('modalTitle').textContent = 'New E-Sign Proposal';
  document.getElementById('modalBody').innerHTML = `
    <div class="field-row">
      ${fld('ep_prospect_name','Prospect Name','','Full name')}
      ${fld('ep_prospect_email','Prospect Email','','email@company.com','email')}
    </div>
    ${fld('ep_title','Proposal Title','','e.g. Social Media Management Proposal')}
    <div class="field"><label>Proposal Content (HTML supported)</label>
      <textarea id="ep_body_html" rows="14" placeholder="Write your full proposal here. You can use HTML formatting."
        style="font-family:monospace; font-size:12px;"></textarea>
    </div>
  `;
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="saveEsignProposal()">Create and copy portal link</button>
  `;
  document.getElementById('modalBackdrop').classList.add('open');
}
async function saveEsignProposal(){
  const name = document.getElementById('ep_prospect_name').value.trim();
  const email = document.getElementById('ep_prospect_email').value.trim();
  const title = document.getElementById('ep_title').value.trim();
  const body_html = document.getElementById('ep_body_html').value.trim();
  if(!name||!email||!title){ showToast('Name, email and title are all required'); return; }
  const sb = getSupabaseClient();
  if(!sb) return;
  try{
    const { data, error } = await sb.from('proposals').insert({
      prospect_name: name, prospect_email: email,
      title, body_html, status: 'sent'
    }).select('id').single();
    if(error) throw error;
    const link = `https://portal.favze.com/portal-proposal.html?id=${data.id}`;
    await navigator.clipboard.writeText(link).catch(()=>{});
    closeModal();
    showToast('Proposal created - signing link copied to clipboard');
    loadEsignProposals();
  }catch(err){ console.error(err); showToast('Could not create proposal'); }
}
async function openEsignProposalDetail(id){
  const sb = getSupabaseClient();
  if(!sb) return;
  try{
    const { data, error } = await sb.from('proposals').select('*').eq('id',id).single();
    if(error) throw error;
    const p = data;
    const link = `https://portal.favze.com/portal-proposal.html?id=${p.id}`;
    document.getElementById('modalPanel').style.maxWidth = '680px';
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalBody').innerHTML = `
      <div style="display:flex; gap:12px; margin-bottom:16px; flex-wrap:wrap;">
        <div style="background:var(--paper); border-radius:8px; padding:10px 14px; flex:1;">
          <div style="font-size:11px; color:var(--slate);">Prospect</div>
          <div style="font-weight:700;">${esc(p.prospect_name)}</div>
          <div style="font-size:12px; color:var(--slate);">${esc(p.prospect_email)}</div>
        </div>
        <div style="background:var(--paper); border-radius:8px; padding:10px 14px; min-width:120px;">
          <div style="font-size:11px; color:var(--slate);">Status</div>
          <div style="font-weight:700; text-transform:capitalize;">${p.status}</div>
        </div>
        ${p.signed_at?`<div style="background:var(--paper); border-radius:8px; padding:10px 14px;">
          <div style="font-size:11px; color:var(--slate);">Signed by</div>
          <div style="font-weight:700;">${esc(p.signed_name||'')}</div>
          <div style="font-size:11.5px; color:var(--slate);">${fmtDate(p.signed_at.slice(0,10))}</div>
        </div>`:''}
      </div>
      <div style="margin-bottom:14px;">
        <label style="font-size:11.5px; font-weight:700; color:var(--slate);">Signing Link</label>
        <div style="display:flex; gap:8px; margin-top:4px;">
          <input value="${link}" readonly style="flex:1; font-size:12px; color:var(--slate);">
          <button class="btn-small" onclick="navigator.clipboard.writeText('${link}').then(()=>showToast('Link copied'))">Copy</button>
        </div>
      </div>
      <div style="border:1px solid var(--line); border-radius:8px; padding:14px; max-height:300px; overflow-y:auto; font-size:13.5px; line-height:1.6;">
        ${p.body_html || '<em style="color:var(--slate);">No content</em>'}
      </div>
    `;
    document.getElementById('modalFoot').innerHTML = `<button class="btn-ghost" onclick="closeModal()">Close</button>${p.status==='signed'?`<button class="btn-primary" onclick="convertSignedProspectToClient('${p.id}','${esc(p.prospect_email)}','${esc(p.prospect_name)}')">Convert to client</button>`:''}`;
    document.getElementById('modalBackdrop').classList.add('open');
  }catch(err){ console.error(err); showToast('Could not load proposal'); }
}
async function convertSignedProspectToClient(proposalId, email, name){
  if(!confirm(`Convert ${name} to a client? This creates a CRM contact with client status.`)) return;
  const existing = DATA.contacts.find(c=>c.email===email);
  if(existing){
    existing.type = 'customer';
    await saveData();
    showToast(`${name} updated to client status`);
    closeModal(); render();
    return;
  }
  const newContact = {
    id: uid(), name, email, type:'customer', stage:'',
    dateAdded: todayISO(), updatedAt: new Date().toISOString(),
    companyId:null, assignedTo:null, source:'Referral', dealValue:0,
    phone:'', notes:'', tags:[], portalUid:null, relationships:[],
    contract:{clientSince:todayISO(), retainerType:'', monthlyRetainer:0, contractStart:todayISO(), contractEnd:'', autoRenew:false, ltv:0, estMonthlyHours:'', assetQuota:''},
  };
  DATA.contacts.push(newContact);
  await saveData();
  showToast(`${name} added as a client`);
  closeModal(); render();
}
function sendProposalViaOutlook(id){
  const p = DATA.proposals.find(x=>x.id===id);
  if(!p) return;
  const co = DATA.companies.find(c=>c.id===p.companyId);
  const contact = co ? findPrimaryContactForCompany(co.id) : null;
  const q = DATA.priceQuotes.find(x=>x.id===p.quoteId);
  let body = p.content || '';
  if(q){ body += `\n\nService: ${q.tier}\nInvestment: ${fmtMoney(q.finalPrice)}`; }
  openComposeEmailModal(contact ? contact.email : '', p.title, body);
}
function proposalQuoteOptions(companyId){
  return DATA.priceQuotes.filter(q=> !companyId || q.companyId===companyId);
}
function openNewProposalModal(){
  editingProposalId = null;
  document.getElementById('modalPanel').style.maxWidth = '680px';
  document.getElementById('modalTitle').textContent = 'New Proposal';
  document.getElementById('modalBody').innerHTML = proposalFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `<button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveProposalForm()">Add proposal</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
  bindProposalQuoteFilter();
}
function openEditProposal(id){
  editingProposalId = id;
  const p = DATA.proposals.find(x=>x.id===id);
  if(!p) return;
  document.getElementById('modalPanel').style.maxWidth = '680px';
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalBody').innerHTML = proposalFormHTML(p);
  document.getElementById('modalFoot').innerHTML = `<button class="btn-danger" onclick="deleteProposal('${id}')">Delete</button><div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="sendProposalViaOutlook('${id}')">${iconMail()} Send via Outlook</button><button class="btn-ghost" onclick="exportProposalToPDF('${id}')">${iconDownload()} Export PDF</button><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveProposalForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
  bindProposalQuoteFilter();
}
function proposalFormHTML(p){
  p = p || {title:'', companyId:'', quoteId:'', content:'', status:'Draft', followUpDate:'', lossReason:'', dealId:null};
  const companies = [...DATA.companies].sort((a,b)=>a.name.localeCompare(b.name));
  return `
    ${fld('prop_title','Proposal Title',p.title,'e.g. SEO Retainer Proposal - Q3')}
    <div class="field-row">
      <div class="field"><label>Company</label>
        <select id="prop_companyId">
          <option value="">No company</option>
          ${companies.map(c=>`<option value="${c.id}" ${p.companyId===c.id?'selected':''}>${esc(c.name)}</option>`).join('')}
        </select>
      </div>
      <div class="field"><label>Status</label>
        <select id="prop_status" onchange="toggleProposalStatusFields(this.value)">${PROPOSAL_STATUSES.map(s=>`<option value="${s}" ${p.status===s?'selected':''}>${s}</option>`).join('')}</select>
      </div>
    </div>
    <div class="field" id="prop_followUpWrap" style="${p.status==='Sent'?'':'display:none;'}">
      <label>Follow-up Date (creates a reminder automatically)</label>
      <input type="date" id="prop_followUpDate" value="${p.followUpDate||''}">
    </div>
    <div class="field" id="prop_lossReasonWrap" style="${p.status==='Rejected'?'':'display:none;'}">
      <label>Loss Reason</label>
      <select id="prop_lossReason">${LOSS_REASON_OPTIONS.map(r=>`<option value="${esc(r)}" ${p.lossReason===r?'selected':''}>${esc(r)}</option>`).join('')}</select>
    </div>
    <div class="field"><label>Linked Quote (optional)</label>
      <select id="prop_quoteId">
        <option value="">No linked quote</option>
        ${proposalQuoteOptions(p.companyId).map(q=>`<option value="${q.id}" ${p.quoteId===q.id?'selected':''}>${esc(q.tier)} · ${fmtMoney(q.finalPrice)}</option>`).join('')}
      </select>
    </div>
    <button type="button" class="btn-small" onclick="insertQuoteSummaryIntoProposal()" style="margin-bottom:10px;">${iconPlus()} Insert quote summary into content</button>
    <div class="field"><label>Content</label><textarea id="prop_content" rows="10" placeholder="Write the proposal content here">${esc(p.content)}</textarea></div>
    ${p.dealId ? `<p style="font-size:11.5px; color:var(--teal-text); font-weight:700;">Linked to a Deal in your pipeline (created when accepted).</p>` : ''}
  `;
}
function toggleProposalStatusFields(status){
  const fu = document.getElementById('prop_followUpWrap'), lr = document.getElementById('prop_lossReasonWrap');
  if(fu) fu.style.display = status==='Sent' ? '' : 'none';
  if(lr) lr.style.display = status==='Rejected' ? '' : 'none';
}
function bindProposalQuoteFilter(){
  const companySel = document.getElementById('prop_companyId');
  const quoteSel = document.getElementById('prop_quoteId');
  if(!companySel || !quoteSel) return;
  companySel.onchange = ()=>{
    const options = proposalQuoteOptions(companySel.value);
    quoteSel.innerHTML = `<option value="">No linked quote</option>` + options.map(q=>`<option value="${q.id}">${esc(q.tier)} · ${fmtMoney(q.finalPrice)}</option>`).join('');
  };
}
function insertQuoteSummaryIntoProposal(){
  const quoteId = document.getElementById('prop_quoteId').value;
  const q = DATA.priceQuotes.find(x=>x.id===quoteId);
  if(!q){ showToast('Pick a linked quote first'); return; }
  const contentEl = document.getElementById('prop_content');
  const scopeText = q.pricingType==='HOURLY' ? `${q.scopeHours} hours` : `flat rate`;
  const summary = `Service: ${q.tier}\nScope: ${scopeText}\nInvestment: ${fmtMoney(q.finalPrice)}\n\n`;
  contentEl.value = summary + contentEl.value;
  showToast('Quote summary inserted');
}
async function saveProposalForm(){
  const title = document.getElementById('prop_title').value.trim();
  if(!title){ showToast('Proposal title is required'); return; }
  const status = document.getElementById('prop_status').value;
  const followUpDate = document.getElementById('prop_followUpDate') ? document.getElementById('prop_followUpDate').value : '';
  const lossReason = document.getElementById('prop_lossReason') ? document.getElementById('prop_lossReason').value : '';
  const payload = {
    title,
    companyId: document.getElementById('prop_companyId').value || null,
    quoteId: document.getElementById('prop_quoteId').value || null,
    status,
    followUpDate,
    lossReason: status==='Rejected' ? lossReason : '',
    content: document.getElementById('prop_content').value,
  };
  const prevStatus = editingProposalId ? (DATA.proposals.find(x=>x.id===editingProposalId)||{}).status : null;
  let proposal;
  if(editingProposalId){
    proposal = DATA.proposals.find(x=>x.id===editingProposalId);
    Object.assign(proposal, payload, {updatedAt: new Date().toISOString()});
  } else {
    proposal = { id: uid(), dateAdded: todayISO(), updatedAt: new Date().toISOString(), dealId: null, reminderId: null, ...payload };
    DATA.proposals.push(proposal);
  }
  if(status==='Sent' && followUpDate && !proposal.reminderId){
    const co = DATA.companies.find(c=>c.id===proposal.companyId);
    const reminder = { id: uid(), dateAdded: todayISO(), done:false, contactId:null,
      text: `Follow up on proposal "${proposal.title}"${co?' - '+co.name:''}`, dueDate: followUpDate };
    DATA.reminders.push(reminder);
    proposal.reminderId = reminder.id;
  }
  if(status==='Accepted' && prevStatus!=='Accepted' && proposal.quoteId){
    const q = DATA.priceQuotes.find(x=>x.id===proposal.quoteId);
    if(q){
      if(q.status!=='Accepted'){ q.status = 'Accepted'; q.lossReason = ''; }
      await cascadeQuoteAccepted(q);
      proposal.dealId = q.dealId;
    }
  }
  await saveData(); closeModal(); render();
  showToast(editingProposalId ? 'Proposal updated' : 'Proposal added');
}
async function deleteProposal(id){
  DATA.proposals = DATA.proposals.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Proposal deleted');
}

/* ===================== SERVICE REQUESTS ===================== */
const SERVICE_REQUEST_STATUSES = ['New','In Review','Approved','Declined','Converted'];
const SERVICE_REQUEST_PRIORITIES = ['Low','Medium','High'];
let serviceRequestStatusFilter = 'all';
function setServiceRequestStatusFilter(s){ serviceRequestStatusFilter = s; render(); }
function renderServiceRequestsView(){
  let rows = [...DATA.serviceRequests];
  if(serviceRequestStatusFilter!=='all') rows = rows.filter(r=>r.status===serviceRequestStatusFilter);
  if(searchTerm){
    const s = searchTerm.toLowerCase();
    rows = rows.filter(r=> (r.title+' '+((DATA.companies.find(c=>c.id===r.companyId)||{}).name||'')).toLowerCase().includes(s));
  }
  rows.sort((a,b)=>(b.updatedAt||b.dateAdded||'').localeCompare(a.updatedAt||a.dateAdded||''));
  return `
    <div class="page-head">
      <div><h1>Service Requests</h1><p>New work a client or prospect has asked for, tracked from request through approval, decline, or conversion into a real quote.</p></div>
      <div class="date-pill">${DATA.serviceRequests.length} total</div>
    </div>
    <div class="view-chips">
      <span class="view-chip ${serviceRequestStatusFilter==='all'?'active':''}" onclick="setServiceRequestStatusFilter('all')">All</span>
      ${SERVICE_REQUEST_STATUSES.map(s=>`<span class="view-chip ${serviceRequestStatusFilter===s?'active':''}" onclick="setServiceRequestStatusFilter('${s}')">${s}</span>`).join('')}
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>Title</th><th>Company</th><th>Priority</th><th>Status</th><th>Added</th><th></th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(r=>{
            const co = DATA.companies.find(c=>c.id===r.companyId);
            return `
            <tr onclick="openEditServiceRequest('${r.id}')">
              <td><div class="lead-name">${esc(r.title)}</div></td>
              <td class="src">${esc(co?co.name:'-')}</td>
              <td><span class="badge ${r.priority==='High'?'hot':(r.priority==='Medium'?'lead':'prospect')}">${esc(r.priority)}</span></td>
              <td onclick="event.stopPropagation();">
                <select onchange="setServiceRequestStatus('${r.id}', this.value)" style="padding:6px 10px; border-radius:6px; border:1px solid var(--line); font-size:12px; font-weight:700;">
                  ${SERVICE_REQUEST_STATUSES.map(s=>`<option value="${s}" ${r.status===s?'selected':''}>${s}</option>`).join('')}
                </select>
              </td>
              <td class="mono">${fmtDate(r.dateAdded)}</td>
              <td onclick="event.stopPropagation();"><button class="btn-small" onclick="convertServiceRequestToQuote('${r.id}')">${iconPlus()} Build Quote</button></td>
            </tr>`;
          }).join('') : `<tr class="empty-row"><td colspan="6">No service requests yet.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}
async function setServiceRequestStatus(id, status){
  const r = DATA.serviceRequests.find(x=>x.id===id);
  if(!r) return;
  r.status = status;
  r.updatedAt = new Date().toISOString();
  await saveData(); render();
  showToast('Request updated');
}
async function convertServiceRequestToQuote(id){
  const r = DATA.serviceRequests.find(x=>x.id===id);
  if(!r) return;
  r.status = 'Converted';
  r.updatedAt = new Date().toISOString();
  await saveData();
  switchView('pricecalc', {t:'quote', tier:r.title, companyId:r.companyId, toast:'Loaded into Pricing Calculator'});
}
let editingServiceRequestId = null;
function openNewServiceRequestModal(){
  editingServiceRequestId = null;
  document.getElementById('modalTitle').textContent = 'New Service Request';
  document.getElementById('modalBody').innerHTML = serviceRequestFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `<button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveServiceRequestForm()">Add request</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function openEditServiceRequest(id){
  editingServiceRequestId = id;
  const r = DATA.serviceRequests.find(x=>x.id===id);
  if(!r) return;
  document.getElementById('modalTitle').textContent = r.title;
  document.getElementById('modalBody').innerHTML = serviceRequestFormHTML(r);
  document.getElementById('modalFoot').innerHTML = `<button class="btn-danger" onclick="deleteServiceRequest('${id}')">Delete</button><div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveServiceRequestForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function serviceRequestFormHTML(r){
  r = r || {title:'', companyId:'', description:'', priority:'Medium'};
  const companies = [...DATA.companies].sort((a,b)=>a.name.localeCompare(b.name));
  return `
    ${fld('sr_title','Request Title',r.title,'e.g. Add a blog section to the site')}
    <div class="field"><label>Company</label>
      <select id="sr_companyId">
        <option value="">No company</option>
        ${companies.map(co=>`<option value="${co.id}" ${r.companyId===co.id?'selected':''}>${esc(co.name)}</option>`).join('')}
      </select>
    </div>
    ${taFld('sr_description','Description',r.description,'What are they asking for')}
    <div class="field"><label>Priority</label>
      <select id="sr_priority">${SERVICE_REQUEST_PRIORITIES.map(p=>`<option value="${p}" ${r.priority===p?'selected':''}>${p}</option>`).join('')}</select>
    </div>
  `;
}
async function saveServiceRequestForm(){
  const title = document.getElementById('sr_title').value.trim();
  if(!title){ showToast('Title is required'); return; }
  const payload = {
    title, companyId: document.getElementById('sr_companyId').value || null,
    description: document.getElementById('sr_description').value.trim(),
    priority: document.getElementById('sr_priority').value,
  };
  if(editingServiceRequestId){
    Object.assign(DATA.serviceRequests.find(x=>x.id===editingServiceRequestId), payload, {updatedAt: new Date().toISOString()});
  } else {
    DATA.serviceRequests.push({ id: uid(), status:'New', dateAdded: todayISO(), updatedAt: new Date().toISOString(), ...payload });
  }
  await saveData(); closeModal(); render();
  showToast(editingServiceRequestId ? 'Request updated' : 'Request added');
}
async function deleteServiceRequest(id){
  DATA.serviceRequests = DATA.serviceRequests.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Request deleted');
}

/* ===================== SUPPORT TICKETS (with comment thread) ===================== */
const TICKET_STATUSES = ['Open','In Progress','Waiting on Client','Resolved','Closed'];
const TICKET_PRIORITIES = ['Low','Medium','High','Urgent'];
const TICKET_CATEGORIES = ['Technical','Billing','Content','General'];
function ticketStatusBadgeClass(status){
  return {'Open':'hot','In Progress':'lead','Waiting on Client':'prospect','Resolved':'customer','Closed':'past_customer'}[status] || 'lead';
}
let ticketStatusFilter = 'all';
function setTicketStatusFilter(s){ ticketStatusFilter = s; render(); }
function renderSupportTicketsView(){
  let rows = [...DATA.supportTickets];
  if(ticketStatusFilter!=='all') rows = rows.filter(t=>t.status===ticketStatusFilter);
  if(searchTerm){
    const s = searchTerm.toLowerCase();
    rows = rows.filter(t=> (t.subject+' '+((DATA.companies.find(c=>c.id===t.companyId)||{}).name||'')).toLowerCase().includes(s));
  }
  rows.sort((a,b)=>(b.updatedAt||b.dateAdded||'').localeCompare(a.updatedAt||a.dateAdded||''));
  return `
    <div class="page-head">
      <div><h1>Support Tickets</h1><p>Client issues and help requests, tracked to resolution with a comment thread on each one.</p></div>
      <div class="date-pill">${DATA.supportTickets.length} total</div>
    </div>
    <div class="view-chips">
      <span class="view-chip ${ticketStatusFilter==='all'?'active':''}" onclick="setTicketStatusFilter('all')">All</span>
      ${TICKET_STATUSES.map(s=>`<span class="view-chip ${ticketStatusFilter===s?'active':''}" onclick="setTicketStatusFilter('${s}')">${s}</span>`).join('')}
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>Subject</th><th>Company</th><th>Category</th><th>Priority</th><th>Status</th><th>Updated</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(t=>{
            const co = DATA.companies.find(c=>c.id===t.companyId);
            return `
            <tr onclick="openTicketDetail('${t.id}')">
              <td><div class="lead-name">${esc(t.subject)}</div></td>
              <td class="src">${esc(co?co.name:'-')}</td>
              <td class="src">${esc(t.category||'-')}</td>
              <td><span class="badge ${t.priority==='Urgent'||t.priority==='High'?'hot':'lead'}">${esc(t.priority)}</span></td>
              <td><span class="badge ${ticketStatusBadgeClass(t.status)}">${esc(t.status)}</span></td>
              <td class="mono">${fmtDate((t.updatedAt||t.dateAdded||'').slice(0,10))}</td>
            </tr>`;
          }).join('') : `<tr class="empty-row"><td colspan="6">No support tickets yet.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}
function openNewTicketModal(){
  document.getElementById('modalTitle').textContent = 'New Support Ticket';
  document.getElementById('modalBody').innerHTML = ticketFormHTML();
  document.getElementById('modalFoot').innerHTML = `<button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveNewTicketForm()">Create ticket</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function ticketFormHTML(){
  const companies = [...DATA.companies].sort((a,b)=>a.name.localeCompare(b.name));
  return `
    ${fld('tk_subject','Subject','','e.g. Website contact form not sending')}
    <div class="field-row">
      <div class="field"><label>Company</label>
        <select id="tk_companyId">
          <option value="">No company</option>
          ${companies.map(co=>`<option value="${co.id}">${esc(co.name)}</option>`).join('')}
        </select>
      </div>
      <div class="field"><label>Category</label>
        <select id="tk_category">${TICKET_CATEGORIES.map(c=>`<option value="${c}">${c}</option>`).join('')}</select>
      </div>
    </div>
    <div class="field"><label>Priority</label>
      <select id="tk_priority">${TICKET_PRIORITIES.map(p=>`<option value="${p}" ${p==='Medium'?'selected':''}>${p}</option>`).join('')}</select>
    </div>
    ${taFld('tk_description','Description','','What is the issue')}
  `;
}
async function saveNewTicketForm(){
  const subject = document.getElementById('tk_subject').value.trim();
  if(!subject){ showToast('Subject is required'); return; }
  const t = {
    id: uid(), subject,
    companyId: document.getElementById('tk_companyId').value || null,
    category: document.getElementById('tk_category').value,
    priority: document.getElementById('tk_priority').value,
    description: document.getElementById('tk_description').value.trim(),
    status: 'Open', assignedTo: null, comments: [],
    dateAdded: todayISO(), updatedAt: new Date().toISOString(), resolvedAt: null,
  };
  DATA.supportTickets.push(t);
  await saveData(); closeModal(); render();
  showToast('Ticket created');
}
function openTicketDetail(id){
  const t = DATA.supportTickets.find(x=>x.id===id);
  if(!t) return;
  document.getElementById('modalPanel').style.maxWidth = '600px';
  document.getElementById('modalTitle').textContent = t.subject;
  document.getElementById('modalBody').innerHTML = ticketDetailHTML(t);
  document.getElementById('modalFoot').innerHTML = `<button class="btn-danger" onclick="deleteTicket('${id}')">Delete</button><button class="btn-ghost" onclick="closeModal()">Close</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function ticketDetailHTML(t){
  const co = DATA.companies.find(c=>c.id===t.companyId);
  const contact = findPrimaryContactForCompany(t.companyId);
  return `
    <div class="field-row">
      <div class="field"><label>Company</label><input value="${esc(co?co.name:'-')}" readonly></div>
      <div class="field"><label>Contact</label><input value="${esc(contact?contact.name:'-')}" readonly></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Status</label>
        <select onchange="setTicketField('${t.id}','status',this.value)">${TICKET_STATUSES.map(s=>`<option value="${s}" ${t.status===s?'selected':''}>${s}</option>`).join('')}</select>
      </div>
      <div class="field"><label>Priority</label>
        <select onchange="setTicketField('${t.id}','priority',this.value)">${TICKET_PRIORITIES.map(s=>`<option value="${s}" ${t.priority===s?'selected':''}>${s}</option>`).join('')}</select>
      </div>
    </div>
    <div class="field"><label>Assigned To</label>
      <select onchange="setTicketField('${t.id}','assignedTo',this.value)">
        <option value="">Unassigned</option>
        ${DATA.users.map(u=>`<option value="${u.id}" ${t.assignedTo===u.id?'selected':''}>${esc(u.name)}</option>`).join('')}
      </select>
    </div>
    <div class="field"><label>Description</label><textarea rows="4" readonly>${esc(t.description)}</textarea></div>
    <div id="ticketCommentsPanel">${ticketCommentsHTML(t)}</div>
  `;
}
function ticketCommentsHTML(t){
  return `
    <div style="margin-top:10px;">
      <label style="display:block; font-size:11.5px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:8px;">Comments</label>
      ${(t.comments||[]).map(c=>{
        const u = DATA.users.find(x=>x.id===c.authorId);
        return `<div class="feed-comment"><div class="fc-avatar">${esc(initials(u?u.name:'?'))}</div><div class="fc-body"><div class="fc-name">${esc(u?u.name:'Unknown')}</div><div class="fc-text">${esc(c.text)}</div></div></div>`;
      }).join('') || '<p style="font-size:12px; color:var(--slate);">No comments yet.</p>'}
      <div class="feed-comment-input" style="margin-top:10px;">
        <input id="ticketCommentInput_${t.id}" placeholder="Add a comment..." onkeydown="if(event.key==='Enter'){ addTicketComment('${t.id}'); }">
        <button onclick="addTicketComment('${t.id}')">Post</button>
      </div>
    </div>
  `;
}
async function setTicketField(id, field, value){
  const t = DATA.supportTickets.find(x=>x.id===id);
  if(!t) return;
  t[field] = value || null;
  t.updatedAt = new Date().toISOString();
  if(field==='status' && (value==='Resolved'||value==='Closed') && !t.resolvedAt) t.resolvedAt = todayISO();
  await saveData(); render();
  showToast('Ticket updated');
}
async function addTicketComment(id){
  const input = document.getElementById('ticketCommentInput_'+id);
  const text = input.value.trim();
  if(!text) return;
  const t = DATA.supportTickets.find(x=>x.id===id);
  if(!t) return;
  t.comments = t.comments || [];
  t.comments.push({ id: uid(), authorId: currentScope().userId, text, dateAdded: new Date().toISOString() });
  t.updatedAt = new Date().toISOString();
  await saveData();
  document.getElementById('ticketCommentsPanel').innerHTML = ticketCommentsHTML(t);
}
async function deleteTicket(id){
  DATA.supportTickets = DATA.supportTickets.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Ticket deleted');
}

/* ===================== CONTENT APPROVAL (connected to Content Calendar: same items, same comment thread) ===================== */
const CONTENT_APPROVAL_STATUSES = ['Not Submitted','Pending Review','Approved','Rejected','Revisions Requested'];
function contentApprovalStatusBadgeClass(status){
  return {'Pending Review':'lead','Approved':'customer','Rejected':'past_customer','Revisions Requested':'prospect','Not Submitted':'prospect'}[status] || 'prospect';
}
async function submitContentForApproval(id){
  const item = DATA.contentCalendar.find(x=>x.id===id);
  if(!item) return;
  item.approvalStatus = 'Pending Review';
  await saveData(); render();
  syncContentItemToPortal(item);
  showToast('Submitted for approval');
}
async function setContentApprovalStatus(id, status){
  const item = DATA.contentCalendar.find(x=>x.id===id);
  if(!item) return;
  item.approvalStatus = status;
  await saveData(); render();
  syncContentItemToPortal(item);
  showToast('Marked ' + status);
}
let contentApprovalStatusFilter = 'all';
function setContentApprovalStatusFilter(s){ contentApprovalStatusFilter = s; render(); }
function renderContentApprovalView(){
  let rows = DATA.contentCalendar.filter(i => i.approvalStatus && i.approvalStatus !== 'Not Submitted');
  if(contentApprovalStatusFilter!=='all') rows = rows.filter(i=>i.approvalStatus===contentApprovalStatusFilter);
  if(searchTerm){
    const s = searchTerm.toLowerCase();
    rows = rows.filter(i=> (i.title+' '+(i.description||'')).toLowerCase().includes(s));
  }
  rows.sort((a,b)=> (b.date||'').localeCompare(a.date||''));
  const reviewStatuses = ['Pending Review','Revisions Requested','Approved','Rejected'];
  return `
    <div class="page-head">
      <div><h1>Content Approval</h1><p>Every piece from the Content Calendar that's been submitted for sign-off. Approve, reject, or request revisions right here, same comment thread as the calendar post itself, or the client's own approval in the Favze Portal.</p></div>
      <div class="csv-actions">
        <button class="btn-small" onclick="checkPortalUpdates()">${iconDownload()} Check for portal updates</button>
        <div class="date-pill">${rows.length} in review</div>
      </div>
    </div>
    <div class="view-chips">
      <span class="view-chip ${contentApprovalStatusFilter==='all'?'active':''}" onclick="setContentApprovalStatusFilter('all')">All</span>
      ${reviewStatuses.map(s=>`<span class="view-chip ${contentApprovalStatusFilter===s?'active':''}" onclick="setContentApprovalStatusFilter('${s}')">${s}</span>`).join('')}
    </div>
    ${rows.length ? rows.map(i=>{
      const contact = DATA.contacts.find(c=>c.id===i.contactId);
      const type = contentTypeMeta(i.type);
      return `
      <div class="feed-card">
        <div class="feed-head">
          <div class="feed-avatar" style="background:${avatarColor(i.contactId||i.id)};">${esc(initials(contact?contact.name:(i.contactId?'?':'FZ')))}</div>
          <div>
            <div class="feed-who">${esc(contact?contact.name:'Favze (no specific client)')}</div>
            <div class="feed-meta"><span class="feed-type-pill" style="background:${safeBgForWhiteText(type.color)};">${type.label}</span> ${fmtDate(i.date)}
              <span class="badge ${contentApprovalStatusBadgeClass(i.approvalStatus)}" style="margin-left:4px;">${esc(i.approvalStatus)}</span>
            </div>
          </div>
        </div>
        <div class="feed-title" onclick="openEditContent('${i.id}')">${esc(i.title || type.label)}</div>
        ${i.description ? `<div class="feed-desc">${esc(i.description)}</div>` : ''}
        ${i.caption ? `<div class="feed-caption">"${esc(i.caption)}"</div>` : ''}
        ${(i.imageUrls&&i.imageUrls.length) ? `<div class="photo-carousel">${i.imageUrls.filter(u=>isSafeHttpUrl(u)||isSafeDataUrl(u)).map(u=>`<img src="${esc(u)}" onclick="window.open('${escJs(u)}','_blank','noopener,noreferrer')" alt="Content photo">`).join('')}</div>` : ''}
        ${i.mediaUrl ? `<a class="feed-media" href="${safeHref(i.mediaUrl)}" target="_blank" rel="noopener noreferrer">${iconPhone()} View media</a>` : ''}
        <div style="display:flex; gap:8px; margin:10px 0; flex-wrap:wrap;">
          <button class="btn-small" style="background:var(--green-soft); color:var(--green-text); border-color:var(--green);" onclick="setContentApprovalStatus('${i.id}','Approved')">${iconCheck()} Approve</button>
          <button class="btn-small" style="background:var(--amber-soft); color:var(--amber-text); border-color:var(--amber);" onclick="setContentApprovalStatus('${i.id}','Revisions Requested')">Request Revisions</button>
          <button class="btn-small" style="background:var(--red-soft); color:var(--red-text); border-color:var(--red);" onclick="setContentApprovalStatus('${i.id}','Rejected')">${iconX()} Reject</button>
        </div>
        <div class="feed-actions">
          <button class="feed-action-btn" onclick="document.getElementById('cmt_${i.id}').focus()">${iconMail()} Comment ${(i.comments||[]).length ? `(${i.comments.length})` : ''}</button>
          <button class="feed-action-btn" onclick="openEditContent('${i.id}')">${iconGear()} Edit</button>
        </div>
        <div class="feed-comments">
          ${(i.comments||[]).map(c=>{
            const cu = DATA.users.find(u=>u.id===c.userId);
            const displayName = c.fromPortal ? (c.portalAuthor||'Client') + ' (Portal)' : (cu?cu.name:'Team member');
            return `<div class="feed-comment">
              <div class="fc-avatar" style="${c.fromPortal?'background:var(--teal-solid); color:#fff; display:flex; align-items:center; justify-content:center;':''}">${cu && cu.avatarDataUrl && isSafeDataUrl(cu.avatarDataUrl) ? `<img src="${cu.avatarDataUrl}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">` : esc(initials(displayName))}</div>
              <div class="fc-body"><div class="fc-name">${esc(displayName)}</div><div class="fc-text">${esc(c.text)}</div></div>
            </div>`;
          }).join('')}
          <div class="feed-comment-input">
            <input id="cmt_${i.id}" placeholder="Comment on this..." onkeydown="if(event.key==='Enter'){ addContentComment('${i.id}'); }">
            <button onclick="addContentComment('${i.id}')">Post</button>
          </div>
        </div>
      </div>`;
    }).join('') : `<div class="feed-empty">Nothing's been submitted for approval yet. Go to Content Calendar and hit "Submit for Approval" on a piece.</div>`}
  `;
}


/* ===================== FORM SUBMISSIONS (Tally webhook relay) ===================== */
const FORM_TYPE_META = {
  'lead-gen': { label: 'Lead Gen Form' },
  'newsletter': { label: 'Newsletter Signup' },
};
function formTypeLabel(t){ return (FORM_TYPE_META[t]||{}).label || t; }

function renderFormSubmissionsView(){
  const rows = [...DATA.formSubmissions].sort((a,b)=> (b.submittedAt||'').localeCompare(a.submittedAt||''));
  return `
    <div class="page-head">
      <div><h1>Form Submissions</h1><p>The lead gen form and the newsletter signup form both land here first - nothing becomes a contact until you click to create it.</p></div>
      <div class="date-pill">${rows.filter(s=>s.status==='new').length} new</div>
    </div>
    <div class="panel" style="padding:14px 18px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
      <div style="font-size:12px; color:var(--slate);">${DATA.settings.formSubmissionsEndpointUrl ? 'Polling your relay endpoint for new submissions.' : 'No relay endpoint configured yet - set one up in Integrations, or add submissions manually.'}</div>
      <div style="display:flex; gap:8px;">
        ${DATA.settings.formSubmissionsEndpointUrl ? `<button class="btn-small" onclick="checkForNewFormSubmissions(true)">${iconDownload()} Check for new submissions</button>` : `<button class="btn-small" onclick="switchView('integrations')">${iconGear()} Set up relay</button>`}
        <button class="btn-small" onclick="openNewSubmissionModal()">${iconPlus()} Add manually</button>
      </div>
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>Form</th><th>Name</th><th>Email</th><th>Submitted</th><th>Status</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(s=>`
            <tr onclick="openSubmissionDetail('${s.id}')">
              <td><span class="badge ${s.formSlug==='lead-gen'?'lead':'customer'}">${esc(formTypeLabel(s.formSlug))}</span></td>
              <td><div class="lead-name">${esc(s.fields.name||'(no name)')}</div></td>
              <td class="src">${esc(s.fields.email||'-')}</td>
              <td class="mono">${fmtDate((s.submittedAt||'').slice(0,10))}</td>
              <td>
                ${s.status==='new' ? `<span class="badge hot">New</span>` : ''}
                ${s.status==='processed' ? `<span class="badge customer">Processed</span>` : ''}
                ${s.status==='ignored' ? `<span class="badge prospect">Ignored</span>` : ''}
                ${s.linkedContactId ? `<div style="font-size:10.5px; color:var(--teal-text); margin-top:3px;">→ View contact</div>` : ''}
              </td>
            </tr>`).join('') : `<tr class="empty-row"><td colspan="5">No form submissions yet.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

function openSubmissionDetail(id){
  const s = DATA.formSubmissions.find(x=>x.id===id);
  if(!s) return;
  document.getElementById('modalPanel').style.maxWidth = '520px';
  document.getElementById('modalTitle').textContent = formTypeLabel(s.formSlug) + ' submission';
  const fieldRows = Object.entries(s.fields||{}).filter(([,v])=>v).map(([k,v])=>`<div class="field"><label>${esc(k)}</label><input value="${esc(v)}" readonly></div>`).join('');
  document.getElementById('modalBody').innerHTML = `
    <div class="field"><label>Submitted</label><input value="${fmtDate((s.submittedAt||'').slice(0,10))}" readonly></div>
    ${fieldRows}
    ${s.linkedContactId ? `<p style="font-size:12px; color:var(--teal-text); font-weight:700;">Already linked to a contact.</p>` : ''}
  `;
  let action = '';
  if(s.linkedContactId){
    action = `<button class="btn-primary" onclick="closeModal(); openEditModal('${s.linkedContactId}');">View Contact</button>`;
  } else if(s.formSlug==='lead-gen'){
    action = `<button class="btn-primary" onclick="convertSubmissionToLead('${s.id}')">Create Lead</button>`;
  } else if(s.formSlug==='newsletter'){
    action = `<button class="btn-primary" onclick="addSubmissionToNewsletterList('${s.id}')">Add to Email List</button>`;
  }
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-danger" onclick="deleteSubmission('${s.id}')">Delete</button>
    <div style="display:flex; gap:10px;">
      ${s.status==='new' ? `<button class="btn-ghost" onclick="setSubmissionStatus('${s.id}','ignored')">Ignore</button>` : ''}
      <button class="btn-ghost" onclick="closeModal()">Close</button>
      ${action}
    </div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}

async function setSubmissionStatus(id, status){
  const s = DATA.formSubmissions.find(x=>x.id===id);
  if(!s) return;
  s.status = status;
  await saveData(); closeModal(); render();
  showToast('Marked ' + status);
}

async function convertSubmissionToLead(id){
  const s = DATA.formSubmissions.find(x=>x.id===id);
  if(!s) return;
  const name = s.fields.name || s.fields.email || 'Unknown';
  const companyId = s.fields.company ? findOrCreateCompanyByName(s.fields.company) : null;
  const c = {
    id: uid(), name, company: s.fields.company||'', companyId, type:'lead',
    stage:'New', source:'Website - Lead Gen Form',
    phone: s.fields.phone||'', email: s.fields.email||'',
    dealValue:0, followUpDate:null, followUpDone:false,
    dateAdded: todayISO(), lastModified: new Date().toISOString(),
    notes: [{text:'Created from a Tally lead gen form submission.', date: todayISO()}],
    customFields:{}, tags:[], emailLists:[], services:[], profile: defaultProfile(),
    assignedTo: DATA.settings.roundRobin.enabled ? ((getNextRoundRobinUser()||{}).id||null) : null,
  };
  DATA.contacts.push(c);
  evaluateWorkflowsForContact(c, {kind:'created'});
  s.status = 'processed';
  s.linkedContactId = c.id;
  await saveData(); closeModal(); render();
  showToast('Lead created from submission');
  openEditModal(c.id);
}

async function addSubmissionToNewsletterList(id){
  const s = DATA.formSubmissions.find(x=>x.id===id);
  if(!s || !s.fields.email) { showToast('No email on this submission'); return; }
  let c = DATA.contacts.find(x=> (x.email||'').toLowerCase() === s.fields.email.toLowerCase());
  if(!c){
    c = {
      id: uid(), name: s.fields.name || s.fields.email, company:'', companyId:null, type:'prospect',
      stage:'', source:'Website - Newsletter Signup', phone:'', email: s.fields.email,
      dealValue:0, followUpDate:null, followUpDone:false, dateAdded: todayISO(), lastModified: new Date().toISOString(),
      notes:[{text:'Created from a Tally newsletter signup submission.', date: todayISO()}],
      customFields:{}, tags:[], emailLists:[], services:[], profile: defaultProfile(), assignedTo:null,
    };
    DATA.contacts.push(c);
  }
  const insiderList = DATA.emailLists.find(l=>l.name==='Favze Insider') || DATA.emailLists[0];
  if(insiderList && !(c.emailLists||[]).includes(insiderList.id)){
    c.emailLists = (c.emailLists||[]).concat([insiderList.id]);
  }
  s.status = 'processed';
  s.linkedContactId = c.id;
  await saveData(); closeModal(); render();
  showToast('Added to ' + (insiderList?insiderList.name:'email list'));
  openEditModal(c.id);
}

async function deleteSubmission(id){
  DATA.formSubmissions = DATA.formSubmissions.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Submission deleted');
}

function openNewSubmissionModal(){
  document.getElementById('modalTitle').textContent = 'Add Submission Manually';
  document.getElementById('modalBody').innerHTML = `
    <div class="field"><label>Form</label>
      <select id="sub_formSlug">
        <option value="lead-gen">Lead Gen Form</option>
        <option value="newsletter">Newsletter Signup</option>
      </select>
    </div>
    <div class="field"><label>Name</label><input id="sub_name" placeholder="e.g. Jane Doe"></div>
    <div class="field"><label>Email</label><input id="sub_email" type="email" placeholder="jane@company.com"></div>
    <div class="field"><label>Company (optional)</label><input id="sub_company"></div>
    <div class="field"><label>Phone (optional)</label><input id="sub_phone"></div>
  `;
  document.getElementById('modalFoot').innerHTML = `<button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveManualSubmission()">Add</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
async function saveManualSubmission(){
  const email = document.getElementById('sub_email').value.trim();
  const name = document.getElementById('sub_name').value.trim();
  if(!email && !name){ showToast('Add at least a name or email'); return; }
  DATA.formSubmissions.push({
    id: uid(), formSlug: document.getElementById('sub_formSlug').value,
    submittedAt: new Date().toISOString(), status:'new', linkedContactId:null,
    fields: { name, email, company: document.getElementById('sub_company').value.trim(), phone: document.getElementById('sub_phone').value.trim() },
  });
  await saveData(); closeModal(); render();
  showToast('Submission added');
}

// Polls server.js for anything new since the last id you've already pulled in.
async function checkForNewFormSubmissions(manual){
  const url = DATA.settings.formSubmissionsEndpointUrl;
  if(!url) { if(manual) showToast('Set a relay endpoint URL in Integrations first'); return; }
  try{
    const key = DATA.settings.formSubmissionsApiKey || '';
    const sinceId = DATA.settings.formSubmissionsLastId || 0;
    const res = await fetch(`${url}?key=${encodeURIComponent(key)}&sinceId=${sinceId}`);
    if(!res.ok) throw new Error('Bad response');
    const rows = await res.json();
    if(!rows.length){ if(manual) showToast('No new submissions'); return; }
    rows.forEach(row=>{
      DATA.formSubmissions.push({
        id: uid(), formSlug: row.form_type, submittedAt: row.submitted_at || new Date().toISOString(),
        status:'new', linkedContactId:null,
        fields: { name: row.name||'', email: row.email||'' },
      });
      DATA.settings.formSubmissionsLastId = Math.max(DATA.settings.formSubmissionsLastId||0, row.id);
    });
    await saveData(); render();
    showToast(`Pulled in ${rows.length} new submission(s)`);
  }catch(err){
    console.error(err);
    if(manual) showToast('Could not reach the relay endpoint');
  }
}

/* ===================== SEGMENTS (saved, reusable contact filters) ===================== */
function computeSegmentMatches(seg){
  const f = seg.filters || {};
  return DATA.contacts.filter(c=>{
    if(f.type && f.type!=='any' && c.type!==f.type) return false;
    if(f.tagId && !(c.tags||[]).includes(f.tagId)) return false;
    if(f.listId && !(c.emailLists||[]).includes(f.listId)) return false;
    if(f.serviceValue && !(c.services||[]).includes(f.serviceValue)) return false;
    if(f.ownerId && c.assignedTo!==f.ownerId) return false;
    return true;
  });
}
function renderSegmentsView(){
  const rows = [...DATA.segments].sort((a,b)=>a.name.localeCompare(b.name));
  return `
    <div class="page-head">
      <div><h1>Segments</h1><p>Saved contact filters you can reuse for campaigns or quick checks, counts update live as your contacts change.</p></div>
      <div class="date-pill">${rows.length} segment${rows.length===1?'':'s'}</div>
    </div>
    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:14px;">
      ${rows.length ? rows.map(seg=>{
        const matches = computeSegmentMatches(seg);
        return `
        <div class="panel" style="padding:18px; cursor:pointer;" onclick="viewSegmentContacts('${seg.id}')">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
            <div class="lead-name" style="font-size:15px;">${esc(seg.name)}</div>
            <span class="date-pill" style="font-size:11px;">${matches.length}</span>
          </div>
          ${seg.description ? `<div style="font-size:12px; color:var(--slate); margin-bottom:12px;">${esc(seg.description)}</div>` : ''}
          <div style="display:flex; gap:8px;" onclick="event.stopPropagation();">
            <button class="btn-small" onclick="openEditSegment('${seg.id}')">${iconGear()} Edit</button>
            <button class="btn-small" onclick="deleteSegment('${seg.id}')">Delete</button>
          </div>
        </div>`;
      }).join('') : `<div class="feed-empty">No segments yet. Click "New Segment" to build your first saved filter.</div>`}
    </div>
  `;
}
function viewSegmentContacts(id){
  const seg = DATA.segments.find(x=>x.id===id);
  if(!seg) return;
  const matches = computeSegmentMatches(seg);
  document.getElementById('modalTitle').textContent = seg.name;
  document.getElementById('modalBody').innerHTML = `
    <p style="font-size:12px; color:var(--slate); margin-bottom:12px;">${matches.length} matching contact${matches.length===1?'':'s'}</p>
    <div class="calls-mini" style="max-height:400px;">
      ${matches.length ? matches.map(c=>`<div class="call-mini-item" style="cursor:pointer;" onclick="closeModal(); openEditModal('${c.id}');">${esc(c.name)}${c.company?' · '+esc(c.company):''} <span style="color:var(--slate);">(${typeLabel(c.type)})</span></div>`).join('') : '<div class="call-mini-item" style="color:var(--slate);">No contacts match this segment yet.</div>'}
    </div>
  `;
  document.getElementById('modalFoot').innerHTML = `<div></div><button class="btn-ghost" onclick="closeModal()">Close</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
let editingSegmentId = null;
function openNewSegmentModal(){
  editingSegmentId = null;
  document.getElementById('modalTitle').textContent = 'New Segment';
  document.getElementById('modalBody').innerHTML = segmentFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `<button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveSegmentForm()">Save segment</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function openEditSegment(id){
  editingSegmentId = id;
  const seg = DATA.segments.find(x=>x.id===id);
  if(!seg) return;
  document.getElementById('modalTitle').textContent = seg.name;
  document.getElementById('modalBody').innerHTML = segmentFormHTML(seg);
  document.getElementById('modalFoot').innerHTML = `<button class="btn-danger" onclick="deleteSegment('${id}')">Delete</button><div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveSegmentForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function segmentFormHTML(seg){
  seg = seg || {name:'', description:'', filters:{type:'any', tagId:'', listId:'', serviceValue:'', ownerId:''}};
  const f = seg.filters || {};
  return `
    ${fld('seg_name','Segment Name',seg.name,'e.g. Cold leads interested in SEO')}
    ${fld('seg_description','Description (optional)',seg.description,'')}
    <div class="field"><label>Contact Type</label>
      <select id="seg_type">
        <option value="any" ${f.type==='any'?'selected':''}>Any type</option>
        <option value="prospect" ${f.type==='prospect'?'selected':''}>Prospects</option>
        <option value="lead" ${f.type==='lead'?'selected':''}>Leads</option>
        <option value="customer" ${f.type==='customer'?'selected':''}>Clients</option>
        <option value="past_customer" ${f.type==='past_customer'?'selected':''}>Past Clients</option>
      </select>
    </div>
    <div class="field"><label>Tag</label>
      <select id="seg_tagId">
        <option value="">Any tag</option>
        ${DATA.tagDefinitions.map(t=>`<option value="${t.id}" ${f.tagId===t.id?'selected':''}>${esc(t.name)}</option>`).join('')}
      </select>
    </div>
    <div class="field"><label>Email List</label>
      <select id="seg_listId">
        <option value="">Any list</option>
        ${DATA.emailLists.map(l=>`<option value="${l.id}" ${f.listId===l.id?'selected':''}>${esc(l.name)}</option>`).join('')}
      </select>
    </div>
    <div class="field"><label>Service Interest</label>
      <select id="seg_serviceValue">
        <option value="">Any service</option>
        ${FAVZE_SERVICES.map(s=>`<option value="${s.value}" ${f.serviceValue===s.value?'selected':''}>${esc(s.label)}</option>`).join('')}
      </select>
    </div>
    <div class="field"><label>Account Owner</label>
      <select id="seg_ownerId">
        <option value="">Any owner</option>
        ${DATA.users.map(u=>`<option value="${u.id}" ${f.ownerId===u.id?'selected':''}>${esc(u.name)}</option>`).join('')}
      </select>
    </div>
  `;
}
async function saveSegmentForm(){
  const name = document.getElementById('seg_name').value.trim();
  if(!name){ showToast('Segment name is required'); return; }
  const payload = {
    name, description: document.getElementById('seg_description').value.trim(),
    filters: {
      type: document.getElementById('seg_type').value,
      tagId: document.getElementById('seg_tagId').value,
      listId: document.getElementById('seg_listId').value,
      serviceValue: document.getElementById('seg_serviceValue').value,
      ownerId: document.getElementById('seg_ownerId').value,
    },
  };
  if(editingSegmentId){
    Object.assign(DATA.segments.find(x=>x.id===editingSegmentId), payload);
  } else {
    DATA.segments.push({ id: uid(), dateAdded: todayISO(), ...payload });
  }
  await saveData(); closeModal(); render();
  showToast(editingSegmentId ? 'Segment updated' : 'Segment saved');
}
async function deleteSegment(id){
  DATA.segments = DATA.segments.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Segment deleted');
}

/* ===================== EMAIL LISTS (Marketing page — same lists used by Contacts/Campaigns/Settings) ===================== */
function renderEmailListsView(){
  const rows = [...DATA.emailLists].sort((a,b)=>a.name.localeCompare(b.name));
  return `
    <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:14px;">
      <p style="font-size:12.5px; color:var(--slate); margin:0;">Favze's subscriber lists. Contacts opt in from their own record, Campaigns can target any list directly.</p>
      <span class="date-pill" style="flex-shrink:0; margin-left:12px;">${rows.length} list${rows.length===1?'':'s'}</span>
    </div>
    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:14px;">
      ${rows.length ? rows.map(l=>{
        const count = DATA.contacts.filter(c=>(c.emailLists||[]).includes(l.id)).length;
        return `
        <div class="panel" style="padding:18px; cursor:pointer;" onclick="viewEmailListSubscribers('${l.id}')">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
            <div class="lead-name" style="font-size:15px;">${esc(l.name)}</div>
            <span class="date-pill" style="font-size:11px;">${count}</span>
          </div>
          ${l.description ? `<div style="font-size:12px; color:var(--slate); margin-bottom:12px;">${esc(l.description)}</div>` : ''}
          <div style="display:flex; gap:8px;" onclick="event.stopPropagation();">
            <button class="btn-small" onclick="openEditEmailListPage('${l.id}')">${iconGear()} Edit</button>
            <button class="btn-small" onclick="deleteEmailListFromPage('${l.id}')">Delete</button>
          </div>
        </div>`;
      }).join('') : `<div class="feed-empty">No lists yet. Click "New List" to add your first one.</div>`}
    </div>
    ${renderOptOutsSection()}
  `;
}
function viewEmailListSubscribers(id){
  const l = DATA.emailLists.find(x=>x.id===id);
  if(!l) return;
  const subs = DATA.contacts.filter(c=>(c.emailLists||[]).includes(id));
  document.getElementById('modalTitle').textContent = l.name;
  document.getElementById('modalBody').innerHTML = `
    <p style="font-size:12px; color:var(--slate); margin-bottom:12px;">${subs.length} subscriber${subs.length===1?'':'s'}</p>
    <div class="calls-mini" style="max-height:400px;">
      ${subs.length ? subs.map(c=>`<div class="call-mini-item" style="cursor:pointer;" onclick="closeModal(); openEditModal('${c.id}');">${esc(c.name)}${c.email?' · '+esc(c.email):''}</div>`).join('') : '<div class="call-mini-item" style="color:var(--slate);">Nobody has opted into this list yet.</div>'}
    </div>
  `;
  document.getElementById('modalFoot').innerHTML = `<div></div><button class="btn-ghost" onclick="closeModal()">Close</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
let editingEmailListId = null;
function openNewEmailListModal(){
  editingEmailListId = null;
  document.getElementById('modalTitle').textContent = 'New Email List';
  document.getElementById('modalBody').innerHTML = emailListFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `<button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveEmailListForm()">Add list</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function openEditEmailListPage(id){
  editingEmailListId = id;
  const l = DATA.emailLists.find(x=>x.id===id);
  if(!l) return;
  document.getElementById('modalTitle').textContent = l.name;
  document.getElementById('modalBody').innerHTML = emailListFormHTML(l);
  document.getElementById('modalFoot').innerHTML = `<button class="btn-danger" onclick="deleteEmailListFromPage('${id}')">Delete</button><div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveEmailListForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function emailListFormHTML(l){
  l = l || {name:'', description:''};
  return `
    ${fld('el2_name','List Name',l.name,'e.g. Favze Insider')}
    ${fld('el2_description','Description',l.description,'What this list is for')}
  `;
}
async function saveEmailListForm(){
  const name = document.getElementById('el2_name').value.trim();
  if(!name){ showToast('List name is required'); return; }
  const description = document.getElementById('el2_description').value.trim();
  if(editingEmailListId){
    Object.assign(DATA.emailLists.find(x=>x.id===editingEmailListId), {name, description});
  } else {
    DATA.emailLists.push({ id: uid(), name, description });
  }
  await saveData(); closeModal(); render();
  showToast(editingEmailListId ? 'List updated' : 'List added');
}
async function deleteEmailListFromPage(id){
  DATA.emailLists = DATA.emailLists.filter(l=>l.id!==id);
  DATA.contacts.forEach(c=>{ c.emailLists = (c.emailLists||[]).filter(lid=>lid!==id); });
  await saveData(); closeModal(); render();
  showToast('List deleted');
}

/* ===================== PROPOSAL EXPORT (branded, printable -> Save as PDF) ===================== */
function proposalPricingTableHTML(q){
  if(!q) return '';
  const scopeText = q.pricingType==='HOURLY' ? `${q.scopeHours} hour${q.scopeHours===1?'':'s'}` : 'Flat rate';
  return `
    <table class="px-quote-table">
      <tbody>
        <tr><th>Service</th><td>${esc(q.tier)}</td></tr>
        <tr><th>Scope</th><td>${esc(scopeText)}</td></tr>
        ${q.passThrough ? `<tr><th>Includes pass-through</th><td>${fmtMoney(q.passThrough)} (3rd-party costs, handled on your behalf)</td></tr>` : ''}
        <tr class="px-total-row"><th>Total Investment</th><td>${fmtMoney(q.finalPrice)}</td></tr>
      </tbody>
    </table>`;
}
function exportProposalToPDF(id){
  const p = DATA.proposals.find(x=>x.id===id);
  if(!p){ showToast('Proposal not found'); return; }
  const co = DATA.companies.find(c=>c.id===p.companyId);
  const q = DATA.priceQuotes.find(x=>x.id===p.quoteId);
  const bg = DATA.brandGuidelines || DEFAULT_BRAND_GUIDELINES;
  const author = DATA.users.find(u=>u.id===DATA.profile.activeUserId);
  const win = window.open('', '_blank');
  if(!win){ showToast('Your browser blocked the popup, allow popups for this site and try again'); return; }

  const bodyParagraphs = (p.content || '(No content written yet - edit this proposal to add it.)')
    .split(/\n{2,}/)
    .map(block => `<p>${esc(block).replace(/\n/g,'<br>')}</p>`)
    .join('');

  const html = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>${esc(p.title)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@900&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
<style>
  :root{ --navy:${isSafeColor((bg.colors.find(c=>c.name==='Navy')||{}).hex)?bg.colors.find(c=>c.name==='Navy').hex:'#064187'}; --navy-deep:${isSafeColor((bg.colors.find(c=>c.name==='Navy Deep')||{}).hex)?bg.colors.find(c=>c.name==='Navy Deep').hex:'#04305f'}; --teal:${isSafeColor((bg.colors.find(c=>c.name==='Teal')||{}).hex)?bg.colors.find(c=>c.name==='Teal').hex:'#0A89A3'}; --slate:#5B6B7C; --line:#E3E8EC; }
  *{box-sizing:border-box;}
  body{font-family:'DM Sans',sans-serif; color:#0B1220; max-width:760px; margin:0 auto; padding:50px 40px 70px;}
  h1,h2{font-family:'Barlow Condensed',sans-serif; font-weight:900; line-height:.92; color:var(--navy-deep);}
  .px-toolbar{display:flex; justify-content:flex-end; gap:10px; margin-bottom:24px;}
  .px-toolbar button{font-family:'DM Sans',sans-serif; font-size:13px; font-weight:700; padding:10px 16px; border-radius:8px; border:1px solid var(--line); background:#F5F7F9; cursor:pointer;}
  .px-toolbar button.primary{background:var(--navy); color:#fff; border-color:var(--navy);}
  .px-header{border-bottom:3px solid var(--teal); padding-bottom:20px; margin-bottom:30px;}
  .px-eyebrow{font-size:11px; letter-spacing:2px; text-transform:uppercase; color:var(--teal); font-weight:700; margin-bottom:6px;}
  .px-header h1{font-size:34px;}
  .px-meta{font-size:12.5px; color:var(--slate); margin-top:10px; display:flex; gap:18px; flex-wrap:wrap;}
  .px-body p{font-size:14px; line-height:1.7; margin-bottom:14px;}
  .px-quote-table{width:100%; border-collapse:collapse; margin:24px 0; border:1px solid var(--line); border-radius:8px; overflow:hidden;}
  .px-quote-table th{text-align:left; background:#F5F7F9; font-size:11.5px; text-transform:uppercase; letter-spacing:.5px; color:var(--slate); padding:11px 14px; width:40%; border-bottom:1px solid var(--line);}
  .px-quote-table td{padding:11px 14px; font-size:14px; border-bottom:1px solid var(--line);}
  .px-quote-table tr:last-child th, .px-quote-table tr:last-child td{border-bottom:none;}
  .px-total-row th, .px-total-row td{background:var(--navy); color:#fff; font-weight:700; font-size:16px;}
  .px-footer{margin-top:50px; padding-top:20px; border-top:1px solid var(--line); font-size:11.5px; color:var(--slate);}
  @media print{ .px-toolbar{display:none;} body{padding:0 20px;} }
</style></head>
<body>
  <div class="px-toolbar">
    <button onclick="window.print()" class="primary">Print / Save as PDF</button>
    <button onclick="window.close()">Close</button>
  </div>
  <div class="px-header">
    <div class="px-eyebrow">Proposal</div>
    <h1>${esc(p.title)}</h1>
    <div class="px-meta">
      ${co ? `<span><b>Prepared for:</b> ${esc(co.name)}</span>` : ''}
      <span><b>Date:</b> ${fmtDate(todayISO())}</span>
      ${author ? `<span><b>Prepared by:</b> ${esc(author.name)}</span>` : ''}
    </div>
  </div>
  <div class="px-body">${bodyParagraphs}</div>
  ${proposalPricingTableHTML(q)}
  <div class="px-footer">
    Favze Digital Marketing${bg.social && bg.social.linkedin ? ` · ${esc(bg.social.linkedin)}` : ''}
  </div>
</body></html>`;

  win.document.open();
  win.document.write(html);
  win.document.close();
}

/* ===================== CAPABILITIES ONE-PAGER (same branded PDF engine as Proposals, pointed at Service Catalog) ===================== */
function openCapabilitiesOnePagerModal(){
  const categories = Array.from(new Set(DATA.serviceCatalog.map(s=>s.category))).sort();
  const companies = [...DATA.companies].sort((a,b)=>a.name.localeCompare(b.name));
  document.getElementById('modalPanel').style.maxWidth = '520px';
  document.getElementById('modalTitle').textContent = 'Generate Capabilities One-Pager';
  document.getElementById('modalBody').innerHTML = `
    <div class="field"><label>Prepared for (optional)</label>
      <select id="cop_companyId">
        <option value="">General - no specific company</option>
        ${companies.map(co=>`<option value="${co.id}">${esc(co.name)}</option>`).join('')}
      </select>
    </div>
    <div class="field"><label>Intro line (optional)</label>
      <input id="cop_tagline" placeholder="e.g. A quick look at how we can help you grow.">
    </div>
    <div class="field">
      <label>Include categories</label>
      <div style="display:flex; flex-direction:column; gap:8px;">
        ${categories.map(cat=>`
          <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
            <input type="checkbox" class="cop-cat-check" value="${esc(cat)}" checked style="width:auto;">
            <span style="font-size:13px; font-weight:500; color:var(--ink);">${esc(cat)}</span>
          </label>`).join('')}
      </div>
    </div>
    <p style="font-size:11px; color:var(--slate);">Only services marked "Active" in the Service Catalog are included.</p>
  `;
  document.getElementById('modalFoot').innerHTML = `<button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="generateCapabilitiesOnePager()">Generate PDF</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function generateCapabilitiesOnePager(){
  const companyId = document.getElementById('cop_companyId').value || null;
  const tagline = document.getElementById('cop_tagline').value.trim();
  const selectedCategories = Array.from(document.querySelectorAll('.cop-cat-check')).filter(c=>c.checked).map(c=>c.value);
  if(!selectedCategories.length){ showToast('Pick at least one category'); return; }
  closeModal();
  exportCapabilitiesOnePagerToPDF(companyId, selectedCategories, tagline);
}
function exportCapabilitiesOnePagerToPDF(companyId, selectedCategories, tagline){
  const co = companyId ? DATA.companies.find(c=>c.id===companyId) : null;
  const bg = DATA.brandGuidelines || DEFAULT_BRAND_GUIDELINES;
  const author = DATA.users.find(u=>u.id===DATA.profile.activeUserId);
  const services = DATA.serviceCatalog.filter(s=>s.status==='active' && selectedCategories.includes(s.category));
  if(!services.length){ showToast('No active services in the categories you picked'); return; }
  const win = window.open('', '_blank');
  if(!win){ showToast('Your browser blocked the popup, allow popups for this site and try again'); return; }

  const byCategory = {};
  services.forEach(s=>{ (byCategory[s.category] = byCategory[s.category]||[]).push(s); });

  const sectionsHtml = Object.entries(byCategory).map(([cat, list])=>`
    <div class="px-cat-section">
      <h2>${esc(cat)}</h2>
      ${list.map(s=>`
        <div class="px-service">
          <div class="px-service-name">${esc(s.name)}</div>
          <div class="px-service-desc">${esc(s.description)}</div>
        </div>`).join('')}
    </div>`).join('');

  const html = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Favze Capabilities</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@900&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
<style>
  :root{ --navy:${isSafeColor((bg.colors.find(c=>c.name==='Navy')||{}).hex)?bg.colors.find(c=>c.name==='Navy').hex:'#064187'}; --navy-deep:${isSafeColor((bg.colors.find(c=>c.name==='Navy Deep')||{}).hex)?bg.colors.find(c=>c.name==='Navy Deep').hex:'#04305f'}; --teal:${isSafeColor((bg.colors.find(c=>c.name==='Teal')||{}).hex)?bg.colors.find(c=>c.name==='Teal').hex:'#0A89A3'}; --slate:#5B6B7C; --line:#E3E8EC; }
  *{box-sizing:border-box;}
  body{font-family:'DM Sans',sans-serif; color:#0B1220; max-width:760px; margin:0 auto; padding:50px 40px 70px;}
  h1,h2{font-family:'Barlow Condensed',sans-serif; font-weight:900; line-height:.92; color:var(--navy-deep);}
  .px-toolbar{display:flex; justify-content:flex-end; gap:10px; margin-bottom:24px;}
  .px-toolbar button{font-family:'DM Sans',sans-serif; font-size:13px; font-weight:700; padding:10px 16px; border-radius:8px; border:1px solid var(--line); background:#F5F7F9; cursor:pointer;}
  .px-toolbar button.primary{background:var(--navy); color:#fff; border-color:var(--navy);}
  .px-header{border-bottom:3px solid var(--teal); padding-bottom:20px; margin-bottom:26px;}
  .px-eyebrow{font-size:11px; letter-spacing:2px; text-transform:uppercase; color:var(--teal); font-weight:700; margin-bottom:6px;}
  .px-header h1{font-size:34px;}
  .px-meta{font-size:12.5px; color:var(--slate); margin-top:10px; display:flex; gap:18px; flex-wrap:wrap;}
  .px-tagline{font-size:15px; color:var(--ink); margin-bottom:28px; line-height:1.5;}
  .px-cat-section{margin-bottom:22px;}
  .px-cat-section h2{font-size:20px; color:var(--teal); margin-bottom:10px; padding-bottom:6px; border-bottom:1px solid var(--line);}
  .px-service{margin-bottom:12px;}
  .px-service-name{font-size:14.5px; font-weight:700; color:var(--navy-deep); margin-bottom:2px;}
  .px-service-desc{font-size:13px; color:var(--slate); line-height:1.5;}
  .px-footer{margin-top:40px; padding-top:20px; border-top:1px solid var(--line); font-size:11.5px; color:var(--slate);}
  @media print{ .px-toolbar{display:none;} body{padding:0 20px;} }
</style></head>
<body>
  <div class="px-toolbar">
    <button onclick="window.print()" class="primary">Print / Save as PDF</button>
    <button onclick="window.close()">Close</button>
  </div>
  <div class="px-header">
    <div class="px-eyebrow">Capabilities</div>
    <h1>What Favze Does</h1>
    <div class="px-meta">
      ${co ? `<span><b>Prepared for:</b> ${esc(co.name)}</span>` : ''}
      <span><b>Date:</b> ${fmtDate(todayISO())}</span>
      ${author ? `<span><b>Prepared by:</b> ${esc(author.name)}</span>` : ''}
    </div>
  </div>
  ${tagline ? `<div class="px-tagline">${esc(tagline)}</div>` : ''}
  ${sectionsHtml}
  <div class="px-footer">
    Favze Digital Marketing${bg.social && bg.social.linkedin ? ` · ${esc(bg.social.linkedin)}` : ''}
  </div>
</body></html>`;

  win.document.open();
  win.document.write(html);
  win.document.close();
}

/* ===================== SERVICE CATALOG ===================== */
const DEFAULT_SERVICE_CATALOG = [
  {slug:'search-engine-optimization', name:'SEO', category:'SEO & Search', description:'Organic search visibility built on uniquely written content per page, never templated.', url:'https://favze.com/services/search-engine-optimization'},
  {slug:'answer-engine-optimization', name:'AEO (Answer Engine Optimization)', category:'SEO & Search', description:'Structuring content to be surfaced directly in AI-powered answer engines and voice search.', url:'https://favze.com/services/answer-engine-optimization'},
  {slug:'generative-engine-optimization', name:'GEO (Generative Engine Optimization)', category:'SEO & Search', description:'Optimizing content to be cited and summarized correctly by generative AI tools like ChatGPT and Gemini.', url:'https://favze.com/services/generative-engine-optimization'},
  {slug:'ai-optimization', name:'AI Optimization', category:'SEO & Search', description:'Positioning a business to be found and recommended by AI assistants and LLM-powered search.', url:'https://favze.com/services/ai-optimization'},
  {slug:'local-seo', name:'Local SEO', category:'SEO & Search', description:'Google Business Profile, citations, and uniquely written county/service-area pages to win local search.', url:'https://favze.com/services/local-seo'},
  {slug:'paid-search-ads', name:'Paid Search Ads', category:'Paid Media', description:'Google Ads campaigns built and managed for measurable ROI.', url:'https://favze.com/services/paid-search-ads'},
  {slug:'paid-social-media-ads', name:'Paid Social Media Ads', category:'Paid Media', description:'Meta, LinkedIn, and TikTok ad campaigns, each with a custom landing page built and message-matched per campaign, never generic.', url:'https://favze.com/services/paid-social-media-ads'},
  {slug:'social-media-marketing', name:'Social Media Marketing', category:'Content & Social', description:'Organic content strategy, posting, and community management across platforms.', url:'https://favze.com/services/social-media-marketing'},
  {slug:'email-marketing', name:'Email Marketing', category:'Email & SMS', description:'Full lifecycle email: nurture sequences, newsletters, and automation across HubSpot, Zoho, Klaviyo, and Mailchimp.', url:'https://favze.com/services/email-marketing'},
  {slug:'short-message-service-sms', name:'SMS Marketing', category:'Email & SMS', description:'Text-based campaigns and automated flows for time-sensitive offers and reminders.', url:'https://favze.com/services/short-message-service-sms'},
  {slug:'website-design', name:'Website Design', category:'Web & CRM', description:'Custom-built sites and redesigns, no templated themes.', url:'https://favze.com/services/website-design'},
  {slug:'hubspot-setup', name:'HubSpot Setup', category:'Web & CRM', description:'CRM pipeline build-out, email templates, and automation configured inside HubSpot.', url:'https://favze.com/services/hubspot-setup'},
  {slug:'transactional-email-automation', name:'Transactional Email Automation', category:'Email & SMS', description:'Automated order confirmations, receipts, shipping updates, password resets, and other trigger-based emails, built and monitored so they never break silently.', url:'https://favze.com/services/transactional-email-automation'},
  {slug:'landing-page-creation', name:'Landing Page Creation', category:'Web & CRM', description:'Standalone, conversion-focused landing pages built for a specific campaign or offer, message-matched every time, never a generic homepage repurposed.', url:'https://favze.com/services/landing-page-creation'},
  {slug:'email-list-sign-up-strategy', name:'Email List Sign-Up Strategy', category:'Email & SMS', description:'Legally compliant opt-in capture built to CAN-SPAM, GDPR, and TCPA standards, consent language, double opt-in where required, and documented records, never just a stray checkbox.', url:'https://favze.com/services/email-list-sign-up-strategy'},
];
let serviceCatalogFilter = 'all';
function setServiceCatalogFilter(c){ serviceCatalogFilter = c; render(); }
function renderServiceCatalogView(){
  const cats = Array.from(new Set(DATA.serviceCatalog.map(s=>s.category))).sort();
  let rows = [...DATA.serviceCatalog];
  if(serviceCatalogFilter!=='all') rows = rows.filter(s=>s.category===serviceCatalogFilter);
  rows.sort((a,b)=> a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
  return `
    <div class="page-head">
      <div><h1>Service Catalog</h1><p>Every service Favze offers. Click "Build a quote" to send it straight into the Pricing Calculator.</p></div>
      <div class="csv-actions">
        <button class="btn-small" onclick="openCapabilitiesOnePagerModal()">${iconDownload()} Generate Capabilities One-Pager</button>
        <div class="date-pill">${DATA.serviceCatalog.length} service${DATA.serviceCatalog.length===1?'':'s'}</div>
      </div>
    </div>
    <div class="view-chips">
      <span class="view-chip ${serviceCatalogFilter==='all'?'active':''}" onclick="setServiceCatalogFilter('all')">All</span>
      ${cats.map(c=>`<span class="view-chip ${serviceCatalogFilter===c?'active':''}" onclick="setServiceCatalogFilter('${escJs(c)}')">${esc(c)}</span>`).join('')}
    </div>
    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:14px;">
      ${rows.length ? rows.map(s=>`
        <div class="panel" style="padding:18px;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:10px; margin-bottom:8px;">
            <div class="lead-name" style="font-size:15px;">${esc(s.name)}</div>
            <span class="badge ${s.status==='active'?'customer':'prospect'}">${s.status==='active'?'Active':'Planned'}</span>
          </div>
          <div style="font-size:10.5px; color:var(--teal-text); font-weight:700; text-transform:uppercase; letter-spacing:.5px; margin-bottom:8px;">${esc(s.category)}</div>
          <div style="font-size:12.5px; color:var(--slate); line-height:1.5; margin-bottom:12px;">${esc(s.description)}</div>
          ${s.deepDiveUrl ? `
          <a href="${safeHref(s.deepDiveUrl)}" target="_blank" rel="noopener noreferrer" style="display:flex; align-items:center; gap:8px; text-decoration:none; background:var(--teal-soft); border:1px solid var(--teal); border-radius:8px; padding:8px 11px; margin-bottom:12px; font-size:12px; font-weight:700; color:var(--teal-text);">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" style="flex-shrink:0;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6M9 9h1"/></svg>
            Deep Dive Doc ↗
          </a>` : `<div style="font-size:11px; color:var(--slate); margin-bottom:12px;">No deep dive doc linked yet</div>`}
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button class="btn-small" onclick="buildQuoteForService('${escJs(s.name)}')">${iconPlus()} Build a quote</button>
            <button class="btn-small" onclick="openEditService('${s.id}')">${iconGear()} Edit</button>
            ${s.url?`<a class="btn-small" href="${safeHref(s.url)}" target="_blank" rel="noopener noreferrer" style="text-decoration:none; display:inline-flex; align-items:center;">View live ↗</a>`:''}
          </div>
        </div>`).join('') : `<div class="feed-empty">No services yet. Click "New Service" to add one.</div>`}
    </div>
  `;
}
function buildQuoteForService(name){
  switchView('pricecalc', {t:'quote', tier:name});
  showToast('Service loaded into the Pricing Calculator');
}
let editingServiceId = null;
function openNewServiceModal(){
  editingServiceId = null;
  document.getElementById('modalTitle').textContent = 'New Service';
  document.getElementById('modalBody').innerHTML = serviceFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `<button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveServiceForm()">Add service</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function openEditService(id){
  editingServiceId = id;
  const s = DATA.serviceCatalog.find(x=>x.id===id);
  if(!s) return;
  document.getElementById('modalTitle').textContent = s.name;
  document.getElementById('modalBody').innerHTML = serviceFormHTML(s);
  document.getElementById('modalFoot').innerHTML = `<button class="btn-danger" onclick="deleteService('${id}')">Delete</button><div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveServiceForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function serviceFormHTML(s){
  s = s || {name:'', category:'', description:'', status:'active', url:'', deepDiveUrl:''};
  return `
    ${fld('svc_name','Service Name',s.name,'')}
    ${fld('svc_category','Category',s.category,'e.g. SEO & Search')}
    ${taFld('svc_description','Description',s.description,'')}
    ${fld('svc_url','Live URL (optional)',s.url,'https://favze.com/services/...')}
    ${fld('svc_deepDiveUrl','Deep Dive Doc (Google Doc link)',s.deepDiveUrl,'https://docs.google.com/document/d/...')}
    <div class="field"><label>Status</label>
      <select id="svc_status">
        <option value="active" ${s.status==='active'?'selected':''}>Active</option>
        <option value="planned" ${s.status==='planned'?'selected':''}>Planned</option>
      </select>
    </div>
  `;
}
async function saveServiceForm(){
  const name = document.getElementById('svc_name').value.trim();
  if(!name){ showToast('Service name is required'); return; }
  const payload = {
    name, category: document.getElementById('svc_category').value.trim() || 'General',
    description: document.getElementById('svc_description').value.trim(),
    url: document.getElementById('svc_url').value.trim(),
    deepDiveUrl: document.getElementById('svc_deepDiveUrl').value.trim(),
    status: document.getElementById('svc_status').value,
  };
  if(editingServiceId){
    Object.assign(DATA.serviceCatalog.find(x=>x.id===editingServiceId), payload);
  } else {
    DATA.serviceCatalog.push({ id: uid(), dateAdded: todayISO(), ...payload });
  }
  await saveData(); closeModal(); render();
  showToast(editingServiceId ? 'Service updated' : 'Service added');
}
async function deleteService(id){
  DATA.serviceCatalog = DATA.serviceCatalog.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Service deleted');
}

/* ===================== BRAND GUIDELINES (Favze's own brand, not a client's) ===================== */
const DEFAULT_BRAND_GUIDELINES = {
  colors: [
    {name:'Navy', hex:'#064187'},
    {name:'Navy Deep', hex:'#04305f'},
    {name:'Navy Black', hex:'#031f42'},
    {name:'Teal', hex:'#0A89A3'},
    {name:'Amber', hex:'#E3A008'},
  ],
  fontDisplay: 'Barlow Condensed 900',
  fontBody: 'DM Sans',
  fontMono: 'JetBrains Mono',
  headingRules: 'line-height:.92 on section headings, line-height:.9 on hero h1. Never leave line-height unset.',
  faviconNote: 'favze-favicon.svg at https://favze.com/hubfs/favze-favicon.svg - never recolor or alter it.',
  voiceNote: 'Confident, direct, no filler. No em dashes in any output, ever.',
  urlConventions: 'No .html extensions. Services: /services/[slug]. Articles: /articles/[pillar]/[slug]. Areas served: /areas-served/[county].',
  contentSeries: [
    {name:'Favze Insights', type:'Blogs', linksTo:'LinkedIn newsletter URL'},
    {name:'Favze Insider', type:'Stats/news newsletter', linksTo:'favze.com/newsletters'},
    {name:'Favze Intel', type:'Deep-dive newsletter', linksTo:'favze.com/newsletters'},
  ],
  social: {
    facebook:'https://www.facebook.com/profile.php?id=61581511343836',
    instagram:'https://www.instagram.com/favzemarketing/',
    linkedin:'https://www.linkedin.com/company/favze-digital-marketing/',
    x:'https://x.com/favzemarketing',
    youtube:'https://www.youtube.com/@Favze',
    threads:'https://www.threads.com/@favzemarketing',
    pinterest:'https://www.pinterest.com/favzemarketing/',
    nextdoor:'https://nextdoor.com/page/favze-digital-marketing/',
  },
};
function renderBrandGuidelinesView(){
  const bg = DATA.brandGuidelines;
  return `
    <div class="page-head">
      <div><h1>Brand Guidelines</h1><p>Favze's own brand system - reference this before creating any client-facing asset.</p></div>
      <button class="btn-small" onclick="openEditBrandGuidelines()">${iconGear()} Edit</button>
    </div>

    <div class="panel" style="padding:22px; margin-bottom:16px;">
      <div style="font-size:12px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:12px;">Colors <span style="font-weight:500; text-transform:none; color:#9aa8b6;">(click to copy hex)</span></div>
      <div style="display:flex; flex-wrap:wrap; gap:12px;">
        ${(bg.colors||[]).map(c=>`
          <div style="width:120px; cursor:pointer;" onclick="copyMergeCode('${escJs(c.hex)}')" title="Click to copy">
            <div style="height:56px; border-radius:8px; background:${isSafeColor(c.hex)?c.hex:'#ccc'}; border:1px solid var(--line); margin-bottom:6px;"></div>
            <div style="font-size:11.5px; font-weight:700; color:var(--ink);">${esc(c.name)}</div>
            <div class="mono" style="font-size:10.5px; color:var(--slate);">${esc(c.hex)}</div>
          </div>`).join('')}
      </div>
    </div>

    <div class="panel" style="padding:22px; margin-bottom:16px;">
      <div style="font-size:12px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:12px;">Typography</div>
      <div style="font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:32px; line-height:.9; color:var(--navy-deep); margin-bottom:4px;">${esc(bg.fontDisplay)}</div>
      <div style="font-size:11px; color:var(--slate); margin-bottom:14px;">Display / Headings</div>
      <div style="font-family:'DM Sans',sans-serif; font-size:16px; color:var(--ink); margin-bottom:4px;">${esc(bg.fontBody)}</div>
      <div style="font-size:11px; color:var(--slate); margin-bottom:14px;">Body</div>
      <div class="mono" style="font-size:14px; color:var(--ink); margin-bottom:4px;">${esc(bg.fontMono)}</div>
      <div style="font-size:11px; color:var(--slate); margin-bottom:14px;">Mono / Data</div>
      <p style="font-size:12px; color:var(--slate); border-top:1px dashed var(--line); padding-top:12px;">${esc(bg.headingRules)}</p>
    </div>

    <div class="panel" style="padding:22px; margin-bottom:16px;">
      <div style="font-size:12px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:12px;">Voice &amp; Assets</div>
      <p style="font-size:13px; color:var(--ink); margin-bottom:10px;">${esc(bg.voiceNote)}</p>
      <p style="font-size:12px; color:var(--slate);">${esc(bg.faviconNote)}</p>
      <p style="font-size:12px; color:var(--slate); margin-top:8px;">${esc(bg.urlConventions)}</p>
    </div>

    <div class="panel" style="padding:22px; margin-bottom:16px;">
      <div style="font-size:12px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:12px;">Content Series</div>
      ${(bg.contentSeries||[]).map(cs=>`
        <div class="role-user-row"><div><div class="ru-name">${esc(cs.name)}</div><div class="ru-sub">${esc(cs.type)}</div></div><div style="font-size:11.5px; color:var(--slate);">${esc(cs.linksTo)}</div></div>`).join('')}
    </div>

    <div class="panel" style="padding:22px;">
      <div style="font-size:12px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:12px;">Social Profiles</div>
      <div style="display:flex; flex-wrap:wrap; gap:8px;">
        ${Object.entries(bg.social||{}).map(([k,url])=>`<a href="${safeHref(url)}" target="_blank" rel="noopener noreferrer" class="btn-small" style="text-decoration:none;">${esc(k.charAt(0).toUpperCase()+k.slice(1))} ↗</a>`).join('')}
      </div>
    </div>
  `;
}
function openEditBrandGuidelines(){
  const bg = DATA.brandGuidelines;
  document.getElementById('modalPanel').style.maxWidth = '560px';
  document.getElementById('modalTitle').textContent = 'Edit Brand Guidelines';
  document.getElementById('modalBody').innerHTML = `
    ${fld('bg_fontDisplay','Display Font',bg.fontDisplay,'')}
    ${fld('bg_fontBody','Body Font',bg.fontBody,'')}
    ${fld('bg_fontMono','Mono Font',bg.fontMono,'')}
    ${taFld('bg_headingRules','Heading Rules',bg.headingRules,'')}
    ${taFld('bg_voiceNote','Voice',bg.voiceNote,'')}
    ${taFld('bg_faviconNote','Favicon / Asset Notes',bg.faviconNote,'')}
    ${taFld('bg_urlConventions','URL Conventions',bg.urlConventions,'')}
    <p style="font-size:11px; color:var(--slate);">Colors, content series, and social links are managed by request for now, ask me to update them if they change.</p>
  `;
  document.getElementById('modalFoot').innerHTML = `<div></div><div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveBrandGuidelinesForm()">Save</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
async function saveBrandGuidelinesForm(){
  const bg = DATA.brandGuidelines;
  bg.fontDisplay = document.getElementById('bg_fontDisplay').value.trim();
  bg.fontBody = document.getElementById('bg_fontBody').value.trim();
  bg.fontMono = document.getElementById('bg_fontMono').value.trim();
  bg.headingRules = document.getElementById('bg_headingRules').value.trim();
  bg.voiceNote = document.getElementById('bg_voiceNote').value.trim();
  bg.faviconNote = document.getElementById('bg_faviconNote').value.trim();
  bg.urlConventions = document.getElementById('bg_urlConventions').value.trim();
  await saveData(); closeModal(); render();
  showToast('Brand guidelines updated');
}

/* ===================== COMPANY WIKI (sections of linked Google Docs) ===================== */
const WIKI_SECTIONS = ['Organization','CRM Usage','Remote Work Policies','Communication Standards','Internal Guidelines','How Favze Works','Processes','SOPs','Client Management','Tools & Systems','Security','Quality Standards','FAQs','Glossary'];
function renderWikiView(){
  let entries = [...DATA.wikiPages];
  if(searchTerm){ const s=searchTerm.toLowerCase(); entries = entries.filter(p=>(p.title+' '+(p.description||'')+' '+p.section).toLowerCase().includes(s)); }
  return `
    <div class="page-head">
      <div><h1>Company Wiki</h1><p>Organized links out to your Google Docs, grouped by section. Nothing is pasted in, click through to the real doc.</p></div>
      <div class="date-pill">${DATA.wikiPages.length} doc${DATA.wikiPages.length===1?'':'s'} linked</div>
    </div>
    ${WIKI_SECTIONS.map(section=>{
      const rows = entries.filter(p=>p.section===section).sort((a,b)=>a.title.localeCompare(b.title));
      if(searchTerm && !rows.length) return '';
      return `
      <div class="panel" style="margin-bottom:14px;">
        <div class="panel-head">
          <h3 style="font-size:17px;">${esc(section)}</h3>
          <button class="btn-small" onclick="openNewWikiModal('${esc(section)}')">${iconPlus()} Add doc</button>
        </div>
        ${rows.length ? rows.map(p=>`
          <div class="role-user-row">
            <div style="flex:1; cursor:pointer;" onclick="openWikiDoc('${p.id}')">
              <div class="ru-name">${esc(p.title)}</div>
              ${p.description ? `<div class="ru-sub">${esc(p.description)}</div>` : ''}
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              ${p.docUrl ? `<button class="btn-small" onclick="openWikiDoc('${p.id}')">${iconUpload()} Open Doc ↗</button>` : `<span style="font-size:11px; color:var(--red-text);">No link set</span>`}
              <button class="btn-small" onclick="openEditWikiPage('${p.id}')">${iconGear()}</button>
              <button class="btn-small" onclick="deleteWikiPage('${p.id}')">${iconX()}</button>
            </div>
          </div>`).join('') : `<p style="font-size:12px; color:var(--slate); padding:8px 0;">No docs linked yet.</p>`}
      </div>`;
    }).join('')}
  `;
}
function openWikiDoc(id){
  const p = DATA.wikiPages.find(x=>x.id===id);
  if(!p) return;
  if(p.docUrl && isSafeHttpUrl(p.docUrl)){ window.open(p.docUrl, '_blank', 'noopener,noreferrer'); }
  else if(p.docUrl){ showToast('Invalid document URL - must start with https://'); }
  else { openEditWikiPage(id); showToast('Add a Google Doc link first'); }
}
let editingWikiId = null;
let newWikiDefaultSection = '';
function openNewWikiModal(section){
  editingWikiId = null;
  newWikiDefaultSection = section || WIKI_SECTIONS[0];
  document.getElementById('modalPanel').style.maxWidth = '560px';
  document.getElementById('modalTitle').textContent = 'Add Doc Link';
  document.getElementById('modalBody').innerHTML = wikiFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `<button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveWikiForm()">Add doc</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function openEditWikiPage(id){
  editingWikiId = id;
  const p = DATA.wikiPages.find(x=>x.id===id);
  if(!p) return;
  document.getElementById('modalPanel').style.maxWidth = '560px';
  document.getElementById('modalTitle').textContent = 'Edit Doc Link';
  document.getElementById('modalBody').innerHTML = wikiFormHTML(p);
  document.getElementById('modalFoot').innerHTML = `<button class="btn-danger" onclick="deleteWikiPage('${id}')">Delete</button><div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveWikiForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function wikiFormHTML(p){
  p = p || {title:'', section: newWikiDefaultSection || WIKI_SECTIONS[0], description:'', docUrl:''};
  return `
    ${fld('wiki_title','Title',p.title,'e.g. Client Onboarding Checklist')}
    <div class="field"><label>Section</label>
      <select id="wiki_section">${WIKI_SECTIONS.map(s=>`<option value="${esc(s)}" ${p.section===s?'selected':''}>${esc(s)}</option>`).join('')}</select>
    </div>
    ${fld('wiki_docUrl','Google Doc Link',p.docUrl,'https://docs.google.com/document/d/...')}
    ${fld('wiki_description','Short description (optional)',p.description,'One line so people know what they are clicking into')}
  `;
}
async function saveWikiForm(){
  const title = document.getElementById('wiki_title').value.trim();
  if(!title){ showToast('Title is required'); return; }
  const payload = {
    title,
    section: document.getElementById('wiki_section').value,
    docUrl: document.getElementById('wiki_docUrl').value.trim(),
    description: document.getElementById('wiki_description').value.trim(),
  };
  if(editingWikiId){
    Object.assign(DATA.wikiPages.find(x=>x.id===editingWikiId), payload, {updatedAt: new Date().toISOString()});
  } else {
    DATA.wikiPages.push({ id: uid(), dateAdded: todayISO(), updatedAt: new Date().toISOString(), authorId: currentScope().userId, ...payload });
  }
  await saveData(); closeModal(); render();
  showToast(editingWikiId ? 'Doc link updated' : 'Doc link added');
}
async function deleteWikiPage(id){
  DATA.wikiPages = DATA.wikiPages.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Doc link removed');
}

/* ===================== FEATURE REQUESTS (shared engine for CRM ideas + Client Portal ideas) ===================== */
const FEATURE_REQUEST_STATUSES = ['Idea','Under Review','Planned','In Progress','Shipped','Declined'];
const FEATURE_REQUEST_CATEGORIES = ['UI/UX','New Module','Automation','Reporting','Integration','Bug Fix','Other'];
function featureRequestStatusBadgeClass(status){
  return {'Idea':'prospect','Under Review':'lead','Planned':'lead','In Progress':'lead','Shipped':'customer','Declined':'past_customer'}[status] || 'prospect';
}
let featureRequestStatusFilter = {};
function setFeatureRequestStatusFilter(listKey, status){ featureRequestStatusFilter[listKey] = status; render(); }
let featureRequestTypeMode = 'crm'; // 'crm' or 'portal'
function setFeatureRequestTypeMode(m){ featureRequestTypeMode = m; render(); }
function renderFeatureRequestsView(){
  return `
    <div class="page-head">
      <div><h1>Feature Requests</h1><p>One running wishlist for both the CRM and the future Client Portal, so a good idea never gets lost in a chat thread.</p></div>
    </div>
    <div class="feed-toggle">
      <span class="${featureRequestTypeMode==='crm'?'active':''}" onclick="setFeatureRequestTypeMode('crm')">CRM</span>
      <span class="${featureRequestTypeMode==='portal'?'active':''}" onclick="setFeatureRequestTypeMode('portal')">Client Portal</span>
    </div>
    ${renderFeatureRequestsList(featureRequestTypeMode==='crm' ? 'crmFeatureRequests' : 'portalFeatureRequests')}
  `;
}
function renderFeatureRequestsList(listKey){
  let rows = [...DATA[listKey]];
  const activeFilter = featureRequestStatusFilter[listKey] || 'all';
  if(activeFilter!=='all') rows = rows.filter(r=>r.status===activeFilter);
  if(searchTerm){ const s=searchTerm.toLowerCase(); rows = rows.filter(r=>(r.title+' '+(r.description||'')).toLowerCase().includes(s)); }
  rows.sort((a,b)=> (b.votes||0)-(a.votes||0) || (b.dateAdded||'').localeCompare(a.dateAdded||''));
  return `
    <div class="toolbar">
      <span class="count-label">${DATA[listKey].length} idea${DATA[listKey].length===1?'':'s'}</span>
      <button class="btn-small" onclick="openNewFeatureRequestModal('${listKey}')">${iconPlus()} New Idea</button>
    </div>
    <div class="view-chips">
      <span class="view-chip ${activeFilter==='all'?'active':''}" onclick="setFeatureRequestStatusFilter('${listKey}','all')">All</span>
      ${FEATURE_REQUEST_STATUSES.map(s=>`<span class="view-chip ${activeFilter===s?'active':''}" onclick="setFeatureRequestStatusFilter('${listKey}','${s}')">${s}</span>`).join('')}
    </div>
    <div class="panel">
      <table>
        <thead><tr><th></th><th>Idea</th><th>Category</th><th>Status</th><th>Added</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(r=>`
            <tr>
              <td onclick="event.stopPropagation(); voteFeatureRequest('${listKey}','${r.id}');" style="width:56px; text-align:center; cursor:pointer;">
                <button class="btn-small">▲ ${r.votes||0}</button>
              </td>
              <td onclick="openEditFeatureRequest('${listKey}','${r.id}')"><div class="lead-name">${esc(r.title)}</div>${r.description?`<div class="lead-sub">${esc(r.description)}</div>`:''}</td>
              <td class="src" onclick="openEditFeatureRequest('${listKey}','${r.id}')">${esc(r.category||'-')}</td>
              <td onclick="event.stopPropagation();">
                <select onchange="setFeatureRequestStatus('${listKey}','${r.id}', this.value)" style="padding:6px 10px; border-radius:6px; border:1px solid var(--line); font-size:12px; font-weight:700;">
                  ${FEATURE_REQUEST_STATUSES.map(s=>`<option value="${s}" ${r.status===s?'selected':''}>${s}</option>`).join('')}
                </select>
              </td>
              <td class="mono" onclick="openEditFeatureRequest('${listKey}','${r.id}')">${fmtDate(r.dateAdded)}</td>
            </tr>`).join('') : `<tr class="empty-row"><td colspan="5">No ideas logged yet.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}
async function voteFeatureRequest(listKey, id){
  const r = DATA[listKey].find(x=>x.id===id);
  if(!r) return;
  r.votes = (r.votes||0) + 1;
  await saveData(); render();
}
async function setFeatureRequestStatus(listKey, id, status){
  const r = DATA[listKey].find(x=>x.id===id);
  if(!r) return;
  r.status = status;
  r.updatedAt = new Date().toISOString();
  await saveData(); render();
  showToast('Status updated');
}
let editingFeatureRequestListKey = null;
let editingFeatureRequestId = null;
function openNewFeatureRequestModal(listKey){
  editingFeatureRequestListKey = listKey;
  editingFeatureRequestId = null;
  document.getElementById('modalTitle').textContent = listKey==='crmFeatureRequests' ? 'New CRM Feature Idea' : 'New Client Portal Feature Idea';
  document.getElementById('modalBody').innerHTML = featureRequestFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `<button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveFeatureRequestForm()">Add idea</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function openEditFeatureRequest(listKey, id){
  editingFeatureRequestListKey = listKey;
  editingFeatureRequestId = id;
  const r = DATA[listKey].find(x=>x.id===id);
  if(!r) return;
  document.getElementById('modalTitle').textContent = r.title;
  document.getElementById('modalBody').innerHTML = featureRequestFormHTML(r);
  document.getElementById('modalFoot').innerHTML = `<button class="btn-danger" onclick="deleteFeatureRequest('${listKey}','${id}')">Delete</button><div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveFeatureRequestForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function featureRequestFormHTML(r){
  r = r || {title:'', description:'', category:''};
  return `
    ${fld('fr_title','Title',r.title,'e.g. Drag-and-drop email builder')}
    ${taFld('fr_description','Description',r.description,'What is this and why does it matter')}
    <div class="field"><label>Category</label>
      <select id="fr_category">
        <option value="">-</option>
        ${FEATURE_REQUEST_CATEGORIES.map(c=>`<option value="${c}" ${r.category===c?'selected':''}>${c}</option>`).join('')}
      </select>
    </div>
  `;
}
async function saveFeatureRequestForm(){
  const listKey = editingFeatureRequestListKey;
  const title = document.getElementById('fr_title').value.trim();
  if(!title){ showToast('Title is required'); return; }
  const payload = {
    title, description: document.getElementById('fr_description').value.trim(),
    category: document.getElementById('fr_category').value,
  };
  if(editingFeatureRequestId){
    Object.assign(DATA[listKey].find(x=>x.id===editingFeatureRequestId), payload, {updatedAt: new Date().toISOString()});
  } else {
    DATA[listKey].push({ id: uid(), status:'Idea', votes:0, dateAdded: todayISO(), updatedAt: new Date().toISOString(), ...payload });
  }
  await saveData(); closeModal(); render();
  showToast(editingFeatureRequestId ? 'Updated' : 'Idea added');
}
async function deleteFeatureRequest(listKey, id){
  DATA[listKey] = DATA[listKey].filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Deleted');
}

async function saveCompanyForm(){
  const name = document.getElementById('co_name').value.trim();
  if(!name){ showToast('Company name is required'); return; }
  const existing = editingCompanyId ? DATA.companies.find(x=>x.id===editingCompanyId) : defaultCompany();
  const pv = (id, fallback)=>{ const el=document.getElementById(id); return el ? el.value.trim() : fallback; };
  const pc = (id, fallback)=>{ const el=document.getElementById(id); return el ? el.checked : fallback; };
  const pn = (id, fallback)=>{ const el=document.getElementById(id); return el ? (Number(el.value)||0) : fallback; };
  const techEls = document.querySelectorAll('.co-techstack-check');
  const complianceEls = document.querySelectorAll('.co-compliance-check');
  const payload = {
    name,
    industry: pv('co_industry', existing.industry), businessType: pv('co_businessType', existing.businessType),
    companySize: pv('co_companySize', existing.companySize), employees: pv('co_employees', existing.employees),
    websiteUrl: pv('co_websiteUrl', existing.websiteUrl), annualRevenue: pn('co_annualRevenue', existing.annualRevenue),
    companyEmail: pv('co_companyEmail', existing.companyEmail), companyPhone: pv('co_companyPhone', existing.companyPhone),
    address: {
      street: pv('co_street', existing.address.street), city: pv('co_city', existing.address.city),
      state: pv('co_state', existing.address.state), zip: pv('co_zip', existing.address.zip),
      country: pv('co_country', existing.address.country), timezone: pv('co_timezone', existing.address.timezone),
    },
    social: {
      facebook: pv('co_facebook', existing.social.facebook), instagram: pv('co_instagram', existing.social.instagram),
      linkedinCompany: pv('co_linkedinCompany', existing.social.linkedinCompany), twitter: pv('co_twitter', existing.social.twitter),
      tiktok: pv('co_tiktok', existing.social.tiktok), youtube: pv('co_youtube', existing.social.youtube),
      pinterest: pv('co_pinterest', existing.social.pinterest), threads: pv('co_threads', existing.social.threads),
      reddit: pv('co_reddit', existing.social.reddit), gbp: pv('co_gbp', existing.social.gbp),
    },
    marketing: {
      targetAudience: pv('co_targetAudience', existing.marketing.targetAudience), primaryGoal: pv('co_primaryGoal', existing.marketing.primaryGoal),
      painPoints: pv('co_painPoints', existing.marketing.painPoints), businessDescription: pv('co_businessDescription', existing.marketing.businessDescription),
      idealCustomer: pv('co_idealCustomer', existing.marketing.idealCustomer), competitors: pv('co_competitors', existing.marketing.competitors),
      geoMarket: pv('co_geoMarket', existing.marketing.geoMarket), businessModel: pv('co_businessModel', existing.marketing.businessModel),
      customerType: pv('co_businessModelType', existing.marketing.customerType), monthlyBudget: pn('co_monthlyBudget', existing.marketing.monthlyBudget),
      optIn: pc('co_marketingOptIn', existing.marketing.optIn), referralSource: pv('co_referralSource', existing.marketing.referralSource),
    },
    techStack: techEls.length ? Array.from(techEls).filter(c=>c.checked).map(c=>c.value) : existing.techStack,
    currentMarketingAgency: pv('co_currentMarketingAgency', existing.currentMarketingAgency),
    runningPaidAds: pc('co_runningPaidAds', existing.runningPaidAds), seoStatus: pv('co_seoStatus', existing.seoStatus),
    gaConnected: pc('co_gaConnected', existing.gaConnected), gscConnected: pc('co_gscConnected', existing.gscConnected),
    website: {
      builder: pv('co_builder', existing.website.builder), cms: pv('co_cms', existing.website.cms),
      crmUsing: pv('co_crmUsing', existing.website.crmUsing), hostingProvider: pv('co_hostingProvider', existing.website.hostingProvider),
      domainRegistrar: pv('co_domainRegistrar', existing.website.domainRegistrar), sslActive: pc('co_sslActive', existing.website.sslActive),
      launchDate: pv('co_launchDate', existing.website.launchDate), redesignNeeded: pc('co_redesignNeeded', existing.website.redesignNeeded),
    },
    assets: {
      ga4: pv('co_ga4', existing.assets.ga4), gsc: pv('co_gsc', existing.assets.gsc), gtm: pv('co_gtm', existing.assets.gtm),
      googleAdsId: pv('co_googleAdsId', existing.assets.googleAdsId), merchantCenter: pv('co_merchantCenter', existing.assets.merchantCenter),
      metaBM: pv('co_metaBM', existing.assets.metaBM), metaAdAccount: pv('co_metaAdAccount', existing.assets.metaAdAccount),
      metaPixel: pv('co_metaPixel', existing.assets.metaPixel), fbPageId: pv('co_fbPageId', existing.assets.fbPageId),
      igBusinessId: pv('co_igBusinessId', existing.assets.igBusinessId), linkedinInsight: pv('co_linkedinInsight', existing.assets.linkedinInsight),
      tiktokPixel: pv('co_tiktokPixel', existing.assets.tiktokPixel), pinterestTag: pv('co_pinterestTag', existing.assets.pinterestTag),
      clarityId: pv('co_clarityId', existing.assets.clarityId), hotjarId: pv('co_hotjarId', existing.assets.hotjarId),
      bingWebmaster: pv('co_bingWebmaster', existing.assets.bingWebmaster), callrail: pv('co_callrail', existing.assets.callrail),
    },
    branding: {
      guidelinesUrl: pv('co_guidelinesUrl', existing.branding.guidelinesUrl), logoUrl: pv('co_logoUrl', existing.branding.logoUrl),
      colors: pv('co_colors', existing.branding.colors), fonts: pv('co_fonts', existing.branding.fonts),
      voice: pv('co_voice', existing.branding.voice), assetsFolder: pv('co_assetsFolder', existing.branding.assetsFolder),
    },
    contract: {
      clientSince: pv('co_clientSince', existing.contract.clientSince), retainerType: pv('co_retainerType', existing.contract.retainerType),
      monthlyRetainer: pn('co_monthlyRetainer', existing.contract.monthlyRetainer), contractStart: pv('co_contractStart', existing.contract.contractStart),
      contractEnd: pv('co_contractEnd', existing.contract.contractEnd), autoRenew: pc('co_autoRenew', existing.contract.autoRenew),
      ltv: pn('co_ltv', existing.contract.ltv), estMonthlyHours: pv('co_estMonthlyHours', existing.contract.estMonthlyHours),
      assetQuota: pv('co_assetQuota', existing.contract.assetQuota),
    },
    billing: {
      paymentTerms: pv('co_paymentTerms', existing.billing.paymentTerms), monthlyInvoice: pn('co_monthlyInvoice', existing.billing.monthlyInvoice),
      lastInvoice: pv('co_lastInvoice', existing.billing.lastInvoice), nextInvoice: pv('co_nextInvoice', existing.billing.nextInvoice),
      lastPaymentDate: pv('co_lastPaymentDate', existing.billing.lastPaymentDate), delinquencyRisk: pv('co_delinquencyRisk', existing.billing.delinquencyRisk),
    },
    health: {
      nps: pv('co_nps', existing.health.nps), temperature: pv('co_temperature', existing.health.temperature),
      renewalProbability: pv('co_renewalProbability', existing.health.renewalProbability), churnRisk: pv('co_churnRisk', existing.health.churnRisk),
      rating: pv('co_rating', existing.health.rating),
    },
    compliance: complianceEls.length ? Array.from(complianceEls).filter(c=>c.checked).map(c=>c.value) : existing.compliance,
    internal: {
      accountManager: pv('co_accountManager', existing.internal.accountManager), salesRep: pv('co_salesRep', existing.internal.salesRep),
      projectManager: pv('co_projectManager', existing.internal.projectManager), seoSpecialist: pv('co_seoSpecialist', existing.internal.seoSpecialist),
      adsSpecialist: pv('co_adsSpecialist', existing.internal.adsSpecialist), designer: pv('co_designer', existing.internal.designer),
      developer: pv('co_developer', existing.internal.developer), copywriter: pv('co_copywriter', existing.internal.copywriter),
      priority: pv('co_priority', existing.internal.priority),
    },
  };
  if(editingCompanyId){
    Object.assign(existing, payload);
    // Keep every linked contact's display-only company name text in sync with the real record.
    DATA.contacts.forEach(c=>{ if(c.companyId===editingCompanyId) c.company = name; });
  } else {
    const co = { id: uid(), dateAdded: todayISO(), ...payload };
    DATA.companies.push(co);
    editingCompanyId = co.id;
  }
  await saveData(); closeModal(); render();
  showToast(editingCompanyId ? 'Company saved' : 'Company added');
}
async function deleteCompany(id){
  if(DATA.contacts.some(c=>c.companyId===id)){ showToast('Reassign or delete linked contacts first'); return; }
  DATA.companies = DATA.companies.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Company deleted');
}
function findOrCreateCompanyByName(name){
  name = (name||'').trim();
  if(!name) return null;
  const existing = DATA.companies.find(co=>co.name.toLowerCase()===name.toLowerCase());
  if(existing) return existing.id;
  const co = { ...defaultCompany(), id: uid(), dateAdded: todayISO(), name };
  DATA.companies.push(co);
  return co.id;
}

function renderDealsView(){
  const contactMap = {}; DATA.contacts.forEach(c=>contactMap[c.id]=c);
  let deals = scopedDeals(DATA.deals);
  if(searchTerm){ const s=searchTerm.toLowerCase(); deals = deals.filter(d=>(d.name+d.contactName).toLowerCase().includes(s)); }
  const openValue = deals.filter(d=>isOpenStage(d.stage)).reduce((s,d)=>s+Number(d.value||0),0);
  return `
    <div class="page-head">
      <div><h1>Deals</h1><p>Your pipeline, your terminology. Drag a card to move its stage.</p></div>
      <div class="csv-actions">
        <div class="date-pill">${fmtMoney(openValue)} open pipeline</div>
        <button class="btn-small" onclick="openPipelineStagesModal()">${iconGear()} Edit stages</button>
      </div>
    </div>
    <div class="kanban" id="kanbanBoard">
      ${DATA.dealStages.map(stage=>{
        const colDeals = deals.filter(d=>d.stage===stage.id);
        const total = colDeals.reduce((s,d)=>s+Number(d.value||0),0);
        return `
        <div class="kanban-col" data-stage="${stage.id}">
          <div class="kanban-col-head">
            <div><span class="kc-name">${esc(stage.name)}</span><span class="kc-total">${fmtMoney(total)}</span></div>
            <span class="kc-count">${colDeals.length}</span>
          </div>
          ${colDeals.map(d=>`
            <div class="kanban-card" draggable="true" data-id="${d.id}" onclick="openEditDeal('${d.id}')">
              <div class="kd-name">${esc(d.name)}</div>
              <div class="kd-contact">${esc(d.contactName||'')}</div>
              <div class="kd-value">${fmtMoney(d.value)}</div>
            </div>`).join('')}
        </div>`;
      }).join('')}
    </div>`;
}
function bindKanbanDragDrop(){
  const board = document.getElementById('kanbanBoard');
  if(!board) return;
  let draggedId = null;
  board.querySelectorAll('.kanban-card').forEach(card=>{
    card.addEventListener('dragstart', e=>{ draggedId = card.dataset.id; card.classList.add('dragging'); });
    card.addEventListener('dragend', e=>{ card.classList.remove('dragging'); });
  });
  board.querySelectorAll('.kanban-col').forEach(col=>{
    col.addEventListener('dragover', e=>{ e.preventDefault(); col.classList.add('drag-over'); });
    col.addEventListener('dragleave', e=>{ col.classList.remove('drag-over'); });
    col.addEventListener('drop', async e=>{
      e.preventDefault(); col.classList.remove('drag-over');
      if(!draggedId) return;
      const deal = DATA.deals.find(d=>d.id===draggedId);
      const newStage = col.dataset.stage;
      if(!deal || deal.stage===newStage) return;
      if(isWonStage(newStage)){
        const missing = validateDealProgression(deal);
        if(missing.length){ showToast(`Fill in first: ${missing.join(', ')}`); return; }
      }
      deal.stage = newStage;
      evaluateWorkflowsForDeal(deal, {kind:'stage_changed'});
      if(isWonStage(newStage)){
        deal.wonDate = todayISO();
        const contact = DATA.contacts.find(c=>c.id===deal.contactId);
        if(contact && contact.type!=='customer'){
          const prevType = contact.type;
          contact.type = 'customer'; contact.wonDate = todayISO();
          evaluateWorkflowsForContact(contact, {kind:'type_changed', from:prevType, to:'customer'});
        }
        if(!deal.onboardingCreated){
          createClientOnboardingChecklist(contact ? contact.companyId : null, deal.name);
          deal.onboardingCreated = true;
        }
        await notifyEvent('deal_closed', `"${deal.name}" was marked Won (${fmtMoney(deal.value)})`, contact);
      }
      await saveData(); render();
      showToast(`Moved "${deal.name}" to ${stageName(newStage)}`);
    });
  });
}
let editingDealId = null;
function openNewDealModal(){
  editingDealId = null;
  document.getElementById('modalTitle').textContent = 'New Deal';
  document.getElementById('modalBody').innerHTML = dealFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="saveDealForm()">Add deal</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function openEditDeal(id){
  editingDealId = id;
  const d = DATA.deals.find(x=>x.id===id);
  if(!d) return;
  document.getElementById('modalTitle').textContent = d.name;
  document.getElementById('modalBody').innerHTML = dealFormHTML(d);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-danger" onclick="deleteDeal('${id}')">Delete</button>
    <div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveDealForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function dealFormHTML(d){
  d = d || {name:'',contactId:'',value:0,stage:DATA.dealStages[0].id, assignedTo:currentScope().userId};
  const contactOptions = DATA.contacts.map(c=>`<option value="${c.id}" ${d.contactId===c.id?'selected':''}>${esc(c.name)}</option>`).join('');
  return `
    <div class="field"><label>Deal name</label><input id="d_name" value="${esc(d.name)}" placeholder="e.g. SEO retainer"></div>
    <div class="field-row">
      <div class="field"><label>Contact</label><select id="d_contact"><option value="">No contact linked</option>${contactOptions}</select></div>
      <div class="field"><label>Value ($)</label><input id="d_value" type="number" min="0" value="${d.value||0}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Stage</label>
        <select id="d_stage">${DATA.dealStages.map(s=>`<option value="${s.id}" ${d.stage===s.id?'selected':''}>${esc(s.name)}</option>`).join('')}</select>
      </div>
      <div class="field"><label>Assigned to</label>
        <select id="d_assignedTo">
          <option value="">Unassigned</option>
          ${DATA.users.map(u=>`<option value="${u.id}" ${d.assignedTo===u.id?'selected':''}>${esc(u.name)}</option>`).join('')}
        </select>
      </div>
    </div>
  `;
}
async function saveDealForm(){
  const name = document.getElementById('d_name').value.trim();
  if(!name){ showToast('Deal name is required'); return; }
  const contactId = document.getElementById('d_contact').value;
  const contact = DATA.contacts.find(c=>c.id===contactId);
  const newStage = document.getElementById('d_stage').value;
  const payload = { name, contactId: contactId||null, contactName: contact?contact.name:'', value: Number(document.getElementById('d_value').value)||0, stage: newStage, assignedTo: document.getElementById('d_assignedTo').value || null };
  if(isWonStage(newStage)){
    const missing = validateDealProgression(payload);
    if(missing.length){ showToast(`Fill in first: ${missing.join(', ')}`); return; }
  }
  if(editingDealId){
    const d = DATA.deals.find(x=>x.id===editingDealId);
    const wasWon = isWonStage(d.stage);
    const prevStage = d.stage;
    Object.assign(d, payload);
    if(newStage!==prevStage) evaluateWorkflowsForDeal(d, {kind:'stage_changed'});
    if(isWonStage(newStage) && !wasWon){
      d.wonDate = todayISO();
      if(contact && contact.type!=='customer'){
        const prevType = contact.type;
        contact.type='customer'; contact.wonDate=todayISO();
        evaluateWorkflowsForContact(contact, {kind:'type_changed', from:prevType, to:'customer'});
      }
      if(!d.onboardingCreated){
        createClientOnboardingChecklist(contact ? contact.companyId : null, d.name);
        d.onboardingCreated = true;
      }
      await notifyEvent('deal_closed', `"${d.name}" was marked Won (${fmtMoney(d.value)})`, contact);
    }
  } else {
    const d = { id: uid(), dateAdded: todayISO(), wonDate: isWonStage(newStage)?todayISO():null, onboardingCreated:false, ...payload };
    DATA.deals.push(d);
    evaluateWorkflowsForDeal(d, {kind:'stage_changed'});
    if(isWonStage(newStage) && contact && contact.type!=='customer'){
      const prevType = contact.type;
      contact.type='customer'; contact.wonDate=todayISO();
      evaluateWorkflowsForContact(contact, {kind:'type_changed', from:prevType, to:'customer'});
    }
    if(isWonStage(newStage)){
      createClientOnboardingChecklist(contact ? contact.companyId : null, d.name);
      d.onboardingCreated = true;
      await notifyEvent('deal_closed', `"${d.name}" was marked Won (${fmtMoney(d.value)})`, contact);
    }
  }
  await saveData(); closeModal(); render();
  showToast(editingDealId ? 'Deal updated' : 'Deal added');
}
async function deleteDeal(id){
  DATA.deals = DATA.deals.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Deal deleted');
}

/* ===================== PIPELINE STAGES (custom terminology) ===================== */
function openPipelineStagesModal(){
  document.getElementById('modalPanel').style.maxWidth = '560px';
  document.getElementById('modalTitle').textContent = 'Pipeline Stages';
  document.getElementById('modalBody').innerHTML = pipelineStagesFormHTML();
  document.getElementById('modalFoot').innerHTML = `<div></div><button class="btn-ghost" onclick="closeModal()">Done</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function pipelineStagesFormHTML(){
  return `
    <p style="font-size:11.5px; color:var(--slate); margin-bottom:14px;">Rename stages to match your team's language. Mark exactly which stage(s) count as Won or Lost, everything else is treated as open pipeline.</p>
    ${DATA.dealStages.map((s,i)=>`
      <div class="field-row" style="align-items:center;">
        <input value="${esc(s.name)}" onchange="renameStage('${s.id}', this.value)" style="flex:2; padding:9px 12px; border:1px solid var(--line); border-radius:8px; background:var(--paper);">
        <select onchange="setStageKind('${s.id}', this.value)" style="flex:1; padding:9px 8px; border:1px solid var(--line); border-radius:8px; background:var(--paper);">
          <option value="open" ${s.kind==='open'?'selected':''}>Open</option>
          <option value="won" ${s.kind==='won'?'selected':''}>Won</option>
          <option value="lost" ${s.kind==='lost'?'selected':''}>Lost</option>
        </select>
        <button class="btn-small" onclick="moveStage('${s.id}',-1)" ${i===0?'disabled':''}>↑</button>
        <button class="btn-small" onclick="moveStage('${s.id}',1)" ${i===DATA.dealStages.length-1?'disabled':''}>↓</button>
        <button class="btn-small" onclick="deleteStage('${s.id}')" ${DATA.dealStages.length<=1?'disabled':''}>Delete</button>
      </div>`).join('')}
    <div class="field-row" style="margin-top:14px;">
      <input id="newStageName" placeholder="New stage name" style="flex:2;">
      <select id="newStageKind" style="flex:1;">
        <option value="open">Open</option>
        <option value="won">Won</option>
        <option value="lost">Lost</option>
      </select>
      <button class="btn-primary" onclick="addStage()">Add</button>
    </div>
  `;
}
async function renameStage(id, name){
  name = name.trim();
  if(!name){ showToast('Stage name is required'); return; }
  const s = DATA.dealStages.find(x=>x.id===id);
  if(s) s.name = name;
  await saveData(); render();
}
async function setStageKind(id, kind){
  const s = DATA.dealStages.find(x=>x.id===id);
  if(s) s.kind = kind;
  await saveData(); render();
}
async function moveStage(id, dir){
  const i = DATA.dealStages.findIndex(x=>x.id===id);
  const j = i + dir;
  if(j<0 || j>=DATA.dealStages.length) return;
  const arr = DATA.dealStages;
  [arr[i], arr[j]] = [arr[j], arr[i]];
  await saveData(); document.getElementById('modalBody').innerHTML = pipelineStagesFormHTML(); render();
}
async function addStage(){
  const name = document.getElementById('newStageName').value.trim();
  if(!name){ showToast('Stage name is required'); return; }
  const kind = document.getElementById('newStageKind').value;
  DATA.dealStages.push({ id: uid(), name, kind });
  await saveData();
  document.getElementById('modalBody').innerHTML = pipelineStagesFormHTML();
  render();
  showToast('Stage added');
}
async function deleteStage(id){
  if(DATA.dealStages.length<=1) return;
  const fallback = DATA.dealStages.find(x=>x.id!==id);
  DATA.deals.forEach(d=>{ if(d.stage===id) d.stage = fallback.id; });
  DATA.dealStages = DATA.dealStages.filter(x=>x.id!==id);
  await saveData();
  document.getElementById('modalBody').innerHTML = pipelineStagesFormHTML();
  render();
  showToast('Stage deleted, its deals moved to ' + fallback.name);
}

/* ===================== CSV IMPORT / EXPORT ===================== */
function csvEscape(v){
  v = (v==null?'':String(v));
  if(/[",\n]/.test(v)) return '"' + v.replace(/"/g,'""') + '"';
  return v;
}
function exportContactsCSV(type){
  const rows = DATA.contacts.filter(c=>c.type===type);
  const headers = ['name','company','type','stage','source','dealValue','followUpDate','dateAdded'];
  const lines = [headers.join(',')].concat(rows.map(c=> headers.map(h=>csvEscape(c[h])).join(',')));
  const blob = new Blob([lines.join('\n')], {type:'text/csv'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `favze-crm-${type}.csv`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`Exported ${rows.length} ${typeLabel(type).toLowerCase()}(s)`);
}
function parseCSV(text){
  const lines = text.split(/\r?\n/).filter(l=>l.trim().length);
  if(!lines.length) return [];
  const parseLine = (line)=>{
    const out = []; let cur=''; let inQ=false;
    for(let i=0;i<line.length;i++){
      const ch = line[i];
      if(inQ){
        if(ch==='"' && line[i+1]==='"'){ cur+='"'; i++; }
        else if(ch==='"'){ inQ=false; }
        else cur+=ch;
      } else {
        if(ch==='"'){ inQ=true; }
        else if(ch===','){ out.push(cur); cur=''; }
        else cur+=ch;
      }
    }
    out.push(cur);
    return out;
  };
  const headers = parseLine(lines[0]).map(h=>h.trim());
  return lines.slice(1).map(line=>{
    const vals = parseLine(line);
    const obj = {};
    headers.forEach((h,i)=> obj[h] = (vals[i]||'').trim());
    return obj;
  });
}
async function handleCSVImport(input){
  const file = input.files[0];
  if(!file) return;
  const text = await file.text();
  const rows = parseCSV(text);
  const validTypes = ['prospect','lead','customer','past_customer'];
  let count = 0;
  rows.forEach(r=>{
    if(!r.name) return;
    const type = validTypes.includes((r.type||'').toLowerCase()) ? r.type.toLowerCase() : 'prospect';
    const companyId = r.company ? findOrCreateCompanyByName(r.company) : null;
    const c = {
      id: uid(), name: r.name, company: r.company||'', companyId, type,
      stage: r.stage||'', source: r.source||'CSV import',
      dealValue: Number(r.dealValue)||0, followUpDate: r.followUpDate||null,
      dateAdded: r.dateAdded || todayISO(), followUpDone:false, notes:[], responseHours:null,
      profile: defaultProfile(), tags:[], emailLists:[], services:[],
    };
    if(type==='customer'||type==='past_customer') c.wonDate = todayISO();
    if(type==='lead' && DATA.settings.roundRobin.enabled){
      const nextUser = getNextRoundRobinUser();
      if(nextUser) c.assignedTo = nextUser.id;
    }
    DATA.contacts.push(c);
    evaluateWorkflowsForContact(c, {kind:'created'});
    count++;
  });
  await saveData(); render();
  input.value = '';
  showToast(`Imported ${count} contact(s) from CSV`);
}

/* ===================== BULK ACTIONS ===================== */
function toggleSelectRow(id){
  if(selectedContactIds.has(id)) selectedContactIds.delete(id); else selectedContactIds.add(id);
  render();
}
function toggleSelectAll(el, type){
  const k = calc();
  const map = {prospect:k.prospects, lead:k.leads, customer:k.customers, past_customer:k.pastCustomers};
  if(el.checked) map[type].forEach(c=>selectedContactIds.add(c.id));
  else map[type].forEach(c=>selectedContactIds.delete(c.id));
  render();
}
function clearSelection(){ selectedContactIds.clear(); render(); }
/* ===================== CONVERT (move contacts between pipeline stages) ===================== */
function openConvertModal(fromType){
  const typeLabels = {prospect:'Prospects', lead:'Leads', customer:'Clients', past_customer:'Past Clients'};
  const rows = DATA.contacts.filter(c=>c.type===fromType).sort((a,b)=> a.name.localeCompare(b.name));
  const preSelected = new Set(rows.filter(r=>selectedContactIds.has(r.id)).map(r=>r.id));
  const useSelection = preSelected.size > 0;
  document.getElementById('modalPanel').style.maxWidth = '520px';
  document.getElementById('modalTitle').textContent = `Convert ${typeLabels[fromType]}`;
  document.getElementById('modalBody').innerHTML = `
    <div class="field">
      <label>Convert to</label>
      <select id="conv_toType">
        ${Object.entries(typeLabels).filter(([k])=>k!==fromType).map(([k,label])=>`<option value="${k}">${label}</option>`).join('')}
      </select>
    </div>
    <div class="field">
      <label>Which ${typeLabels[fromType].toLowerCase()}? ${useSelection ? '(using your current selection)' : ''}</label>
      <div style="display:flex; gap:8px; margin-bottom:8px;">
        <button type="button" class="btn-small" onclick="document.querySelectorAll('.conv-check').forEach(c=>c.checked=true)">Select all</button>
        <button type="button" class="btn-small" onclick="document.querySelectorAll('.conv-check').forEach(c=>c.checked=false)">Select none</button>
      </div>
      <div class="calls-mini" style="max-height:280px; overflow-y:auto;">
        ${rows.length ? rows.map(c=>`
          <label style="display:flex; align-items:center; gap:8px; padding:8px 4px; cursor:pointer; border-bottom:1px solid var(--line);">
            <input type="checkbox" class="conv-check" value="${c.id}" ${useSelection ? (preSelected.has(c.id)?'checked':'') : ''} style="width:auto;">
            <span>${esc(c.name)}${c.company?' · '+esc(c.company):''}</span>
          </label>`).join('') : `<div class="call-mini-item" style="color:var(--slate);">No ${typeLabels[fromType].toLowerCase()} to convert.</div>`}
      </div>
    </div>
  `;
  document.getElementById('modalFoot').innerHTML = `
    <div></div>
    <div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="runConvert()">Convert selected</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
async function runConvert(){
  const newType = document.getElementById('conv_toType').value;
  const ids = Array.from(document.querySelectorAll('.conv-check')).filter(c=>c.checked).map(c=>c.value);
  if(!ids.length){ showToast('Select at least one contact to convert'); return; }
  ids.forEach(id=>{
    const c = DATA.contacts.find(x=>x.id===id);
    if(c && c.type!==newType){
      const prevType = c.type;
      c.type = newType;
      if((newType==='customer'||newType==='past_customer') && !c.wonDate) c.wonDate = todayISO();
      if(prevType==='lead' && newType==='customer' && c.profile && !c.profile.convertedToAccount){
        c.profile.convertedToAccount = true;
        c.profile.convertedDate = c.profile.convertedDate || todayISO();
      }
      evaluateWorkflowsForContact(c, {kind:'type_changed', from:prevType, to:newType});
    }
  });
  await saveData();
  selectedContactIds.clear();
  closeModal();
  switchView(newType, {t:'toast', v:`Converted ${ids.length} contact(s) to ${typeLabel(newType)}`});
}
async function bulkApplyType(){
  const newType = document.getElementById('bulkTypeSelect').value;
  selectedContactIds.forEach(id=>{
    const c = DATA.contacts.find(x=>x.id===id);
    if(c && c.type!==newType){
      const prevType = c.type;
      c.type = newType;
      if((newType==='customer'||newType==='past_customer') && !c.wonDate) c.wonDate = todayISO();
      evaluateWorkflowsForContact(c, {kind:'type_changed', from:prevType, to:newType});
    }
  });
  await saveData();
  const count = selectedContactIds.size;
  selectedContactIds.clear();
  render();
  showToast(`Updated ${count} contact(s)`);
}
async function bulkApplyFollowUp(){
  const date = document.getElementById('bulkFollowUpDate').value;
  if(!date){ showToast('Pick a date first'); return; }
  selectedContactIds.forEach(id=>{
    const c = DATA.contacts.find(x=>x.id===id);
    if(c){ c.followUpDate = date; c.followUpDone = false; }
  });
  await saveData();
  const count = selectedContactIds.size;
  selectedContactIds.clear();
  render();
  showToast(`Follow up set for ${count} contact(s)`);
}
async function bulkDeleteSelected(type){
  const count = selectedContactIds.size;
  const ok = await showConfirmModal({ title: 'Delete contacts', message: `Delete ${count} contact${count===1?'':'s'}? This cannot be undone.`, confirmLabel: 'Delete', danger: true });
  if(!ok) return;
  DATA.contacts = DATA.contacts.filter(x=>!selectedContactIds.has(x.id));
  DATA.deals = DATA.deals.filter(d=>!selectedContactIds.has(d.contactId));
  selectedContactIds.clear();
  await saveData(); render();
  showToast(`Deleted ${count} contact(s)`);
}

/* ===================== SAVED VIEWS ===================== */
async function saveCurrentView(type){
  showPromptModal({
    title: 'Save View',
    fields: [{ id: 'name', label: 'View name', placeholder: 'e.g. Active leads', value: searchTerm }],
    confirmLabel: 'Save',
    onConfirm: async ({ name }) => {
      if(!name) return;
      DATA.savedViews.push({ id: uid(), name, view: type, searchTerm });
      await saveData(); render();
      showToast('View saved');
    }
  });
}
function applySavedView(id){
  const v = DATA.savedViews.find(x=>x.id===id);
  if(!v) return;
  if(v.view!==currentView){ goToView(v.view, {t:'savedView', id}); return; }
  searchTerm = v.searchTerm;
  document.getElementById('searchInput').value = v.searchTerm;
  render();
}
async function deleteSavedView(id){
  DATA.savedViews = DATA.savedViews.filter(x=>x.id!==id);
  await saveData(); render();
}

/* ===================== GLOBAL SEARCH ===================== */
function hideGlobalSearch(){
  const box = document.getElementById('globalSearchResults');
  if(box) box.classList.remove('open');
}
function runGlobalSearch(term){
  const box = document.getElementById('globalSearchResults');
  if(!box) return;
  if(!term || term.trim().length < 2){ box.classList.remove('open'); return; }
  const s = term.toLowerCase();
  const contacts = DATA.contacts.filter(c=>(c.name+c.company).toLowerCase().includes(s)).slice(0,4);
  const deals = DATA.deals.filter(d=>(d.name+d.contactName).toLowerCase().includes(s)).slice(0,4);
  const projects = DATA.projects.filter(p=>(p.name+p.client).toLowerCase().includes(s)).slice(0,4);
  const tasks = DATA.tasks.filter(t=>t.title.toLowerCase().includes(s)).slice(0,4);
  const reminders = DATA.reminders.filter(r=>r.text.toLowerCase().includes(s)).slice(0,4);
  const groups = [
    {label:'Contacts', items:contacts, render:x=>{ const safeType=['prospect','lead','customer','past_customer'].includes(x.type)?x.type:'prospect'; return {name:x.name, sub:typeLabel(x.type), onclick:`gsGo('${safeType}','${x.id}','contact')`}; }},
    {label:'Deals', items:deals, render:x=>({name:x.name, sub:fmtMoney(x.value), onclick:`gsGo('deals','${x.id}','deal')`})},
    {label:'Projects', items:projects, render:x=>({name:x.name, sub:x.status, onclick:`gsGo('project','${x.id}','project')`})},
    {label:'Tasks', items:tasks, render:x=>({name:x.title, sub:x.priority||'', onclick:`gsGo('task','${x.id}','task')`})},
    {label:'Reminders', items:reminders, render:x=>({name:x.text, sub:'', onclick:`gsGo('reminder','${x.id}','reminder')`})},
  ].filter(g=>g.items.length);
  if(!groups.length){ box.innerHTML = `<div class="gsr-empty">No matches for "${esc(term)}"</div>`; box.classList.add('open'); return; }
  box.innerHTML = groups.map(g=>`
    <div class="gsr-group">
      <div class="gsr-group-label">${g.label}</div>
      ${g.items.map(x=>{ const r=g.render(x); return `<div class="gsr-item" onclick="${r.onclick}"><span class="gsr-name">${esc(r.name)}</span><span class="gsr-sub">${esc(r.sub)}</span></div>`; }).join('')}
    </div>`).join('');
  box.classList.add('open');
}
function gsGo(view, id, kind){
  hideGlobalSearch();
  if(view!==currentView){ goToView(view, {t:'open', kind, id}); return; }
  searchTerm=''; document.getElementById('searchInput').value='';
  render();
  if(kind==='contact') openEditModal(id);
  else if(kind==='deal') openEditDeal(id);
  else if(kind==='project') openEditProject(id);
  else if(kind==='task') openEditTask(id);
  else if(kind==='reminder') openEditReminder(id);
}

/* ===================== CALL LOG (free browser dictation, no AI analysis) ===================== */
let activeRecognition = null;
let logCallContactId = null;
function openLogCallModal(contactId){
  logCallContactId = contactId;
  closeModal();
  setTimeout(()=>{
    document.getElementById('modalTitle').textContent = 'Log a call';
    document.getElementById('modalBody').innerHTML = logCallFormHTML(contactId);
    document.getElementById('modalFoot').innerHTML = `
      <button class="btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="saveCallLogForm()">Save call</button>`;
    document.getElementById('modalBackdrop').classList.add('open');
  }, 50);
}
function logCallFormHTML(contactId){
  const contactOptions = DATA.contacts.map(c=>`<option value="${c.id}" ${contactId===c.id?'selected':''}>${esc(c.name)}</option>`).join('');
  const supported = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  return `
    <div class="field-row">
      <div class="field"><label>Contact</label><select id="cl_contact"><option value="">No contact linked</option>${contactOptions}</select></div>
      <div class="field"><label>Date</label><input id="cl_date" type="date" value="${todayISO()}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Duration (minutes)</label><input id="cl_duration" type="number" min="0" placeholder="e.g. 12"></div>
      <div class="field" style="display:flex; align-items:flex-end; padding-bottom:10px;">
        <label style="display:flex; align-items:center; gap:8px; margin:0; text-transform:none; font-size:13px; font-weight:500; color:var(--ink);">
          <input type="checkbox" id="cl_billable" ${DATA.settings.billableDefaults.calls?'checked':''} style="width:auto;"> Billable
        </label>
      </div>
    </div>
    <div class="field">
      <label>Transcript</label>
      <textarea id="cl_transcript" rows="6" placeholder="Type notes, or use live transcription below"></textarea>
      <div class="rec-controls">
        ${supported ? `<button type="button" class="rec-btn" id="recBtn" onclick="toggleRecording()">${iconPhone()} Start live transcription</button>` : `<span class="rec-hint">Live transcription needs Chrome or Edge.</span>`}
        <span class="rec-hint">Free browser dictation. No AI reads or summarizes this, it's transcribed only.</span>
      </div>
    </div>
  `;
}
function toggleRecording(){
  const btn = document.getElementById('recBtn');
  const box = document.getElementById('cl_transcript');
  if(activeRecognition){
    activeRecognition.stop();
    activeRecognition = null;
    btn.classList.remove('recording');
    btn.innerHTML = `${iconPhone()} Start live transcription`;
    return;
  }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new SR();
  rec.continuous = true;
  rec.interimResults = true;
  rec.lang = 'en-US';
  let finalText = box.value ? box.value + ' ' : '';
  rec.onresult = (e)=>{
    let interim = '';
    for(let i=e.resultIndex; i<e.results.length; i++){
      if(e.results[i].isFinal) finalText += e.results[i][0].transcript + ' ';
      else interim += e.results[i][0].transcript;
    }
    box.value = finalText + interim;
  };
  rec.onerror = ()=>{ showToast('Microphone access needed for live transcription'); };
  rec.onend = ()=>{
    if(activeRecognition===rec){
      btn.classList.remove('recording');
      btn.innerHTML = `${iconPhone()} Start live transcription`;
      activeRecognition = null;
    }
  };
  rec.start();
  activeRecognition = rec;
  btn.classList.add('recording');
  btn.innerHTML = `<span class="rec-dot"></span> Stop transcription`;
}
async function saveCallLogForm(){
  if(activeRecognition){ activeRecognition.stop(); activeRecognition=null; }
  const contactId = document.getElementById('cl_contact').value;
  const contact = DATA.contacts.find(c=>c.id===contactId);
  const call = {
    id: uid(), contactId: contactId||null, contactName: contact?contact.name:'Unlinked',
    date: document.getElementById('cl_date').value || todayISO(),
    duration: Number(document.getElementById('cl_duration').value)||0,
    billable: document.getElementById('cl_billable').checked,
    loggedBy: currentScope().userId,
    transcript: document.getElementById('cl_transcript').value.trim(),
  };
  DATA.callLogs.unshift(call);
  await saveData(); closeModal(); render();
  showToast('Call logged');
}
async function deleteCallLog(id){
  const call = DATA.callLogs.find(x=>x.id===id);
  if(call && isWeekLocked(call.loggedBy, weekKey(call.date))){
    showToast('This week is approved and locked, ask your manager to reopen it first');
    return;
  }
  DATA.callLogs = DATA.callLogs.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Call deleted');
}
/* ===================== TIMESHEETS (approval locks retrospective edits) ===================== */
function weekKey(dateStr){
  const d = new Date(dateStr+'T00:00:00');
  const day = (d.getDay()+6)%7; // Monday=0
  const monday = new Date(d); monday.setDate(d.getDate()-day);
  const y = monday.getFullYear();
  const jan1 = new Date(y,0,1);
  const week = Math.ceil((((monday-jan1)/86400000)+jan1.getDay()+1)/7);
  return `${y}-W${String(week).padStart(2,'0')}`;
}
function weekLabel(wk){
  const [y,w] = wk.split('-W');
  return `Week ${w}, ${y}`;
}
function isWeekLocked(userId, wk){
  return DATA.timesheetApprovals.some(a=>a.userId===userId && a.weekKey===wk);
}
function timesheetRows(){
  const groups = {};
  DATA.callLogs.forEach(cl=>{
    if(!cl.loggedBy) return;
    const wk = weekKey(cl.date);
    const key = cl.loggedBy+'|'+wk;
    if(!groups[key]) groups[key] = { userId: cl.loggedBy, weekKey: wk, totalMin:0, billableMin:0, count:0 };
    groups[key].totalMin += Number(cl.duration||0);
    if(cl.billable) groups[key].billableMin += Number(cl.duration||0);
    groups[key].count++;
  });
  return Object.values(groups).sort((a,b)=> b.weekKey.localeCompare(a.weekKey));
}
/* ===================== CALENDAR (meetings, invites) ===================== */
let calendarOffset = 0;
let calendarFilter = 'mine';
let calendarDeptFilter = null;
function monthMeta(offset){
  const d = new Date(); d.setDate(1); d.setMonth(d.getMonth()+offset);
  return { year: d.getFullYear(), month: d.getMonth() };
}
function buildMonthGrid(year, month){
  const first = new Date(year, month, 1);
  const startDay = (first.getDay()+6)%7;
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const cells = [];
  for(let i=0;i<startDay;i++){ const dt = new Date(year, month, 1-(startDay-i)); cells.push({date:dt, inMonth:false}); }
  for(let d=1; d<=daysInMonth; d++){ cells.push({date:new Date(year,month,d), inMonth:true}); }
  while(cells.length<42){ const last=cells[cells.length-1].date; const next=new Date(last); next.setDate(last.getDate()+1); cells.push({date:next, inMonth:false}); }
  return cells;
}
function dstr(d){ return d.toISOString().slice(0,10); }
function filteredEvents(){
  const {userId} = currentScope();
  if(calendarFilter==='mine') return DATA.events.filter(e=> (e.attendees||[]).includes(userId) || e.createdBy===userId);
  if(calendarFilter==='department' && calendarDeptFilter){
    const deptUserIds = DATA.users.filter(u=>u.department===calendarDeptFilter).map(u=>u.id);
    return DATA.events.filter(e=> (e.attendees||[]).some(a=>deptUserIds.includes(a)));
  }
  return DATA.events;
}
const TIME_OFF_TYPES = [
  {value:'vacation', label:'Vacation', color:'#E3A008'},
  {value:'sick', label:'Sick Day', color:'#d64545'},
  {value:'personal', label:'Personal Day', color:'#0A89A3'},
  {value:'maternity', label:'Maternity/Parental Leave', color:'#7c5cff'},
  {value:'birthday', label:'Birthday', color:'#e0468b', autoApprove:true, recurring:true},
  {value:'other', label:'Other', color:'#5B6B7C'},
];
function timeOffTypeMeta(v){ return TIME_OFF_TYPES.find(t=>t.value===v) || TIME_OFF_TYPES[TIME_OFF_TYPES.length-1]; }
function dateInRange(ds, start, end){ return ds>=start && ds<=(end||start); }
function timeOffOnDate(req, ds){
  if(!timeOffTypeMeta(req.type).recurring) return dateInRange(ds, req.startDate, req.endDate);
  return ds.slice(5) === req.startDate.slice(5); // MM-DD match, recurs every year
}
function isUserOutToday(userId){
  const user = DATA.users.find(u=>u.id===userId);
  if(user && user.outOfOffice) return true;
  return DATA.timeOffRequests.some(r=> r.userId===userId && r.status==='approved' && r.type!=='birthday' && timeOffOnDate(r, todayISO()));
}
function canApproveTimeOff(req){
  const scope = currentScope();
  if(scope.canManageSettings) return true;
  const requester = DATA.users.find(u=>u.id===req.userId);
  return requester && requester.managerId === scope.userId;
}
function renderCalendarView(){
  const {year, month} = monthMeta(calendarOffset);
  const cells = buildMonthGrid(year, month);
  const events = filteredEvents();
  const departments = Array.from(new Set(DATA.users.map(u=>u.department))).filter(Boolean);
  const monthLabel = new Date(year, month, 1).toLocaleDateString('en-US',{month:'long', year:'numeric'});
  const today = todayISO();
  const pendingForMe = DATA.timeOffRequests.filter(r=>r.status==='pending' && canApproveTimeOff(r));
  return `
    <div class="page-head">
      <div><h1>Work Calendar</h1><p>Meetings and calls across the team, invite and de-invite anyone.</p></div>
      <div class="csv-actions">
        <button class="btn-small" onclick="exportCalendarICS()">${iconDownload()} Export to Outlook / Apple (.ics)</button>
        <button class="btn-small" onclick="document.getElementById('icsFileInput').click()">${iconUpload()} Import .ics</button>
        <button class="btn-small" onclick="openTimeOffModal()">${iconPlus()} Request Time Off</button>
      </div>
    </div>
    <p style="font-size:11px; color:var(--slate); margin:-10px 0 16px;">This is real file-based sync, no login or live two-way connection. Export downloads a standard .ics file that Outlook and Apple Calendar both open directly. Import reads a .ics file exported from either one and adds those events here.</p>
    <div class="cal-toolbar">
      <div class="cal-filters">
        <span class="cal-filter ${calendarFilter==='mine'?'active':''}" onclick="setCalendarFilter('mine')">My Calendar</span>
        <span class="cal-filter ${calendarFilter==='everyone'?'active':''}" onclick="setCalendarFilter('everyone')">Everyone</span>
        <span class="cal-filter ${calendarFilter==='department'?'active':''}" onclick="setCalendarFilter('department')">Department</span>
        ${calendarFilter==='department' ? `
        <select onchange="setCalendarDept(this.value)" style="padding:7px 10px; border-radius:99px; border:1px solid var(--line); font-size:12px;">
          <option value="">Choose...</option>
          ${departments.map(d=>`<option value="${esc(d)}" ${calendarDeptFilter===d?'selected':''}>${esc(d)}</option>`).join('')}
        </select>` : ''}
      </div>
      <div class="cal-nav">
        <button onclick="calendarOffset--; render();">‹</button>
        <span class="cal-month-label">${monthLabel}</span>
        <button onclick="calendarOffset++; render();">›</button>
        <button onclick="calendarOffset=0; render();" style="width:auto; padding:0 10px; font-size:11px; font-weight:700;">Today</button>
      </div>
    </div>
    ${pendingForMe.length ? `
    <div class="panel" style="padding:14px 18px; margin-bottom:16px;">
      <div style="font-size:12px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:10px;">Pending approvals</div>
      ${pendingForMe.map(r=>{
        const user = DATA.users.find(u=>u.id===r.userId);
        const t = timeOffTypeMeta(r.type);
        return `
        <div class="role-user-row">
          <div><div class="ru-name">${esc(user?user.name:'Unknown')} <span style="color:${accessibleTextShade(t.color, document.documentElement.dataset.theme==='dark')};">· ${t.label}</span></div><div class="ru-sub">${fmtDate(r.startDate)} to ${fmtDate(r.endDate||r.startDate)}${r.notes?' · '+esc(r.notes):''}</div></div>
          <div style="display:flex; gap:8px;"><button class="btn-small" onclick="decideTimeOff('${r.id}','approved')">Approve</button><button class="btn-small" onclick="decideTimeOff('${r.id}','rejected')">Reject</button></div>
        </div>`;
      }).join('')}
    </div>` : ''}
    <div class="cal-grid">
      ${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>`<div class="cal-weekday">${d}</div>`).join('')}
      ${cells.map(c=>{
        const ds = dstr(c.date);
        const dayEvents = events.filter(e=>e.date===ds).sort((a,b)=>(a.startTime||'').localeCompare(b.startTime||''));
        const dayTimeOff = DATA.timeOffRequests.filter(r=> r.status!=='rejected' && timeOffOnDate(r, ds) && (calendarFilter!=='mine' || r.userId===currentScope().userId));
        const pillCount = dayEvents.length + dayTimeOff.length;
        const shownEvents = dayEvents.slice(0,3);
        const shownOff = dayTimeOff.slice(0, Math.max(0,3-shownEvents.length));
        return `
        <div class="cal-cell ${c.inMonth?'':'other-month'} ${ds===today?'today':''}" onclick="openNewMeetingModal('${ds}')">
          <div class="cal-daynum">${c.date.getDate()}</div>
          ${shownEvents.map(e=>`<div class="cal-pill" style="background:${e.eventType==='call'?'var(--navy)':'var(--teal-solid)'};" onclick="event.stopPropagation(); openEditMeeting('${e.id}')">${e.eventType==='call'?'Call: ':''}${esc(e.title)}</div>`).join('')}
          ${shownOff.map(r=>{ const t=timeOffTypeMeta(r.type); const user=DATA.users.find(u=>u.id===r.userId); return `<div class="cal-pill" style="background:${safeBgForWhiteText(t.color)}; ${r.status==='pending'?'opacity:.6;':''}" onclick="event.stopPropagation(); openTimeOffDetail('${r.id}')">${esc(user?user.name.split(' ')[0]:'')} ${t.label}${r.status==='pending'?' (pending)':''}</div>`; }).join('')}
          ${pillCount>3 ? `<div class="cal-more">+${pillCount-3} more</div>` : ''}
        </div>`;
      }).join('')}
    </div>`;
}
async function setCalendarFilter(f){ calendarFilter=f; if(f==='department' && !calendarDeptFilter && DATA.users[0]) calendarDeptFilter=DATA.users[0].department; render(); }
function setCalendarDept(d){ calendarDeptFilter=d; render(); }

let editingEventId = null;
function openNewMeetingModal(dateStr){
  editingEventId = null;
  document.getElementById('modalTitle').textContent = 'New Meeting';
  document.getElementById('modalBody').innerHTML = meetingFormHTML(null, dateStr);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="saveMeetingForm()">Create meeting</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function openEditMeeting(id){
  editingEventId = id;
  const ev = DATA.events.find(x=>x.id===id);
  if(!ev) return;
  document.getElementById('modalTitle').textContent = ev.title;
  document.getElementById('modalBody').innerHTML = meetingFormHTML(ev, ev.date);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-danger" onclick="deleteMeeting('${id}')">Delete</button>
    <div style="display:flex; gap:10px; flex-wrap:wrap; justify-content:flex-end;"><button class="btn-ghost" onclick="exportSingleEventICS('${id}')">${iconDownload()} Add to Outlook/Apple</button><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveMeetingForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function meetingFormHTML(ev, dateStr){
  ev = ev || { title:'', date: dateStr||todayISO(), startTime:'09:00', endTime:'09:30', attendees:[currentScope().userId].filter(Boolean), location:'', notes:'', contactId:null, eventType:'meeting' };
  const contactOptions = DATA.contacts.map(c=>`<option value="${c.id}" ${ev.contactId===c.id?'selected':''}>${esc(c.name)}</option>`).join('');
  return `
    <div class="field-row">
      <div class="field"><label>Type</label>
        <select id="ev_type">
          <option value="meeting" ${ev.eventType==='meeting'?'selected':''}>Meeting</option>
          <option value="call" ${ev.eventType==='call'?'selected':''}>Call</option>
        </select>
      </div>
      <div class="field"><label>Title</label><input id="ev_title" value="${esc(ev.title)}" placeholder="e.g. Discovery call with Redline Powersports"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Date</label><input id="ev_date" type="date" value="${ev.date}"></div>
      <div class="field"><label>Start</label><input id="ev_start" type="time" value="${ev.startTime||'09:00'}"></div>
      <div class="field"><label>End</label><input id="ev_end" type="time" value="${ev.endTime||'09:30'}"></div>
    </div>
    <div class="field">
      <label>Attendees (click to invite / de-invite)</label>
      <div class="cal-att-list">
        ${DATA.users.map(u=>`
          <span class="cal-att-chip ${(ev.attendees||[]).includes(u.id)?'active':''}" data-user="${u.id}" onclick="this.classList.toggle('active')">${esc(u.name)}</span>`).join('')}
      </div>
    </div>
    <div class="field"><label>Related contact (optional)</label><select id="ev_contact"><option value="">None</option>${contactOptions}</select></div>
    <div class="field"><label>Location / link</label><input id="ev_location" value="${esc(ev.location)}" placeholder="Office, Zoom link, phone..."></div>
    <div class="field"><label>Notes</label><textarea id="ev_notes" rows="3">${esc(ev.notes)}</textarea></div>
  `;
}
async function saveMeetingForm(){
  const title = document.getElementById('ev_title').value.trim();
  if(!title){ showToast('Title is required'); return; }
  const attendees = Array.from(document.querySelectorAll('.cal-att-chip.active')).map(el=>el.dataset.user);
  const eventType = document.getElementById('ev_type').value;
  const payload = {
    title,
    eventType,
    date: document.getElementById('ev_date').value || todayISO(),
    startTime: document.getElementById('ev_start').value,
    endTime: document.getElementById('ev_end').value,
    attendees,
    contactId: document.getElementById('ev_contact').value || null,
    location: document.getElementById('ev_location').value.trim(),
    notes: document.getElementById('ev_notes').value.trim(),
  };
  if(editingEventId){
    Object.assign(DATA.events.find(x=>x.id===editingEventId), payload);
  } else {
    DATA.events.push({ id: uid(), createdBy: currentScope().userId, dateAdded: todayISO(), ...payload });
  }
  await saveData(); closeModal(); render();
  showToast(editingEventId ? (eventType==='call'?'Call updated':'Meeting updated') : (eventType==='call'?'Call scheduled':'Meeting created'));
}
async function deleteMeeting(id){
  DATA.events = DATA.events.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Meeting deleted');
}

/* ===================== TIME OFF (PTO, OOO, leave, birthdays) ===================== */
function openTimeOffModal(){
  document.getElementById('modalTitle').textContent = 'Request Time Off';
  document.getElementById('modalBody').innerHTML = timeOffFormHTML();
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="submitTimeOff()">Submit</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function timeOffFormHTML(){
  return `
    <div class="field"><label>Type</label>
      <select id="to_type" onchange="document.getElementById('to_endWrap').style.display = this.value==='birthday' ? 'none' : '';">
        ${TIME_OFF_TYPES.map(t=>`<option value="${t.value}">${t.label}</option>`).join('')}
      </select>
    </div>
    <div class="field-row">
      <div class="field"><label>Start date</label><input id="to_start" type="date" value="${todayISO()}"></div>
      <div class="field" id="to_endWrap"><label>End date</label><input id="to_end" type="date" value="${todayISO()}"></div>
    </div>
    <div class="field"><label>Notes (optional)</label><textarea id="to_notes" rows="2" placeholder="Anything your manager should know"></textarea></div>
    <div class="field" style="background:var(--paper); border-radius:8px; padding:10px 12px; font-size:11px; color:var(--slate);">
      Birthdays post immediately and repeat every year. PTO, Out of Office, and Leave need approval from the CEO role or your manager before they show as confirmed.
    </div>
  `;
}
async function submitTimeOff(){
  const type = document.getElementById('to_type').value;
  const startDate = document.getElementById('to_start').value || todayISO();
  const isBirthday = type==='birthday';
  const endDate = isBirthday ? startDate : (document.getElementById('to_end').value || startDate);
  const notes = document.getElementById('to_notes').value.trim();
  const {userId} = currentScope();
  const req = {
    id: uid(), userId, type, startDate, endDate, notes,
    status: isBirthday ? 'approved' : 'pending',
    requestedAt: new Date().toISOString(), decidedBy: isBirthday?userId:null, decidedAt: isBirthday?new Date().toISOString():null
  };
  DATA.timeOffRequests.push(req);
  await saveData(); closeModal(); render();
  showToast(isBirthday ? 'Birthday added to the calendar' : 'Time off requested, waiting on approval');
}
function openTimeOffDetail(id){
  const req = DATA.timeOffRequests.find(x=>x.id===id);
  if(!req) return;
  const user = DATA.users.find(u=>u.id===req.userId);
  const t = timeOffTypeMeta(req.type);
  document.getElementById('modalTitle').textContent = `${t.label} - ${user?user.name:'Unknown'}`;
  document.getElementById('modalBody').innerHTML = `
    <div class="field-row">
      <div class="field"><label>From</label><input value="${fmtDate(req.startDate)}" readonly></div>
      <div class="field"><label>To</label><input value="${fmtDate(req.endDate||req.startDate)}" readonly></div>
    </div>
    <div class="field"><label>Status</label><input value="${req.status.charAt(0).toUpperCase()+req.status.slice(1)}" readonly></div>
    ${req.notes ? `<div class="field"><label>Notes</label><textarea rows="2" readonly>${esc(req.notes)}</textarea></div>` : ''}
  `;
  const canDecide = req.status==='pending' && canApproveTimeOff(req);
  const canDelete = req.userId===currentScope().userId || currentScope().canManageSettings;
  document.getElementById('modalFoot').innerHTML = `
    ${canDelete ? `<button class="btn-danger" onclick="deleteTimeOff('${id}')">Delete</button>` : '<div></div>'}
    <div style="display:flex; gap:10px;">
      ${canDecide ? `<button class="btn-ghost" onclick="decideTimeOff('${id}','rejected')">Reject</button><button class="btn-primary" onclick="decideTimeOff('${id}','approved')">Approve</button>` : `<button class="btn-ghost" onclick="closeModal()">Close</button>`}
    </div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
async function decideTimeOff(id, status){
  const req = DATA.timeOffRequests.find(x=>x.id===id);
  if(!req || !canApproveTimeOff(req)) { showToast('Only the CEO role or their manager can decide this'); return; }
  req.status = status;
  req.decidedBy = currentScope().userId;
  req.decidedAt = new Date().toISOString();
  await saveData(); closeModal(); render();
  showToast(status==='approved' ? 'Time off approved' : 'Time off rejected');
}
async function deleteTimeOff(id){
  DATA.timeOffRequests = DATA.timeOffRequests.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Request deleted');
}

/* ===================== .ICS SYNC (Outlook / Apple Calendar, no OAuth backend) ===================== */
function icsEscape(s){ return String(s||'').replace(/\\/g,'\\\\').replace(/;/g,'\\;').replace(/,/g,'\\,').replace(/\n/g,'\\n'); }
function icsDateTime(dateStr, timeStr){ return dateStr.replace(/-/g,'') + 'T' + (timeStr||'00:00').replace(':','') + '00'; }
function icsStamp(){ return new Date().toISOString().replace(/[-:]/g,'').split('.')[0] + 'Z'; }
function generateICS(events){
  const lines = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Favze CRM//EN','CALSCALE:GREGORIAN'];
  events.forEach(e=>{
    lines.push('BEGIN:VEVENT');
    lines.push('UID:'+e.id+'@favze-crm');
    lines.push('DTSTAMP:'+icsStamp());
    lines.push('DTSTART:'+icsDateTime(e.date, e.startTime));
    lines.push('DTEND:'+icsDateTime(e.date, e.endTime||e.startTime));
    lines.push('SUMMARY:'+icsEscape((e.eventType==='call'?'Call: ':'')+e.title));
    if(e.location) lines.push('LOCATION:'+icsEscape(e.location));
    if(e.notes) lines.push('DESCRIPTION:'+icsEscape(e.notes));
    lines.push('END:VEVENT');
  });
  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}
function downloadICS(filename, content){
  const blob = new Blob([content], {type:'text/calendar'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
function exportCalendarICS(){
  const events = filteredEvents();
  if(!events.length){ showToast('No meetings or calls in this view to export'); return; }
  downloadICS('favze-crm-calendar.ics', generateICS(events));
  showToast(`Exported ${events.length} event(s). Open the file to add them to Outlook or Apple Calendar.`);
}
function exportSingleEventICS(id){
  const ev = DATA.events.find(x=>x.id===id);
  if(!ev) return;
  downloadICS((ev.title||'event').replace(/[^a-z0-9]+/gi,'-').toLowerCase()+'.ics', generateICS([ev]));
}
function parseICS(text){
  const lines = text.split(/\r?\n/);
  const events = [];
  let cur = null;
  lines.forEach(line=>{
    if(line.startsWith('BEGIN:VEVENT')){ cur = {}; }
    else if(line.startsWith('END:VEVENT')){ if(cur) events.push(cur); cur=null; }
    else if(cur){
      const idx = line.indexOf(':');
      if(idx<0) return;
      const key = line.slice(0,idx).split(';')[0];
      const val = line.slice(idx+1);
      if(key==='SUMMARY') cur.title = val.replace(/\\,/g,',').replace(/\\;/g,';').replace(/\\n/g,' ');
      if(key==='LOCATION') cur.location = val.replace(/\\,/g,',');
      if(key==='DESCRIPTION') cur.notes = val.replace(/\\,/g,',').replace(/\\n/g,' ');
      if(key==='DTSTART') Object.assign(cur, icsToDateTime(val));
      if(key==='DTEND') { const dt = icsToDateTime(val); cur.endTime = dt.startTime; }
    }
  });
  return events;
}
function icsToDateTime(val){
  val = val.replace('Z','');
  const datePart = val.slice(0,8);
  const date = `${datePart.slice(0,4)}-${datePart.slice(4,6)}-${datePart.slice(6,8)}`;
  let startTime = '09:00';
  if(val.includes('T')){
    const timePart = val.split('T')[1];
    startTime = `${timePart.slice(0,2)}:${timePart.slice(2,4)}`;
  }
  return { date, startTime };
}
async function handleICSImport(input){
  const file = input.files[0];
  if(!file) return;
  const text = await file.text();
  const parsed = parseICS(text);
  if(!parsed.length){ showToast('No events found in that file'); input.value=''; return; }
  parsed.forEach(p=>{
    DATA.events.push({
      id: uid(), eventType:'meeting', title: p.title||'Imported event',
      date: p.date||todayISO(), startTime: p.startTime||'09:00', endTime: p.endTime||p.startTime||'09:30',
      attendees: [currentScope().userId].filter(Boolean), contactId:null,
      location: p.location||'', notes: (p.notes||'') + (p.notes?' ':'') + '(Imported from calendar file)',
      createdBy: currentScope().userId, dateAdded: todayISO(),
    });
  });
  await saveData(); render();
  input.value = '';
  showToast(`Imported ${parsed.length} event(s) from your calendar file`);
}

/* ===================== CONTENT CALENDAR (per customer) ===================== */
let contentCalOffset = 0;
let contentCalCustomerId = 'all';
const CONTENT_TYPES = [
  {value:'blog', label:'Blog Post', color:'#0A89A3'},
  {value:'social', label:'Social Post', color:'#E3A008'},
  {value:'video', label:'Video', color:'#064187'},
  {value:'email', label:'Email', color:'#7C3AED'},
  {value:'website-page', label:'Website Page', color:'#059669'},
  {value:'other', label:'Other', color:'#64748B'},
];
function contentTypeMeta(v){ return CONTENT_TYPES.find(t=>t.value===v) || CONTENT_TYPES[0]; }

/* ===================== SOCIAL CROSS-POSTER ===================== */
// Real, honest capability check per platform: only X, Threads, LinkedIn, Pinterest, and
// Facebook have a public web URL that opens with a caption/link pre-filled. The rest
// (TikTok, Instagram, YouTube, Snapchat, Nextdoor) have no public compose-intent URL at
// all, posting on those is app/dashboard-only by design, no backend changes that. For
// those, "publish" copies the caption and opens the site so it can be pasted in manually.
const SOCIAL_PLATFORMS = [
  {value:'tiktok', label:'TikTok', color:'#000000', limit:2200, intent:null, url:'https://www.tiktok.com/upload'},
  {value:'pinterest', label:'Pinterest', color:'#E60023', limit:500, intent:(text,link)=>`https://www.pinterest.com/pin-builder/?description=${encodeURIComponent(text)}${link?`&url=${encodeURIComponent(link)}`:''}`, url:'https://www.pinterest.com'},
  {value:'x', label:'X (Twitter)', color:'#000000', limit:280, intent:(text)=>`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, url:'https://x.com'},
  {value:'instagram', label:'Instagram', color:'#d62976', limit:2200, intent:null, url:'https://www.instagram.com'},
  {value:'facebook', label:'Facebook', color:'#1877F2', limit:63206, intent:(text,link)=>link?`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}&quote=${encodeURIComponent(text)}`:null, url:'https://www.facebook.com'},
  {value:'linkedin', label:'LinkedIn', color:'#0A66C2', limit:3000, intent:(text,link)=>link?`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`:null, url:'https://www.linkedin.com/feed/'},
  {value:'youtube', label:'YouTube', color:'#FF0000', limit:5000, intent:null, url:'https://studio.youtube.com'},
  {value:'youtube_community', label:'YouTube Community', color:'#FF0000', limit:1500, intent:null, url:'https://studio.youtube.com'},
  {value:'snapchat', label:'Snapchat', color:'#000000', limit:250, intent:null, url:'https://web.snapchat.com'},
  {value:'threads', label:'Threads', color:'#000000', limit:500, intent:null, url:'https://www.threads.net'},
  {value:'nextdoor', label:'Nextdoor', color:'#8ED500', limit:800, intent:null, url:'https://nextdoor.com'},
];
function platformMeta(v){ return SOCIAL_PLATFORMS.find(p=>p.value===v) || SOCIAL_PLATFORMS[0]; }
const THREAD_PLATFORMS = ['x','threads']; // platforms that support multi-post threads
let contentCalViewMode = 'feed';
function setContentCalViewMode(m){ contentCalViewMode = m; render(); }
function avatarColor(seed){
  let hash = 0;
  for(let i=0;i<seed.length;i++){ hash = seed.charCodeAt(i) + ((hash<<5)-hash); }
  return safeBgForWhiteText(TAG_SWATCHES[Math.abs(hash) % TAG_SWATCHES.length]);
}
function initials(name){ return (name||'?').trim().split(/\s+/).map(w=>w[0]).slice(0,2).join('').toUpperCase(); }
function renderContentCalendarView(){
  const customers = DATA.contacts.filter(c=>c.type==='customer');
  const toolbarHead = `
    <div class="page-head">
      <div><h1>Content Calendar</h1><p>One blog post, one social post, one video, whatever's planned, tied to the actual customer it's for.</p></div>
    </div>
    <div class="feed-toggle">
      <span class="${contentCalViewMode==='feed'?'active':''}" onclick="setContentCalViewMode('feed')">Feed</span>
      <span class="${contentCalViewMode==='grid'?'active':''}" onclick="setContentCalViewMode('grid')">Calendar</span>
    </div>
  `;
  return toolbarHead + (contentCalViewMode==='feed' ? renderContentFeed(customers) : renderContentGrid(customers));
}
function renderCrossPosterView(){
  const customers = DATA.contacts.filter(c=>c.type==='customer');
  const items = [...DATA.contentCalendar].filter(i=>i.type==='social').sort((a,b)=> b.date.localeCompare(a.date) || b.dateAdded.localeCompare(a.dateAdded));
  const dueCount = items.filter(i=> i.publishStatus==='scheduled' && i.date<=todayISO() && (i.platforms||[]).length).length;
  return `
    <div class="page-head">
      <div><h1>Cross Poster</h1><p>Write once, target any of 11 platforms, build real X/Threads threads, and schedule it. See what each Publish button actually does <a onclick="showCrossPosterHelp()" style="cursor:pointer; color:var(--teal-text); font-weight:700;">here</a>.</p></div>
      <div class="csv-actions">
        ${dueCount ? `<button class="btn-small" onclick="openMassPublish()">${iconUpload()} Publish ${dueCount} due today</button>` : ''}
        <button class="btn-new" onclick="openNewCrossPostModal()">${iconPlus()} <span>New Cross-Post</span></button>
      </div>
    </div>
    <div class="cal-toolbar">
      <div class="cal-filters">
        <select onchange="setContentCalCustomer(this.value)" style="padding:8px 12px; border-radius:99px; border:1px solid var(--line); font-size:12px; font-weight:700;">
          <option value="all" ${contentCalCustomerId==='all'?'selected':''}>All clients</option>
          ${customers.map(c=>`<option value="${c.id}" ${contentCalCustomerId===c.id?'selected':''}>${esc(c.name)}</option>`).join('')}
        </select>
      </div>
      <div class="date-pill">${items.length} cross-post${items.length===1?'':'s'}</div>
    </div>
    ${items.length ? items.filter(i=> contentCalCustomerId==='all' || i.contactId===contentCalCustomerId).map(i=>{
      const contact = DATA.contacts.find(c=>c.id===i.contactId);
      return `
      <div class="feed-card">
        <div class="feed-head">
          <div class="feed-avatar" style="background:${avatarColor(i.contactId||i.id)};">${esc(initials(contact?contact.name:(i.contactId?'?':'FZ')))}</div>
          <div>
            <div class="feed-who">${esc(contact?contact.name:'Favze (no specific customer)')}</div>
            <div class="feed-meta">${fmtDate(i.date)}${i.scheduledTime?' · '+i.scheduledTime:''}
              <span class="badge ${i.publishStatus==='published'?'customer':'lead'}" style="margin-left:4px;">${i.publishStatus==='published'?'Published':'Scheduled'}</span>
              ${i.threadMode && i.threadSegments && i.threadSegments.length ? `<span class="badge prospect" style="margin-left:4px;">Thread · ${i.threadSegments.length}</span>` : ''}
            </div>
            <div style="display:flex; flex-wrap:wrap; gap:5px; margin-top:6px;">${(i.platforms||[]).map(pv=>{ const p=platformMeta(pv); return `<span style="font-size:10px; font-weight:700; padding:2px 8px; border-radius:99px; background:${safeBgForWhiteText(p.color)}; color:#fff;">${esc(p.label)}</span>`; }).join('')}</div>
          </div>
        </div>
        <div class="feed-title" onclick="openEditContent('${i.id}')">${esc(i.title || 'Untitled cross-post')}</div>
        ${i.caption ? `<div class="feed-caption">"${esc(i.caption)}"</div>` : ''}
        <div class="feed-actions">
          <button class="feed-action-btn" onclick="openPublishQueue('${i.id}')">${iconUpload()} Publish</button>
          <button class="feed-action-btn" onclick="openEditContent('${i.id}')">${iconGear()} Edit</button>
        </div>
      </div>`;
    }).join('') : `<div class="feed-empty">No cross-posts yet. Hit "New Cross-Post" to write one and target it at any combination of platforms.</div>`}
  `;
}
function showCrossPosterHelp(){
  document.getElementById('modalTitle').textContent = 'What Publish actually does, per platform';
  document.getElementById('modalBody').innerHTML = `
    <p style="font-size:12.5px; color:var(--slate); margin-bottom:12px;">Only these four platforms let any app open their composer with your text already filled in, that's a limit set by each platform, not this app:</p>
    <table style="width:100%; margin-bottom:14px;">
      <thead><tr><th>Platform</th><th>What happens</th></tr></thead>
      <tbody>
        <tr><td>X (Twitter)</td><td>Opens pre-filled, ready to post</td></tr>
        <tr><td>Threads</td><td>Copies text, opens Threads to paste</td></tr>
        <tr><td>LinkedIn</td><td>Opens share dialog pre-filled (needs a link)</td></tr>
        <tr><td>Pinterest</td><td>Opens pin creator pre-filled</td></tr>
        <tr><td>Facebook</td><td>Opens share dialog pre-filled (needs a link)</td></tr>
      </tbody>
    </table>
    <p style="font-size:12.5px; color:var(--slate); margin-bottom:12px;">These platforms don't offer a public compose link to anyone, so Publish copies your caption and opens the site so you paste it in:</p>
    <p style="font-size:13px; font-weight:700; color:var(--ink);">TikTok, Instagram, YouTube, YouTube Community, Snapchat, Nextdoor</p>
  `;
  document.getElementById('modalFoot').innerHTML = `<div></div><button class="btn-ghost" onclick="closeModal()">Close</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function renderContentFeed(customers){
  let items = [...DATA.contentCalendar].filter(i=> contentCalCustomerId==='all' || i.contactId===contentCalCustomerId);
  items.sort((a,b)=> b.date.localeCompare(a.date) || b.dateAdded.localeCompare(a.dateAdded));
  const {userId} = currentScope();
  const dueCount = DATA.contentCalendar.filter(i=> i.type==='social' && i.publishStatus==='scheduled' && i.date<=todayISO() && (i.platforms||[]).length).length;
  return `
    <div class="cal-toolbar">
      <div class="cal-filters">
        <select onchange="setContentCalCustomer(this.value)" style="padding:8px 12px; border-radius:99px; border:1px solid var(--line); font-size:12px; font-weight:700;">
          <option value="all" ${contentCalCustomerId==='all'?'selected':''}>All clients</option>
          ${customers.map(c=>`<option value="${c.id}" ${contentCalCustomerId===c.id?'selected':''}>${esc(c.name)}</option>`).join('')}
        </select>
        ${CONTENT_TYPES.map(t=>`<span class="cal-filter" style="display:flex; align-items:center; gap:6px; cursor:default;"><span style="width:8px; height:8px; border-radius:50%; background:${t.color};"></span>${t.label}</span>`).join('')}
      </div>
      <div style="display:flex; align-items:center; gap:10px;">
        ${dueCount ? `<button class="btn-small" onclick="openMassPublish()">${iconUpload()} Publish ${dueCount} due today</button>` : ''}
        <div class="date-pill">${items.length} post${items.length===1?'':'s'}</div>
      </div>
    </div>
    ${items.length ? items.map(i=>{
      const contact = DATA.contacts.find(c=>c.id===i.contactId);
      const type = contentTypeMeta(i.type);
      const liked = (i.likes||[]).includes(userId);
      const isSocial = i.type==='social' && (i.platforms||[]).length;
      return `
      <div class="feed-card">
        <div class="feed-head">
          <div class="feed-avatar" style="background:${avatarColor(i.contactId||i.id)};">${esc(initials(contact?contact.name:(i.contactId?'?':'FZ')))}</div>
          <div>
            <div class="feed-who">${esc(contact?contact.name:'Favze (no specific customer)')}</div>
            <div class="feed-meta"><span class="feed-type-pill" style="background:${safeBgForWhiteText(type.color)};">${type.label}</span> ${fmtDate(i.date)}${i.scheduledTime?' · '+i.scheduledTime:''}
              ${isSocial ? `<span class="badge ${i.publishStatus==='published'?'customer':'lead'}" style="margin-left:4px;">${i.publishStatus==='published'?'Published':'Scheduled'}</span>` : ''}
              ${i.threadMode && i.threadSegments && i.threadSegments.length ? `<span class="badge prospect" style="margin-left:4px;">Thread · ${i.threadSegments.length}</span>` : ''}
              ${i.approvalStatus && i.approvalStatus!=='Not Submitted' ? `<span class="badge ${contentApprovalStatusBadgeClass(i.approvalStatus)}" style="margin-left:4px;">${esc(i.approvalStatus)}</span>` : ''}
            </div>
            ${isSocial ? `<div style="display:flex; flex-wrap:wrap; gap:5px; margin-top:6px;">${i.platforms.map(pv=>{ const p=platformMeta(pv); return `<span style="font-size:10px; font-weight:700; padding:2px 8px; border-radius:99px; background:${safeBgForWhiteText(p.color)}; color:#fff;">${esc(p.label)}</span>`; }).join('')}</div>` : ''}
          </div>
        </div>
        <div class="feed-title" onclick="openEditContent('${i.id}')">${esc(i.title || type.label)}</div>
        ${i.description ? `<div class="feed-desc">${esc(i.description)}</div>` : ''}
        ${i.caption ? `<div class="feed-caption">"${esc(i.caption)}"</div>` : ''}
        ${(i.imageUrls&&i.imageUrls.length) ? `<div class="photo-carousel">${i.imageUrls.filter(u=>isSafeHttpUrl(u)||isSafeDataUrl(u)).map(u=>`<img src="${esc(u)}" onclick="window.open('${escJs(u)}','_blank','noopener,noreferrer')" alt="Content photo">`).join('')}</div>` : ''}
        ${i.mediaUrl ? `<a class="feed-media" href="${safeHref(i.mediaUrl)}" target="_blank" rel="noopener noreferrer">${iconPhone()} View media</a>` : ''}
        ${(!i.approvalStatus || i.approvalStatus==='Not Submitted') ? `
        <div style="margin-bottom:8px;"><button class="btn-small" onclick="submitContentForApproval('${i.id}')">${iconUpload()} Submit for Approval</button></div>` : ''}
        ${i.approvalStatus==='Pending Review' || i.approvalStatus==='Revisions Requested' ? `
        <div style="display:flex; gap:8px; margin-bottom:10px; flex-wrap:wrap;">
          <button class="btn-small" style="background:var(--green-soft); color:var(--green-text); border-color:var(--green);" onclick="setContentApprovalStatus('${i.id}','Approved')">${iconCheck()} Approve</button>
          <button class="btn-small" style="background:var(--amber-soft); color:var(--amber-text); border-color:var(--amber);" onclick="setContentApprovalStatus('${i.id}','Revisions Requested')">Request Revisions</button>
          <button class="btn-small" style="background:var(--red-soft); color:var(--red-text); border-color:var(--red);" onclick="setContentApprovalStatus('${i.id}','Rejected')">${iconX()} Reject</button>
        </div>` : ''}
        <div class="feed-actions">
          <button class="feed-action-btn ${liked?'liked':''}" onclick="toggleContentLike('${i.id}')">${iconCheck()} ${liked?'Liked':'Like'} ${(i.likes||[]).length ? `(${i.likes.length})` : ''}</button>
          <button class="feed-action-btn" onclick="document.getElementById('cmt_${i.id}').focus()">${iconMail()} Comment ${(i.comments||[]).length ? `(${i.comments.length})` : ''}</button>
          ${isSocial ? `<button class="feed-action-btn" onclick="openPublishQueue('${i.id}')">${iconUpload()} Publish</button>` : ''}
          <button class="feed-action-btn" onclick="openEditContent('${i.id}')">${iconGear()} Edit</button>
        </div>
        <div class="feed-comments">
          ${(i.comments||[]).map(c=>{
            const cu = DATA.users.find(u=>u.id===c.userId);
            const displayName = c.fromPortal ? (c.portalAuthor||'Client') + ' (Portal)' : (cu?cu.name:'Team member');
            return `<div class="feed-comment">
              <div class="fc-avatar" style="${c.fromPortal?'background:var(--teal-solid); color:#fff; display:flex; align-items:center; justify-content:center;':''}">${cu && cu.avatarDataUrl && isSafeDataUrl(cu.avatarDataUrl) ? `<img src="${cu.avatarDataUrl}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">` : esc(initials(displayName))}</div>
              <div class="fc-body"><div class="fc-name">${esc(displayName)}</div><div class="fc-text">${esc(c.text)}</div></div>
            </div>`;
          }).join('')}
          <div class="feed-comment-input">
            <input id="cmt_${i.id}" placeholder="Comment internally on this..." onkeydown="if(event.key==='Enter'){ addContentComment('${i.id}'); }">
            <button onclick="addContentComment('${i.id}')">Post</button>
          </div>
        </div>
      </div>`;
    }).join('') : `<div class="feed-empty">Nothing planned yet. Add your first blog post, social post, or video.</div>`}
  `;
}
function renderContentGrid(customers){
  const {year, month} = monthMeta(contentCalOffset);
  const cells = buildMonthGrid(year, month);
  const items = DATA.contentCalendar.filter(i=> contentCalCustomerId==='all' || i.contactId===contentCalCustomerId);
  const monthLabel = new Date(year, month, 1).toLocaleDateString('en-US',{month:'long', year:'numeric'});
  const today = todayISO();
  return `
    <div class="cal-toolbar">
      <div class="cal-filters">
        <select onchange="setContentCalCustomer(this.value)" style="padding:8px 12px; border-radius:99px; border:1px solid var(--line); font-size:12px; font-weight:700;">
          <option value="all" ${contentCalCustomerId==='all'?'selected':''}>All clients</option>
          ${customers.map(c=>`<option value="${c.id}" ${contentCalCustomerId===c.id?'selected':''}>${esc(c.name)}</option>`).join('')}
        </select>
        ${CONTENT_TYPES.map(t=>`<span class="cal-filter" style="display:flex; align-items:center; gap:6px; cursor:default;"><span style="width:8px; height:8px; border-radius:50%; background:${t.color};"></span>${t.label}</span>`).join('')}
      </div>
      <div class="cal-nav">
        <button onclick="contentCalOffset--; render();">‹</button>
        <span class="cal-month-label">${monthLabel}</span>
        <button onclick="contentCalOffset++; render();">›</button>
        <button onclick="contentCalOffset=0; render();" style="width:auto; padding:0 10px; font-size:11px; font-weight:700;">Today</button>
      </div>
    </div>
    <div class="cal-grid">
      ${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>`<div class="cal-weekday">${d}</div>`).join('')}
      ${cells.map(c=>{
        const ds = dstr(c.date);
        const dayItems = items.filter(i=>i.date===ds);
        const shown = dayItems.slice(0,3);
        return `
        <div class="cal-cell ${c.inMonth?'':'other-month'} ${ds===today?'today':''}" onclick="openNewContentModal('${ds}')">
          <div class="cal-daynum">${c.date.getDate()}</div>
          ${shown.map(i=>{ const t=contentTypeMeta(i.type); return `<div class="cal-pill" style="background:${safeBgForWhiteText(t.color)};" onclick="event.stopPropagation(); openEditContent('${i.id}')">${esc(i.title||t.label)}</div>`; }).join('')}
          ${dayItems.length>3 ? `<div class="cal-more">+${dayItems.length-3} more</div>` : ''}
        </div>`;
      }).join('')}
    </div>`;
}
function setContentCalCustomer(v){ contentCalCustomerId=v; render(); }
async function toggleContentLike(id){
  const item = DATA.contentCalendar.find(x=>x.id===id);
  if(!item) return;
  const {userId} = currentScope();
  if(!userId) return;
  item.likes = item.likes || [];
  const i = item.likes.indexOf(userId);
  if(i>-1) item.likes.splice(i,1); else item.likes.push(userId);
  await saveData(); render();
}
async function addContentComment(id){
  const input = document.getElementById('cmt_'+id);
  const text = input.value.trim();
  if(!text) return;
  const item = DATA.contentCalendar.find(x=>x.id===id);
  if(!item) return;
  item.comments = item.comments || [];
  item.comments.push({ id: uid(), userId: currentScope().userId, text, at: new Date().toISOString() });
  await saveData(); render();
  if(item.approvalStatus && item.approvalStatus!=='Not Submitted') syncContentItemToPortal(item);
}

let editingContentId = null;
let editingContentImageUrls = [];
function renderPhotoUploadThumbs(){
  return editingContentImageUrls.map((u,i)=>`
    <div class="photo-upload-thumb">
      <img src="${esc(u)}" alt="Uploaded photo">
      <div class="pu-remove" onclick="removeContentPhoto(${i})">${iconX()}</div>
    </div>`).join('');
}
async function handleContentPhotoUpload(input){
  const files = Array.from(input.files||[]);
  if(!files.length) return;
  const grid = document.getElementById('ct_photoGrid');
  const contactSel = document.getElementById('ct_contact');
  const folder = (contactSel && contactSel.value) || 'general';
  for(const file of files){
    const placeholderIdx = editingContentImageUrls.length;
    grid.insertAdjacentHTML('beforeend', `<div class="photo-upload-thumb pu-uploading" id="ct_uploading_${placeholderIdx}">Uploading…</div>`);
    try{
      const url = await uploadPhotoToSupabase(file, folder);
      editingContentImageUrls.push(url);
      grid.innerHTML = renderPhotoUploadThumbs();
    }catch(err){
      console.error(err);
      const ph = document.getElementById('ct_uploading_'+placeholderIdx);
      if(ph) ph.remove();
      const errMsg = (err.message||'unknown error').slice(0,120);
      showToast('Photo upload failed: ' + errMsg);
      const errEl = document.getElementById('ct_photoError');
      if(errEl){ errEl.textContent = 'Upload failed: ' + errMsg; errEl.style.display = 'block'; setTimeout(()=>{ errEl.style.display='none'; }, 7000); }
    }
  }
  input.value = '';
}
function removeContentPhoto(index){
  editingContentImageUrls.splice(index,1);
  const grid = document.getElementById('ct_photoGrid');
  if(grid) grid.innerHTML = renderPhotoUploadThumbs();
}
function openNewContentModal(dateStr){
  editingContentId = null;
  editingContentImageUrls = [];
  document.getElementById('modalTitle').textContent = 'New Content';
  document.getElementById('modalBody').innerHTML = contentFormHTML(null, dateStr);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="saveContentForm()">Add to calendar</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function openNewCrossPostModal(){
  editingContentId = null;
  editingContentImageUrls = [];
  document.getElementById('modalTitle').textContent = 'New Cross-Post';
  const draft = { contactId:(contentCalCustomerId!=='all'?contentCalCustomerId:''), date: todayISO(), type:'social', title:'', description:'', caption:'', mediaUrl:'', platforms:[], threadMode:false, threadSegments:[{id:uid(),text:''}], scheduledTime:'', publishStatus:'draft' };
  document.getElementById('modalBody').innerHTML = contentFormHTML(draft, todayISO());
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="saveContentForm()">Add to calendar</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
  updateCharCounts();
}
function openEditContent(id){
  editingContentId = id;
  const item = DATA.contentCalendar.find(x=>x.id===id);
  if(!item) return;
  editingContentImageUrls = [...(item.imageUrls||[])];
  document.getElementById('modalPanel').style.maxWidth = '620px';
  document.getElementById('modalTitle').textContent = item.title || contentTypeMeta(item.type).label;
  document.getElementById('modalBody').innerHTML = contentFormHTML(item, item.date);
  const canPublish = item.type==='social' && (item.platforms||[]).length;
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-danger" onclick="deleteContentItem('${id}')">Delete</button>
    <div style="display:flex; gap:10px; flex-wrap:wrap; justify-content:flex-end;">
      ${canPublish ? `<button class="btn-ghost" onclick="openPublishQueue('${id}')">${iconUpload()} Publish</button>` : ''}
      <button class="btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="saveContentForm()">Save changes</button>
    </div>`;
  document.getElementById('modalBackdrop').classList.add('open');
  updateCharCounts();
}
function contentFormHTML(item, dateStr){
  item = item || { contactId:(contentCalCustomerId!=='all'?contentCalCustomerId:''), date: dateStr||todayISO(), type:'blog', title:'', description:'', caption:'', mediaUrl:'', platforms:[], threadMode:false, threadSegments:[{id:uid(),text:''}], scheduledTime:'', publishStatus:'draft' };
  item.platforms = item.platforms || [];
  item.threadSegments = (item.threadSegments && item.threadSegments.length) ? item.threadSegments : [{id:uid(),text:''}];
  const customers = DATA.contacts.filter(c=>c.type==='customer');
  const isSocial = item.type==='social';
  const threadCapable = item.platforms.some(p=>THREAD_PLATFORMS.includes(p));
  return `
    <div class="field-row">
      <div class="field"><label>Client (optional)</label>
        <select id="ct_contact">
          <option value="">No specific customer / Favze itself</option>
          ${customers.map(c=>`<option value="${c.id}" ${item.contactId===c.id?'selected':''}>${esc(c.name)}</option>`).join('')}
        </select>
      </div>
      <div class="field"><label>Date</label><input id="ct_date" type="date" value="${item.date}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Type</label>
        <select id="ct_type" onchange="onContentTypeChange(this.value);">
          ${CONTENT_TYPES.map(t=>`<option value="${t.value}" ${item.type===t.value?'selected':''}>${t.label}</option>`).join('')}
        </select>
      </div>
      <div class="field"><label>Schedule time (optional)</label><input id="ct_scheduledTime" type="time" value="${item.scheduledTime||''}"></div>
    </div>
    <div class="field"><label>Title</label><input id="ct_title" value="${esc(item.title)}" placeholder="e.g. July SEO recap post"></div>
    <div class="field"><label>Description</label><textarea id="ct_description" rows="3" placeholder="What this piece covers">${esc(item.description)}</textarea></div>

    <div id="ct_websiteSection" style="${item.type==='website-page'?'':'display:none;'}">
      <div class="field-row">
        <div class="field"><label>Page URL / slug</label><input id="ct_pageUrl" value="${esc(item.pageUrl||'')}" placeholder="e.g. /services/landscaping"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Copywriting</label>
          <select id="ct_copywritingStatus">
            ${['','Not Started','In Progress','Done'].map(s=>`<option value="${s}" ${(item.copywritingStatus||'')=== s?'selected':''}>${s||'-- Select --'}</option>`).join('')}
          </select>
        </div>
        <div class="field"><label>Design</label>
          <select id="ct_designStatus">
            ${['','Not Started','In Progress','Done'].map(s=>`<option value="${s}" ${(item.designStatus||'')=== s?'selected':''}>${s||'-- Select --'}</option>`).join('')}
          </select>
        </div>
      </div>
    </div>

    <div class="field" style="border-top:1px solid var(--line); padding-top:14px; margin-top:4px;">
      <label style="display:flex; align-items:center; justify-content:space-between;">
        <span>Client visibility</span>
        <label style="display:flex; align-items:center; gap:7px; cursor:pointer; font-weight:500; font-size:12.5px;">
          <input type="checkbox" id="ct_visibleToClient" ${item.visibleToClient?'checked':''} style="width:auto;">
          <span>Visible in client portal</span>
        </label>
      </label>
      <div style="font-size:11px; color:var(--slate); margin-top:4px;">When on, assigned clients can see this item in their portal. Off keeps it internal.</div>
    </div>

    <div class="field">
      <label>Assign to clients</label>
      <div id="ct_assignedClients" style="display:flex; flex-wrap:wrap; gap:8px; margin-top:4px;">
        ${customers.filter(c=>c.portalUid).map(c=>{
          const on = (item.assignedClients||[]).includes(c.id);
          return `<label style="display:flex; align-items:center; gap:5px; padding:5px 11px; border-radius:99px; border:1.5px solid ${on?'var(--teal-text)':'var(--line)'}; background:${on?'#e0f7fa':'var(--paper)'}; cursor:pointer; font-size:12px; font-weight:600; color:var(--ink);">
            <input type="checkbox" class="assigned-client-check" value="${c.id}" ${on?'checked':''} style="width:auto;">
            ${esc(c.name)}
          </label>`;
        }).join('')}
        ${customers.filter(c=>!c.portalUid).length && !customers.filter(c=>c.portalUid).length ? `<span style="font-size:12px; color:var(--slate);">No clients have an approved portal account yet. Approve them in Settings → Integrations.</span>` : ''}
        ${customers.filter(c=>c.portalUid).length === 0 && customers.filter(c=>!c.portalUid).length > 0 ? `<span style="font-size:12px; color:var(--slate);">Clients listed below don't have portal accounts yet - approve them in Settings → Integrations first.</span>` : ''}
      </div>
    </div>

    <div class="field">
      <label>Photos for client review</label>
      <div id="ct_photoGrid" class="photo-upload-grid">${renderPhotoUploadThumbs()}</div>
      <div id="ct_photoError" style="font-size:12px; color:#b42318; margin-bottom:6px; display:none;"></div>
      <button type="button" class="btn-small" onclick="document.getElementById('ct_photoInput').click()">${iconUpload()} Upload photos</button>
      <input type="file" id="ct_photoInput" accept="image/*" multiple style="display:none;" onchange="handleContentPhotoUpload(this)">
      <p style="font-size:11px; color:var(--slate); margin-top:6px;">Compressed to WebP in your browser before upload, so a 10MB phone photo becomes ~150KB. Stored in Supabase, not in this app's own data.</p>
    </div>

    <div id="ct_socialSection" style="${isSocial?'':'display:none;'}">
      <div class="field">
        <label>Post to</label>
        <div style="display:flex; flex-wrap:wrap; gap:8px;">
          ${SOCIAL_PLATFORMS.map(p=>{
            const on = item.platforms.includes(p.value);
            return `<label style="display:flex; align-items:center; gap:6px; padding:6px 11px; border-radius:99px; border:1.5px solid ${on?p.color:'var(--line)'}; background:${on?p.color+'18':'var(--paper)'}; cursor:pointer; font-size:12px; font-weight:600; color:var(--ink);">
              <input type="checkbox" class="platform-check" value="${p.value}" ${on?'checked':''} onchange="onPlatformToggle(this)" style="width:auto;">
              ${esc(p.label)} <span style="color:var(--slate); font-weight:500;">(${p.limit})</span>
            </label>`;
          }).join('')}
        </div>
        <p style="font-size:11px; color:var(--slate); margin-top:6px;">Character limit shown per platform. TikTok, Instagram, YouTube, Snapchat, and Nextdoor have no public "compose" link, publishing to those copies your caption and opens the site to paste manually, that's a platform limitation, not this app's.</p>
      </div>

      <div class="field" id="ct_threadToggleWrap" style="${threadCapable?'':'display:none;'}">
        <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
          <input type="checkbox" id="ct_threadMode" ${item.threadMode?'checked':''} onchange="document.getElementById('ct_threadWrap').style.display=this.checked?'':'none'; document.getElementById('ct_captionWrap').style.display=this.checked?'none':'';" style="width:auto;">
          <span style="font-size:13px; font-weight:600; color:var(--ink);">Post as a thread (X / Threads)</span>
        </label>
      </div>

      <div class="field" id="ct_captionWrap" style="${(item.threadMode&&threadCapable)?'display:none;':''}">
        <label>Caption</label>
        <textarea id="ct_caption" rows="3" placeholder="Caption or copy to post with it" oninput="updateCharCounts()">${esc(item.caption)}</textarea>
        <div id="ct_charCounts" style="font-size:11px; color:var(--slate); margin-top:4px;"></div>
      </div>

      <div class="field" id="ct_threadWrap" style="${(item.threadMode&&threadCapable)?'':'display:none;'}">
        <label>Thread segments</label>
        <div id="ct_threadSegments">
          ${item.threadSegments.map((seg,i)=>`
            <div class="field-row" style="align-items:flex-start; margin-bottom:6px;" data-seg-id="${seg.id}">
              <textarea class="thread-seg-text" rows="2" placeholder="Post ${i+1}" oninput="updateCharCounts()" style="flex:1;">${esc(seg.text)}</textarea>
              <button type="button" class="btn-small" onclick="removeThreadSegment('${seg.id}')" style="margin-top:2px;">Remove</button>
            </div>`).join('')}
        </div>
        <button type="button" class="btn-small" onclick="addThreadSegment()">${iconPlus()} Add post to thread</button>
        <div id="ct_threadCharCounts" style="font-size:11px; color:var(--slate); margin-top:6px;"></div>
      </div>

      <div class="field"><label>Account to post as (reminder only)</label><input id="ct_accountHandle" value="${esc(item.accountHandle||'')}" placeholder="e.g. @clientname - this app can't switch accounts for you, so this is just a reminder of who to be logged in as"></div>
      <div class="field"><label>Media link (image/video hosted elsewhere)</label><input id="ct_media" value="${esc(item.mediaUrl)}" placeholder="Paste a link, this app can't host video files"></div>
      ${item.publishStatus && item.publishStatus!=='draft' ? `<div class="field"><label>Status</label><input value="${item.publishStatus==='published'?'Published':'Scheduled'}" readonly></div>` : ''}
    </div>
    ${!isSocial ? `
    <div class="field"><label>Caption</label><textarea id="ct_caption_plain" rows="2" placeholder="Caption or copy to post with it">${esc(item.caption)}</textarea></div>
    <div class="field"><label>Video / media link</label><input id="ct_media_plain" value="${esc(item.mediaUrl)}" placeholder="Paste a link to the video or asset"></div>
    ` : ''}
  `;
}
function onContentTypeChange(val){
  document.getElementById('ct_socialSection').style.display = val==='social' ? '' : 'none';
  document.getElementById('ct_websiteSection').style.display = val==='website-page' ? '' : 'none';
}
function onPlatformToggle(){
  const checked = Array.from(document.querySelectorAll('.platform-check')).filter(c=>c.checked).map(c=>c.value);
  const capable = checked.some(p=>THREAD_PLATFORMS.includes(p));
  document.getElementById('ct_threadToggleWrap').style.display = capable ? '' : 'none';
  if(!capable){
    const tm = document.getElementById('ct_threadMode');
    if(tm) tm.checked = false;
    document.getElementById('ct_threadWrap').style.display = 'none';
    document.getElementById('ct_captionWrap').style.display = '';
  }
  updateCharCounts();
}
function addThreadSegment(){
  const wrap = document.getElementById('ct_threadSegments');
  const id = uid();
  const div = document.createElement('div');
  div.className = 'field-row';
  div.style = 'align-items:flex-start; margin-bottom:6px;';
  div.dataset.segId = id;
  div.innerHTML = `<textarea class="thread-seg-text" rows="2" placeholder="New post" oninput="updateCharCounts()" style="flex:1;"></textarea><button type="button" class="btn-small" onclick="removeThreadSegment('${id}')" style="margin-top:2px;">Remove</button>`;
  wrap.appendChild(div);
  updateCharCounts();
}
function removeThreadSegment(id){
  const el = document.querySelector(`[data-seg-id="${id}"]`);
  if(el) el.remove();
  updateCharCounts();
}
function updateCharCounts(){
  const checked = Array.from(document.querySelectorAll('.platform-check')).filter(c=>c.checked).map(c=>c.value);
  const platforms = checked.map(platformMeta);
  const threadMode = document.getElementById('ct_threadMode') && document.getElementById('ct_threadMode').checked;
  if(threadMode){
    const segs = Array.from(document.querySelectorAll('.thread-seg-text'));
    const threadPlats = platforms.filter(p=>THREAD_PLATFORMS.includes(p.value));
    const out = segs.map((s,i)=>{
      const len = s.value.length;
      const bits = threadPlats.map(p=> `${p.label} ${len}/${p.limit}${len>p.limit?' ⚠️ over':''}`).join(' · ');
      return `Post ${i+1}: ${bits}`;
    }).join('<br>');
    const el = document.getElementById('ct_threadCharCounts');
    if(el) el.innerHTML = out;
  } else {
    const capEl = document.getElementById('ct_caption');
    const len = capEl ? capEl.value.length : 0;
    const nonThread = platforms.filter(p=>!THREAD_PLATFORMS.includes(p.value) || !threadMode);
    const out = platforms.map(p=>`${p.label} ${len}/${p.limit}${len>p.limit?' ⚠️ over':''}`).join(' · ');
    const el = document.getElementById('ct_charCounts');
    if(el) el.textContent = out;
  }
}
async function saveContentForm(){
  const contactId = document.getElementById('ct_contact').value || null;
  const type = document.getElementById('ct_type').value;
  const isSocial = type==='social';
  const platforms = isSocial ? Array.from(document.querySelectorAll('.platform-check')).filter(c=>c.checked).map(c=>c.value) : [];
  const threadModeEl = document.getElementById('ct_threadMode');
  const threadMode = isSocial && threadModeEl ? threadModeEl.checked : false;
  const threadSegments = threadMode
    ? Array.from(document.querySelectorAll('.thread-seg-text')).map(t=>({ id: uid(), text: t.value.trim() })).filter(s=>s.text)
    : [];
  const caption = isSocial
    ? (document.getElementById('ct_caption') ? document.getElementById('ct_caption').value.trim() : '')
    : (document.getElementById('ct_caption_plain') ? document.getElementById('ct_caption_plain').value.trim() : '');
  const mediaUrl = isSocial
    ? document.getElementById('ct_media').value.trim()
    : document.getElementById('ct_media_plain').value.trim();
  const scheduledTime = isSocial ? document.getElementById('ct_scheduledTime').value : '';
  const accountHandle = isSocial && document.getElementById('ct_accountHandle') ? document.getElementById('ct_accountHandle').value.trim() : '';
  const visibleToClient = document.getElementById('ct_visibleToClient') ? document.getElementById('ct_visibleToClient').checked : false;
  const assignedClients = Array.from(document.querySelectorAll('.assigned-client-check')).filter(c=>c.checked).map(c=>c.value);
  const copywritingStatus = document.getElementById('ct_copywritingStatus') ? document.getElementById('ct_copywritingStatus').value : '';
  const designStatus = document.getElementById('ct_designStatus') ? document.getElementById('ct_designStatus').value : '';
  const pageUrl = document.getElementById('ct_pageUrl') ? document.getElementById('ct_pageUrl').value.trim() : '';
  const payload = {
    contactId,
    date: document.getElementById('ct_date').value || todayISO(),
    type,
    title: document.getElementById('ct_title').value.trim(),
    description: document.getElementById('ct_description').value.trim(),
    caption, mediaUrl, platforms, threadMode, threadSegments, scheduledTime, accountHandle,
    imageUrls: [...editingContentImageUrls],
    visibleToClient, assignedClients, copywritingStatus, designStatus, pageUrl,
  };
  if(editingContentId){
    const existing = DATA.contentCalendar.find(x=>x.id===editingContentId);
    if(!payload.publishStatus) payload.publishStatus = existing.publishStatus || 'draft';
    Object.assign(existing, payload);
  } else {
    DATA.contentCalendar.push({ id: uid(), dateAdded: todayISO(), comments:[], likes:[], publishStatus: (isSocial && platforms.length) ? 'scheduled' : 'draft', ...payload });
  }
  await saveData(); closeModal(); render();
  showToast(editingContentId ? 'Content updated' : 'Content added');
  // Notify client by email if content is newly visible to them
  if(!editingContentId && payload.visibleToClient && payload.contactId){
    notifyClientNewContent(payload.contactId, payload.title || 'New content', payload.type);
  }
}
async function notifyClientNewContent(contactId, contentTitle, contentType){
  const c = DATA.contacts.find(x=>x.id===contactId);
  if(!c || !c.portalUid) return;
  // Look up the client's email from their portal auth record
  const sb = getSupabaseClient();
  if(!sb) return;
  try{
    // We pass the client's display name and content title; the edge function emails the agency.
    // For the client-facing email we call a separate path using their email from CRM data.
    const clientEmail = c.email;
    const clientName = c.name;
    if(!clientEmail) return;
    const SUPABASE_URL = 'https://ozbhlqgytfyjdgkoyhkt.supabase.co';
    const SUPABASE_KEY = 'sb_publishable_35rPBJVeCiEETVdBP0dLlw_OmpU77Vd';
    await fetch(SUPABASE_URL+'/functions/v1/client-content-notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+SUPABASE_KEY },
      body: JSON.stringify({ clientName, clientEmail, contentTitle, contentType, portalUrl: 'https://portal.favze.com/portal-calendar.html' })
    });
  }catch(e){ console.warn('Client content notify failed (non-fatal):', e); }
}
async function deleteContentItem(id){
  DATA.contentCalendar = DATA.contentCalendar.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Content deleted');
}

/* ===================== PUBLISH QUEUE ===================== */
// Walks through every selected platform one at a time. Where a platform has a real
// public compose URL (X, Threads share, LinkedIn, Pinterest, Facebook link-share), it
// opens pre-filled. Everywhere else, it copies the right caption and opens the site,
// since TikTok/Instagram/YouTube/Snapchat/Nextdoor simply don't offer a public link
// that opens their composer with text already in it.
let publishQueueState = null;
function openPublishQueue(contentId){
  const item = DATA.contentCalendar.find(x=>x.id===contentId);
  if(!item || !item.platforms || !item.platforms.length) return;
  publishQueueState = { contentId, index: 0, platforms: [...item.platforms] };
  renderPublishQueueStep();
}
function renderPublishQueueStep(){
  const item = DATA.contentCalendar.find(x=>x.id===publishQueueState.contentId);
  const platValue = publishQueueState.platforms[publishQueueState.index];
  const p = platformMeta(platValue);
  const isThread = item.threadMode && THREAD_PLATFORMS.includes(platValue) && item.threadSegments && item.threadSegments.length;
  const previewText = isThread ? item.threadSegments.map((s,i)=>`${i+1}/${item.threadSegments.length} ${s.text}`).join('\n\n') : item.caption;
  document.getElementById('modalPanel').style.maxWidth = '560px';
  document.getElementById('modalTitle').textContent = `Publish ${publishQueueState.index+1} of ${publishQueueState.platforms.length}: ${p.label}`;
  document.getElementById('modalBody').innerHTML = `
    ${item.accountHandle ? `<div style="background:var(--amber-text); color:#fff; border-radius:8px; padding:10px 12px; font-size:13px; font-weight:700; margin-bottom:12px;">Make sure you're logged into ${p.label} as ${esc(item.accountHandle)} before continuing</div>` : ''}
    <div class="field">
      <label>${isThread ? `Thread (${item.threadSegments.length} posts)` : 'Caption'}</label>
      <textarea rows="8" readonly>${esc(previewText)}</textarea>
    </div>
    ${item.mediaUrl ? `<div class="field"><label>Media link</label><input value="${esc(item.mediaUrl)}" readonly></div>` : ''}
    <div style="background:var(--paper); border-radius:8px; padding:10px 12px; font-size:11.5px; color:var(--slate);">
      ${p.intent ? `${p.label} supports a direct compose link, clicking below opens it with this pre-filled.` : `${p.label} has no public compose link (posting there is app/dashboard-only by design), clicking below copies this text and opens ${p.label} so you can paste it in.`}
    </div>
  `;
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="skipPublishStep()">Skip this one</button>
    <button class="btn-primary" onclick="doPublishStep()">${p.intent ? 'Open ' + p.label : 'Copy & Open ' + p.label}</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
async function doPublishStep(){
  const item = DATA.contentCalendar.find(x=>x.id===publishQueueState.contentId);
  const platValue = publishQueueState.platforms[publishQueueState.index];
  const p = platformMeta(platValue);
  const isThread = item.threadMode && THREAD_PLATFORMS.includes(platValue) && item.threadSegments && item.threadSegments.length;
  const firstText = isThread ? item.threadSegments[0].text : item.caption;
  const fullText = isThread ? item.threadSegments.map((s,i)=>`${i+1}/${item.threadSegments.length} ${s.text}`).join('\n\n') : item.caption;
  if(p.intent){
    const url = p.intent(firstText, item.mediaUrl);
    if(url && /^https?:\/\//i.test(url)) window.open(url, '_blank', 'noopener,noreferrer');
    if(isThread && item.threadSegments.length>1) showToast(`Opened post 1, you'll need to add the other ${item.threadSegments.length-1} manually as replies`);
  } else {
    try{ await navigator.clipboard.writeText(fullText); showToast('Copied to clipboard'); }
    catch(e){ showToast('Could not auto-copy, select the text above manually'); }
    if(p.url && /^https?:\/\//i.test(p.url)) window.open(p.url, '_blank', 'noopener,noreferrer');
  }
  advancePublishQueue();
}
function skipPublishStep(){ advancePublishQueue(); }
function advancePublishQueue(){
  publishQueueState.index++;
  if(publishQueueState.index >= publishQueueState.platforms.length){ finishPublishQueue(); }
  else { renderPublishQueueStep(); }
}
let massPublishQueue = null;
function openMassPublish(){
  const today = todayISO();
  const due = DATA.contentCalendar.filter(i=> i.type==='social' && i.publishStatus==='scheduled' && i.date<=today && (i.platforms||[]).length);
  if(!due.length){ showToast('Nothing scheduled and due yet'); return; }
  massPublishQueue = due.map(i=>i.id);
  startNextMassItem();
}
function startNextMassItem(){
  if(!massPublishQueue || !massPublishQueue.length){ massPublishQueue = null; closeModal(); render(); showToast('Mass publish complete'); return; }
  const nextId = massPublishQueue.shift();
  openPublishQueue(nextId);
}
async function finishPublishQueue(){
  const item = DATA.contentCalendar.find(x=>x.id===publishQueueState.contentId);
  if(item){ item.publishStatus = 'published'; item.publishedAt = new Date().toISOString(); }
  publishQueueState = null;
  await saveData();
  if(massPublishQueue !== null){ startNextMassItem(); return; }
  closeModal();
  render();
  showToast('Marked published across selected platforms');
}

function renderTimesheetsView(){
  const canApprove = currentScope().canManageSettings;
  const rows = timesheetRows();
  return `
    <div class="page-head">
      <div><h1>Timesheets</h1><p>Hours logged from Calls, grouped by person and week. Approving a week locks it against retrospective edits.</p></div>
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>Team member</th><th>Week</th><th>Calls</th><th>Total hours</th><th>Billable hours</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(r=>{
            const user = DATA.users.find(u=>u.id===r.userId);
            const locked = isWeekLocked(r.userId, r.weekKey);
            return `
            <tr>
              <td><div class="lead-name">${esc(user?user.name:'Unknown')}</div></td>
              <td class="src">${esc(weekLabel(r.weekKey))}</td>
              <td class="mono">${r.count}</td>
              <td class="mono">${(r.totalMin/60).toFixed(1)}h</td>
              <td class="mono">${(r.billableMin/60).toFixed(1)}h</td>
              <td><span class="badge ${locked?'customer':'prospect'}">${locked?'Approved & Locked':'Open'}</span></td>
              <td>${canApprove ? (locked
                ? `<button class="btn-small" onclick="unapproveTimesheet('${r.userId}','${r.weekKey}')">Reopen</button>`
                : `<button class="btn-small" onclick="approveTimesheet('${r.userId}','${r.weekKey}')">Approve</button>`) : ''}</td>
            </tr>`;
          }).join('') : `<tr class="empty-row"><td colspan="7">No call hours logged yet.</td></tr>`}
        </tbody>
      </table>
    </div>`;
}
async function approveTimesheet(userId, wk){
  if(!currentScope().canManageSettings){ showToast('Only the CEO role can approve timesheets'); return; }
  DATA.timesheetApprovals.push({ id: uid(), userId, weekKey: wk, approvedAt: new Date().toISOString(), approvedBy: currentScope().userId });
  await saveData(); render();
  showToast('Week approved and locked');
}
async function unapproveTimesheet(userId, wk){
  if(!currentScope().canManageSettings){ showToast('Only the CEO role can reopen timesheets'); return; }
  DATA.timesheetApprovals = DATA.timesheetApprovals.filter(a=>!(a.userId===userId && a.weekKey===wk));
  await saveData(); render();
  showToast('Week reopened for edits');
}

function renderCallsView(){
  let rows = [...DATA.callLogs];
  if(searchTerm){ const s=searchTerm.toLowerCase(); rows = rows.filter(x=>(x.contactName+x.transcript).toLowerCase().includes(s)); }
  rows.sort((a,b)=>b.date.localeCompare(a.date));
  return `
    <div class="page-head">
      <div><h1>Calls</h1><p>Every call logged across all contacts, with free browser-transcribed notes.</p></div>
      <div class="date-pill">${rows.length} logged</div>
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>Contact</th><th>Transcript</th><th>Duration</th><th>Date</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(cl=>`
            <tr onclick="openCallDetail('${cl.id}')">
              <td><div class="lead-name">${esc(cl.contactName)}</div></td>
              <td class="src">${esc((cl.transcript||'').slice(0,70))}${cl.transcript && cl.transcript.length>70?'…':''}</td>
              <td class="mono">${cl.duration?cl.duration+' min':'-'}</td>
              <td class="mono">${fmtDate(cl.date)}</td>
            </tr>`).join('') : `<tr class="empty-row"><td colspan="4">No calls logged yet.</td></tr>`}
        </tbody>
      </table>
    </div>`;
}
function openCallDetail(id){
  const cl = DATA.callLogs.find(x=>x.id===id);
  if(!cl) return;
  document.getElementById('modalTitle').textContent = 'Call with ' + cl.contactName;
  document.getElementById('modalBody').innerHTML = `
    <div class="field-row">
      <div class="field"><label>Date</label><input value="${fmtDate(cl.date)}" readonly></div>
      <div class="field"><label>Duration</label><input value="${cl.duration?cl.duration+' min':'-'}" readonly></div>
    </div>
    <div class="field"><label>Transcript</label><textarea rows="10" readonly>${esc(cl.transcript||'(no transcript)')}</textarea></div>
  `;
  document.getElementById('modalFoot').innerHTML = `<button class="btn-danger" onclick="deleteCallLog('${id}')">Delete</button><button class="btn-ghost" onclick="closeModal()">Close</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}

/* ===================== CUSTOM FIELDS ===================== */
const CUSTOM_FIELD_TYPES = [
  {value:'text', label:'Single Line'},
  {value:'email', label:'Email'},
  {value:'phone', label:'Phone'},
  {value:'social', label:'Social Handle'},
  {value:'number', label:'Number'},
  {value:'date', label:'Date'},
  {value:'dropdown', label:'Dropdown'},
];
const FAVZE_SERVICES = [
  {value:'website_design', label:'Website Design'},
  {value:'website_maintenance', label:'Website Maintenance'},
  {value:'seo', label:'SEO'},
  {value:'local_seo', label:'Local SEO'},
  {value:'google_ads', label:'Google Ads'},
  {value:'meta_ads', label:'Meta Ads'},
  {value:'linkedin_ads', label:'LinkedIn Ads'},
  {value:'tiktok_ads', label:'TikTok Ads'},
  {value:'email_marketing', label:'Email Marketing'},
  {value:'sms_marketing', label:'SMS Marketing'},
  {value:'crm_setup', label:'CRM Setup'},
  {value:'crm_automation', label:'CRM Automation'},
  {value:'ai_automation', label:'AI Automation'},
  {value:'social_media_management', label:'Social Media Management'},
  {value:'branding', label:'Branding'},
  {value:'logo_design', label:'Logo Design'},
  {value:'graphic_design', label:'Graphic Design'},
  {value:'video_editing', label:'Video Editing'},
  {value:'copywriting', label:'Copywriting'},
  {value:'blog_writing', label:'Blog Writing'},
  {value:'landing_pages', label:'Landing Pages'},
  {value:'hosting', label:'Hosting'},
  {value:'reputation_management', label:'Reputation Management'},
  {value:'website_redesign', label:'Website Redesign'},
  {value:'content_marketing', label:'Content Marketing'},
  {value:'marketing_automation', label:'Marketing Automation'},
  {value:'gbp_optimization', label:'Google Business Profile Optimization'},
  {value:'analytics_reporting', label:'Analytics & Reporting'},
  {value:'consulting', label:'Consulting'},
];
const TECH_STACK_OPTIONS = ['WordPress','Shopify','WooCommerce','Webflow','Wix','Squarespace','HubSpot','Zoho CRM','Salesforce','Klaviyo','Mailchimp','Brevo','Resend','Semrush','Ahrefs','Zapier','Make','Stripe','Calendly','Slack','ClickUp','Asana','Notion','Gorgias'];
const COMPLIANCE_OPTIONS = ['GDPR','CCPA','HIPAA','COPPA','PCI DSS','ADA Accessibility','CAN-SPAM'];
const LEAD_SOURCE_OPTIONS = ['Website','Google Search','Facebook','Instagram','LinkedIn','X (Twitter)','TikTok','YouTube','Referral','Networking Event','Cold Email','Cold Call','Webinar','Trade Show','Partner','Existing Customer','Other'];
const DEPARTMENT_OPTIONS = ['Marketing','Sales','Customer Service','Human Resources','Business Development','Finance'];
const DECISION_AUTHORITY_OPTIONS = ['Owner','CEO','President','COO','CFO','CIO','CMO','VP','Director','Manager','Team Lead','Staff','Unknown'];
const BUYING_INFLUENCE_OPTIONS = ['Final Decision Maker','Influencer','Recommender','Gatekeeper','User','Unknown'];
const CONTACT_STATUS_OPTIONS = ['Active','Left Company','Retired','Do Not Contact','Invalid Contact','Inactive'];
const PREFERRED_CONTACT_OPTIONS = ['Email','Phone','Text','LinkedIn','Teams','Zoom'];
const BEST_TIME_OPTIONS = ['Morning','Afternoon','Evening','Anytime'];
const CALL_OUTCOME_OPTIONS = ['No Answer','Left Voicemail','Connected','Interested','Not Interested','Follow-up Needed','Appointment Scheduled'];
const INTERACTION_TYPE_OPTIONS = ['Phone Call','Email','Meeting','LinkedIn','SMS','Video Call','Other'];
const DOCUMENT_TYPE_OPTIONS = ['Business Card','Proposal','NDA','Contract','Meeting Notes','Email Attachment','Presentation','Other'];
const LEAD_STATUS_OPTIONS = ['New','Attempting Contact','Contacted','Qualified','Proposal Sent','Negotiation','Nurturing','Unqualified','Lost','Converted'];
const BUDGET_RANGE_OPTIONS = ['Under $500','$500–$1,500','$1,500–$3,000','$3,000–$5,000','$5,000–$10,000','$10,000+'];
const SEO_STATUS_OPTIONS = ['Not Started','In Progress','Needs Improvement','Strong'];
const LEAD_TEMPERATURE_OPTIONS = ['Hot','Warm','Cold'];
const TIMEZONE_OPTIONS = ['Eastern','Central','Mountain','Pacific','Alaska','Hawaii','Other'];
const CONTACT_TYPES_LIST = [
  {value:'prospect', label:'Prospects'},
  {value:'lead', label:'Leads'},
  {value:'customer', label:'Clients'},
  {value:'past_customer', label:'Past Clients'},
];
function customFieldTypeLabel(v){ return (CUSTOM_FIELD_TYPES.find(t=>t.value===v)||{}).label || v; }
function appliesToLabel(appliesTo){
  if(!appliesTo || appliesTo.includes('all') || appliesTo.length===CONTACT_TYPES_LIST.length) return 'All contact types';
  return appliesTo.map(t=>typeLabel(t)).join(', ');
}
function renderCustomFieldsView(){
  return `
    <div class="page-head">
      <div><h1>Custom Fields</h1><p>Add fields to Prospects, Leads, Clients, or Past Clients, e.g. Industry, LinkedIn handle, or a second phone line. Each field can apply to just the contact types you choose.</p></div>
      <button class="btn-new" onclick="openNewCustomFieldModal()" style="position:static;">${iconPlus()} New Custom Field</button>
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>Field</th><th>Type</th><th>Applies to</th><th></th></tr></thead>
        <tbody>
          ${DATA.customFields.length ? DATA.customFields.map(f=>`
            <tr onclick="openEditCustomFieldModal('${f.id}')">
              <td><div class="lead-name">${esc(f.name)}</div></td>
              <td class="src">${esc(customFieldTypeLabel(f.type))}</td>
              <td class="src">${esc(appliesToLabel(f.appliesTo))}</td>
              <td onclick="event.stopPropagation();"><button class="btn-small" onclick="deleteCustomField('${f.id}')">Delete</button></td>
            </tr>`).join('') : `<tr class="empty-row"><td colspan="4">No custom fields yet.</td></tr>`}
        </tbody>
      </table>
    </div>`;
}
let editingCustomFieldId = null;
function openNewCustomFieldModal(){
  editingCustomFieldId = null;
  document.getElementById('modalTitle').textContent = 'New Custom Field';
  document.getElementById('modalBody').innerHTML = customFieldFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="saveCustomFieldForm()">Add field</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function openEditCustomFieldModal(id){
  editingCustomFieldId = id;
  const f = DATA.customFields.find(x=>x.id===id);
  if(!f) return;
  document.getElementById('modalTitle').textContent = f.name;
  document.getElementById('modalBody').innerHTML = customFieldFormHTML(f);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-danger" onclick="deleteCustomField('${id}')">Delete</button>
    <div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveCustomFieldForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function customFieldFormHTML(f){
  f = f || {name:'', type:'text', appliesTo:['all'], options:[], requiredForProgression:false, reminderEnabled:false, reminderDaysBefore:0};
  const isAll = !f.appliesTo || f.appliesTo.includes('all') || f.appliesTo.length===CONTACT_TYPES_LIST.length;
  return `
    <div class="field"><label>Field name</label><input id="cf_name" value="${esc(f.name)}" placeholder="e.g. Industry, LinkedIn handle"></div>
    <div class="field"><label>Field type</label>
      <select id="cf_type" onchange="document.getElementById('cf_optionsWrap').style.display = this.value==='dropdown' ? '' : 'none'; document.getElementById('cf_reminderWrap').style.display = this.value==='date' ? '' : 'none';">
        ${CUSTOM_FIELD_TYPES.map(t=>`<option value="${t.value}" ${f.type===t.value?'selected':''}>${t.label}</option>`).join('')}
      </select>
    </div>
    <div class="field" id="cf_optionsWrap" style="${f.type==='dropdown'?'':'display:none;'}">
      <label>Dropdown options</label>
      <input id="cf_options" value="${esc((f.options||[]).join(', '))}" placeholder="Comma separated, e.g. Small, Medium, Large">
    </div>
    <div class="field" id="cf_reminderWrap" style="${f.type==='date'?'':'display:none;'} background:var(--paper); border-radius:8px; padding:14px 16px;">
      <label style="display:flex; align-items:center; gap:8px; margin-bottom:${f.reminderEnabled?'12px':'0'};">
        <input type="checkbox" id="cf_reminderEnabled" ${f.reminderEnabled?'checked':''} onchange="document.getElementById('cf_reminderDaysWrap').style.display=this.checked?'':'none';" style="width:auto;">
        <span style="margin:0; text-transform:none; font-size:13px; font-weight:600; color:var(--ink);">Set an automated reminder based on this date</span>
      </label>
      <div id="cf_reminderDaysWrap" style="${f.reminderEnabled?'':'display:none;'}">
        <label>Remind how many days before</label>
        <input id="cf_reminderDays" type="number" min="0" value="${f.reminderDaysBefore||0}" placeholder="0 = on the date itself">
        <p style="font-size:11px; color:var(--slate); margin-top:6px;">Any contact with this field filled in gets a real Reminder created automatically, once, on the right day, no manual tracking needed.</p>
      </div>
    </div>
    <div class="field">
      <label>Applies to</label>
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
        <input type="checkbox" id="cf_all" ${isAll?'checked':''} onchange="document.querySelectorAll('.cf-type-check').forEach(c=>{c.checked=this.checked; c.disabled=this.checked;})" style="width:auto;">
        <label style="margin:0; text-transform:none; font-size:13px; font-weight:500; color:var(--ink);">All contact types</label>
      </div>
      <div style="display:flex; flex-direction:column; gap:8px; padding-left:2px;">
        ${CONTACT_TYPES_LIST.map(t=>`
          <div style="display:flex; align-items:center; gap:8px;">
            <input type="checkbox" class="cf-type-check" value="${t.value}" ${isAll?'checked disabled':(f.appliesTo&&f.appliesTo.includes(t.value)?'checked':'')} style="width:auto;">
            <label style="margin:0; text-transform:none; font-size:13px; font-weight:500; color:var(--ink);">${t.label}</label>
          </div>`).join('')}
      </div>
    </div>
    <div class="field" style="display:flex; align-items:center; gap:8px;">
      <input type="checkbox" id="cf_required" ${f.requiredForProgression?'checked':''} style="width:auto;">
      <label style="margin:0; text-transform:none; font-size:13px; font-weight:500; color:var(--ink);">Required before this contact can change type or stage</label>
    </div>
  `;
}
async function saveCustomFieldForm(){
  const name = document.getElementById('cf_name').value.trim();
  if(!name){ showToast('Field name is required'); return; }
  const type = document.getElementById('cf_type').value;
  const options = type==='dropdown' ? document.getElementById('cf_options').value.split(',').map(s=>s.trim()).filter(Boolean) : [];
  const requiredForProgression = document.getElementById('cf_required').checked;
  const reminderEnabled = type==='date' && document.getElementById('cf_reminderEnabled').checked;
  const reminderDaysBefore = reminderEnabled ? (Number(document.getElementById('cf_reminderDays').value) || 0) : 0;
  const allChecked = document.getElementById('cf_all').checked;
  let appliesTo;
  if(allChecked){
    appliesTo = ['all'];
  } else {
    appliesTo = Array.from(document.querySelectorAll('.cf-type-check')).filter(c=>c.checked).map(c=>c.value);
    if(!appliesTo.length){ showToast('Pick at least one contact type'); return; }
  }
  if(editingCustomFieldId){
    Object.assign(DATA.customFields.find(x=>x.id===editingCustomFieldId), {name, type, appliesTo, options, requiredForProgression, reminderEnabled, reminderDaysBefore});
  } else {
    DATA.customFields.push({ id: uid(), name, type, appliesTo, options, requiredForProgression, reminderEnabled, reminderDaysBefore });
  }
  await saveData(); closeModal(); render();
  showToast(editingCustomFieldId ? 'Custom field updated' : 'Custom field added');
}
async function deleteCustomField(id){
  DATA.customFields = DATA.customFields.filter(x=>x.id!==id);
  DATA.contacts.forEach(c=>{ if(c.customFields) delete c.customFields[id]; });
  await saveData(); closeModal(); render();
  showToast('Custom field deleted');
}

/* ===================== REPORTS ===================== */
let reportsTabMode = 'sales';
function setReportsTabMode(m){ reportsTabMode = m; render(); }
function renderReportsView(){
  const now = new Date();
  const months = [];
  for(let i=5;i>=0;i--){
    const d = new Date(now.getFullYear(), now.getMonth()-i, 1);
    months.push({label: d.toLocaleDateString('en-US',{month:'short'}), key: d.toISOString().slice(0,7)});
  }
  const revByMonth = months.map(m=>({
    label:m.label,
    value: DATA.deals.filter(d=>isWonStage(d.stage) && d.wonDate && d.wonDate.slice(0,7)===m.key).reduce((s,d)=>s+Number(d.value||0),0)
  }));
  const maxRev = Math.max(1, ...revByMonth.map(x=>x.value));

  const stageCounts = DATA.dealStages.map(s=>({label:s.name, value: DATA.deals.filter(d=>d.stage===s.id).reduce((s2,d)=>s2+Number(d.value||0),0)}));
  const maxStage = Math.max(1, ...stageCounts.map(x=>x.value));

  const lossReasonCounts = {};
  DATA.priceQuotes.filter(q=>q.status==='Rejected' && q.lossReason).forEach(q=>{ lossReasonCounts[q.lossReason] = (lossReasonCounts[q.lossReason]||0)+1; });
  DATA.proposals.filter(p=>p.status==='Rejected' && p.lossReason).forEach(p=>{ lossReasonCounts[p.lossReason] = (lossReasonCounts[p.lossReason]||0)+1; });
  const lossReasonRows = Object.entries(lossReasonCounts).map(([label,value])=>({label,value})).sort((a,b)=>b.value-a.value);
  const maxLossReason = Math.max(1, ...lossReasonRows.map(x=>x.value));
  const totalAccepted = DATA.priceQuotes.filter(q=>q.status==='Accepted').length + DATA.proposals.filter(p=>p.status==='Accepted' && !p.quoteId).length;
  const totalRejected = DATA.priceQuotes.filter(q=>q.status==='Rejected').length + DATA.proposals.filter(p=>p.status==='Rejected' && !p.quoteId).length;
  const winRate = (totalAccepted+totalRejected) > 0 ? (totalAccepted/(totalAccepted+totalRejected)*100) : 0;

  const sourceMap = {};
  DATA.contacts.forEach(c=>{
    const src = c.source || 'Unknown';
    if(!sourceMap[src]) sourceMap[src] = {total:0, converted:0};
    sourceMap[src].total++;
    if(c.type==='customer' || c.type==='past_customer') sourceMap[src].converted++;
  });
  const sourceRows = Object.entries(sourceMap).map(([label,v])=>({label, total:v.total, converted:v.converted, rate: v.total? (v.converted/v.total*100):0}));
  const maxSourceTotal = Math.max(1, ...sourceRows.map(x=>x.total));

  const sentCampaigns = DATA.campaigns.filter(c=>c.status==='sent');
  const maxCampaignRecipients = Math.max(1, ...sentCampaigns.map(c=>c.recipientCount||0));

  const contentByStatus = {};
  DATA.contentCalendar.forEach(i=>{
    const key = i.approvalStatus && i.approvalStatus!=='Not Submitted' ? i.approvalStatus : 'Not Submitted';
    contentByStatus[key] = (contentByStatus[key]||0)+1;
  });
  const contentRows = Object.entries(contentByStatus).map(([label,value])=>({label,value}));
  const maxContent = Math.max(1, ...contentRows.map(x=>x.value));

  const taskRows = DATA.users.map(u=>{
    const assigned = DATA.tasks.filter(t=>t.assignedTo===u.id);
    return { label: u.name, done: assigned.filter(t=>t.done).length, total: assigned.length };
  }).filter(r=>r.total>0);
  const maxTaskTotal = Math.max(1, ...taskRows.map(r=>r.total));

  const ticketRows = DATA.users.map(u=>{
    const assigned = DATA.supportTickets.filter(t=>t.assignedTo===u.id);
    const resolved = assigned.filter(t=>t.status==='Resolved'||t.status==='Closed').length;
    return { label: u.name, resolved, total: assigned.length };
  }).filter(r=>r.total>0);
  const maxTicketTotal = Math.max(1, ...ticketRows.map(r=>r.total));

  return `
    <div class="page-head">
      <div><h1>Reports</h1><p>Plain math over your CRM data. Nothing here is modeled or predicted.</p></div>
    </div>
    <div class="feed-toggle">
      <span class="${reportsTabMode==='sales'?'active':''}" onclick="setReportsTabMode('sales')">Sales</span>
      <span class="${reportsTabMode==='marketing'?'active':''}" onclick="setReportsTabMode('marketing')">Marketing</span>
      <span class="${reportsTabMode==='team'?'active':''}" onclick="setReportsTabMode('team')">Team</span>
    </div>
    ${reportsTabMode==='sales' ? `
    <div class="report-card">
      <h3>Revenue by month</h3>
      ${revByMonth.map(m=>`
        <div class="bar-row">
          <div class="bar-label">${m.label}</div>
          <div class="bar-track"><div class="bar-fill" style="width:${Math.max(4,m.value/maxRev*100)}%;"><span>${fmtMoney(m.value)}</span></div></div>
        </div>`).join('')}
    </div>
    <div class="report-card">
      <h3>Pipeline value by stage</h3>
      ${stageCounts.map(s=>`
        <div class="bar-row">
          <div class="bar-label">${s.label}</div>
          <div class="bar-track"><div class="bar-fill navy" style="width:${Math.max(4,s.value/maxStage*100)}%;"><span>${fmtMoney(s.value)}</span></div></div>
        </div>`).join('')}
    </div>
    <div class="report-card">
      <h3>Win/Loss Reasons</h3>
      <p style="font-size:12px; color:var(--slate); margin-top:-6px; margin-bottom:14px;">From Quotes and Proposals marked Rejected, with a reason on file. Win rate: ${winRate.toFixed(0)}% (${totalAccepted} accepted / ${totalRejected} rejected).</p>
      ${lossReasonRows.length ? lossReasonRows.map(r=>`
        <div class="bar-row">
          <div class="bar-label">${esc(r.label)}</div>
          <div class="bar-track"><div class="bar-fill" style="background:var(--red); width:${Math.max(4,r.value/maxLossReason*100)}%;"><span>${r.value}</span></div></div>
        </div>`).join('') : '<p style="color:var(--slate); font-size:13px;">No rejected quotes or proposals with a reason on file yet.</p>'}
    </div>` : ''}
    ${reportsTabMode==='marketing' ? `
    <div class="report-card">
      <h3>Lead source performance</h3>
      ${sourceRows.length ? sourceRows.map(s=>`
        <div class="bar-row">
          <div class="bar-label">${esc(s.label)}</div>
          <div class="bar-track"><div class="bar-fill amber" style="width:${Math.max(4,s.total/maxSourceTotal*100)}%;"><span>${s.converted}/${s.total} won (${s.rate.toFixed(0)}%)</span></div></div>
        </div>`).join('') : '<p style="color:var(--slate); font-size:13px;">No contacts yet to report on.</p>'}
    </div>
    <div class="report-card">
      <h3>Campaign reach</h3>
      <p style="font-size:12px; color:var(--slate); margin-top:-6px; margin-bottom:14px;">Recipients per sent campaign. Open/click tracking isn't available without a connected email provider, this reflects send volume only.</p>
      ${sentCampaigns.length ? sentCampaigns.map(c=>`
        <div class="bar-row">
          <div class="bar-label">${esc(c.name)}</div>
          <div class="bar-track"><div class="bar-fill navy" style="width:${Math.max(4,(c.recipientCount||0)/maxCampaignRecipients*100)}%;"><span>${c.recipientCount||0}</span></div></div>
        </div>`).join('') : '<p style="color:var(--slate); font-size:13px;">No campaigns sent yet.</p>'}
    </div>
    <div class="report-card">
      <h3>Content pipeline</h3>
      ${contentRows.length ? contentRows.map(r=>`
        <div class="bar-row">
          <div class="bar-label">${esc(r.label)}</div>
          <div class="bar-track"><div class="bar-fill amber" style="width:${Math.max(4,r.value/maxContent*100)}%;"><span>${r.value}</span></div></div>
        </div>`).join('') : '<p style="color:var(--slate); font-size:13px;">No content in the calendar yet.</p>'}
    </div>` : ''}
    ${reportsTabMode==='team' ? `
    <div class="report-card">
      <h3>Tasks completed by team member</h3>
      ${taskRows.length ? taskRows.map(r=>`
        <div class="bar-row">
          <div class="bar-label">${esc(r.label)}</div>
          <div class="bar-track"><div class="bar-fill navy" style="width:${Math.max(4,r.total/maxTaskTotal*100)}%;"><span>${r.done}/${r.total}</span></div></div>
        </div>`).join('') : '<p style="color:var(--slate); font-size:13px;">No tasks assigned to anyone yet.</p>'}
    </div>
    <div class="report-card">
      <h3>Tickets resolved by team member</h3>
      ${ticketRows.length ? ticketRows.map(r=>`
        <div class="bar-row">
          <div class="bar-label">${esc(r.label)}</div>
          <div class="bar-track"><div class="bar-fill" style="background:var(--green); width:${Math.max(4,r.total/maxTicketTotal*100)}%;"><span>${r.resolved}/${r.total}</span></div></div>
        </div>`).join('') : '<p style="color:var(--slate); font-size:13px;">No tickets assigned to anyone yet.</p>'}
    </div>` : ''}
  `;
}

/* ===================== ICONS ===================== */
function iconRevenue(){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 15l4-6 3 3 5-8"/></svg>`;}
function iconLead(){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>`;}
function iconClock(){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`;}
function iconCustomer(){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>`;}
function iconCheck(){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>`;}
function iconDownload(){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>`;}
function iconUpload(){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21V9"/><path d="m7 14 5-5 5 5"/><path d="M5 3h14"/></svg>`;}
function callHref(phone){
  const digits = phone.replace(/[^\d+]/g,'');
  const protocol = (DATA.settings && DATA.settings.callProtocol) || 'tel';
  if(protocol==='skype') return `skype:${digits}?call`;
  if(protocol==='facetime') return `facetime:${digits}`;
  if(protocol==='custom' && DATA.settings.customCallUrlPattern && /^https?:\/\//i.test(DATA.settings.customCallUrlPattern)){
    return DATA.settings.customCallUrlPattern.replace('{number}', encodeURIComponent(digits));
  }
  return `tel:${digits}`;
}
function iconPhone(){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;}
function iconMail(){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>`;}
function iconSun(){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`;}
function iconMoon(){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;}
function iconX(){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="11" height="11"><path d="M18 6 6 18M6 6l12 12"/></svg>`;}
function iconPlus(){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="13" height="13"><path d="M12 5v14M5 12h14"/></svg>`;}
function iconGear(){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`;}

function esc(s){ const d=document.createElement('div'); d.textContent = s||''; return d.innerHTML; }
/* safe href: returns url if https?://, else '#' */
function safeHref(url){ return (typeof url==='string' && /^https?:\/\//i.test(url)) ? url : '#'; }
/* JS-safe string for onclick single-quote context */
function escJs(s){ return esc(s).replace(/'/g,'&#x27;'); }
/* safe hex color validator */
function isSafeColor(c){ return typeof c==='string' && /^#[0-9a-fA-F]{3,8}$/.test(c); }

/* ===================== NAV / SEARCH ===================== */
document.getElementById('sideNav').addEventListener('click', (e)=>{
  const item = e.target.closest('.nav-item');
  if(!item) return;
  if(item.dataset.view===currentView){ e.preventDefault(); switchView(currentView); }
  closeMobileSidebar();
});
function openMobileSidebar(){
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarBackdrop').classList.add('open');
}
function closeMobileSidebar(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarBackdrop').classList.remove('open');
}
function switchView(v, after){ if(v!==currentView){ goToView(v, after); return; } currentView = v; searchTerm=''; tagFilter=null; listViewFilter=null; cfFilterField=''; cfFilterValue=''; ownerFilter=null; serviceFilter=null; selectedContactIds.clear(); document.getElementById('searchInput').value=''; hideGlobalSearch(); render(); }
function setTagFilter(tagId){ tagFilter = tagFilter===tagId ? null : tagId; render(); }
function setListViewFilter(v){ listViewFilter = v || null; render(); }
function setCFFilterField(v){ cfFilterField = v; cfFilterValue=''; render(); }
function setCFFilterValue(v){ cfFilterValue = v; render(); }
function clearAdvancedFilters(){ listViewFilter=null; cfFilterField=''; cfFilterValue=''; ownerFilter=null; serviceFilter=null; render(); }
function setOwnerFilter(v){ ownerFilter = v || null; render(); }
function setServiceFilter(v){ serviceFilter = v || null; render(); }
function onSearch(v){ searchTerm = v; runGlobalSearch(v); if(currentView!=='dashboard'){ render(); } }

/* ===================== FOLLOW UP TOGGLE ===================== */
async function toggleFollowUp(e, id){
  e.stopPropagation();
  const c = DATA.contacts.find(x=>x.id===id);
  if(!c) return;
  c.followUpDone = !c.followUpDone;
  await saveData();
  render();
  showToast(c.followUpDone ? 'Follow up marked done' : 'Follow up reopened');
}

/* ===================== MODAL: CREATE / EDIT ===================== */
function openNewModal(){
  if(currentView==='deals'){ openNewDealModal(); return; }
  if(currentView==='campaign'){ openNewCampaignModal(); return; }
  if(currentView==='project'){ openNewProjectModal(); return; }
  if(currentView==='task'){ openNewTaskModal(); return; }
  if(currentView==='reminder'){ openNewReminderModal(); return; }
  if(currentView==='workflow' || currentView==='emaillog'){ openNewWorkflowModal(); return; }
  if(currentView==='calls'){ openLogCallModal(null); return; }
  if(currentView==='calendar'){ openNewMeetingModal(todayISO()); return; }
  if(currentView==='contentcal'){ openNewContentModal(todayISO()); return; }
  if(currentView==='templates'){ if(emailMarketingTabMode==='lists'){ openNewEmailListModal(); } else { openNewTemplateModal(); } return; }
  if(currentView==='crossposter'){ openNewCrossPostModal(); return; }
  if(currentView==='companies'){ openNewCompanyModal(); return; }
  if(currentView==='pricecalc'){ savePriceCalcQuote(); return; }
  if(currentView==='servicerequests'){ openNewServiceRequestModal(); return; }
  if(currentView==='supporttickets'){ openNewTicketModal(); return; }
  if(currentView==='contentapproval'){ switchView('contentcal', {t:'toast', v:'Create content here, then hit "Submit for Approval" on it'}); return; }
  if(currentView==='segments'){ openNewSegmentModal(); return; }
  if(currentView==='timeoff'){ openTimeOffModal(); return; }
  if(currentView==='training'){ openManageCoursesModal(); return; }
  if(currentView==='incidents'){ if(currentScope().canManageSettings) openNewIncidentModal(); return; }
  if(currentView==='team'){ switchView('settings', {t:'settingsTab', v:'users'}); return; }
  if(currentView==='announcements'){ if(currentScope().canManageSettings) openNewAnnouncementModal(); return; }
  if(currentView==='servicecatalog'){ openNewServiceModal(); return; }
  if(currentView==='brandguidelines'){ openEditBrandGuidelines(); return; }
  if(currentView==='wiki'){ openNewWikiModal(); return; }
  if(currentView==='featurerequests'){ openNewFeatureRequestModal(featureRequestTypeMode==='crm' ? 'crmFeatureRequests' : 'portalFeatureRequests'); return; }
  if(currentView==='formsubmissions'){ openNewSubmissionModal(); return; }
  if(currentView==='integrations'){ return; }
  if(currentView==='quotes'){ switchView('pricecalc'); return; }
  if(currentView==='proposals'){ openNewProposalModal(); return; }
  if(currentView==='candidates'){ candidatesViewMode==='roles' ? openNewRoleModal() : document.getElementById('candidateUploadInput').click(); return; }
  if(currentView==='customfields'){ openNewCustomFieldModal(); return; }
  if(currentView==='reports' || currentView==='timesheets' || currentView==='settings'){ return; }
  openNewContactModal();
}
function openNewContactModal(){
  editingId = null;
  document.getElementById('modalPanel').style.maxWidth = '640px';
  document.getElementById('modalTitle').textContent = 'New Contact';
  document.getElementById('modalBody').innerHTML = modalFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="saveContactForm()">Add contact</button>
  `;
  document.getElementById('modalBackdrop').classList.add('open');
}
function openEditModal(id){
  editingId = id;
  const c = DATA.contacts.find(x=>x.id===id);
  if(!c) return;
  document.getElementById('modalPanel').style.maxWidth = '640px';
  document.getElementById('modalTitle').textContent = c.name;
  document.getElementById('modalBody').innerHTML = modalFormHTML(c);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-danger" onclick="deleteContact('${id}')">Delete</button>
    <div style="display:flex; gap:10px;">
      <button class="btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="saveContactForm()">Save changes</button>
    </div>
  `;
  document.getElementById('modalBackdrop').classList.add('open');
  if(c.portalUid) { loadExtraDeliverablesForContact(c); loadClientIntelForContact(c); loadInvoicesForContact(c); loadBrandAssetsForContact(c); }
}
function closeModal(){ document.getElementById('modalBackdrop').classList.remove('open'); document.getElementById('modalPanel').style.maxWidth=''; editingId=null; publishQueueState=null; massPublishQueue=null; }
async function unlinkContactPortalUid(id){
  const c = DATA.contacts.find(x=>x.id===id);
  if(!c) return;
  c.portalUid = null;
  await saveData();
  showToast('Unlinked from Favze Portal');
  openEditModal(id);
}
function showPasteContactPortalUid(id){
  showPromptModal({
    title: 'Link to Favze Portal',
    fields: [{ id: 'uid', label: "Contact's Supabase Auth user ID", placeholder: 'Paste from Authentication - Users in Supabase' }],
    confirmLabel: 'Link',
    onConfirm: ({ uid: val }) => {
      if(!val) return;
      const c = DATA.contacts.find(x=>x.id===id);
      if(!c) return;
      c.portalUid = val;
      saveData().then(()=>{ showToast('Linked to Favze Portal'); openEditModal(id); });
    }
  });
}
async function loadExtraDeliverablesForContact(c){
  const container = document.getElementById('extraDeliverables_'+c.id);
  if(!container) return;
  if(!agencySupabaseSession || !agencyAccountRequest || !agencyAccountRequest.approved){
    container.innerHTML = '<span style="color:var(--slate);">Connect your agency account in Settings → Integrations to view these.</span>';
    return;
  }
  const client = getSupabaseClient();
  if(!client){ container.innerHTML = 'Could not load.'; return; }
  try{
    const { data, error } = await client.from('extra_deliverables').select('id,data').eq('client_id', c.portalUid).order('created_at', {ascending:true});
    if(error) throw error;
    const rows = data || [];
    if(!rows.length){ container.innerHTML = '<span style="color:var(--slate);">None logged yet this cycle.</span>'; return; }
    const total = rows.reduce((sum,r)=> sum + (Number(r.data.value)||0), 0);
    container.innerHTML = rows.map(r=>`
      <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid var(--line); font-size:12.5px;">
        <div><b style="color:var(--ink);">${esc(r.data.title)}</b>${r.data.note?` - ${esc(r.data.note)}`:''}</div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="mono">$${Number(r.data.value||0).toLocaleString()}</span>
          <button type="button" class="btn-small" onclick="deleteExtraDeliverable('${r.id}','${c.id}')">Remove</button>
        </div>
      </div>`).join('') + `<div style="display:flex; justify-content:space-between; padding-top:8px; font-weight:700; font-size:12.5px; color:var(--ink);"><span>Total extra this cycle</span><span>$${total.toLocaleString()}</span></div>`;
  }catch(err){
    console.error(err);
    container.innerHTML = 'Could not load extras, check your connection.';
  }
}
async function loadClientIntelForContact(c){
  const wrap = document.getElementById('ci-wrap-'+c.id);
  if(!wrap) return;
  if(!agencySupabaseSession || !agencyAccountRequest || !agencyAccountRequest.approved){
    wrap.innerHTML = '<span style="color:var(--slate);">Connect your agency account in Settings to view client intel.</span>';
    return;
  }
  const sb = getSupabaseClient();
  if(!sb){ wrap.innerHTML = 'Could not load.'; return; }
  try{
    const [ratingsRes, referralsRes, timeRes, crmRes] = await Promise.all([
      sb.from('satisfaction_ratings').select('rating,comment,created_at').eq('client_id', c.portalUid).order('created_at',{ascending:false}).limit(10),
      sb.from('referrals').select('id,referred_name,referred_email,status,created_at').eq('referrer_id', c.portalUid).order('created_at',{ascending:false}),
      sb.from('time_entries').select('id,logged_by,description,hours,logged_date').eq('client_id', c.portalUid).order('logged_date',{ascending:false}).limit(50),
      sb.from('crm_data').select('retainer_hours').eq('client_id', c.portalUid).maybeSingle()
    ]);
    const ratings = ratingsRes.data || [];
    const referrals = referralsRes.data || [];
    const entries = timeRes.data || [];
    const retainerHours = crmRes.data?.retainer_hours || 0;
    const totalHours = entries.reduce((s,e)=>s+(Number(e.hours)||0),0);
    const pct = retainerHours > 0 ? Math.min(100, Math.round((totalHours/retainerHours)*100)) : null;
    const burnColor = pct === null ? 'var(--teal)' : pct >= 90 ? '#e53e3e' : pct >= 75 ? '#dd6b20' : 'var(--teal)';
    const starHTML = r => '&#9733;'.repeat(r)+'&#9734;'.repeat(5-r);
    wrap.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:20px;">
        <div>
          <div style="font-weight:700; font-size:12px; letter-spacing:.06em; text-transform:uppercase; color:var(--slate); margin-bottom:10px;">Satisfaction Ratings</div>
          ${ratings.length ? ratings.map(r=>`
            <div style="display:flex; gap:10px; align-items:flex-start; padding:8px 0; border-bottom:1px solid var(--line);">
              <span style="font-size:14px; color:#f6c90e; white-space:nowrap;">${starHTML(r.rating)}</span>
              <div style="flex:1; font-size:12.5px;">
                ${r.comment ? `<div style="color:var(--ink);">${esc(r.comment)}</div>` : ''}
                <div style="color:var(--slate); font-size:11.5px; margin-top:2px;">${fmtDate(r.created_at?.slice(0,10))}</div>
              </div>
            </div>`).join('') : '<p style="color:var(--slate); font-size:12.5px;">No ratings yet.</p>'}
        </div>
        <div>
          <div style="font-weight:700; font-size:12px; letter-spacing:.06em; text-transform:uppercase; color:var(--slate); margin-bottom:10px;">Referrals</div>
          ${referrals.length ? `<table style="width:100%; font-size:12.5px; border-collapse:collapse;">
            <thead><tr style="color:var(--slate); font-size:11.5px;">
              <th style="text-align:left; padding:4px 6px;">Name</th>
              <th style="text-align:left; padding:4px 6px;">Email</th>
              <th style="text-align:left; padding:4px 6px;">Status</th>
              <th style="text-align:left; padding:4px 6px;">Date</th>
            </tr></thead>
            <tbody>${referrals.map(r=>`<tr style="border-top:1px solid var(--line);">
              <td style="padding:6px;">${esc(r.referred_name||'')}</td>
              <td style="padding:6px; color:var(--slate);">${esc(r.referred_email||'')}</td>
              <td style="padding:6px;"><span style="background:${r.status==='converted'?'#c6f6d5':r.status==='signed'?'#bee3f8':'#fefcbf'}; color:${r.status==='converted'?'#276749':r.status==='signed'?'#2b6cb0':'#744210'}; border-radius:4px; padding:2px 6px; font-size:11px; font-weight:600;">${esc(r.status||'pending')}</span></td>
              <td style="padding:6px; color:var(--slate);">${fmtDate(r.created_at?.slice(0,10))}</td>
            </tr>`).join('')}</tbody>
          </table>` : '<p style="color:var(--slate); font-size:12.5px;">No referrals submitted yet.</p>'}
        </div>
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <div style="font-weight:700; font-size:12px; letter-spacing:.06em; text-transform:uppercase; color:var(--slate);">Time Tracking</div>
            <button type="button" class="btn-small" onclick="openLogHoursModal('${c.id}')">${iconPlus()} Log hours</button>
          </div>
          <div style="display:flex; gap:16px; margin-bottom:12px; flex-wrap:wrap;">
            <div style="text-align:center; min-width:70px;"><div style="font-size:22px; font-weight:800; color:var(--ink);">${totalHours.toFixed(1)}</div><div style="font-size:11px; color:var(--slate);">Hours used</div></div>
            ${retainerHours > 0 ? `<div style="text-align:center; min-width:70px;"><div style="font-size:22px; font-weight:800; color:var(--ink);">${retainerHours}</div><div style="font-size:11px; color:var(--slate);">Retainer hrs</div></div>
            <div style="flex:1; min-width:120px; display:flex; flex-direction:column; justify-content:center; gap:4px;">
              <div style="display:flex; justify-content:space-between; font-size:11.5px;"><span style="color:var(--slate);">Burn rate</span><span style="font-weight:700; color:${burnColor};">${pct}%</span></div>
              <div style="height:8px; background:var(--line); border-radius:4px; overflow:hidden;"><div style="width:${pct}%; height:100%; background:${burnColor}; border-radius:4px; transition:width .3s;"></div></div>
              ${pct >= 90 ? `<div style="font-size:11px; color:#e53e3e; font-weight:600;">Over 90% burned - flag for client conversation</div>` : ''}
            </div>` : `<div style="font-size:12.5px; color:var(--slate);">Set retainer hours on the Overview tab to track burn rate.</div>`}
          </div>
          ${entries.length ? `<div style="max-height:160px; overflow-y:auto;">
            <table style="width:100%; font-size:12px; border-collapse:collapse;">
              <thead><tr style="color:var(--slate); font-size:11px; position:sticky; top:0; background:var(--surface);">
                <th style="text-align:left; padding:4px 6px;">Date</th>
                <th style="text-align:left; padding:4px 6px;">Description</th>
                <th style="text-align:left; padding:4px 6px;">By</th>
                <th style="text-align:right; padding:4px 6px;">Hrs</th>
                <th style="padding:4px 6px;"></th>
              </tr></thead>
              <tbody>${entries.map(e=>`<tr style="border-top:1px solid var(--line);">
                <td style="padding:5px 6px; color:var(--slate);">${fmtDate(e.logged_date)}</td>
                <td style="padding:5px 6px;">${esc(e.description||'')}</td>
                <td style="padding:5px 6px; color:var(--slate);">${esc(e.logged_by||'')}</td>
                <td style="padding:5px 6px; text-align:right; font-weight:600; font-family:monospace;">${Number(e.hours).toFixed(1)}</td>
                <td style="padding:5px 6px;"><button type="button" class="btn-small" onclick="deleteTimeEntry('${e.id}','${c.id}')">x</button></td>
              </tr>`).join('')}</tbody>
            </table>
          </div>` : '<p style="color:var(--slate); font-size:12.5px;">No hours logged yet.</p>'}
        </div>
      </div>`;
    const retInp = document.getElementById('f_retainerHours');
    if(retInp && !retInp.value) retInp.value = retainerHours > 0 ? retainerHours : '';
    const retDisp = document.getElementById('retainerHoursDisplay_'+c.id);
    if(retDisp) retDisp.textContent = retainerHours > 0 ? `Currently ${retainerHours} hrs/mo` : 'Not set';
  }catch(err){
    console.error(err);
    wrap.innerHTML = 'Could not load client intel - check your connection.';
  }
}
async function saveRetainerHours(contactId){
  const c = DATA.contacts.find(x=>x.id===contactId);
  if(!c || !c.portalUid) return;
  const inp = document.getElementById('f_retainerHours');
  if(!inp) return;
  const hrs = Number(inp.value) || 0;
  const sb = getSupabaseClient();
  if(!sb) return;
  try{
    const { error } = await sb.from('crm_data').upsert({ client_id: c.portalUid, retainer_hours: hrs }, { onConflict: 'client_id' });
    if(error) throw error;
    const disp = document.getElementById('retainerHoursDisplay_'+contactId);
    if(disp) disp.textContent = hrs > 0 ? `Set to ${hrs} hrs/mo` : 'No retainer set';
    showToast('Retainer hours saved');
    loadClientIntelForContact(c);
  }catch(err){ console.error(err); showToast('Could not save retainer hours'); }
}
async function openLogHoursModal(contactId){
  const c = DATA.contacts.find(x=>x.id===contactId);
  if(!c || !c.portalUid){ showToast('Link this contact to a Portal account first'); return; }
  showPromptModal({
    title: 'Log Hours',
    fields: [
      { id: 'hours', label: 'Hours', placeholder: 'e.g. 1.5', type: 'number' },
      { id: 'description', label: 'Description', placeholder: 'e.g. Strategy call, blog drafts' },
      { id: 'logged_date', label: 'Date', type: 'date' }
    ],
    confirmLabel: 'Log',
    onConfirm: async ({ hours, description, logged_date }) => {
      if(!hours) return;
      const sb = getSupabaseClient();
      if(!sb) return;
      const me = DATA.users.find(u=>u.id===currentUserId);
      try{
        const { error } = await sb.from('time_entries').insert({
          id: uid(), client_id: c.portalUid,
          logged_by: me?.name || 'Agency',
          description: description || '',
          hours: Number(hours),
          logged_date: logged_date || todayISO()
        });
        if(error) throw error;
        showToast('Hours logged');
        loadClientIntelForContact(c);
      }catch(err){ console.error(err); showToast('Could not log hours'); }
    }
  });
}
async function deleteTimeEntry(entryId, contactId){
  if(!confirm('Remove this time entry?')) return;
  const c = DATA.contacts.find(x=>x.id===contactId);
  if(!c) return;
  const sb = getSupabaseClient();
  if(!sb) return;
  try{
    const { error } = await sb.from('time_entries').delete().eq('id', entryId);
    if(error) throw error;
    showToast('Entry removed');
    loadClientIntelForContact(c);
  }catch(err){ console.error(err); showToast('Could not remove entry'); }
}
// ── Invoices ────────────────────────────────────────────────────────────────
async function loadInvoicesForContact(c){
  const wrap = document.getElementById('invoices-wrap-'+c.id);
  if(!wrap) return;
  const sb = getSupabaseClient();
  if(!sb){ wrap.innerHTML = '<p style="color:var(--slate);font-size:13px;">Connect your agency account to load invoices.</p>'; return; }
  try{
    const { data, error } = await sb.from('invoices').select('*').eq('client_id', c.portalUid).order('created_at',{ascending:false});
    if(error) throw error;
    const rows = data || [];
    if(!rows.length){ wrap.innerHTML = '<p style="color:var(--slate);font-size:13px;">No invoices yet. Click "+ New Invoice" to create one.</p>'; return; }
    const statusColor = s => s==='paid'?'#276749':s==='overdue'?'#9b2c2c':s==='cancelled'?'#718096':'#92400e';
    const statusBg   = s => s==='paid'?'#c6f6d5':s==='overdue'?'#fed7d7':s==='cancelled'?'#e2e8f0':'#fef3c7';
    wrap.innerHTML = `<table style="width:100%;border-collapse:collapse;font-size:13px;">
      <thead><tr style="color:var(--slate);font-size:11.5px;border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">#</th>
        <th style="text-align:left;padding:5px 6px;">Description</th>
        <th style="text-align:left;padding:5px 6px;">Amount</th>
        <th style="text-align:left;padding:5px 6px;">Due</th>
        <th style="text-align:left;padding:5px 6px;">Status</th>
        <th style="padding:5px 6px;"></th>
      </tr></thead>
      <tbody>${rows.map(inv=>`<tr style="border-top:1px solid var(--line);">
        <td style="padding:7px 6px;font-size:11.5px;color:var(--slate);">${esc(inv.invoice_number||'-')}</td>
        <td style="padding:7px 6px;font-weight:600;">${esc(inv.description||'Invoice')}</td>
        <td style="padding:7px 6px;">${inv.amount!=null?'$'+Number(inv.amount).toFixed(2):'-'}</td>
        <td style="padding:7px 6px;font-size:11.5px;color:var(--slate);">${inv.due_date?fmtDate(inv.due_date):'-'}</td>
        <td style="padding:7px 6px;"><span style="background:${statusBg(inv.status)};color:${statusColor(inv.status)};border-radius:4px;padding:2px 7px;font-size:11px;font-weight:700;">${inv.status}</span></td>
        <td style="padding:7px 6px;white-space:nowrap;">
          ${inv.payment_link?`<a href="${esc(inv.payment_link)}" target="_blank" class="btn-small" style="text-decoration:none;">Pay link</a> `:''}
          <button class="btn-small" onclick="markInvoicePaid('${inv.id}','${c.id}')">Mark paid</button>
          <button class="btn-small" onclick="deleteInvoice('${inv.id}','${c.id}')">Delete</button>
        </td>
      </tr>`).join('')}</tbody>
    </table>`;
  }catch(err){ console.error(err); wrap.innerHTML = '<p style="color:var(--red-text);font-size:13px;">Could not load invoices.</p>'; }
}
function openNewInvoiceModal(contactId){
  const c = DATA.contacts.find(x=>x.id===contactId);
  if(!c || !c.portalUid){ showToast('Link this contact to a Portal account first'); return; }
  showPromptModal({
    title: 'New Invoice',
    fields:[
      {id:'inv_num',label:'Invoice Number',type:'text',placeholder:'e.g. INV-001'},
      {id:'inv_desc',label:'Description',type:'text',placeholder:'e.g. Social Media Management - November'},
      {id:'inv_amount',label:'Amount ($)',type:'number',placeholder:'0.00'},
      {id:'inv_due',label:'Due Date',type:'date'},
      {id:'inv_link',label:'Stripe Payment Link (optional)',type:'url',placeholder:'https://buy.stripe.com/...'},
    ],
    confirmLabel:'Create Invoice',
    onConfirm: async (vals)=>{
      const sb = getSupabaseClient();
      if(!sb) return;
      const { error } = await sb.from('invoices').insert({
        client_id: c.portalUid,
        invoice_number: vals.inv_num || null,
        description: vals.inv_desc || 'Invoice',
        amount: parseFloat(vals.inv_amount) || 0,
        due_date: vals.inv_due || null,
        payment_link: vals.inv_link || null,
        status: 'unpaid'
      });
      if(error){ showToast('Could not create invoice'); console.error(error); return; }
      showToast('Invoice created');
      loadInvoicesForContact(c);
    }
  });
}
async function markInvoicePaid(invoiceId, contactId){
  const c = DATA.contacts.find(x=>x.id===contactId);
  if(!c) return;
  const sb = getSupabaseClient();
  if(!sb) return;
  const { error } = await sb.from('invoices').update({ status:'paid', paid_at: new Date().toISOString() }).eq('id', invoiceId);
  if(error){ showToast('Could not update invoice'); return; }
  showToast('Marked as paid');
  loadInvoicesForContact(c);
}
async function deleteInvoice(invoiceId, contactId){
  if(!confirm('Delete this invoice?')) return;
  const c = DATA.contacts.find(x=>x.id===contactId);
  if(!c) return;
  const sb = getSupabaseClient();
  if(!sb) return;
  const { error } = await sb.from('invoices').delete().eq('id', invoiceId);
  if(error){ showToast('Could not delete invoice'); return; }
  showToast('Invoice deleted');
  loadInvoicesForContact(c);
}

// ── Brand Assets ─────────────────────────────────────────────────────────────
async function loadBrandAssetsForContact(c){
  const wrap = document.getElementById('brandassets-wrap-'+c.id);
  if(!wrap) return;
  const sb = getSupabaseClient();
  if(!sb){ wrap.innerHTML = '<p style="color:var(--slate);font-size:13px;">Connect your agency account to load brand assets.</p>'; return; }
  try{
    const { data, error } = await sb.from('brand_assets').select('*').eq('client_id', c.portalUid).order('uploaded_at',{ascending:false});
    if(error) throw error;
    const rows = data || [];
    const uploadHtml = `<div style="margin-top:16px;">
      <label style="font-size:11.5px;font-weight:700;color:var(--slate);text-transform:uppercase;">Upload an asset</label>
      <div style="display:flex;gap:8px;margin-top:6px;align-items:center;">
        <input type="file" id="ba-file-${c.id}" accept="image/*,.pdf,.ttf,.otf,.woff,.woff2,.zip" style="font-size:12px;flex:1;">
        <button class="btn-small" onclick="uploadBrandAsset('${c.id}')">Upload</button>
      </div>
      <p id="ba-upload-status-${c.id}" style="font-size:11.5px;color:var(--slate);margin-top:5px;"></p>
    </div>`;
    if(!rows.length){
      wrap.innerHTML = '<p style="color:var(--slate);font-size:13px;">No brand assets uploaded yet. The client can upload from their portal, or upload one here.</p>'+uploadHtml;
      return;
    }
    const fileIcon = t => t&&t.startsWith('image')?'🖼️':t==='application/pdf'?'📄':t&&t.includes('font')?'🔤':'📦';
    const fmtSize = b => b>1048576?(b/1048576).toFixed(1)+' MB':b>1024?(b/1024).toFixed(0)+' KB':b+' B';
    wrap.innerHTML = `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px;margin-bottom:4px;">
      ${rows.map(a=>`<div style="border:1px solid var(--line);border-radius:8px;padding:10px 12px;font-size:12px;">
        <div style="font-size:22px;margin-bottom:6px;">${fileIcon(a.file_type)}</div>
        <div style="font-weight:600;word-break:break-all;margin-bottom:3px;">${esc(a.file_name)}</div>
        <div style="color:var(--slate);font-size:11px;margin-bottom:8px;">${a.file_size_bytes?fmtSize(a.file_size_bytes):''}</div>
        <div style="display:flex;gap:5px;">
          <button class="btn-small" onclick="downloadBrandAsset('${a.file_path}','${esc(a.file_name)}')">Download</button>
          <button class="btn-small" onclick="deleteBrandAsset('${a.id}','${a.file_path}','${c.id}')">Delete</button>
        </div>
      </div>`).join('')}
    </div>${uploadHtml}`;
  }catch(err){ console.error(err); wrap.innerHTML = '<p style="color:var(--red-text);font-size:13px;">Could not load brand assets.</p>'; }
}
async function uploadBrandAsset(contactId){
  const c = DATA.contacts.find(x=>x.id===contactId);
  if(!c || !c.portalUid) return;
  const fileInput = document.getElementById('ba-file-'+contactId);
  const statusEl = document.getElementById('ba-upload-status-'+contactId);
  if(!fileInput || !fileInput.files.length){ showToast('Select a file first'); return; }
  const file = fileInput.files[0];
  if(file.size > 20971520){ showToast('File exceeds 20 MB limit'); return; }
  const sb = getSupabaseClient();
  if(!sb) return;
  if(statusEl) statusEl.textContent = 'Uploading...';
  const path = `${c.portalUid}/${Date.now()}_${file.name.replace(/\s+/g,'_')}`;
  try{
    const { error: upErr } = await sb.storage.from('brand-assets').upload(path, file, { contentType: file.type, upsert: false });
    if(upErr) throw upErr;
    const { error: dbErr } = await sb.from('brand_assets').insert({
      client_id: c.portalUid, file_name: file.name, file_path: path,
      file_type: file.type, file_size_bytes: file.size
    });
    if(dbErr) throw dbErr;
    if(statusEl) statusEl.textContent = '';
    fileInput.value = '';
    showToast('Asset uploaded');
    loadBrandAssetsForContact(c);
  }catch(err){ console.error(err); if(statusEl) statusEl.textContent = 'Upload failed.'; showToast('Upload failed'); }
}
async function downloadBrandAsset(filePath, fileName){
  const sb = getSupabaseClient();
  if(!sb) return;
  try{
    const { data, error } = await sb.storage.from('brand-assets').download(filePath);
    if(error) throw error;
    const url = URL.createObjectURL(data);
    const a = document.createElement('a');
    a.href = url; a.download = fileName; a.click();
    setTimeout(()=>URL.revokeObjectURL(url), 5000);
  }catch(err){ console.error(err); showToast('Could not download file'); }
}
async function deleteBrandAsset(assetId, filePath, contactId){
  if(!confirm('Delete this asset? This cannot be undone.')) return;
  const c = DATA.contacts.find(x=>x.id===contactId);
  if(!c) return;
  const sb = getSupabaseClient();
  if(!sb) return;
  try{
    await sb.storage.from('brand-assets').remove([filePath]);
    await sb.from('brand_assets').delete().eq('id', assetId);
    showToast('Asset deleted');
    loadBrandAssetsForContact(c);
  }catch(err){ console.error(err); showToast('Could not delete asset'); }
}

function openAddExtraDeliverableModal(contactId){
  const c = DATA.contacts.find(x=>x.id===contactId);
  if(!c || !c.portalUid){ showToast('Link this contact to a Portal account first'); return; }
  if(!agencySupabaseSession || !agencyAccountRequest || !agencyAccountRequest.approved){ showToast('Connect your agency account in Settings - Integrations first'); return; }
  showPromptModal({
    title: 'Log Extra Deliverable',
    fields: [
      { id: 'title', label: 'Deliverable', placeholder: 'e.g. Extra Blog Post' },
      { id: 'value', label: 'Value (USD)', placeholder: 'e.g. 250', type: 'number' }
    ],
    confirmLabel: 'Log',
    onConfirm: ({ title, value: valueStr }) => {
      if(!title) return;
      const value = Number(String(valueStr).replace(/[^0-9.]/g,'')) || 0;
      addExtraDeliverable(contactId, title, value);
    }
  });
}
async function addExtraDeliverable(contactId, title, value){
  const c = DATA.contacts.find(x=>x.id===contactId);
  if(!c || !c.portalUid) return;
  const client = getSupabaseClient();
  if(!client) return;
  try{
    const { error } = await client.from('extra_deliverables').insert({
      id: uid(), client_id: c.portalUid,
      data: { title, value, dateCompleted: todayISO() },
    });
    if(error) throw error;
    showToast('Added - visible on their Portal now');
    loadExtraDeliverablesForContact(c);
  }catch(err){ console.error(err); showToast('Could not add, check your connection'); }
}
async function deleteExtraDeliverable(rowId, contactId){
  const client = getSupabaseClient();
  if(!client) return;
  try{
    const { error } = await client.from('extra_deliverables').delete().eq('id', rowId);
    if(error) throw error;
    const c = DATA.contacts.find(x=>x.id===contactId);
    if(c) loadExtraDeliverablesForContact(c);
    showToast('Removed');
  }catch(err){ console.error(err); showToast('Could not remove'); }
}

function fld(id,label,val,placeholder,type){ return `<div class="field"><label>${esc(label)}</label><input id="${id}" type="${type||'text'}" value="${esc(val==null?'':val)}" placeholder="${esc(placeholder||'')}"></div>`; }
function selFld(id,label,options,val){ return `<div class="field"><label>${esc(label)}</label><select id="${id}"><option value="">Select...</option>${options.map(o=>`<option value="${esc(o)}" ${val===o?'selected':''}>${esc(o)}</option>`).join('')}</select></div>`; }
function taFld(id,label,val,placeholder){ return `<div class="field"><label>${esc(label)}</label><textarea id="${id}" rows="2" placeholder="${esc(placeholder||'')}">${esc(val||'')}</textarea></div>`; }
function chkFld(id,label,checked){ return `<div class="field" style="display:flex; align-items:center; gap:8px;"><input type="checkbox" id="${id}" ${checked?'checked':''} style="width:auto;"><label style="margin:0; text-transform:none; font-size:13px; font-weight:500; color:var(--ink);">${esc(label)}</label></div>`; }
function row2(a,b){ return `<div class="field-row">${a}${b}</div>`; }
function switchContactTab(tab){
  document.querySelectorAll('.contact-tab-panel').forEach(p=> p.style.display = p.dataset.tab===tab ? 'block' : 'none');
  document.querySelectorAll('.contact-tab-btn').forEach(b=> b.classList.toggle('active', b.dataset.tab===tab));
}
function modalFormHTML(c){
  const isEdit = !!(c && c.id);
  c = c || {name:'',company:'',type:'prospect',stage:'New',source:'',phone:'',email:'',dealValue:0,followUpDate:'',dateAdded:todayISO(),responseHours:'',notes:[],customFields:{},assignedTo:currentScope().userId,tags:[],emailLists:[],services:[],profile:defaultProfile()};
  c.profile = c.profile || defaultProfile();
  const p = c.profile;
  const contactCalls = isEdit ? DATA.callLogs.filter(cl=>cl.contactId===c.id).sort((a,b)=>b.date.localeCompare(a.date)) : [];
  const customFieldInputs = DATA.customFields
    .filter(f=> !f.appliesTo || f.appliesTo.includes('all') || f.appliesTo.includes(c.type))
    .map(f=>{
      const val = (c.customFields && c.customFields[f.id]!=null) ? c.customFields[f.id] : '';
      const reqMark = f.requiredForProgression ? ' *' : '';
      if(f.type==='dropdown'){
        const opts = f.options||[];
        return `<div class="field"><label>${esc(f.name)}${reqMark}</label><select id="cf_${f.id}"><option value="">Select...</option>${opts.map(o=>`<option value="${esc(o)}" ${val===o?'selected':''}>${esc(o)}</option>`).join('')}</select></div>`;
      }
      const inputType = f.type==='number' ? 'number' : f.type==='date' ? 'date' : f.type==='email' ? 'email' : f.type==='phone' ? 'tel' : 'text';
      const placeholder = f.type==='social' ? '@handle' : '';
      return `<div class="field"><label>${esc(f.name)}${reqMark}</label><input id="cf_${f.id}" type="${inputType}" value="${esc(val)}" placeholder="${placeholder}"></div>`;
    }).join('');

  const tabs = [['overview','Overview'],['contactdetails','Contact Details'],['tags','Tags & Services'],['company','Person Details']];
  if(c.type==='prospect' || c.type==='lead'){ tabs.push(['qualification','Lead Qualification']); }
  tabs.push(['salesactivity','Sales Activity'],['documents','Documents'],['internal','Internal & Activity']);
  if(isEdit && c.portalUid){ tabs.push(['invoices','Invoices'],['brandassets','Brand Assets'],['clientintel','Client Intel']); }

  return `
    <div class="settings-tabs" style="margin-bottom:14px;">
      ${tabs.map(([k,label],i)=>`<span class="settings-tab contact-tab-btn ${i===0?'active':''}" data-tab="${k}" onclick="switchContactTab('${k}')">${label}</span>`).join('')}
    </div>

    <div class="contact-tab-panel" data-tab="overview" style="display:block;">
      ${isEdit && (c.phone||c.email) ? `
      <div class="contact-links">
        ${c.phone ? `<a class="contact-link" href="${callHref(c.phone)}">${iconPhone()} ${esc(c.phone)}</a>` : ''}
        ${c.email ? `<a class="contact-link" href="mailto:${esc(c.email)}">${iconMail()} ${esc(c.email)}</a>` : ''}
        ${c.email ? `<span class="contact-link" style="cursor:pointer;" onclick="openComposeEmailModal('${escJs(c.email)}','','')">${iconMail()} Send via Outlook</span>` : ''}
      </div>` : ''}
      ${isEdit ? `
      <div style="border:1px solid var(--line); border-radius:9px; padding:12px 14px; margin-bottom:14px; display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
        <div>
          <div style="font-size:12px; font-weight:700; color:var(--ink);">Favze Portal Access</div>
          <div style="font-size:11.5px; color:var(--slate);">${c.portalUid ? 'Linked - this contact can sign in and see their content.' : 'Not linked yet. Usually set automatically when you approve their sign-up in Settings → Integrations.'}</div>
        </div>
        ${c.portalUid ? `<button type="button" class="btn-small" onclick="unlinkContactPortalUid('${c.id}')">Unlink</button>` : `<button type="button" class="btn-small" onclick="showPasteContactPortalUid('${c.id}')">Link manually</button>`}
      </div>
      ${c.portalUid ? `
      <div style="border:1px solid var(--line); border-radius:9px; padding:12px 14px; margin-bottom:14px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <div style="font-size:12px; font-weight:700; color:var(--ink);">Extra Deliverables This Cycle</div>
          <button type="button" class="btn-small" onclick="openAddExtraDeliverableModal('${c.id}')">${iconPlus()} Add</button>
        </div>
        <div id="extraDeliverables_${c.id}" style="font-size:12px; color:var(--slate);">Loading…</div>
        <p style="font-size:10.5px; color:var(--slate); margin-top:8px;">Each item shows up individually, with its own price, in both the CRM and the client's Portal under Billing - itemized, no bundled surcharge.</p>
      </div>
      <div style="border:1px solid var(--line); border-radius:9px; padding:12px 14px; margin-bottom:14px;">
        <div style="font-size:12px; font-weight:700; color:var(--ink); margin-bottom:8px;">Monthly Retainer Hours</div>
        <div style="display:flex; gap:10px; align-items:center;">
          <input id="f_retainerHours" type="number" min="0" step="0.5" placeholder="e.g. 20" style="width:90px;" value="" data-portal-uid="${c.portalUid}">
          <button type="button" class="btn-small" onclick="saveRetainerHours('${c.id}')">Save</button>
          <span id="retainerHoursDisplay_${c.id}" style="font-size:11.5px; color:var(--slate);">Loading...</span>
        </div>
        <p style="font-size:10.5px; color:var(--slate); margin-top:8px;">Hours included in this client's retainer each month. Used to calculate burn rate on the Client Intel tab.</p>
      </div>
      ` : ''}
      ` : ''}
      ${fld('f_name','Name',c.name,'Contact or business name')}
      <div class="field">
        <label>Company</label>
        <select id="f_companyId">
          <option value="">No company / not yet linked</option>
          ${DATA.companies.map(co=>`<option value="${co.id}" ${c.companyId===co.id?'selected':''}>${esc(co.name)}</option>`).join('')}
        </select>
        <div style="display:flex; gap:8px; margin-top:8px;">
          <input id="f_newCompanyName" placeholder="Or type a new company name to create one">
          <button type="button" class="btn-small" onclick="createCompanyInline()">${iconPlus()} Create</button>
        </div>
        ${c.companyId ? `<button type="button" class="btn-small" style="margin-top:8px;" onclick="openEditCompany('${c.companyId}')">${iconGear()} Edit this company's full record</button>` : ''}
      </div>
      ${row2(fld('f_phone','Phone',c.phone,'(555) 555-5555','tel'), fld('f_email','Email',c.email,'name@company.com','email'))}
      ${chkFld('f_unsubscribed','Unsubscribed from email marketing (skipped by campaigns and workflows)', c.unsubscribed)}
      <div class="field-row">
        <div class="field"><label>Type</label>
          <select id="f_type">
            <option value="prospect" ${c.type==='prospect'?'selected':''}>Prospect</option>
            <option value="lead" ${c.type==='lead'?'selected':''}>Lead</option>
            <option value="customer" ${c.type==='customer'?'selected':''}>Client</option>
            <option value="past_customer" ${c.type==='past_customer'?'selected':''}>Past Client</option>
          </select>
        </div>
        ${c.type==='lead' ? selFld('f_stage','Lead Status',LEAD_STATUS_OPTIONS,c.stage) : fld('f_stage','Stage',c.stage,'e.g. Contacted, Proposal Sent')}
      </div>
      <div class="field"><label>Assigned to</label>
        <select id="f_assignedTo">
          <option value="">Unassigned</option>
          ${DATA.users.map(u=>`<option value="${u.id}" ${c.assignedTo===u.id?'selected':''}>${esc(u.name)}</option>`).join('')}
        </select>
      </div>
      ${row2(selFld('f_source','Lead Source',LEAD_SOURCE_OPTIONS,c.source), fld('f_deal','Deal value ($)',c.dealValue||0,'','number'))}
      ${row2(fld('f_followup','Follow up date',c.followUpDate||'','','date'), fld('f_response','First response time (hrs)',c.responseHours!=null?c.responseHours:'','','number'))}
      ${customFieldInputs}
      <div class="field">
        <label>Notes</label>
        <div class="notes-list">${(c.notes||[]).map(n=>`<div class="note-item">${esc(n.text)}<div class="note-date">${fmtDate(n.date)}</div></div>`).join('') || '<div class="note-item" style="color:var(--slate);">No notes yet.</div>'}</div>
        <textarea id="f_newnote" rows="2" placeholder="Add a note about this contact"></textarea>
      </div>
      ${isEdit ? `<p style="font-size:11px; color:var(--slate);">Created ${fmtDate(c.dateAdded)}${c.lastModified ? ' · Last modified ' + fmtDate(c.lastModified.slice(0,10)) : ''}</p>` : ''}
    </div>

    <div class="contact-tab-panel" data-tab="contactdetails" style="display:none;">
      ${row2(fld('pf_firstName','First Name',p.contactDetails.firstName,''), fld('pf_lastName','Last Name',p.contactDetails.lastName,''))}
      ${row2(selFld('pf_department','Department',DEPARTMENT_OPTIONS,p.contactDetails.department), fld('pf_extension','Extension',p.contactDetails.extension,''))}
      ${row2(fld('pf_workEmail','Work Email',p.contactDetails.workEmail,'','email'), fld('pf_personalEmail','Personal Email',p.contactDetails.personalEmail,'','email'))}
      ${row2(fld('pf_mobilePhone','Mobile Phone',p.contactDetails.mobilePhone,'','tel'), fld('pf_officePhone','Direct Office Phone',p.contactDetails.officePhone,'','tel'))}
      <p style="font-size:11px; color:var(--slate);">LinkedIn Profile lives on the Social Media tab. The primary Name/Phone/Email on Overview stay the main record, these are the additional specifics.</p>
    </div>

    <div class="contact-tab-panel" data-tab="tags" style="display:none;">
      <div class="field">
        <label>Tags</label>
        ${DATA.tagDefinitions.length ? `
        <div style="display:flex; flex-wrap:wrap; gap:8px;">
          ${DATA.tagDefinitions.map(t=>{
            const on = (c.tags||[]).includes(t.id);
            return `<label style="display:flex; align-items:center; gap:6px; padding:6px 11px; border-radius:99px; border:1.5px solid ${on?t.color:'var(--line)'}; background:${on?t.color+'22':'var(--paper)'}; cursor:pointer; font-size:12px; font-weight:600; color:var(--ink);">
              <input type="checkbox" class="tag-check" value="${t.id}" ${on?'checked':''} onchange="this.closest('label').style.background=this.checked?'${t.color}22':'var(--paper)'; this.closest('label').style.borderColor=this.checked?'${t.color}':'var(--line)';" style="width:auto;">
              <span style="width:8px; height:8px; border-radius:50%; background:${t.color};"></span>${esc(t.name)}
            </label>`;
          }).join('')}
        </div>` : `<p style="font-size:11.5px; color:var(--slate);">No tags defined yet. Add some from Settings → Tags.</p>`}
      </div>
      <div class="field">
        <label>Email Lists</label>
        ${DATA.emailLists.length ? `
        <div style="display:flex; flex-direction:column; gap:6px;">
          ${DATA.emailLists.map(l=>`
            <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
              <input type="checkbox" class="list-check" value="${l.id}" ${(c.emailLists||[]).includes(l.id)?'checked':''} style="width:auto;">
              <span style="font-size:13px; font-weight:500; color:var(--ink);">${esc(l.name)}</span>
              <span style="font-size:11px; color:var(--slate);">${esc(l.description)}</span>
            </label>`).join('')}
        </div>` : `<p style="font-size:11.5px; color:var(--slate);">No lists yet. Add some from Settings → Email Lists.</p>`}
      </div>
      <div class="field">
        <label>Service interest / currently buying</label>
        <div style="display:flex; flex-wrap:wrap; gap:8px;">
          ${FAVZE_SERVICES.map(s=>{
            const on = (c.services||[]).includes(s.value);
            return `<label style="display:flex; align-items:center; gap:6px; padding:6px 11px; border-radius:99px; border:1.5px solid ${on?'var(--teal)':'var(--line)'}; background:${on?'var(--teal-soft)':'var(--paper)'}; cursor:pointer; font-size:12px; font-weight:600; color:var(--ink);">
              <input type="checkbox" class="service-check" value="${s.value}" ${on?'checked':''} onchange="this.closest('label').style.background=this.checked?'var(--teal-soft)':'var(--paper)'; this.closest('label').style.borderColor=this.checked?'var(--teal)':'var(--line)';" style="width:auto;">
              ${esc(s.label)}
            </label>`;
          }).join('')}
        </div>
      </div>
    </div>

    <div class="contact-tab-panel" data-tab="company" style="display:none;">
      <p style="font-size:11.5px; color:var(--slate); margin-bottom:14px;">Industry, address, website, and every other business-level detail now live on the linked Company record (Overview tab above). This tab is just about this person.</p>
      ${row2(fld('pf_jobTitle','Job Title',p.jobTitle,"This person's title"), '')}
      <div style="display:flex; flex-wrap:wrap; gap:16px; margin-top:6px; margin-bottom:14px;">
        ${chkFld('pf_decisionMaker','Decision Maker', p.decisionMaker)}
        ${chkFld('pf_billingContact','Billing Contact', p.billingContact)}
        ${chkFld('pf_marketingContact','Marketing Contact', p.marketingContact)}
        ${chkFld('pf_technicalContact','Technical Contact', p.technicalContact)}
      </div>
      <div style="border-top:1px solid var(--line); margin:14px 0; padding-top:14px;">
        <label style="display:block; font-size:11.5px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:10px;">Decision Making &amp; Communication</label>
        ${row2(selFld('pf_decisionAuthority','Decision-Making Authority',DECISION_AUTHORITY_OPTIONS,p.decisionAuthority), selFld('pf_buyingInfluence','Buying Influence',BUYING_INFLUENCE_OPTIONS,p.buyingInfluence))}
        ${row2(selFld('pf_contactStatus','Contact Status',CONTACT_STATUS_OPTIONS,p.contactStatus), selFld('pf_preferredContactMethod','Preferred Contact Method',PREFERRED_CONTACT_OPTIONS,p.preferredContactMethod))}
        ${selFld('pf_bestTimeToContact','Best Time to Contact',BEST_TIME_OPTIONS,p.bestTimeToContact)}
        ${p.contactStatus==='Do Not Contact' ? `<p style="font-size:11px; color:var(--red-text); margin-top:6px;">Contact Status is Do Not Contact. This is informational only, check Unsubscribed on Overview if this person should also be excluded from Campaigns and Workflows.</p>` : ''}
      </div>
    </div>

    <div class="contact-tab-panel" data-tab="salesactivity" style="display:none;">
      ${isEdit ? `
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(100px,1fr)); gap:12px; margin-bottom:16px;">
        <div class="stat-card" style="padding:14px;"><div class="label">Last Contact</div><h2 style="font-size:20px;">${fmtDate(lastActivityDate(c))}</h2></div>
        <div class="stat-card" style="padding:14px;"><div class="label">Calls Logged</div><h2 style="font-size:20px;">${DATA.callLogs.filter(cl=>cl.contactId===c.id).length}</h2></div>
        <div class="stat-card" style="padding:14px;"><div class="label">Emails Sent</div><h2 style="font-size:20px;">${DATA.emailLog.filter(l=>l.contactId===c.id).length}</h2></div>
      </div>
      <p style="font-size:11px; color:var(--slate); margin-top:-10px; margin-bottom:14px;">These three are calculated live from your actual Calls and Email Log, not manually entered.</p>
      ` : `<p style="font-size:11.5px; color:var(--slate); margin-bottom:14px;">Save this contact first to see calculated call and email counts here.</p>`}
      ${row2(fld('pf_consultationScheduled','Consultation Scheduled',p.salesActivity.consultationScheduled,'','datetime-local'), selFld('pf_lastCallOutcome','Last Call Outcome',CALL_OUTCOME_OPTIONS,p.salesActivity.lastCallOutcome))}
      ${row2(fld('pf_lastMeetingDate','Last Meeting Date',p.salesActivity.lastMeetingDate,'','date'), selFld('pf_lastInteractionType','Last Interaction Type',INTERACTION_TYPE_OPTIONS,p.salesActivity.lastInteractionType))}
      <p style="font-size:11px; color:var(--slate);">Next Follow-up Date lives on the Overview tab so it stays next to the rest of the pipeline info.</p>
    </div>

    <div class="contact-tab-panel" data-tab="documents" style="display:none;">
      ${isEdit ? `
      <div class="field">
        <label>Documents &amp; Attachments</label>
        <div class="calls-mini">${(p.documents||[]).length ? p.documents.map(d=>`
          <div class="call-mini-item" style="display:flex; justify-content:space-between; align-items:center;">
            <span><b>${esc(d.type)}</b>: ${d.url ? `<a href="${safeHref(d.url)}" target="_blank" rel="noopener noreferrer">${esc(d.name||d.url)}</a>` : esc(d.name)}</span>
            <button type="button" class="btn-small" onclick="deleteDocument('${c.id}','${d.id}')">Remove</button>
          </div>`).join('') : '<div class="call-mini-item" style="color:var(--slate);">No documents linked yet.</div>'}</div>
        <div class="field-row" style="margin-top:8px;">
          <select id="doc_type_${c.id}">${DOCUMENT_TYPE_OPTIONS.map(t=>`<option value="${esc(t)}">${esc(t)}</option>`).join('')}</select>
          <input id="doc_name_${c.id}" placeholder="Document name">
        </div>
        <input id="doc_url_${c.id}" placeholder="Link to the file (Drive, Dropbox, etc.)" style="margin-top:8px;">
        <button type="button" class="btn-small" onclick="addDocument('${c.id}')" style="margin-top:8px;">${iconPlus()} Add document link</button>
        <p style="font-size:11px; color:var(--slate); margin-top:8px;">This app can't store uploaded files directly, only JSON data, so this links out to wherever the actual file lives (Drive, Dropbox, etc.) instead of hosting it here.</p>
      </div>
      ` : `<p style="font-size:11.5px; color:var(--slate);">Save this contact first, then add document links.</p>`}
    </div>

    ${(c.type==='prospect' || c.type==='lead') ? `
    <div class="contact-tab-panel" data-tab="qualification" style="display:none;">
      <div class="field-row">
        <div class="field"><label>Lead Score</label><input id="pf_leadScore" type="number" value="${esc(p.leadScore)}" placeholder="0-100"></div>
        ${selFld('pf_leadTemperature','Lead Temperature',LEAD_TEMPERATURE_OPTIONS,p.leadTemperature)}
      </div>
      ${row2(fld('pf_probabilityToClose','Probability to Close (%)',p.probabilityToClose,'','number'), fld('pf_expectedCloseDate','Expected Close Date',p.expectedCloseDate,'','date'))}
      ${row2(fld('pf_expectedStartDate','Expected Start Date',p.expectedStartDate,'','date'), fld('pf_campaignName','Campaign Name',p.campaignName,'Which campaign brought them in'))}
      ${selFld('pf_budgetRange','Budget Range',BUDGET_RANGE_OPTIONS,p.budgetRange)}
      <div style="border-top:1px solid var(--line); margin:14px 0; padding-top:14px;">
        <label style="display:block; font-size:11.5px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:10px;">Decision Makers</label>
        ${row2(fld('pf_decisionMakerName','Decision Maker Name',p.decisionMakerName,'If different from this contact'), fld('pf_decisionMakerTitle','Decision Maker Title',p.decisionMakerTitle,''))}
        ${taFld('pf_otherDecisionMakers','Other Decision Makers',p.otherDecisionMakers,'Names, titles, notes on anyone else involved')}
      </div>
      ${c.type==='lead' ? `
      <div style="border-top:1px solid var(--line); margin:14px 0; padding-top:14px;">
        <label style="display:block; font-size:11.5px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:10px;">Conversion</label>
        <div style="display:flex; gap:16px; align-items:center;">
          ${chkFld('pf_convertedToAccount','Converted to Account', p.convertedToAccount)}
          ${fld('pf_convertedDate','Converted Date',p.convertedDate,'','date')}
        </div>
        <p style="font-size:11px; color:var(--slate); margin-top:6px;">This fills in automatically the moment you change Type to Client on the Overview tab. Manual override is fine if you're backfilling history.</p>
      </div>` : ''}
    </div>` : ''}

    <div class="contact-tab-panel" data-tab="internal" style="display:none;">
      ${c.companyId ? `<p style="font-size:11.5px; color:var(--slate); margin-bottom:14px;">Account Manager, Priority, Branding, Contract, Compliance, and every other internal/business detail live on <a onclick="closeModal(); openEditCompany('${c.companyId}');" style="cursor:pointer; color:var(--teal-text); font-weight:700;">this contact's Company record</a> now.</p>` : `<p style="font-size:11.5px; color:var(--slate); margin-bottom:14px;">Link this contact to a Company on the Overview tab to manage Account Manager, Priority, Branding, Contract, and Compliance there.</p>`}
      ${isEdit ? `
      <div class="field">
        <label>Other company relationships</label>
        <div class="calls-mini">${(c.relationships||[]).length ? c.relationships.map(r=>`
          <div class="call-mini-item" style="display:flex; justify-content:space-between; align-items:center;">
            <span><b>${esc(r.role)}</b> at ${esc(r.company)}</span>
            <button type="button" class="btn-small" onclick="deleteRelationship('${c.id}','${r.id}')">Remove</button>
          </div>`).join('') : '<div class="call-mini-item" style="color:var(--slate);">No other relationships yet. This contact is only linked to ' + esc(c.company||'their primary company') + '.</div>'}</div>
        <div class="field-row" style="margin-top:8px;">
          <input id="rel_company_${c.id}" placeholder="Company (e.g. Company B)">
          <input id="rel_role_${c.id}" placeholder="Role (e.g. Advisor)">
        </div>
        <button type="button" class="btn-small" onclick="addRelationship('${c.id}')">${iconPlus()} Add relationship</button>
      </div>
      <div class="field">
        <label>Calls</label>
        <div class="calls-mini">${contactCalls.length ? contactCalls.map(cl=>`<div class="call-mini-item">${esc((cl.transcript||cl.notes||'').slice(0,80))||'(no transcript)'}<div class="cm-date">${fmtDate(cl.date)}${cl.duration?' · '+cl.duration+' min':''}</div></div>`).join('') : '<div class="call-mini-item" style="color:var(--slate);">No calls logged yet.</div>'}</div>
        <button type="button" class="btn-small" onclick="openLogCallModal('${c.id}')">${iconPhone()} Log a call</button>
      </div>` : ''}
    </div>
    ${(isEdit && c.portalUid) ? `
    <div class="contact-tab-panel" data-tab="invoices" style="display:none;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <div style="font-weight:700; font-size:13px;">Invoices</div>
        <button type="button" class="btn-small" onclick="openNewInvoiceModal('${c.id}')">+ New Invoice</button>
      </div>
      <div id="invoices-wrap-${c.id}"><p style="color:var(--slate); font-size:13px;">Loading invoices...</p></div>
    </div>
    <div class="contact-tab-panel" data-tab="brandassets" style="display:none;">
      <div style="font-weight:700; font-size:13px; margin-bottom:14px;">Brand Assets</div>
      <div id="brandassets-wrap-${c.id}"><p style="color:var(--slate); font-size:13px;">Loading assets...</p></div>
    </div>
    <div class="contact-tab-panel" data-tab="clientintel" style="display:none;">
      <div id="ci-wrap-${c.id}">
        <p style="color:var(--slate); font-size:13px;">Loading client intel...</p>
      </div>
    </div>` : ''}
  `;
}
function userSelFld(id,label,val){
  return `<div class="field"><label>${esc(label)}</label><select id="${id}"><option value="">Unassigned</option>${DATA.users.map(u=>`<option value="${u.id}" ${val===u.id?'selected':''}>${esc(u.name)}</option>`).join('')}</select></div>`;
}
async function addRelationship(contactId){
  const company = document.getElementById('rel_company_'+contactId).value.trim();
  const role = document.getElementById('rel_role_'+contactId).value.trim();
  if(!company || !role){ showToast('Company and role are both required'); return; }
  const c = DATA.contacts.find(x=>x.id===contactId);
  if(!c) return;
  c.relationships = c.relationships || [];
  c.relationships.push({ id: uid(), company, role });
  await saveData();
  openEditModal(contactId);
  showToast('Relationship added');
}
async function deleteRelationship(contactId, relId){
  const c = DATA.contacts.find(x=>x.id===contactId);
  if(!c) return;
  c.relationships = (c.relationships||[]).filter(r=>r.id!==relId);
  await saveData();
  openEditModal(contactId);
  showToast('Relationship removed');
}
async function createCompanyInline(){
  const nameInput = document.getElementById('f_newCompanyName');
  const name = nameInput.value.trim();
  if(!name){ showToast('Type a company name first'); return; }
  const id = findOrCreateCompanyByName(name);
  await saveData();
  const sel = document.getElementById('f_companyId');
  sel.innerHTML = '<option value="">No company / not yet linked</option>' + DATA.companies.map(co=>`<option value="${co.id}" ${co.id===id?'selected':''}>${esc(co.name)}</option>`).join('');
  nameInput.value = '';
  showToast(`${name} added as a company`);
}
async function addDocument(contactId){
  const type = document.getElementById('doc_type_'+contactId).value;
  const name = document.getElementById('doc_name_'+contactId).value.trim();
  const url = document.getElementById('doc_url_'+contactId).value.trim();
  if(!name && !url){ showToast('Add a name or a link'); return; }
  const c = DATA.contacts.find(x=>x.id===contactId);
  if(!c) return;
  c.profile = c.profile || defaultProfile();
  c.profile.documents = c.profile.documents || [];
  c.profile.documents.push({ id: uid(), type, name, url, dateAdded: todayISO() });
  await saveData();
  openEditModal(contactId);
  showToast('Document added');
}
async function deleteDocument(contactId, docId){
  const c = DATA.contacts.find(x=>x.id===contactId);
  if(!c) return;
  c.profile.documents = (c.profile.documents||[]).filter(d=>d.id!==docId);
  await saveData();
  openEditModal(contactId);
  showToast('Document removed');
}

async function saveContactForm(){
  const name = document.getElementById('f_name').value.trim();
  if(!name){ showToast('Name is required'); return; }
  const companyId = document.getElementById('f_companyId').value || null;
  const companyObj = companyId ? DATA.companies.find(x=>x.id===companyId) : null;
  const company = companyObj ? companyObj.name : '';

  if(!editingId){
    const dup = DATA.contacts.find(x=> x.name.toLowerCase()===name.toLowerCase() && (x.company||'').toLowerCase()===company.toLowerCase());
    if(dup){
      const proceed = await showConfirmModal({ title: 'Possible duplicate', message: `"${name}" (${company||'no company'}) looks like it might already exist as a ${typeLabel(dup.type)}. Add it anyway?`, confirmLabel: 'Add anyway' });
      if(!proceed) return;
    }
  }

  const payload = {
    name,
    companyId,
    company,
    type: document.getElementById('f_type').value,
    stage: document.getElementById('f_stage').value.trim(),
    source: document.getElementById('f_source').value.trim(),
    phone: document.getElementById('f_phone').value.trim(),
    email: document.getElementById('f_email').value.trim(),
    unsubscribed: document.getElementById('f_unsubscribed').checked,
    assignedTo: document.getElementById('f_assignedTo').value || null,
    tags: Array.from(document.querySelectorAll('.tag-check')).filter(c=>c.checked).map(c=>c.value),
    emailLists: Array.from(document.querySelectorAll('.list-check')).filter(c=>c.checked).map(c=>c.value),
    services: Array.from(document.querySelectorAll('.service-check')).filter(c=>c.checked).map(c=>c.value),
    dealValue: Number(document.getElementById('f_deal').value)||0,
    followUpDate: document.getElementById('f_followup').value || null,
    responseHours: document.getElementById('f_response').value !== '' ? Number(document.getElementById('f_response').value) : null,
  };
  const customFieldValues = {};
  DATA.customFields.forEach(f=>{
    const el = document.getElementById('cf_'+f.id);
    if(el) customFieldValues[f.id] = el.value;
  });
  payload.customFields = customFieldValues;
  const newNoteText = document.getElementById('f_newnote').value.trim();

  // Gather the extended profile. pv/pc/pn fall back to the existing value when a field
  // wasn't rendered (a tab hidden for this contact type), so switching type never wipes
  // data that simply wasn't visible in this edit session. Everything business-level
  // (industry, contract, branding, social, etc.) now lives on the linked Company instead.
  const existingProfile = ((editingId && DATA.contacts.find(x=>x.id===editingId)) || {}).profile || defaultProfile();
  const pv = (id, fallback)=>{ const el=document.getElementById(id); return el ? el.value.trim() : fallback; };
  const pc = (id, fallback)=>{ const el=document.getElementById(id); return el ? el.checked : fallback; };
  payload.profile = {
    customerId: pv('pf_customerId', existingProfile.customerId),
    customerStatus: pv('pf_customerStatus', existingProfile.customerStatus),
    jobTitle: pv('pf_jobTitle', existingProfile.jobTitle),
    decisionMaker: pc('pf_decisionMaker', existingProfile.decisionMaker),
    billingContact: pc('pf_billingContact', existingProfile.billingContact),
    marketingContact: pc('pf_marketingContact', existingProfile.marketingContact),
    technicalContact: pc('pf_technicalContact', existingProfile.technicalContact),
    decisionAuthority: pv('pf_decisionAuthority', existingProfile.decisionAuthority),
    buyingInfluence: pv('pf_buyingInfluence', existingProfile.buyingInfluence),
    contactStatus: pv('pf_contactStatus', existingProfile.contactStatus),
    preferredContactMethod: pv('pf_preferredContactMethod', existingProfile.preferredContactMethod),
    bestTimeToContact: pv('pf_bestTimeToContact', existingProfile.bestTimeToContact),
    decisionMakerName: pv('pf_decisionMakerName', existingProfile.decisionMakerName),
    decisionMakerTitle: pv('pf_decisionMakerTitle', existingProfile.decisionMakerTitle),
    otherDecisionMakers: pv('pf_otherDecisionMakers', existingProfile.otherDecisionMakers),
    leadScore: pv('pf_leadScore', existingProfile.leadScore),
    leadTemperature: pv('pf_leadTemperature', existingProfile.leadTemperature),
    probabilityToClose: pv('pf_probabilityToClose', existingProfile.probabilityToClose),
    expectedCloseDate: pv('pf_expectedCloseDate', existingProfile.expectedCloseDate),
    expectedStartDate: pv('pf_expectedStartDate', existingProfile.expectedStartDate),
    campaignName: pv('pf_campaignName', existingProfile.campaignName),
    budgetRange: pv('pf_budgetRange', existingProfile.budgetRange),
    convertedToAccount: pc('pf_convertedToAccount', existingProfile.convertedToAccount),
    convertedDate: pv('pf_convertedDate', existingProfile.convertedDate),
    contactDetails: {
      firstName: pv('pf_firstName', existingProfile.contactDetails.firstName), lastName: pv('pf_lastName', existingProfile.contactDetails.lastName),
      department: pv('pf_department', existingProfile.contactDetails.department), extension: pv('pf_extension', existingProfile.contactDetails.extension),
      workEmail: pv('pf_workEmail', existingProfile.contactDetails.workEmail), personalEmail: pv('pf_personalEmail', existingProfile.contactDetails.personalEmail),
      mobilePhone: pv('pf_mobilePhone', existingProfile.contactDetails.mobilePhone), officePhone: pv('pf_officePhone', existingProfile.contactDetails.officePhone),
      linkedinPersonal: pv('pf_linkedinPersonal', existingProfile.contactDetails.linkedinPersonal),
    },
    salesActivity: {
      consultationScheduled: pv('pf_consultationScheduled', existingProfile.salesActivity.consultationScheduled),
      lastCallOutcome: pv('pf_lastCallOutcome', existingProfile.salesActivity.lastCallOutcome),
      lastMeetingDate: pv('pf_lastMeetingDate', existingProfile.salesActivity.lastMeetingDate),
      lastInteractionType: pv('pf_lastInteractionType', existingProfile.salesActivity.lastInteractionType),
    },
    documents: existingProfile.documents || [],
  };

  const prevTypeForCheck = editingId ? (DATA.contacts.find(x=>x.id===editingId)||{}).type : 'prospect';
  if(payload.type !== prevTypeForCheck){
    const missing = validateContactProgression({...payload, customFields: customFieldValues});
    if(missing.length){
      showToast(`Fill in first: ${missing.join(', ')}`);
      return;
    }
  }
  payload.lastModified = new Date().toISOString();

  if(editingId){
    const c = DATA.contacts.find(x=>x.id===editingId);
    const prevType = c.type;
    const prevAssigned = c.assignedTo;
    if(prevType==='lead' && payload.type==='customer' && !payload.profile.convertedToAccount){
      payload.profile.convertedToAccount = true;
      payload.profile.convertedDate = payload.profile.convertedDate || todayISO();
    }
    Object.assign(c, payload);
    if((c.type==='customer'||c.type==='past_customer') && !c.wonDate) c.wonDate = todayISO();
    if(c.followUpDate && c.followUpDate !== c._prevFollowUp) c.followUpDone = false;
    if(newNoteText) c.notes = (c.notes||[]).concat([{text:newNoteText, date:todayISO()}]);
    if(prevType !== c.type){ evaluateWorkflowsForContact(c, {kind:'type_changed', from:prevType, to:c.type}); }
    if(c.type==='lead' && c.assignedTo && c.assignedTo!==prevAssigned){
      const owner = DATA.users.find(u=>u.id===c.assignedTo);
      await notifyEvent('lead_assigned', `${c.name} was assigned to ${owner?owner.name:'a team member'}`, c);
    }
  } else {
    const c = { id: uid(), dateAdded: todayISO(), followUpDone:false, notes: newNoteText ? [{text:newNoteText,date:todayISO()}] : [], ...payload };
    if(c.type==='customer'||c.type==='past_customer') c.wonDate = todayISO();
    if(c.type==='lead' && !c.assignedTo && DATA.settings.roundRobin.enabled){
      const nextUser = getNextRoundRobinUser();
      if(nextUser) c.assignedTo = nextUser.id;
    }
    DATA.contacts.push(c);
    evaluateWorkflowsForContact(c, {kind:'created'});
    if(c.type==='lead' && c.assignedTo){
      const owner = DATA.users.find(u=>u.id===c.assignedTo);
      await notifyEvent('lead_assigned', `${c.name} was assigned to ${owner?owner.name:'a team member'}`, c);
    }
  }
  await saveData();
  closeModal();
  render();
  showToast(editingId ? 'Contact updated' : 'Contact added');
}

async function deleteContact(id){
  DATA.contacts = DATA.contacts.filter(x=>x.id!==id);
  await saveData();
  closeModal();
  render();
  showToast('Contact deleted');
}

/* ===================== MODAL: PROJECTS ===================== */
let editingProjectId = null;
function openNewProjectModal(){
  editingProjectId = null;
  document.getElementById('modalTitle').textContent = 'New Project';
  document.getElementById('modalBody').innerHTML = projectFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="saveProjectForm()">Add project</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
  renderProjectTaskRows();
}
function openEditProject(id){
  editingProjectId = id;
  const p = DATA.projects.find(x=>x.id===id);
  if(!p) return;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalBody').innerHTML = projectFormHTML(p);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-danger" onclick="deleteProject('${id}')">Delete</button>
    <div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-ghost" onclick="syncProjectToPortal('${id}')">Sync to Portal</button><button class="btn-primary" onclick="saveProjectForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
  renderProjectTaskRows();
}
/* Re-renders the inline task list inside the project modal */
function renderProjectTaskRows(){
  const tasks = _editingProjectTasks;
  const wrap = document.getElementById('p_taskRows');
  if(!wrap) return;
  if(!tasks.length){ wrap.innerHTML = `<p style="font-size:13px; color:var(--slate); padding:8px 0;">No tasks yet. Add one below.</p>`; return; }
  wrap.innerHTML = tasks.map((t,i)=>`
    <div style="display:flex; align-items:center; gap:10px; padding:8px 0; border-bottom:1px solid var(--line);">
      <div style="flex:1;">
        <div style="font-size:13px; font-weight:600; color:var(--navy-deep);">${esc(t.title)}</div>
        ${t.dueDate ? `<div style="font-size:11px; color:var(--slate);">Due ${fmtDate(t.dueDate)}</div>` : ''}
      </div>
      <select style="font-size:12px; padding:4px 8px;" onchange="_editingProjectTasks[${i}].status=this.value">
        <option value="Not Started" ${t.status==='Not Started'?'selected':''}>Not Started</option>
        <option value="In Progress" ${t.status==='In Progress'?'selected':''}>In Progress</option>
        <option value="Done" ${t.status==='Done'?'selected':''}>Done</option>
        <option value="Blocked" ${t.status==='Blocked'?'selected':''}>Blocked</option>
      </select>
      <button class="btn-ghost" style="padding:4px 8px; font-size:12px; color:var(--danger);" onclick="_editingProjectTasks.splice(${i},1); renderProjectTaskRows();">Remove</button>
    </div>`).join('');
}
let _editingProjectTasks = [];
function addProjectTask(){
  const titleEl = document.getElementById('p_newTaskTitle');
  const dueEl   = document.getElementById('p_newTaskDue');
  const title = titleEl ? titleEl.value.trim() : '';
  if(!title){ showToast('Enter a task name first'); return; }
  _editingProjectTasks.push({ id: uid(), title, dueDate: dueEl ? dueEl.value||null : null, status:'Not Started' });
  if(titleEl) titleEl.value = '';
  if(dueEl) dueEl.value = '';
  renderProjectTaskRows();
}
function projectFormHTML(p){
  p = p || {name:'',companyId:'',status:'Planning',startDate:'',dueDate:'',description:'',billingModel:'hourly',hourlyRate:0,flatMonthlyRate:0,budgetedHours:0,visibleToClient:false,assignedClients:[],projectTasks:[]};
  _editingProjectTasks = (p.projectTasks||[]).map(t=>({...t}));
  // contacts with a portal UID can be assigned
  const portalContacts = DATA.contacts.filter(c=>c.portalUid);
  return `
    <div class="field"><label>Project name</label><input id="p_name" value="${esc(p.name)}" placeholder="e.g. Michiana hub page rebuild"></div>
    <div class="field-row">
      <div class="field"><label>Client / Company</label>
        <select id="p_companyId">
          <option value="">No specific company / internal</option>
          ${DATA.companies.map(co=>`<option value="${co.id}" ${p.companyId===co.id?'selected':''}>${esc(co.name)}</option>`).join('')}
        </select>
      </div>
      <div class="field"><label>Status</label>
        <select id="p_status">
          <option value="Planning" ${p.status==='Planning'?'selected':''}>Planning</option>
          <option value="In Progress" ${p.status==='In Progress'?'selected':''}>In Progress</option>
          <option value="Review" ${p.status==='Review'?'selected':''}>Review</option>
          <option value="Complete" ${p.status==='Complete'?'selected':''}>Complete</option>
        </select>
      </div>
    </div>
    <div class="field-row">
      <div class="field"><label>Start date</label><input id="p_start" type="date" value="${p.startDate||''}"></div>
      <div class="field"><label>Due date</label><input id="p_due" type="date" value="${p.dueDate||''}"></div>
    </div>
    <div class="field">
      <label>Billing model</label>
      <select id="p_billingModel" onchange="document.getElementById('p_hourlyWrap').style.display=this.value==='hourly'?'':'none'; document.getElementById('p_flatWrap').style.display=this.value==='flat_monthly'?'':'none';">
        <option value="hourly" ${p.billingModel==='hourly'?'selected':''}>Hourly / billable</option>
        <option value="flat_monthly" ${p.billingModel==='flat_monthly'?'selected':''}>Flat rate monthly</option>
      </select>
    </div>
    <div class="field-row" id="p_hourlyWrap" style="${p.billingModel==='flat_monthly'?'display:none;':''}">
      <div class="field"><label>Billing rate ($/hr)</label><input id="p_hourlyRate" type="number" min="0" step="0.01" value="${p.hourlyRate||0}"></div>
      <div class="field"><label>Budgeted hours</label><input id="p_budgetedHours" type="number" min="0" step="0.5" value="${p.budgetedHours||0}"></div>
    </div>
    <div class="field" id="p_flatWrap" style="${p.billingModel==='hourly'?'display:none;':''}">
      <label>Flat monthly rate ($)</label><input id="p_flatMonthlyRate" type="number" min="0" step="0.01" value="${p.flatMonthlyRate||0}">
      <p style="font-size:11px; color:var(--slate); margin-top:4px;">Billed the same amount every month regardless of hours, revenue is calculated from this instead of hours x rate.</p>
    </div>
    <div class="field"><label>Description</label><textarea id="p_desc" rows="3" placeholder="What this project covers">${esc(p.description||'')}</textarea></div>
    <hr style="margin:16px 0; border-color:var(--line);">
    <div style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.05em; color:var(--slate); margin-bottom:12px;">Client Portal Visibility</div>
    <div class="field" style="display:flex; align-items:center; gap:10px;">
      <input type="checkbox" id="p_visibleToClient" ${p.visibleToClient?'checked':''} style="width:auto; margin:0;">
      <label for="p_visibleToClient" style="margin:0; font-size:13px; cursor:pointer;">Show this project in the client portal</label>
    </div>
    ${portalContacts.length ? `
    <div class="field">
      <label>Assign to clients (portal accounts only)</label>
      <div id="p_assignedClients" style="display:flex; flex-wrap:wrap; gap:8px; margin-top:4px;">
        ${portalContacts.map(c=>{
          const on = (p.assignedClients||[]).includes(c.id);
          return `<label style="display:flex; align-items:center; gap:5px; padding:5px 10px; border-radius:20px; background:${on?'var(--teal)':'var(--surface)'}; border:1.5px solid ${on?'var(--teal)':'var(--line)'}; cursor:pointer; font-size:12px; color:${on?'#fff':'var(--ink)'}; user-select:none;">
            <input type="checkbox" class="assigned-proj-client-check" value="${c.id}" ${on?'checked':''} style="display:none;" onchange="this.closest('label').style.background=this.checked?'var(--teal)':'var(--surface)'; this.closest('label').style.borderColor=this.checked?'var(--teal)':'var(--line)'; this.closest('label').style.color=this.checked?'#fff':'var(--ink)';">
            ${esc(c.name)}
          </label>`;
        }).join('')}
      </div>
    </div>` : `<p style="font-size:12px; color:var(--slate);">No portal accounts linked yet. Approve clients in Settings &rarr; Integrations to assign them here.</p>`}
    <hr style="margin:16px 0; border-color:var(--line);">
    <div style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.05em; color:var(--slate); margin-bottom:12px;">Project Tasks</div>
    <div id="p_taskRows"></div>
    <div style="display:flex; gap:8px; margin-top:10px; align-items:center;">
      <input id="p_newTaskTitle" placeholder="Task name" style="flex:1;">
      <input id="p_newTaskDue" type="date" style="width:140px;">
      <button class="btn-ghost" onclick="addProjectTask()">+ Add task</button>
    </div>
  `;
}
async function saveProjectForm(){
  const name = document.getElementById('p_name').value.trim();
  if(!name){ showToast('Project name is required'); return; }
  const companyId = document.getElementById('p_companyId').value || null;
  const companyObj = companyId ? DATA.companies.find(x=>x.id===companyId) : null;
  const assignedClients = Array.from(document.querySelectorAll('.assigned-proj-client-check:checked')).map(el=>el.value);
  const payload = {
    name,
    companyId,
    client: companyObj ? companyObj.name : '',
    status: document.getElementById('p_status').value,
    startDate: document.getElementById('p_start').value || null,
    dueDate: document.getElementById('p_due').value || null,
    billingModel: document.getElementById('p_billingModel').value,
    hourlyRate: Number(document.getElementById('p_hourlyRate').value)||0,
    budgetedHours: Number(document.getElementById('p_budgetedHours').value)||0,
    flatMonthlyRate: Number(document.getElementById('p_flatMonthlyRate').value)||0,
    description: document.getElementById('p_desc').value.trim(),
    visibleToClient: document.getElementById('p_visibleToClient') ? document.getElementById('p_visibleToClient').checked : false,
    assignedClients,
    projectTasks: _editingProjectTasks.map(t=>({...t})),
  };
  if(editingProjectId){
    Object.assign(DATA.projects.find(x=>x.id===editingProjectId), payload);
  } else {
    DATA.projects.push({ id: uid(), dateAdded: todayISO(), ...payload });
  }
  await saveData(); closeModal(); render();
  showToast(editingProjectId ? 'Project updated' : 'Project added');
}
async function deleteProject(id){
  DATA.projects = DATA.projects.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Project deleted');
}
function crmProjectToPortalShape(project){
  return {
    id: String(project.id),
    name: project.name || '',
    status: project.status || 'Planning',
    startDate: project.startDate || null,
    dueDate: project.dueDate || null,
    description: project.description || '',
    visibleToClient: project.visibleToClient === true,
    assignedClients: (project.assignedClients || []).map(cid=>{
      const c = DATA.contacts.find(x=>x.id===cid);
      return c && c.portalUid ? c.portalUid : null;
    }).filter(Boolean),
    projectTasks: (project.projectTasks || []).map(t=>({
      id: t.id,
      title: t.title,
      dueDate: t.dueDate || null,
      status: t.status || 'Not Started',
    })),
  };
}
async function syncProjectToPortal(id){
  if(!agencySupabaseSession){ showToast('Connect your agency account first'); return; }
  const project = typeof id === 'string' ? DATA.projects.find(x=>x.id===id) : id;
  if(!project){ showToast('Project not found'); return; }
  const client = getSupabaseClient();
  const assignedIds = project.assignedClients && project.assignedClients.length ? project.assignedClients : [];
  const assignedUids = [];
  assignedIds.forEach(cid=>{
    const contact = DATA.contacts.find(c=>c.id===cid);
    if(contact && contact.portalUid) assignedUids.push(contact.portalUid);
  });
  if(!assignedUids.length){ showToast('Assign this project to at least one client with a linked Portal account first'); return; }
  const shape = crmProjectToPortalShape(project);
  const rows = assignedUids.map(portalUid=>({ id: String(project.id), client_id: portalUid, data: shape, updated_at: new Date().toISOString() }));
  const { error } = await client.from('client_projects').upsert(rows);
  if(error){ showToast('Sync failed: ' + error.message); return; }
  showToast('Project synced to portal');
}

/* ===================== MODAL: TASKS ===================== */
let editingTaskId = null;
function openNewTaskModal(){
  editingTaskId = null;
  document.getElementById('modalTitle').textContent = 'New Task';
  document.getElementById('modalBody').innerHTML = taskFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="saveTaskForm()">Add task</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function openEditTask(id){
  editingTaskId = id;
  const t = DATA.tasks.find(x=>x.id===id);
  if(!t) return;
  document.getElementById('modalTitle').textContent = t.title;
  document.getElementById('modalBody').innerHTML = taskFormHTML(t);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-danger" onclick="deleteTask('${id}')">Delete</button>
    <div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveTaskForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function taskFormHTML(t){
  t = t || {title:'',project:'',priority:'Medium',dueDate:'',done:false,assignedTo:null,billable:DATA.settings.billableDefaults.tasks,recurrence:null};
  return `
    <div class="field"><label>Task</label><input id="t_title" value="${esc(t.title)}" placeholder="What needs to get done"></div>
    <div class="field-row">
      <div class="field"><label>Project (optional)</label><input id="t_project" value="${esc(t.project)}" placeholder="Link to a project"></div>
      <div class="field"><label>Priority</label>
        <select id="t_priority">
          <option value="Low" ${t.priority==='Low'?'selected':''}>Low</option>
          <option value="Medium" ${t.priority==='Medium'?'selected':''}>Medium</option>
          <option value="High" ${t.priority==='High'?'selected':''}>High</option>
        </select>
      </div>
    </div>
    <div class="field-row">
      <div class="field"><label>Due date</label><input id="t_due" type="date" value="${t.dueDate||''}"></div>
      <div class="field"><label>Assigned to</label>
        <select id="t_assignedTo">
          <option value="">Unassigned</option>
          ${DATA.users.map(u=>`<option value="${u.id}" ${t.assignedTo===u.id?'selected':''}>${esc(u.name)}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="field"><label>Repeat</label>
      <select id="t_recurrence">
        <option value="" ${!t.recurrence?'selected':''}>Does not repeat</option>
        <option value="weekly" ${t.recurrence==='weekly'?'selected':''}>Every week</option>
        <option value="biweekly" ${t.recurrence==='biweekly'?'selected':''}>Every 2 weeks</option>
        <option value="monthly" ${t.recurrence==='monthly'?'selected':''}>Every month</option>
      </select>
      <p style="font-size:11px; color:var(--slate); margin-top:6px;">When you mark a repeating task done, the next one is created automatically with the due date moved forward, nothing to re-type.</p>
    </div>
    <div class="field" style="display:flex; align-items:center; gap:8px;">
      <input type="checkbox" id="t_billable" ${t.billable?'checked':''} style="width:auto;">
      <label style="margin:0; text-transform:none; font-size:13px; font-weight:500; color:var(--ink);">Billable</label>
    </div>
  `;
}
async function saveTaskForm(){
  const title = document.getElementById('t_title').value.trim();
  if(!title){ showToast('Task title is required'); return; }
  const newAssignedTo = document.getElementById('t_assignedTo').value || null;
  const payload = {
    title,
    project: document.getElementById('t_project').value.trim(),
    priority: document.getElementById('t_priority').value,
    dueDate: document.getElementById('t_due').value || null,
    assignedTo: newAssignedTo,
    billable: document.getElementById('t_billable').checked,
    recurrence: document.getElementById('t_recurrence').value || null,
  };
  if(editingTaskId){
    const existing = DATA.tasks.find(x=>x.id===editingTaskId);
    if(existing.assignedTo !== newAssignedTo){ existing.escalated = false; }
    Object.assign(existing, payload);
  } else {
    DATA.tasks.push({ id: uid(), dateAdded: todayISO(), done:false, escalated:false, ...payload });
    await notifyEvent('task_assigned', `New task: ${title}`, null);
  }
  await saveData(); closeModal(); render();
  showToast(editingTaskId ? 'Task updated' : 'Task added');
}
async function deleteTask(id){
  DATA.tasks = DATA.tasks.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Task deleted');
}

/* ===================== MODAL: REMINDERS ===================== */
let editingReminderId = null;
function openNewReminderModal(){
  editingReminderId = null;
  document.getElementById('modalTitle').textContent = 'New Reminder';
  document.getElementById('modalBody').innerHTML = reminderFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="saveReminderForm()">Add reminder</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function openEditReminder(id){
  editingReminderId = id;
  const r = DATA.reminders.find(x=>x.id===id);
  if(!r) return;
  document.getElementById('modalTitle').textContent = 'Reminder';
  document.getElementById('modalBody').innerHTML = reminderFormHTML(r);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-danger" onclick="deleteReminder('${id}')">Delete</button>
    <div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveReminderForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
function reminderFormHTML(r){
  r = r || {text:'',dueDate:''};
  return `
    <div class="field"><label>Reminder</label><textarea id="r_text" rows="2" placeholder="What to remember">${esc(r.text)}</textarea></div>
    <div class="field"><label>Due date (optional)</label><input id="r_due" type="date" value="${r.dueDate||''}"></div>
  `;
}
async function saveReminderForm(){
  const text = document.getElementById('r_text').value.trim();
  if(!text){ showToast('Reminder text is required'); return; }
  const payload = { text, dueDate: document.getElementById('r_due').value || null };
  if(editingReminderId){
    Object.assign(DATA.reminders.find(x=>x.id===editingReminderId), payload);
  } else {
    DATA.reminders.push({ id: uid(), dateAdded: todayISO(), done:false, ...payload });
  }
  await saveData(); closeModal(); render();
  showToast(editingReminderId ? 'Reminder updated' : 'Reminder added');
}
async function deleteReminder(id){
  DATA.reminders = DATA.reminders.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Reminder deleted');
}

/* ===================== MODAL: WORKFLOWS ===================== */
let editingWorkflowId = null;
function openNewWorkflowModal(){
  editingWorkflowId = null;
  document.getElementById('modalTitle').textContent = 'New Workflow';
  document.getElementById('modalBody').innerHTML = workflowFormHTML(null);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button class="btn-primary" onclick="saveWorkflowForm()">Add workflow</button>`;
  document.getElementById('modalBackdrop').classList.add('open');
  bindWorkflowTriggerToggle();
  bindMergeTagPopup('w_body');
  bindHtmlDropZone('w_body','w_name');
}
function openEditWorkflow(id){
  editingWorkflowId = id;
  const w = DATA.workflows.find(x=>x.id===id);
  if(!w) return;
  document.getElementById('modalTitle').textContent = w.name;
  document.getElementById('modalBody').innerHTML = workflowFormHTML(w);
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-danger" onclick="deleteWorkflow('${id}')">Delete</button>
    <div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveWorkflowForm()">Save changes</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
  bindWorkflowTriggerToggle();
  bindMergeTagPopup('w_body');
  bindHtmlDropZone('w_body','w_name');
}
function workflowFormHTML(w){
  w = w || {name:'', trigger:{type:'new_contact', contactType:'lead'}, subject:'', body:'', active:true};
  const t = w.trigger;
  return `
    <div class="field"><label>Workflow name</label><input id="w_name" value="${esc(w.name)}" placeholder="e.g. New lead welcome email"></div>
    <div class="field-row">
      <div class="field"><label>Trigger</label>
        <select id="w_triggerType" onchange="bindWorkflowTriggerToggle()">
          <option value="new_contact" ${t.type==='new_contact'?'selected':''}>New contact added</option>
          <option value="type_change" ${t.type==='type_change'?'selected':''}>Contact becomes...</option>
          <option value="deal_stage" ${t.type==='deal_stage'?'selected':''}>Deal reaches stage...</option>
          <option value="overdue" ${t.type==='overdue'?'selected':''}>Follow up goes overdue</option>
        </select>
      </div>
      <div class="field" id="w_typeFieldWrap" style="${t.type==='overdue' || t.type==='deal_stage'?'display:none;':''}">
        <label>Contact type</label>
        <select id="w_contactType">
          <option value="any" ${t.contactType==='any'?'selected':''}>Any type</option>
          <option value="prospect" ${t.contactType==='prospect'?'selected':''}>Prospect</option>
          <option value="lead" ${t.contactType==='lead'?'selected':''}>Lead</option>
          <option value="customer" ${t.contactType==='customer'?'selected':''}>Client</option>
          <option value="past_customer" ${t.contactType==='past_customer'?'selected':''}>Past Client</option>
        </select>
      </div>
      <div class="field" id="w_stageFieldWrap" style="${t.type==='deal_stage'?'':'display:none;'}">
        <label>Deal Stage</label>
        <select id="w_stageId">
          ${DATA.dealStages.map(s=>`<option value="${s.id}" ${t.stageId===s.id?'selected':''}>${esc(s.name)}</option>`).join('')}
        </select>
      </div>
    </div>
    ${t.type==='deal_stage' || true ? `<p style="font-size:11px; color:var(--slate); margin-top:-8px; margin-bottom:12px;">"Deal reaches stage" sends to the contact linked on the deal, the moment that deal moves into the stage you pick, exactly like a real sales sequence.</p>` : ''}
    ${DATA.emailTemplates.length ? `
    <div class="field"><label>Start from a template (optional)</label>
      <select onchange="applyTemplateTo('w', this.value)">
        <option value="">Choose a saved template...</option>
        ${DATA.emailTemplates.map(t=>`<option value="${t.id}">${esc(t.name)}</option>`).join('')}
      </select>
    </div>` : ''}
    <div class="field"><label>Email subject</label><input id="w_subject" value="${esc(w.subject)}" placeholder="e.g. Welcome to Favze, {{name}}"></div>
    <div class="field">
      <label>Email body</label>
      <div style="display:flex; gap:8px; margin-bottom:8px;">
        <button type="button" class="btn-small" onclick="triggerHtmlImport('w_body','w_name')">${iconUpload()} Import HTML file</button>
        <span class="rec-hint">or drag an .html file onto the box below, or paste code directly.</span>
      </div>
      <textarea id="w_body" rows="7" style="border-style:dashed;" placeholder="Use {{name}}, {{company}}, {{stage}}, {{source}} to personalize, drop an .html file, or type # for a list">${esc(w.body)}</textarea>${mergeTagReferenceHTML()}
    </div>
    <div class="field" style="display:flex; align-items:center; gap:8px;">
      <input type="checkbox" id="w_active" ${w.active?'checked':''} style="width:auto;">
      <label style="margin:0; text-transform:none; font-size:13px; font-weight:500; color:var(--ink);">Active</label>
    </div>
    <div class="field" style="background:var(--paper); border-radius:8px; padding:10px 12px; font-size:11.5px; color:var(--slate);">
      This triggers off real CRM activity as it happens, but delivery is simulated and logged in Email Log unless you send it manually via a connected Outlook account. No email actually leaves your browser on its own yet.
    </div>
  `;
}
function bindWorkflowTriggerToggle(){
  const sel = document.getElementById('w_triggerType');
  if(!sel) return;
  const typeWrap = document.getElementById('w_typeFieldWrap');
  const stageWrap = document.getElementById('w_stageFieldWrap');
  typeWrap.style.display = (sel.value==='overdue' || sel.value==='deal_stage') ? 'none' : '';
  stageWrap.style.display = sel.value==='deal_stage' ? '' : 'none';
}
async function saveWorkflowForm(){
  const name = document.getElementById('w_name').value.trim();
  if(!name){ showToast('Workflow name is required'); return; }
  const triggerType = document.getElementById('w_triggerType').value;
  const trigger = { type: triggerType, contactType: null, stageId: null };
  if(triggerType==='new_contact' || triggerType==='type_change'){
    trigger.contactType = document.getElementById('w_contactType').value;
  } else if(triggerType==='deal_stage'){
    trigger.stageId = document.getElementById('w_stageId').value;
  }
  const payload = {
    name, trigger,
    subject: document.getElementById('w_subject').value.trim(),
    body: document.getElementById('w_body').value.trim(),
    active: document.getElementById('w_active').checked,
  };
  if(editingWorkflowId){
    Object.assign(DATA.workflows.find(x=>x.id===editingWorkflowId), payload);
  } else {
    DATA.workflows.push({ id: uid(), dateAdded: todayISO(), ...payload });
  }
  await saveData(); closeModal(); render();
  showToast(editingWorkflowId ? 'Workflow updated' : 'Workflow added');
}
async function deleteWorkflow(id){
  DATA.workflows = DATA.workflows.filter(x=>x.id!==id);
  await saveData(); closeModal(); render();
  showToast('Workflow deleted');
}

/* ===================== PROFILE ===================== */
function openProfileModal(){
  document.getElementById('modalTitle').textContent = 'Edit Profile';
  document.getElementById('modalBody').innerHTML = `
    <div style="display:flex; align-items:center; gap:14px; margin-bottom:16px;">
      <div style="width:56px; height:56px; border-radius:50%; overflow:hidden; background:var(--teal-solid); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
        ${DATA.profile.avatarDataUrl && isSafeDataUrl(DATA.profile.avatarDataUrl) ? `<img src="${DATA.profile.avatarDataUrl}" style="width:100%; height:100%; object-fit:cover;">` : `<span style="color:#fff; font-weight:700; font-size:18px;">${esc(initials(DATA.profile.name))}</span>`}
      </div>
      <div style="display:flex; gap:8px;">
        <button type="button" class="btn-small" onclick="document.getElementById('profileAvatarInput').click()">${iconUpload()} Upload photo</button>
        ${DATA.profile.avatarDataUrl ? `<button type="button" class="btn-small" onclick="clearProfileAvatar()">Remove</button>` : ''}
      </div>
    </div>
    <div class="field"><label>Name</label><input id="pf_name" value="${esc(DATA.profile.name)}"></div>
    <div class="field"><label>Title / Role</label><input id="pf_role" value="${esc(DATA.profile.role)}" placeholder="e.g. Founder, Favze"></div>
  `;
  document.getElementById('modalFoot').innerHTML = `<div></div><div style="display:flex; gap:10px;"><button class="btn-ghost" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveProfileForm()">Save</button></div>`;
  document.getElementById('modalBackdrop').classList.add('open');
}
async function handleProfileAvatarUpload(input){
  const file = input.files[0];
  if(!file) return;
  try{
    const compressed = await compressImageFile(file, 300, 0.85);
    DATA.profile.avatarDataUrl = compressed;
    await saveData();
    renderProfile();
    openProfileModal();
    showToast('Photo updated');
  }catch(err){
    showToast(err.message || 'Could not process that image');
  }
  input.value = '';
}
async function clearProfileAvatar(){
  DATA.profile.avatarDataUrl = null;
  await saveData();
  renderProfile();
  openProfileModal();
}
async function saveProfileForm(){
  const name = document.getElementById('pf_name').value.trim();
  if(!name){ showToast('Name is required'); return; }
  DATA.profile.name = name;
  DATA.profile.role = document.getElementById('pf_role').value.trim();
  await saveData();
  renderProfile();
  closeModal();
  showToast('Profile updated');
}

/* ===================== SETTINGS (Appearance, Roles, Users) ===================== */
const ACCENT_SWATCHES = ['#0A89A3','#064187','#7c5cff','#1f9d55','#E3A008','#d64545','#e0468b','#0dd3f0'];
let settingsTab = 'appearance';
function openSettingsModal(){ switchView('settings'); }
function renderSettingsPage(){
  return `
    <div class="page-head">
      <div><h1>Settings</h1><p>Everything about how this CRM looks, behaves, and who can do what.</p></div>
    </div>
    <div id="settingsBody">${settingsBodyHTML()}</div>
  `;
}
function refreshSettingsBody(){
  const page = document.getElementById('settingsBody');
  if(page){ page.innerHTML = settingsBodyHTML(); return; }
  const modal = document.getElementById('modalBody');
  if(modal){ modal.innerHTML = settingsBodyHTML(); }
}
function renderIntegrationsPageView(){
  return `
    <div class="page-head">
      <div><h1>Integrations</h1><p>Every outside connection this CRM can use - email sending, and the Tally form relay.</p></div>
    </div>
    <div class="panel" style="padding:22px;">
      ${settingsIntegrationsHTML()}
    </div>
  `;
}
function switchSettingsTab(tab){
  settingsTab = tab;
  refreshSettingsBody();
}
function settingsBodyHTML(){
  const tabs = [['appearance','Appearance'],['sidebar','Sidebar'],['hotkeys','Hotkeys'],['pipeline','Pipeline'],['pricing','Pricing'],['tags','Tags'],['emaillists','Email Lists'],['notifications','Notifications'],['security','Security'],['roles','Roles'],['users','Users']];
  const tabRenderers = { appearance: settingsAppearanceHTML, sidebar: settingsSidebarHTML, hotkeys: settingsHotkeysHTML, pipeline: settingsPipelineHTML, pricing: settingsPricingHTML, tags: settingsTagsHTML, emaillists: settingsEmailListsHTML, notifications: settingsNotificationsHTML, security: settingsSecurityHTML, roles: settingsRolesHTML, users: settingsUsersHTML };
  return `
    <div class="settings-tabs">
      ${tabs.map(([k,label])=>`<span class="settings-tab ${settingsTab===k?'active':''}" onclick="switchSettingsTab('${k}')">${label}</span>`).join('')}
    </div>
    <div class="panel" style="padding:22px;">
    ${(tabRenderers[settingsTab] || settingsAppearanceHTML)()}
    </div>
  `;
}
function settingsSecurityHTML(){
  const canEdit = currentScope().canManageSettings;
  const mins = DATA.settings.sessionTimeoutMinutes;
  const options = [[0,'Never'],[15,'15 minutes'],[120,'2 hours'],[1440,'24 hours']];
  return `
    <p style="font-size:11.5px; color:var(--slate); margin-bottom:14px;">${canEdit ? 'Automatically lock the screen after a period of inactivity, to protect client data if a device is left unattended.' : 'Only the CEO role can change the session timeout. This is the current setting.'}</p>
    <div class="field">
      <label>Auto-lock after inactivity</label>
      <select id="sessionTimeoutSelect" ${canEdit?'':'disabled'} onchange="setSessionTimeout(this.value)">
        ${options.map(([v,l])=>`<option value="${v}" ${mins===v?'selected':''}>${l}</option>`).join('')}
      </select>
    </div>
    <p style="font-size:11px; color:var(--slate);">This locks the current browser tab with an overlay, it isn't a real password-protected login, matching the rest of this CRM's honest limitations without a backend.</p>

    <div style="border-top:1px solid var(--line); margin:22px 0 16px; padding-top:16px;">
      <label style="display:block; font-size:11.5px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:10px;">Network Access</label>
      <div class="field" style="display:flex; align-items:center; gap:8px;">
        <input type="checkbox" ${DATA.settings.networkAccess.enabled?'checked':''} ${canEdit?'':'disabled'} onchange="toggleNetworkAccess(this.checked)" style="width:auto;">
        <label style="margin:0; text-transform:none; font-size:13px; font-weight:600; color:var(--ink);">Restrict access to specific IP addresses / CIDR ranges</label>
      </div>
      ${DATA.settings.networkAccess.enabled ? `
      <div class="calls-mini" style="margin-top:10px;">
        ${DATA.settings.networkAccess.allowedIPs.length ? DATA.settings.networkAccess.allowedIPs.map((ip,i)=>`
          <div class="call-mini-item" style="display:flex; justify-content:space-between; align-items:center;">
            <span class="mono">${esc(ip)}</span>
            ${canEdit?`<button class="btn-small" onclick="removeAllowedIP(${i})">Remove</button>`:''}
          </div>`).join('') : '<div class="call-mini-item" style="color:var(--slate);">No addresses allowed yet, add your office or VPN IP below.</div>'}
      </div>
      ${canEdit ? `
      <div class="field-row" style="margin-top:8px;">
        <input id="newAllowedIP" placeholder="e.g. 203.0.113.0/24 or 203.0.113.5">
        <button class="btn-small" onclick="addAllowedIP()">Add</button>
      </div>` : ''}
      ` : ''}
      <p style="font-size:11px; color:var(--slate); margin-top:8px;">This is a browser-only app with no server checking real request IPs, so treat this as a documented policy for whoever sets up real infrastructure later, not an enforced restriction today. Specific IP/CIDR entries are the accurate way to do this, geographic country-blocking is both imprecise and trivially bypassed with a VPN.</p>
    </div>

    <div style="border-top:1px solid var(--line); margin:22px 0 16px; padding-top:16px;">
      <label style="display:block; font-size:11.5px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:10px;">Custom Login Portal</label>
      <div class="field"><label>Custom domain</label><input id="customDomainInput" value="${esc(DATA.settings.customDomain)}" placeholder="e.g. login.favze.com" ${canEdit?'':'disabled'} onchange="setCustomDomain(this.value)"></div>
      <div class="field"><label>Welcome message</label><input id="loginWelcomeInput" value="${esc(DATA.settings.loginWelcomeText)}" placeholder="e.g. Welcome back to the Favze team hub" ${canEdit?'':'disabled'} onchange="setLoginWelcome(this.value)"></div>
      <p style="font-size:11px; color:var(--slate);">This records the branding intent only. Actually mapping a login screen to your own domain needs real DNS and hosting, not something a single HTML file can do, that's a setup step for whoever hosts this for real, and I can help plan that whenever you're ready.</p>
    </div>

    <div style="border-top:1px solid var(--line); margin:22px 0 16px; padding-top:16px;">
      <label style="display:block; font-size:11.5px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:10px;">Domain Authentication (SPF / DKIM / DMARC)</label>
      <p style="font-size:11px; color:var(--slate); margin-bottom:10px;">These are the DNS records that let Outlook, Gmail, and everyone else trust mail sent from favze.com instead of flagging it as spam. They go in your domain's DNS settings (wherever favze.com is registered), not in this CRM, this CRM doesn't send email itself yet.</p>
      <div class="field">
        <label>SPF (TXT record on favze.com)</label>
        <div class="mono" style="background:var(--paper); border:1px solid var(--line); border-radius:8px; padding:10px 12px; font-size:11.5px; word-break:break-all; display:flex; justify-content:space-between; gap:10px; align-items:flex-start;">
          <span>v=spf1 include:_spf.google.com ~all</span>
          <button class="btn-small" onclick="copyMergeCode('v=spf1 include:_spf.google.com ~all')">Copy</button>
        </div>
        <p style="font-size:10.5px; color:var(--slate); margin-top:4px;">Swap "google.com" for whichever provider actually sends your mail (Google Workspace, SendGrid, HubSpot, etc.), only one SPF record is allowed per domain, so all senders have to be listed together.</p>
      </div>
      <div class="field">
        <label>DKIM (CNAME or TXT, provider-specific)</label>
        <div class="mono" style="background:var(--paper); border:1px solid var(--line); border-radius:8px; padding:10px 12px; font-size:11.5px;">selector._domainkey.favze.com → (value from your email provider)</div>
        <p style="font-size:10.5px; color:var(--slate); margin-top:4px;">There's no generic DKIM value, it's a signing key your actual sending provider generates for you (Google Workspace, SendGrid, HubSpot, etc. all issue their own). Add it once you pick one.</p>
      </div>
      <div class="field">
        <label>DMARC (TXT record at _dmarc.favze.com)</label>
        <div class="mono" style="background:var(--paper); border:1px solid var(--line); border-radius:8px; padding:10px 12px; font-size:11.5px; word-break:break-all; display:flex; justify-content:space-between; gap:10px; align-items:flex-start;">
          <span>v=DMARC1; p=none; rua=mailto:dmarc-reports@favze.com</span>
          <button class="btn-small" onclick="copyMergeCode('v=DMARC1; p=none; rua=mailto:dmarc-reports@favze.com')">Copy</button>
        </div>
        <p style="font-size:10.5px; color:var(--slate); margin-top:4px;">Start at p=none to just collect reports, then move to p=quarantine and eventually p=reject once you've confirmed everything's passing.</p>
      </div>
    </div>
  `;
}
async function toggleNetworkAccess(checked){
  if(!currentScope().canManageSettings){ showToast('Only the CEO role can change this'); return; }
  DATA.settings.networkAccess.enabled = checked;
  await saveData();
  refreshSettingsBody();
}
async function addAllowedIP(){
  const val = document.getElementById('newAllowedIP').value.trim();
  if(!val){ showToast('Enter an IP or CIDR range'); return; }
  DATA.settings.networkAccess.allowedIPs.push(val);
  await saveData();
  refreshSettingsBody();
}
async function removeAllowedIP(index){
  DATA.settings.networkAccess.allowedIPs.splice(index,1);
  await saveData();
  refreshSettingsBody();
}
async function setCustomDomain(v){
  if(!currentScope().canManageSettings){ showToast('Only the CEO role can change this'); return; }
  DATA.settings.customDomain = v.trim();
  await saveData();
}
async function setLoginWelcome(v){
  if(!currentScope().canManageSettings){ showToast('Only the CEO role can change this'); return; }
  DATA.settings.loginWelcomeText = v.trim();
  await saveData();
}
async function setSessionTimeout(v){
  if(!currentScope().canManageSettings){ showToast('Only the CEO role can change this'); return; }
  DATA.settings.sessionTimeoutMinutes = Number(v);
  await saveData();
  resetInactivityTimer();
  showToast('Session timeout updated');
}
const TAG_SWATCHES = ['#1f9d55','#E3A008','#d64545','#0A89A3','#064187','#7c5cff','#5B6B7C'];
let editingTagId = null;
function settingsTagsHTML(){
  const canEdit = currentScope().canManageSettings;
  return `
    <p style="font-size:11.5px; color:var(--slate); margin-bottom:14px;">A locked vocabulary: everyone picks tags from this list instead of typing their own, so "hot-lead," "HotLead," and "Hot Lead" never end up as three different tags.</p>
    ${DATA.tagDefinitions.map(t=>`
      <div class="role-user-row">
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="width:16px; height:16px; border-radius:5px; background:${t.color}; flex-shrink:0;"></span>
          <div class="ru-name">${esc(t.name)}</div>
        </div>
        ${canEdit ? `<button class="btn-small" onclick="deleteTagDefinition('${t.id}')">Delete</button>` : ''}
      </div>`).join('') || `<p style="font-size:12px; color:var(--slate);">No tags defined yet.</p>`}
    ${canEdit ? `
    <div class="field" style="margin-top:16px;"><label>New tag name</label><input id="tag_name" placeholder="e.g. VIP, Cold, Referral"></div>
    <div class="field">
      <label>Color</label>
      <div class="swatches">
        ${TAG_SWATCHES.map(c=>`<div class="swatch" data-tagcolor="${c}" style="background:${c};" onclick="selectTagColor('${c}')"></div>`).join('')}
      </div>
      <input type="hidden" id="tag_color" value="${TAG_SWATCHES[0]}">
    </div>
    <button class="btn-primary" onclick="addTagDefinition()">Add tag</button>` : `<p style="font-size:11.5px; color:var(--slate); margin-top:10px;">Only the CEO role can add, edit, or delete tags.</p>`}
  `;
}
function selectTagColor(c){
  document.getElementById('tag_color').value = c;
  document.querySelectorAll('[data-tagcolor]').forEach(el=> el.classList.toggle('active', el.dataset.tagcolor===c));
}
async function addTagDefinition(){
  const name = document.getElementById('tag_name').value.trim();
  if(!name){ showToast('Tag name is required'); return; }
  if(DATA.tagDefinitions.some(t=>t.name.toLowerCase()===name.toLowerCase())){ showToast('That tag already exists'); return; }
  const color = document.getElementById('tag_color').value;
  DATA.tagDefinitions.push({ id: uid(), name, color });
  await saveData();
  refreshSettingsBody();
  showToast('Tag added');
}
async function deleteTagDefinition(id){
  DATA.tagDefinitions = DATA.tagDefinitions.filter(t=>t.id!==id);
  DATA.contacts.forEach(c=>{ c.tags = (c.tags||[]).filter(tid=>tid!==id); });
  await saveData();
  refreshSettingsBody();
  showToast('Tag deleted');
}

function settingsHotkeysHTML(){
  return `
    <p style="font-size:11.5px; color:var(--slate); margin-bottom:14px;">Rapid actions from anywhere in the app. Click Change, then press the key combo you want, it needs at least one modifier (Alt, Ctrl, or Cmd) so it never conflicts with normal typing.</p>
    ${HOTKEY_ACTIONS.map(a=>`
      <div class="role-user-row">
        <div class="ru-name">${esc(a.label)}</div>
        <div style="display:flex; gap:8px; align-items:center;">
          <span class="mono" style="background:var(--paper); padding:6px 11px; border-radius:6px; border:1px solid var(--line); font-size:11.5px; text-transform:uppercase;">${esc(DATA.settings.hotkeys[a.key] || 'Unset')}</span>
          <button class="btn-small" onclick="startHotkeyCapture('${a.key}', this)">Change</button>
        </div>
      </div>`).join('')}
    <p style="font-size:11px; color:var(--slate); margin-top:10px;">Some combos get intercepted by the browser or OS before the page ever sees them (Ctrl+N for a new window is a classic one). If a shortcut doesn't fire, try a different combo.</p>
  `;
}
function settingsEmailListsHTML(){
  const canEdit = currentScope().canManageSettings;
  return `
    <p style="font-size:11.5px; color:var(--slate); margin-bottom:14px;">Favze's own subscriber lists, not tied to HRC or ABI Attachments. Contacts opt into any number of these from their record, and Campaigns can target one directly.</p>
    ${DATA.emailLists.map(l=>{
      const count = DATA.contacts.filter(c=>(c.emailLists||[]).includes(l.id)).length;
      return `
      <div class="role-user-row">
        <div><div class="ru-name">${esc(l.name)}</div><div class="ru-sub">${esc(l.description)} · ${count} subscriber${count===1?'':'s'}</div></div>
        ${canEdit ? `<button class="btn-small" onclick="deleteEmailList('${l.id}')">Delete</button>` : ''}
      </div>`;
    }).join('') || `<p style="font-size:12px; color:var(--slate);">No lists yet.</p>`}
    ${canEdit ? `
    <div class="field" style="margin-top:16px;"><label>New list name</label><input id="el_name" placeholder="e.g. Favze Insider"></div>
    <div class="field"><label>Description</label><input id="el_desc" placeholder="What this list is for"></div>
    <button class="btn-primary" onclick="addEmailList()">Add list</button>` : `<p style="font-size:11.5px; color:var(--slate); margin-top:10px;">Only the CEO role can add or delete lists.</p>`}
  `;
}
async function addEmailList(){
  const name = document.getElementById('el_name').value.trim();
  if(!name){ showToast('List name is required'); return; }
  const description = document.getElementById('el_desc').value.trim();
  DATA.emailLists.push({ id: uid(), name, description });
  await saveData();
  refreshSettingsBody();
  showToast('List added');
}
async function deleteEmailList(id){
  DATA.emailLists = DATA.emailLists.filter(l=>l.id!==id);
  DATA.contacts.forEach(c=>{ c.emailLists = (c.emailLists||[]).filter(lid=>lid!==id); });
  await saveData();
  refreshSettingsBody();
  showToast('List deleted');
}

function settingsSidebarHTML(){
  return `
    <p style="font-size:11.5px; color:var(--slate); margin-bottom:14px;">Pin your most-used modules to the top of the sidebar, or hide the ones you never touch. Dashboard always stays visible.</p>
    ${NAV_GROUPS.map(g=>{
      const items = NAV_ITEMS.filter(i=>i.group===g);
      if(!items.length) return '';
      return `
        <div style="margin-bottom:14px;">
          <div style="font-size:10.5px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.6px; margin-bottom:6px;">${g}</div>
          ${items.map(item=>{
            const nc = navCustom(item.key);
            const dashboardLock = item.key==='dashboard';
            return `
            <div class="role-user-row">
              <div class="ru-name" style="display:flex; align-items:center; gap:8px;">${item.icon}${esc(item.label)}</div>
              <div style="display:flex; align-items:center; gap:14px;">
                <label style="display:flex; align-items:center; gap:6px; font-size:12px; font-weight:600; color:var(--ink); cursor:pointer;">
                  <input type="checkbox" ${nc.pinned?'checked':''} onchange="toggleNavPin('${item.key}', this.checked)" style="width:auto;"> Pin
                </label>
                <label style="display:flex; align-items:center; gap:6px; font-size:12px; font-weight:600; color:var(--ink); cursor:${dashboardLock?'not-allowed':'pointer'}; opacity:${dashboardLock?.4:1};">
                  <input type="checkbox" ${nc.hidden?'checked':''} ${dashboardLock?'disabled':''} onchange="toggleNavHide('${item.key}', this.checked)" style="width:auto;"> Hide
                </label>
              </div>
            </div>`;
          }).join('')}
        </div>`;
    }).join('')}
  `;
}
function settingsNotificationsHTML(){
  const channels = DATA.settings.alertChannels;
  return `
    <p style="font-size:11.5px; color:var(--slate); margin-bottom:14px;">Choose how each event reaches you. In-App is real and shows up in the bell icon. Email logs to Email Log (or queues for the digest below). SMS is simulated and logged, since this browser app has no SMS gateway connected.</p>
    <table style="margin-bottom:18px;">
      <thead><tr><th>Event</th><th style="text-align:center;">In-App</th><th style="text-align:center;">Email</th><th style="text-align:center;">SMS</th></tr></thead>
      <tbody>
        ${ALERT_EVENTS.map(e=>{
          const c = channels[e.key] || {inApp:true,email:false,sms:false};
          return `
          <tr>
            <td><div class="lead-name">${esc(e.label)}</div></td>
            <td style="text-align:center;"><input type="checkbox" ${c.inApp?'checked':''} onchange="toggleAlertChannel('${e.key}','inApp',this.checked)" style="width:auto;"></td>
            <td style="text-align:center;"><input type="checkbox" ${c.email?'checked':''} onchange="toggleAlertChannel('${e.key}','email',this.checked)" style="width:auto;"></td>
            <td style="text-align:center;"><input type="checkbox" ${c.sms?'checked':''} onchange="toggleAlertChannel('${e.key}','sms',this.checked)" style="width:auto;"></td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
    <div class="field" style="display:flex; align-items:center; gap:8px;">
      <input type="checkbox" id="digestModeCheck" ${DATA.settings.digestMode?'checked':''} onchange="toggleDigestMode(this.checked)" style="width:auto;">
      <label style="margin:0; text-transform:none; font-size:13px; font-weight:700; color:var(--ink);">Replace real-time email alerts with one Daily Digest</label>
    </div>
    ${DATA.settings.digestMode ? `
    <div class="field-row">
      <div class="field"><label>Digest time</label><input type="time" id="digestTimeInput" value="${DATA.settings.digestTime}" onchange="setDigestTime(this.value)"></div>
      <div class="field"><label>Queued right now</label><input value="${DATA.digestQueue.length} update(s)" readonly></div>
    </div>
    <div class="field" style="background:var(--paper); border-radius:8px; padding:10px 12px; font-size:11px; color:var(--slate);">
      A browser tab can't reliably fire at ${esc(DATA.settings.digestTime)} every morning on its own, actually scheduling that needs a small backend or cron job. For now, email alerts queue up here and you can send the digest manually, or whenever you're ready to wire in real scheduling I can help with that next.
    </div>
    <button class="btn-primary" onclick="sendDigestNow()">Send digest now</button>
    ` : ''}

    <div style="border-top:1px solid var(--line); margin:22px 0 16px; padding-top:16px;">
      <label style="display:block; font-size:11.5px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.5px; margin-bottom:10px;">Quiet Hours</label>
      <div class="field" style="display:flex; align-items:center; gap:8px;">
        <input type="checkbox" id="quietEnabled" ${DATA.settings.quietHours.enabled?'checked':''} onchange="toggleQuietHours(this.checked)" style="width:auto;">
        <label style="margin:0; text-transform:none; font-size:13px; font-weight:600; color:var(--ink);">Mute real-time alerts outside working hours</label>
      </div>
      ${DATA.settings.quietHours.enabled ? `
      <div class="field-row">
        <div class="field"><label>Quiet from</label><input type="time" value="${DATA.settings.quietHours.start}" onchange="setQuietTime('start', this.value)"></div>
        <div class="field"><label>Until</label><input type="time" value="${DATA.settings.quietHours.end}" onchange="setQuietTime('end', this.value)"></div>
      </div>
      <div class="field">
        <label>Active days</label>
        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          ${[['sun','Su'],['mon','Mo'],['tue','Tu'],['wed','We'],['thu','Th'],['fri','Fr'],['sat','Sa']].map(([k,l])=>`
            <label style="display:flex; flex-direction:column; align-items:center; gap:3px; font-size:10px; color:var(--slate); cursor:pointer;">
              <input type="checkbox" ${DATA.settings.quietHours.days[k]?'checked':''} onchange="toggleQuietDay('${k}', this.checked)" style="width:auto;">${l}
            </label>`).join('')}
        </div>
      </div>
      <p style="font-size:11px; color:var(--slate);">Applies to what shows up as a live toast and bell alert. Everything's still logged, so nothing's lost overnight, it just won't buzz.</p>
      ` : ''}
      <p style="font-size:11px; color:var(--slate); margin-top:10px;">Without a connected calendar, this app can't detect real meeting blocks automatically. Use manual Snooze below to go quiet during a specific call.</p>
      <div class="field" style="margin-top:8px;">
        <label>Snooze right now</label>
        <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
          <button class="btn-small" onclick="snoozeFor(1)">1 hour</button>
          <button class="btn-small" onclick="snoozeFor(4)">4 hours</button>
          <button class="btn-small" onclick="snoozeUntilTomorrow()">Until tomorrow 9am</button>
          ${DATA.settings.snoozeUntil && new Date(DATA.settings.snoozeUntil)>new Date() ? `<button class="btn-small" onclick="clearSnooze()">Clear snooze (active until ${new Date(DATA.settings.snoozeUntil).toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'})})</button>` : ''}
        </div>
      </div>
    </div>
  `;
}
async function toggleQuietHours(checked){
  DATA.settings.quietHours.enabled = checked;
  await saveData();
  refreshSettingsBody();
}
async function setQuietTime(field, value){
  DATA.settings.quietHours[field] = value;
  await saveData();
}
async function toggleQuietDay(day, checked){
  DATA.settings.quietHours.days[day] = checked;
  await saveData();
}
async function snoozeFor(hours){
  const until = new Date(Date.now() + hours*3600*1000);
  DATA.settings.snoozeUntil = until.toISOString();
  await saveData();
  refreshSettingsBody();
  showToast(`Snoozed for ${hours}h`);
}
async function snoozeUntilTomorrow(){
  const d = new Date();
  d.setDate(d.getDate()+1);
  d.setHours(9,0,0,0);
  DATA.settings.snoozeUntil = d.toISOString();
  await saveData();
  refreshSettingsBody();
  showToast('Snoozed until tomorrow 9am');
}
async function clearSnooze(){
  DATA.settings.snoozeUntil = null;
  await saveData();
  refreshSettingsBody();
  showToast('Snooze cleared');
}
async function toggleAlertChannel(eventKey, channel, checked){
  DATA.settings.alertChannels[eventKey] = { ...DATA.settings.alertChannels[eventKey], [channel]: checked };
  await saveData();
}
async function toggleDigestMode(checked){
  DATA.settings.digestMode = checked;
  await saveData();
  refreshSettingsBody();
}
async function setDigestTime(v){
  DATA.settings.digestTime = v;
  await saveData();
}
function settingsAppearanceHTML(){
  const views = [['dashboard','Dashboard'],['deals','Deals'],['lead','Leads'],['prospect','Prospects'],['customer','Clients']];
  return `
    <div class="field">
      <label>Theme</label>
      <div class="theme-options">
        <div class="theme-opt ${DATA.settings.theme==='light'?'active':''}" onclick="setTheme('light')" style="display:flex; align-items:center; justify-content:center; gap:6px;">${iconSun()} Light</div>
        <div class="theme-opt ${DATA.settings.theme==='dark'?'active':''}" onclick="setTheme('dark')" style="display:flex; align-items:center; justify-content:center; gap:6px;">${iconMoon()} Dark</div>
      </div>
    </div>
    <div class="field">
      <label>Accent color</label>
      <div class="swatches">
        ${ACCENT_SWATCHES.map(c=>`<div class="swatch ${DATA.settings.accent===c?'active':''}" style="background:${c};" onclick="setAccent('${c}')"></div>`).join('')}
        <input type="color" id="customAccent" value="${DATA.settings.accent}" onchange="setAccent(this.value)" style="width:28px; height:28px; border:none; border-radius:50%; padding:0; cursor:pointer;">
      </div>
    </div>
    <div class="field">
      <label>Company logo</label>
      <div style="display:flex; align-items:center; gap:12px;">
        <div style="width:44px; height:44px; border-radius:9px; background:#fff; border:1px solid var(--line); display:flex; align-items:center; justify-content:center; overflow:hidden;">
          ${DATA.settings.logoDataUrl && isSafeDataUrl(DATA.settings.logoDataUrl) ? `<img src="${DATA.settings.logoDataUrl}" style="width:100%; height:100%; object-fit:contain;">` : `<span style="font-size:10px; color:var(--slate);">None</span>`}
        </div>
        <button class="btn-small" onclick="document.getElementById('logoUploadInput').click()">Upload logo</button>
        ${DATA.settings.logoDataUrl ? `<button class="btn-small" onclick="clearLogo()">Remove</button>` : ''}
      </div>
    </div>
    <div class="field-row">
      <div class="field"><label>Currency</label>
        <select id="settingsCurrency" onchange="setCurrency(this.value)">
          <option value="$" ${DATA.settings.currencySymbol==='$'?'selected':''}>USD ($)</option>
          <option value="€" ${DATA.settings.currencySymbol==='€'?'selected':''}>EUR (€)</option>
          <option value="£" ${DATA.settings.currencySymbol==='£'?'selected':''}>GBP (£)</option>
          <option value="C$" ${DATA.settings.currencySymbol==='C$'?'selected':''}>CAD (C$)</option>
        </select>
      </div>
      <div class="field"><label>Timezone</label>
        <select id="settingsTimezone" onchange="setTimezone(this.value)">
          ${['America/New_York','America/Chicago','America/Denver','America/Los_Angeles','America/Indiana/Indianapolis','UTC'].map(tz=>`<option value="${tz}" ${DATA.settings.timezone===tz?'selected':''}>${tz}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="field-row">
      <div class="field"><label>Date format</label>
        <select id="settingsDateFormat" onchange="setDateFormat(this.value)">
          <option value="MDY" ${DATA.settings.dateFormat==='MDY'?'selected':''}>MM/DD/YYYY</option>
          <option value="DMY" ${DATA.settings.dateFormat==='DMY'?'selected':''}>DD/MM/YYYY</option>
          <option value="YMD" ${DATA.settings.dateFormat==='YMD'?'selected':''}>YYYY-MM-DD</option>
        </select>
      </div>
      <div class="field"><label>Number format</label>
        <select id="settingsNumberFormat" onchange="setNumberFormat(this.value)">
          <option value="comma" ${DATA.settings.numberFormat==='comma'?'selected':''}>1,234.56 (comma thousands)</option>
          <option value="period" ${DATA.settings.numberFormat==='period'?'selected':''}>1.234,56 (period thousands)</option>
        </select>
      </div>
    </div>
    <div class="field">
      <label>Default view on login</label>
      <select id="settingsDefaultView" onchange="setDefaultView(this.value)">
        ${views.map(([v,l])=>`<option value="${v}" ${DATA.profile.defaultView===v?'selected':''}>${l}</option>`).join('')}
      </select>
    </div>
    <div class="field">
      <label>Click-to-call handler</label>
      <select id="settingsCallProtocol" onchange="setCallProtocol(this.value)">
        <option value="tel" ${DATA.settings.callProtocol==='tel'?'selected':''}>Native browser dialer (tel:)</option>
        <option value="skype" ${DATA.settings.callProtocol==='skype'?'selected':''}>Skype</option>
        <option value="facetime" ${DATA.settings.callProtocol==='facetime'?'selected':''}>FaceTime</option>
        <option value="custom" ${DATA.settings.callProtocol==='custom'?'selected':''}>Custom VoIP URL</option>
      </select>
      ${DATA.settings.callProtocol==='custom' ? `
      <input id="settingsCustomCallUrl" value="${esc(DATA.settings.customCallUrlPattern)}" placeholder="https://your-voip.com/call?number={number}" onchange="setCustomCallUrl(this.value)" style="margin-top:8px;">
      <p style="font-size:11px; color:var(--slate); margin-top:6px;">Use <span class="mono">{number}</span> where the phone number should go.</p>
      ` : ''}
      <p style="font-size:11px; color:var(--slate); margin-top:6px;">Changes what happens when you click a phone number on a contact. The browser or OS decides which installed app actually answers a given protocol, this just picks which one gets asked.</p>
    </div>
  `;
}
async function setCallProtocol(v){ DATA.settings.callProtocol = v; await saveData(); refreshSettingsBody(); }
async function setCustomCallUrl(v){
  const trimmed = v.trim();
  if(trimmed && !/^https?:\/\//i.test(trimmed)){ showToast('Custom call URL must start with https://'); return; }
  DATA.settings.customCallUrlPattern = trimmed;
  await saveData();
}
async function setDateFormat(v){ DATA.settings.dateFormat = v; await saveData(); render(); }
async function setNumberFormat(v){ DATA.settings.numberFormat = v; await saveData(); render(); }
async function clearLogo(){
  DATA.settings.logoDataUrl = null;
  await saveData(); applyBranding();
  refreshSettingsBody();
}
async function setCurrency(v){ DATA.settings.currencySymbol = v; await saveData(); render(); }
async function setTimezone(v){ DATA.settings.timezone = v; await saveData(); }
async function setDefaultView(v){ DATA.profile.defaultView = v; await saveData(); }
function settingsIntegrationsHTML(){
  const connected = !!outlookAccount;
  const isLocalFile = window.location.protocol === 'file:';
  return `
    <p style="font-size:11.5px; color:var(--slate); margin-bottom:18px;">Every real "send" in this CRM (Campaigns, Automations, Proposals, Contacts) routes through one function, so switching providers later never means rewriting the CRM, only changing what's connected here.</p>

    <div style="border:1px solid var(--line); border-radius:10px; padding:16px 18px; margin-bottom:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <div style="font-size:15px; font-weight:700; color:var(--ink);">Outlook / Microsoft 365</div>
        ${connected ? `<span class="badge customer">Connected</span>` : `<span class="badge prospect">Not connected</span>`}
      </div>
      <p style="font-size:11.5px; color:var(--slate); margin-bottom:12px;">Send real email straight from your own Outlook mailbox, no server needed since Microsoft supports secure browser sign-in directly.</p>
      ${isLocalFile ? `<div style="background:var(--amber-soft); border:1px solid var(--amber); border-radius:9px; padding:12px 14px; margin-bottom:14px; font-size:12.5px; color:var(--amber-text);"><b>This page is open as a local file.</b> Outlook sign-in needs a real hosted URL, host this file somewhere with HTTPS first.</div>` : ''}
      ${connected ? `
      <div style="background:var(--teal-soft); border:1px solid var(--teal); border-radius:9px; padding:14px 16px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-size:13px; font-weight:700; color:var(--ink);">Connected</div>
          <div style="font-size:12px; color:var(--slate);">${esc(outlookAccount.username)}</div>
        </div>
        <button class="btn-small" onclick="disconnectOutlook()">Disconnect</button>
      </div>` : `
      <div class="field">
        <label>Azure App Client ID</label>
        <input id="outlook_client_id" value="${esc(DATA.settings.outlookClientId)}" placeholder="e.g. 3f8a1c2e-....-....-....-............" ${isLocalFile?'disabled':''}>
      </div>
      <button class="btn-primary" onclick="connectOutlook()" ${isLocalFile?'disabled':''}>Connect Outlook</button>
      `}
      <details style="margin-top:12px;">
        <summary style="font-size:11.5px; font-weight:700; color:var(--teal-text); cursor:pointer;">Setup steps (~5 minutes, free)</summary>
        <ol style="font-size:12px; color:var(--ink); line-height:1.8; padding-left:18px; margin-top:8px;">
          <li>Go to <a href="https://portal.azure.com" target="_blank" rel="noopener" style="color:var(--teal-text); font-weight:700;">portal.azure.com</a>, sign in with any Microsoft account.</li>
          <li>Search "App registrations" → <b>New registration</b>. Name it anything.</li>
          <li>Under "Redirect URI," choose <b>Single-page application (SPA)</b> and enter: <span class="mono" style="background:var(--paper); padding:2px 6px; border-radius:4px;">${esc(window.location.origin + window.location.pathname)}</span></li>
          <li>Copy the <b>Application (client) ID</b> and paste it above.</li>
          <li>Under "API permissions," add <span class="mono">Mail.Send</span>, <span class="mono">Mail.Read</span>, <span class="mono">User.Read</span> (Microsoft Graph, Delegated).</li>
        </ol>
      </details>
    </div>

    <div style="border:1px solid var(--line); border-radius:10px; padding:16px 18px; margin-bottom:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <div style="font-size:15px; font-weight:700; color:var(--ink);">Brevo (Email Marketing sender)</div>
        <span class="badge ${DATA.settings.brevoConfigured?'customer':'prospect'}">${DATA.settings.brevoConfigured?'API key saved':'Not configured'}</span>
      </div>
      <p style="font-size:12px; color:var(--slate); margin-bottom:12px; line-height:1.6;">
        Email sends go through a private Supabase Edge Function that holds your Brevo API key securely. The key never touches this page's code.
        To activate, paste your Brevo API key below and save it. You can find your key in Brevo under <b>Account &rarr; SMTP &amp; API &rarr; API Keys</b>.
      </p>
      <div class="field">
        <label>Brevo API Key</label>
        <input id="brevo_api_key" type="password" placeholder="${DATA.settings.brevoConfigured ? 'Key saved - paste a new one to replace it' : 'xkeysib-...'}">
      </div>
      <div class="field">
        <label>From email address</label>
        <input id="brevo_from_email" value="${esc(DATA.settings.brevoFromEmail||'hello@favze.com')}" placeholder="hello@favze.com">
      </div>
      <div class="field">
        <label>From name</label>
        <input id="brevo_from_name" value="${esc(DATA.settings.brevoFromName||'Favze')}" placeholder="Favze">
      </div>
      <button class="btn-primary" onclick="saveBrevoSettings()">Save</button>
      <p style="font-size:11px; color:var(--slate); margin-top:10px;">Once saved, Campaigns and Automations send real email through Brevo. Everything else, templates, lists, subscribers, campaign logic, stays owned by this CRM.</p>
    </div>

    <div style="border:1px solid var(--line); border-radius:10px; padding:16px 18px; margin-bottom:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <img src="${FAVZE_MARK_DATAURI}" alt="Favze" style="width:26px; height:26px; object-fit:contain;">
          <div style="font-size:15px; font-weight:700; color:var(--ink);">Favze Portal Sync (Agency Account)</div>
        </div>
        <span class="badge ${agencySupabaseSession && agencyAccountRequest && agencyAccountRequest.approved ? 'customer' : agencySupabaseSession ? 'lead' : 'prospect'}">${agencySupabaseSession && agencyAccountRequest && agencyAccountRequest.approved ? 'Connected' : agencySupabaseSession ? 'Pending approval' : 'Not connected'}</span>
      </div>
      <p style="font-size:11.5px; color:var(--slate); margin-bottom:12px;">
        The Content Calendar syncs to the client-facing Favze Portal through the same Supabase project used for photo storage. Signing up or signing in only creates a login - it does not grant access by itself. An already-approved agency account has to explicitly approve it below before it can see or sync anything. Nothing typed below is ever saved into this file, Supabase remembers your session in this browser.
      </p>
      ${agencySupabaseSession && agencyAccountRequest && agencyAccountRequest.approved ? `
      <div style="background:var(--teal-soft); border:1px solid var(--teal); border-radius:9px; padding:14px 16px; display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <div>
          <div style="font-size:13px; font-weight:700; color:var(--ink);">Connected &amp; approved</div>
          <div style="font-size:12px; color:var(--slate);">${esc(agencySupabaseSession.user.email||'')}</div>
        </div>
        <button class="btn-small" onclick="disconnectAgencySupabase()">Disconnect</button>
      </div>

      <div style="border-top:1px solid var(--line); padding-top:14px; margin-bottom:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <div style="font-size:13px; font-weight:700; color:var(--ink);">Pending Approvals</div>
          <button class="btn-small" onclick="refreshAccountRequests().then(refreshSettingsBody)">${iconDownload()} Refresh</button>
        </div>
        ${pendingAccountRequests().length ? pendingAccountRequests().map(r=>`
          <div style="padding:10px 0; border-bottom:1px solid var(--line);">
            <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
              <div>
                <div style="font-size:12.5px; font-weight:700; color:var(--ink);">${esc(r.email||r.user_id)}</div>
                <div style="font-size:11px; color:var(--slate);">${r.role==='agency'?'Agency account':'Client account'} · requested ${fmtDate((r.requested_at||'').slice(0,10))}</div>
              </div>
              <div style="display:flex; gap:6px; align-items:center;">
                ${r.role==='client' ? `
                <select id="link_contact_${r.user_id}" style="padding:6px 8px; border-radius:6px; border:1px solid var(--line); font-size:12px; max-width:180px;">
                  <option value="">Link to contact...</option>
                  <option value="__new__">+ New contact from this email</option>
                  ${DATA.contacts.map(c=>`<option value="${c.id}">${esc(c.name)}${c.company?' - '+esc(c.company):''}</option>`).join('')}
                </select>
                ` : ''}
                <button class="btn-small" onclick="denyAccountRequest('${r.user_id}')">Deny</button>
                <button class="btn-primary" style="padding:6px 12px; font-size:12px;" onclick="${r.role==='client' ? `approveClientRequest('${r.user_id}','${escJs(r.email||'')}')` : `approveAgencyRequest('${r.user_id}')`}">Approve</button>
              </div>
            </div>
          </div>`).join('') : `<p style="font-size:12px; color:var(--slate);">Nothing waiting on you right now.</p>`}
      </div>

      <div style="border-top:1px solid var(--line); padding-top:14px;">
        <div style="font-size:13px; font-weight:700; color:var(--ink); margin-bottom:10px;">Approved Accounts</div>
        ${approvedAccountRequests().length ? approvedAccountRequests().map(r=>{
          const linkedContact = r.role==='client' ? DATA.contacts.find(c=>c.portalUid===r.user_id) : null;
          const isSelf = agencySupabaseSession && r.user_id === agencySupabaseSession.user.id;
          return `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid var(--line);">
            <div>
              <div style="font-size:12.5px; font-weight:700; color:var(--ink);">${esc(r.email||r.user_id)} ${isSelf ? '<span style="color:var(--slate); font-weight:500;">(you)</span>' : ''}</div>
              <div style="font-size:11px; color:var(--slate);">${r.role==='agency'?'Agency account':`Client account${linkedContact ? ' - linked to '+esc(linkedContact.name) : ' - not linked to a contact'}`}</div>
            </div>
            ${isSelf ? `<span style="font-size:11px; color:var(--slate);">Can't revoke yourself</span>` : `<button class="btn-small" onclick="revokeAccountRequest('${r.user_id}','${r.role}')">Revoke</button>`}
          </div>`;
        }).join('') : `<p style="font-size:12px; color:var(--slate);">No approved accounts yet.</p>`}
      </div>
      ` : agencySupabaseSession ? `
      <div style="background:var(--paper); border:1px solid var(--line); border-radius:9px; padding:14px 16px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-size:13px; font-weight:700; color:var(--ink);">Waiting on approval</div>
          <div style="font-size:12px; color:var(--slate);">${esc(agencySupabaseSession.user.email||'')} is signed in, but nobody has approved this account yet. Ask an already-approved teammate to approve it here, or approve it yourself directly in Supabase (see the setup SQL) if this is your first account.</div>
        </div>
        <button class="btn-small" onclick="disconnectAgencySupabase()">Sign Out</button>
      </div>
      ` : `
      <div style="display:flex; gap:4px; background:var(--paper); border-radius:8px; padding:4px; margin-bottom:14px; max-width:260px;">
        <button type="button" style="flex:1; justify-content:center; border:none; border-radius:6px; padding:7px 0; font-size:12px; font-weight:700; cursor:pointer; background:${agencyAuthMode==='signin'?'#fff':'transparent'}; box-shadow:${agencyAuthMode==='signin'?'0 1px 2px rgba(0,0,0,.08)':'none'}; color:${agencyAuthMode==='signin'?'var(--ink)':'var(--slate)'};" onclick="setAgencyAuthMode('signin')">Sign In</button>
        <button type="button" style="flex:1; justify-content:center; border:none; border-radius:6px; padding:7px 0; font-size:12px; font-weight:700; cursor:pointer; background:${agencyAuthMode==='signup'?'#fff':'transparent'}; box-shadow:${agencyAuthMode==='signup'?'0 1px 2px rgba(0,0,0,.08)':'none'}; color:${agencyAuthMode==='signup'?'var(--ink)':'var(--slate)'};" onclick="setAgencyAuthMode('signup')">Sign Up</button>
      </div>
      <div class="field-row">
        <div class="field"><label>Agency Email</label><input id="agency_email" type="email" placeholder="you@favze.com"></div>
        <div class="field"><label>Agency Password</label><input id="agency_password" type="password" placeholder="••••••••"></div>
      </div>
      <div id="agency_login_error" style="color:var(--red-text); font-size:12px; margin-bottom:8px; display:none;"></div>
      <button class="btn-primary" onclick="handleAgencyAuthSubmit()">${agencyAuthMode==='signup'?'Sign Up':'Connect'}</button>
      ${agencyAuthMode==='signin' ? `
      <p style="font-size:11px; color:var(--slate); margin-top:8px;">This account is created once, either here via Sign Up, or in your Supabase dashboard (Authentication → Users → Add User). It's separate from any client's own portal login, and still needs approval either way.</p>
      ` : `
      <p style="font-size:11px; color:var(--slate); margin-top:8px;">Creates a real login here, but it lands as pending - it gets zero access until an already-approved agency account approves it. If this is your very first agency account, approve it directly in Supabase using the setup SQL, since there's no other approved agency yet to do it from here.</p>
      `}
      `}
    </div>

    <div style="border:1px solid var(--line); border-radius:10px; padding:16px 18px; margin-bottom:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <div style="font-size:15px; font-weight:700; color:var(--ink);">Tally Form Relay</div>
        <span class="badge ${DATA.settings.formSubmissionsEndpointUrl?'customer':'prospect'}">${DATA.settings.formSubmissionsEndpointUrl?'Configured':'Not configured'}</span>
      </div>
      <p style="font-size:11.5px; color:var(--slate); margin-bottom:12px;">
        Catches submissions from the two public Tally forms (Lead Gen and Newsletter Signup) via a
        small relay server (see <span class="mono">server.js</span>), and pulls them into Form Submissions
        for you to review and convert - nothing is created in the CRM automatically.
      </p>
      <div class="field-row">
        <div class="field"><label>Relay Endpoint URL</label><input id="formsub_endpoint" value="${esc(DATA.settings.formSubmissionsEndpointUrl||'')}" placeholder="https://your-relay.com/api/submissions"></div>
        <div class="field"><label>API Key</label><input id="formsub_apikey" value="${esc(DATA.settings.formSubmissionsApiKey||'')}" placeholder="Same value as RELAY_API_KEY on the server"></div>
      </div>
      <div style="display:flex; gap:8px;">
        <button class="btn-primary" onclick="saveFormSubmissionsEndpoint()">Save</button>
        ${DATA.settings.formSubmissionsEndpointUrl ? `<button class="btn-ghost" onclick="checkForNewFormSubmissions(true)">Check now</button>` : ''}
      </div>
    </div>

    <div style="border:1px solid var(--line); border-radius:10px; padding:16px 18px;">
      <div style="font-size:15px; font-weight:700; color:var(--ink); margin-bottom:8px;">No setup at all</div>
      <p style="font-size:11.5px; color:var(--slate);">Every Contact still has a plain mailto: link that opens whatever your device's default mail app is (Outlook desktop, Apple Mail, anything), zero connection required.</p>
    </div>
  `;
}
let agencySupabaseSession = null;
let agencyAccountRequest = null;
let allAccountRequests = [];
let agencyAuthMode = 'signin';
function setAgencyAuthMode(mode){
  agencyAuthMode = mode;
  refreshSettingsBody();
}
function handleAgencyAuthSubmit(){
  if(agencyAuthMode==='signup') signUpAgencySupabase();
  else connectAgencySupabase();
}
async function ensureAgencyAccountRequest(session){
  const client = getSupabaseClient();
  if(!client) return null;
  try{
    const { data: existing, error: selErr } = await client.from('account_requests').select('*').eq('user_id', session.user.id).maybeSingle();
    if(selErr){ console.error(selErr); return null; }
    if(existing) return existing;
    const { data: inserted, error: insErr } = await client.from('account_requests').insert({ user_id: session.user.id, email: session.user.email, role:'agency' }).select().maybeSingle();
    if(insErr){ console.error(insErr); return null; }
    // Auto-approve if this is the very first agency account (founder setup flow)
    await client.rpc('auto_approve_if_first_agency');
    // Re-fetch to get the updated approved status
    const { data: refreshed } = await client.from('account_requests').select('*').eq('user_id', session.user.id).maybeSingle();
    return refreshed || inserted;
  }catch(err){ console.error(err); return null; }
}
// Fetches every account request this session can see -- both pending and already-approved.
// An approved agency account can see everyone; anyone else only ever sees their own row (which
// is why this naturally comes back empty/single-row for a not-yet-approved account).
async function refreshAccountRequests(){
  const client = getSupabaseClient();
  if(!client){ allAccountRequests = []; return; }
  try{
    const { data, error } = await client.from('account_requests').select('*').order('requested_at', {ascending:true});
    if(error){ console.error(error); allAccountRequests = []; return; }
    allAccountRequests = data || [];
  }catch(err){ console.error(err); allAccountRequests = []; }
}
function pendingAccountRequests(){ return allAccountRequests.filter(r=>!r.approved); }
function approvedAccountRequests(){ return allAccountRequests.filter(r=>r.approved); }
async function approveAgencyRequest(userId){
  const client = getSupabaseClient();
  if(!client) return;
  const { error } = await client.from('account_requests').update({ approved:true, approved_at:new Date().toISOString() }).eq('user_id', userId);
  if(error){ showToast('Could not approve: ' + error.message); return; }
  showToast('Approved');
  await refreshAccountRequests();
  refreshSettingsBody();
}
// Client approvals need to know which CRM Contact this account belongs to, so the sync knows
// where to send that client's content. Either pick an existing Contact, or create a bare one
// on the spot from the email they signed up with.
async function approveClientRequest(userId, email){
  const sel = document.getElementById('link_contact_'+userId);
  if(!sel){ return; }
  let contactId = sel.value;
  if(!contactId){ showToast('Pick which CRM contact this client is before approving'); return; }
  if(contactId === '__new__'){
    contactId = uid();
    DATA.contacts.push({
      id: contactId, name: email.split('@')[0], company:'', companyId:null, type:'customer',
      stage:'', source:'Favze Portal sign-up', phone:'', email: email,
      dealValue:0, followUpDate:null, followUpDone:false, dateAdded: todayISO(), lastModified: new Date().toISOString(),
      notes:[{text:'Created automatically when approving their Favze Portal account.', date: todayISO()}],
      customFields:{}, tags:[], emailLists:[], services:[], profile: defaultProfile(), assignedTo:null, portalUid:null,
    });
  }
  const client = getSupabaseClient();
  if(!client) return;
  const { error } = await client.from('account_requests').update({ approved:true, approved_at:new Date().toISOString() }).eq('user_id', userId);
  if(error){ showToast('Could not approve: ' + error.message); return; }
  const contact = DATA.contacts.find(c=>c.id===contactId);
  if(contact){ contact.portalUid = userId; await saveData(); }
  showToast('Approved and linked to ' + (contact?contact.name:'contact'));
  await refreshAccountRequests();
  refreshSettingsBody();
  render();
}
async function denyAccountRequest(userId){
  const client = getSupabaseClient();
  if(!client) return;
  const { error } = await client.from('account_requests').delete().eq('user_id', userId);
  if(error){ showToast('Could not remove: ' + error.message); return; }
  showToast('Request removed');
  await refreshAccountRequests();
  refreshSettingsBody();
}
// Revokes an already-approved account. Guards against locking yourself out if you're the only
// approved agency account -- there'd be nobody left who could re-approve you.
async function revokeAccountRequest(userId, role){
  if(agencySupabaseSession && userId === agencySupabaseSession.user.id){
    showToast("You can't revoke your own account from here - sign in as a different approved agency account to do that.");
    return;
  }
  const client = getSupabaseClient();
  if(!client) return;
  const { error } = await client.from('account_requests').update({ approved:false, approved_at:null }).eq('user_id', userId);
  if(error){ showToast('Could not revoke: ' + error.message); return; }
  if(role==='client'){
    let unlinked = false;
    DATA.contacts.forEach(c=>{ if(c.portalUid===userId){ c.portalUid = null; unlinked = true; } });
    if(unlinked) await saveData();
  }
  showToast('Access revoked');
  await refreshAccountRequests();
  refreshSettingsBody();
  render();
}
async function connectAgencySupabase(){
  const email = document.getElementById('agency_email').value.trim();
  const password = document.getElementById('agency_password').value;
  const errEl = document.getElementById('agency_login_error');
  errEl.style.display = 'none';
  errEl.style.color = 'var(--red-text)';
  if(!email || !password){ errEl.textContent = 'Enter both email and password.'; errEl.style.display = 'block'; return; }
  const locked = authIsLocked(email);
  if(locked){ errEl.textContent = `Too many failed attempts. Try again in ${locked} seconds.`; errEl.style.display = 'block'; return; }
  const client = getSupabaseClient();
  if(!client){ errEl.textContent = 'Supabase library did not load, check your connection.'; errEl.style.display = 'block'; return; }
  try{
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if(error){
      const fails = authRecordFail(email);
      const remaining = AUTH_MAX_FAILS - fails;
      errEl.textContent = remaining <= 0
        ? 'Too many failed attempts. Sign-in is locked for 5 minutes.'
        : `That email and password combination was not recognized.${remaining <= 2 ? ` ${remaining} attempt${remaining===1?'':'s'} remaining.` : ''}`;
      errEl.style.display = 'block';
      return;
    }
    authClearFails(email);
    agencySupabaseSession = data.session;
    agencyAccountRequest = await ensureAgencyAccountRequest(data.session);
    await refreshAccountRequests();
    refreshSettingsBody();
    showToast(agencyAccountRequest && agencyAccountRequest.approved ? 'Connected to Favze Portal sync' : 'Signed in, waiting on approval');
  }catch(err){
    console.error(err);
    errEl.textContent = 'Could not reach Supabase, check your connection and try again.';
    errEl.style.display = 'block';
  }
}
async function signUpAgencySupabase(){
  const email = document.getElementById('agency_email').value.trim();
  const password = document.getElementById('agency_password').value;
  const errEl = document.getElementById('agency_login_error');
  errEl.style.display = 'none';
  errEl.style.color = 'var(--red-text)';
  if(!email || !password){ errEl.textContent = 'Enter both email and password.'; errEl.style.display = 'block'; return; }
  if(password.length < 12){ errEl.textContent = 'Use a password with at least 12 characters.'; errEl.style.display = 'block'; return; }
  const client = getSupabaseClient();
  if(!client){ errEl.textContent = 'Supabase library did not load, check your connection.'; errEl.style.display = 'block'; return; }
  try{
    const { data, error } = await client.auth.signUp({ email, password });
    if(error){ errEl.textContent = error.message || 'Could not create that account.'; errEl.style.display = 'block'; return; }
    if(data.session){
      agencySupabaseSession = data.session;
      agencyAccountRequest = await ensureAgencyAccountRequest(data.session);
      await refreshAccountRequests();
      refreshSettingsBody();
      showToast('Account created. It needs to be approved by an existing approved agency account before it can sync anything.');
    } else {
      errEl.style.color = 'var(--good)';
      errEl.textContent = 'Account created. Check your email to confirm it, then switch to Sign In.';
      errEl.style.display = 'block';
    }
  }catch(err){
    console.error(err);
    errEl.textContent = 'Could not reach Supabase, check your connection and try again.';
    errEl.style.display = 'block';
  }
}
async function disconnectAgencySupabase(){
  const client = getSupabaseClient();
  if(client) await client.auth.signOut();
  agencySupabaseSession = null;
  agencyAccountRequest = null;
  allAccountRequests = [];
  refreshSettingsBody();
  showToast('Disconnected');
  applyAuthGate();
}
async function restoreAgencySupabaseSession(){
  const client = getSupabaseClient();
  if(!client) return;
  const { data } = await client.auth.getSession();
  if(data && data.session){
    agencySupabaseSession = data.session;
    agencyAccountRequest = await ensureAgencyAccountRequest(data.session);
    await refreshAccountRequests();
  }
}
async function saveFormSubmissionsEndpoint(){
  const url = document.getElementById('formsub_endpoint').value.trim();
  const key = document.getElementById('formsub_apikey').value.trim();
  DATA.settings.formSubmissionsEndpointUrl = url || null;
  DATA.settings.formSubmissionsApiKey = key || null;
  await saveData();
  refreshSettingsBody();
  showToast(url ? 'Relay endpoint saved' : 'Relay endpoint cleared');
}
async function saveBrevoSettings(){
  const key = document.getElementById('brevo_api_key').value.trim();
  const fromEmail = document.getElementById('brevo_from_email').value.trim();
  const fromName = document.getElementById('brevo_from_name').value.trim();
  if(!key && !DATA.settings.brevoConfigured){ showToast('Paste your Brevo API key first'); return; }
  DATA.settings.brevoFromEmail = fromEmail || 'hello@favze.com';
  DATA.settings.brevoFromName = fromName || 'Favze';
  if(key){
    const sb = getSupabaseClient();
    if(!sb){ showToast('Connect your agency account first'); return; }
    const { data: { session } } = await sb.auth.getSession().catch(()=>({ data:{ session:null } }));
    if(!session){ showToast('Sign in to your agency account first'); return; }
    try{
      const res = await fetch(`${SUPABASE_URL}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + session.access_token,
          'x-brevo-key': key,
        },
        body: JSON.stringify({ _setup: true }),
      });
      const result = await res.json().catch(()=>({}));
      if(!res.ok){
        showToast('Brevo rejected that key: ' + (result.error || res.status));
        return;
      }
      DATA.settings.brevoApiKey = key;
      DATA.settings.brevoConfigured = true;
    }catch(e){
      console.error('Brevo setup ping failed', e);
      showToast('Could not reach Brevo, check your connection');
      return;
    }
  }
  await saveData();
  refreshSettingsBody();
  showToast(key ? 'Brevo API key verified and saved' : 'Brevo settings saved');
}
/* Central send function — every real outbound email in the CRM should call this instead of
   talking to a provider directly, so the provider can change without touching the rest of the app. */
async function sendViaEmailProvider(to, subject, bodyHtml){
  if(DATA.settings.brevoConfigured && DATA.settings.brevoApiKey){
    const sb = getSupabaseClient();
    if(sb){
      try{
        const { data: { session } } = await sb.auth.getSession();
        if(session){
          const res = await fetch(`${SUPABASE_URL}/functions/v1/send-email`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + session.access_token,
              'x-brevo-key': DATA.settings.brevoApiKey,
            },
            body: JSON.stringify({
              to, subject, html: bodyHtml,
              from: DATA.settings.brevoFromEmail || 'hello@favze.com',
              fromName: DATA.settings.brevoFromName || 'Favze',
            }),
          });
          if(res.ok) return { ok:true, provider:'brevo' };
          const err = await res.json().catch(()=>({}));
          console.error('Brevo send failed', err);
          showToast('Brevo send failed: ' + (err.error || res.status));
          return { ok:false, provider:'brevo' };
        }
      }catch(err){
        console.error('sendViaEmailProvider brevo error', err);
        showToast('Could not reach Brevo, check your connection');
        return { ok:false, provider:'brevo' };
      }
    }
  }
  if(outlookAccount){
    const ok = await sendViaOutlook(to, subject, bodyHtml);
    return { ok, provider:'outlook' };
  }
  return { ok:false, provider:'none' };
}
function settingsPricingHTML(){
  const b = DATA.settings.pricingBaseline;
  const baseline = computePricingBaseline();
  return `
    <p style="font-size:11.5px; color:var(--slate); margin-bottom:14px;">Your agency's true internal cost per billable hour, calculated from real overhead and payroll, not a guess. This feeds every quote built in a Company's Pricing Calculator tab.</p>
    <div class="field-row">
      <div class="field"><label>Base Overhead (Annual)</label><input type="number" min="0" step="100" value="${b.overhead}" onchange="setPricingBaselineField('overhead', this.value)"></div>
      <div class="field"><label>Team Count</label><input type="number" min="1" step="1" value="${b.teamCount}" onchange="setPricingBaselineField('teamCount', this.value)"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Avg. Employee Salary (Annual)</label><input type="number" min="0" step="500" value="${b.avgSalary}" onchange="setPricingBaselineField('avgSalary', this.value)"></div>
      <div class="field"><label>Weekly Hours Contracted</label><input type="number" min="1" step="1" value="${b.weeklyHours}" onchange="setPricingBaselineField('weeklyHours', this.value)"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Weeks / Year (billable)</label><input type="number" min="1" step="1" value="${b.weeksPerYear}" onchange="setPricingBaselineField('weeksPerYear', this.value)"></div>
      <div class="field"><label>Target Utilization Rate (%)</label><input type="number" min="1" max="100" step="1" value="${b.utilization}" onchange="setPricingBaselineField('utilization', this.value)"></div>
    </div>
    <div class="field"><label>Target Net Margin (%)</label><input type="number" min="1" max="95" step="1" value="${b.margin}" onchange="setPricingBaselineField('margin', this.value)"></div>
    <div class="stat-row" style="margin-top:16px;">
      <div class="stat-card" style="padding:14px;"><div class="label">Annual Wages</div><h2 style="font-size:19px;">${fmtMoney(baseline.wages)}</h2></div>
      <div class="stat-card" style="padding:14px;"><div class="label">Annual Capacity</div><h2 style="font-size:19px;">${fmtMoney(baseline.capacity)}</h2></div>
      <div class="stat-card" style="padding:14px;"><div class="label">Billable Hrs/Yr</div><h2 style="font-size:19px;">${Math.round(baseline.billableHours).toLocaleString('en-US')}</h2></div>
      <div class="stat-card" style="padding:14px; background:var(--teal-soft); border-color:var(--teal);"><div class="label">True Hourly Cost</div><h2 style="font-size:19px; color:var(--teal-text);">${baseline.hourlyCost ? fmtMoneyDec(baseline.hourlyCost)+'/hr' : '-'}</h2></div>
    </div>
    <p style="font-size:11px; color:var(--slate); margin-top:14px;">Pricing math (negation-free, no AI involved): Direct Delivery Cost ÷ (1 − Target Margin) + Adjusted Pass-Through, rounded up to the nearest whole dollar. Scope each service per company under Companies → open a company → Pricing Calculator tab.</p>
  `;
}
async function setPricingBaselineField(key, value){
  const v = Number(value);
  DATA.settings.pricingBaseline[key] = isNaN(v) ? 0 : v;
  await saveData();
  refreshSettingsBody();
}
function settingsPipelineHTML(){
  const fieldOpts = [['phone','Phone'],['email','Email'],['dealValue','Deal value']];
  const req = DATA.settings.requiredStandardFields || [];
  const mergeTagOptions = [['name','{{name}}'],['company','{{company}}'],['stage','{{stage}}'],['source','{{source}}'],['phone','{{phone}}'],['email','{{email}}']].concat(DATA.customFields.map(f=>[('field.'+f.name).toLowerCase(), `{{field.${f.name}}}`]));
  return `
    <div class="field">
      <label>Merge Tag Defaults</label>
      <p style="font-size:11px; color:var(--slate); margin-bottom:8px;">Fallback text used when a merge tag is blank on a contact, e.g. {{name}} defaults to "there" instead of leaving a gap.</p>
      ${mergeTagOptions.map(([key,code])=>`
        <div class="field-row" style="align-items:center; margin-bottom:6px;">
          <span class="mono" style="flex:1; font-size:12px; color:var(--ink);">${code}</span>
          <input value="${esc((DATA.settings.mergeFallbacks||{})[key]||'')}" placeholder="Fallback text" onchange="setMergeFallback('${key}', this.value)" style="flex:1;">
        </div>`).join('')}
    </div>
    <div class="field">
      <label>Pipeline stages</label>
      <button class="btn-small" onclick="openPipelineStagesModal()">${iconGear()} Edit stage names & terminology</button>
    </div>
    <div class="field">
      <label>Required before a contact can change type</label>
      <div style="display:flex; flex-direction:column; gap:8px;">
        ${fieldOpts.map(([v,l])=>`
          <div style="display:flex; align-items:center; gap:8px;">
            <input type="checkbox" class="req-field-check" value="${v}" ${req.includes(v)?'checked':''} onchange="toggleRequiredField('${v}', this.checked)" style="width:auto;">
            <label style="margin:0; text-transform:none; font-size:13px; font-weight:500; color:var(--ink);">${l}</label>
          </div>`).join('')}
      </div>
      <p style="font-size:11px; color:var(--slate); margin-top:6px;">Custom fields can also be marked required, per field, from Custom Fields.</p>
    </div>
    <div class="field">
      <label>Required before a deal can move to a Won stage</label>
      <div style="display:flex; flex-direction:column; gap:8px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" ${DATA.settings.requireDealContactForWon?'checked':''} onchange="toggleDealRequirement('requireDealContactForWon', this.checked)" style="width:auto;">
          <label style="margin:0; text-transform:none; font-size:13px; font-weight:500; color:var(--ink);">Must have a linked contact</label>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" ${DATA.settings.requireDealValueForWon?'checked':''} onchange="toggleDealRequirement('requireDealValueForWon', this.checked)" style="width:auto;">
          <label style="margin:0; text-transform:none; font-size:13px; font-weight:500; color:var(--ink);">Must have a deal value greater than $0</label>
        </div>
      </div>
    </div>
    <div class="field">
      <label>Task escalation</label>
      <div style="display:flex; align-items:center; gap:8px;">
        <input type="checkbox" ${DATA.settings.taskEscalationEnabled?'checked':''} onchange="toggleTaskEscalation(this.checked)" style="width:auto;">
        <label style="margin:0; text-transform:none; font-size:13px; font-weight:500; color:var(--ink);">Reassign a task to the owner's manager if it's overdue 48 hours or more</label>
      </div>
      <p style="font-size:11px; color:var(--slate); margin-top:6px;">Requires each team member to have a manager set under Settings → Users. Checked once per load, so give the tab a refresh to see it catch up.</p>
    </div>
    <div class="field">
      <label>Automated stage demotion</label>
      <div style="display:flex; align-items:center; gap:8px;">
        <input type="checkbox" ${DATA.settings.stageDemotion.enabled?'checked':''} onchange="toggleStageDemotion(this.checked)" style="width:auto;">
        <label style="margin:0; text-transform:none; font-size:13px; font-weight:500; color:var(--ink);">Auto-downgrade a Lead back to Prospect after a stretch of inactivity</label>
      </div>
      ${DATA.settings.stageDemotion.enabled ? `
      <div class="field-row" style="margin-top:8px;">
        <div class="field"><label>Inactive for at least</label><input type="number" min="1" value="${DATA.settings.stageDemotion.inactivityDays}" onchange="setStageDemotionDays(this.value)"> days</div>
      </div>` : ''}
      <p style="font-size:11px; color:var(--slate); margin-top:6px;">This app doesn't track email opens or website visits, there's no pixel or analytics connection here. "Inactivity" is a fair proxy instead: the days since the last note, call, campaign email, or completed follow-up on that contact. A demoted contact gets a note explaining why.</p>
    </div>
    <div class="field">
      <label>Billable defaults</label>
      <div style="display:flex; flex-direction:column; gap:8px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" ${DATA.settings.billableDefaults.tasks?'checked':''} onchange="toggleBillableDefault('tasks', this.checked)" style="width:auto;">
          <label style="margin:0; text-transform:none; font-size:13px; font-weight:500; color:var(--ink);">New tasks default to Billable</label>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" ${DATA.settings.billableDefaults.calls?'checked':''} onchange="toggleBillableDefault('calls', this.checked)" style="width:auto;">
          <label style="margin:0; text-transform:none; font-size:13px; font-weight:500; color:var(--ink);">New call logs default to Billable</label>
        </div>
      </div>
      <p style="font-size:11px; color:var(--slate); margin-top:6px;">Sets the starting checkbox state, still editable per task or call. Hours roll up in Timesheets, where a manager can approve and lock a week.</p>
    </div>
  `;
}
async function setMergeFallback(key, value){
  DATA.settings.mergeFallbacks = DATA.settings.mergeFallbacks || {};
  if(value.trim()) DATA.settings.mergeFallbacks[key] = value.trim();
  else delete DATA.settings.mergeFallbacks[key];
  await saveData();
}
async function toggleBillableDefault(kind, checked){
  DATA.settings.billableDefaults[kind] = checked;
  await saveData();
}
async function toggleStageDemotion(checked){
  DATA.settings.stageDemotion.enabled = checked;
  await saveData();
  if(checked) checkStageDemotions();
  refreshSettingsBody();
}
async function setStageDemotionDays(v){
  DATA.settings.stageDemotion.inactivityDays = Math.max(1, Number(v)||90);
  await saveData();
}
async function toggleTaskEscalation(checked){
  DATA.settings.taskEscalationEnabled = checked;
  await saveData();
  if(checked) checkTaskEscalation();
}
async function toggleRequiredField(field, checked){
  const req = new Set(DATA.settings.requiredStandardFields||[]);
  if(checked) req.add(field); else req.delete(field);
  DATA.settings.requiredStandardFields = Array.from(req);
  await saveData();
}
async function toggleDealRequirement(key, checked){
  DATA.settings[key] = checked;
  await saveData();
}
async function setTheme(t){
  DATA.settings.theme = t;
  await saveData();
  applySettings();
  refreshSettingsBody();
}
async function setAccent(c){
  DATA.settings.accent = c;
  await saveData();
  applySettings();
  refreshSettingsBody();
}
let editingRoleId = null;
function settingsRolesHTML(){
  const canEdit = currentScope().canManageSettings;
  if(!canEdit){
    return `
      <p style="font-size:11.5px; color:var(--slate); margin-bottom:14px;">Only the CEO role can add, edit, or delete roles. You're currently previewing as <b>${esc(currentScope().userName||'no one')}</b>, whose role doesn't have that permission.</p>
      ${DATA.roles.map(r=>`
        <div class="role-user-row">
          <div><div class="ru-name">${esc(r.name)} <span style="font-weight:500; color:var(--slate); font-size:11px;">(${r.scope==='own'?'own records only':'sees everyone'})</span></div><div class="ru-sub">${esc(r.description)}</div></div>
        </div>`).join('')}
    `;
  }
  editingRoleId = editingRoleId && DATA.roles.find(r=>r.id===editingRoleId) ? editingRoleId : null;
  const editing = editingRoleId ? DATA.roles.find(r=>r.id===editingRoleId) : null;
  return `
    <p style="font-size:11.5px; color:var(--slate); margin-bottom:14px;">There's no password-protected login here, so this isn't secure multi-account access. But the "own records only" vs "everyone" scope below is real: switch who you're previewing as under Users, and the Dashboard, Deals, and contact lists actually filter to match. Click any role to edit it.</p>
    ${DATA.roles.map(r=>`
      <div class="role-user-row" style="cursor:pointer;" onclick="startEditRole('${r.id}')">
        <div><div class="ru-name">${esc(r.name)} <span style="font-weight:500; color:var(--slate); font-size:11px;">(${r.scope==='own'?'own records only':'sees everyone'}${r.canManageSettings?' · manages settings':''})</span></div><div class="ru-sub">${esc(r.description)}</div></div>
        <button class="btn-small" onclick="event.stopPropagation(); deleteRole('${r.id}')">Delete</button>
      </div>`).join('')}
    <div class="field" style="margin-top:16px;"><label>${editing?'Role name':'New role name'}</label><input id="role_name" value="${esc(editing?editing.name:'')}" placeholder="e.g. SEO Specialist"></div>
    <div class="field"><label>Description</label><input id="role_desc" value="${esc(editing?editing.description:'')}" placeholder="What this role can do"></div>
    <div class="field"><label>Visibility</label>
      <select id="role_scope">
        <option value="all" ${editing&&editing.scope==='all'?'selected':''}>Sees everyone's contacts and deals</option>
        <option value="own" ${editing&&editing.scope==='own'?'selected':''}>Sees only their own assigned contacts and deals</option>
      </select>
    </div>
    <div class="field" style="display:flex; align-items:center; gap:8px;">
      <input type="checkbox" id="role_manage" ${editing&&editing.canManageSettings?'checked':''} style="width:auto;">
      <label style="margin:0; text-transform:none; font-size:13px; font-weight:500; color:var(--ink);">Can manage Settings, Roles, and Users (CEO-level access)</label>
    </div>
    <div style="display:flex; gap:10px;">
      <button class="btn-primary" onclick="saveRoleForm()">${editing?'Save changes':'Add role'}</button>
      ${editing?`<button class="btn-ghost" onclick="editingRoleId=null; document.getElementById('modalBody').innerHTML=settingsBodyHTML();">Cancel</button>`:''}
    </div>
  `;
}
function startEditRole(id){
  editingRoleId = id;
  refreshSettingsBody();
}
async function saveRoleForm(){
  const name = document.getElementById('role_name').value.trim();
  if(!name){ showToast('Role name is required'); return; }
  const description = document.getElementById('role_desc').value.trim();
  const scope = document.getElementById('role_scope').value;
  const canManageSettings = document.getElementById('role_manage').checked;
  if(editingRoleId){
    Object.assign(DATA.roles.find(r=>r.id===editingRoleId), {name, description, scope, canManageSettings});
    editingRoleId = null;
    showToast('Role updated');
  } else {
    DATA.roles.push({ id: uid(), name, description, scope, canManageSettings });
    showToast('Role added');
  }
  await saveData();
  refreshSettingsBody();
}
async function deleteRole(id){
  if(!currentScope().canManageSettings){ showToast('Only the CEO role can delete roles'); return; }
  DATA.roles = DATA.roles.filter(x=>x.id!==id);
  DATA.users.forEach(u=>{ if(u.roleId===id) u.roleId=null; });
  if(editingRoleId===id) editingRoleId = null;
  await saveData();
  refreshSettingsBody();
  showToast('Role deleted');
}
function settingsUsersHTML(){
  const canEdit = currentScope().canManageSettings;
  const roleOptions = DATA.roles.map(r=>`<option value="${r.id}">${esc(r.name)}</option>`).join('');
  return `
    <div class="field" style="background:var(--paper); border-radius:8px; padding:12px;">
      <label>Previewing the CRM as</label>
      <select id="activeUserSelect" onchange="setActiveUser(this.value)">
        ${DATA.users.map(u=>`<option value="${u.id}" ${DATA.profile.activeUserId===u.id?'selected':''}>${esc(u.name)}</option>`).join('')}
      </select>
      <p style="font-size:11px; color:var(--slate); margin-top:6px;">Switches what Dashboard, Deals, and contact lists show, based on that person's role scope (own vs. everyone's).</p>
    </div>

    <div class="field" style="background:var(--paper); border-radius:8px; padding:12px;">
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:${DATA.settings.roundRobin.enabled?'10px':'0'};">
        <input type="checkbox" ${DATA.settings.roundRobin.enabled?'checked':''} ${canEdit?'':'disabled'} onchange="toggleRoundRobin(this.checked)" style="width:auto;">
        <label style="margin:0; text-transform:none; font-size:13px; font-weight:700; color:var(--ink);">Round-robin new leads across the team</label>
      </div>
      ${DATA.settings.roundRobin.enabled ? `<p style="font-size:11px; color:var(--slate);">New leads with no manually chosen owner cycle evenly through everyone below who isn't marked Out of Office.</p>` : ''}
    </div>

    ${!canEdit ? `<p style="font-size:11.5px; color:var(--slate); margin-bottom:10px;">Only the CEO role can add, reassign, or remove team members.</p>` : ''}
    ${DATA.users.map(u=>{
      const role = DATA.roles.find(r=>r.id===u.roleId);
      const managerOptions = DATA.users.filter(x=>x.id!==u.id).map(x=>`<option value="${x.id}" ${u.managerId===x.id?'selected':''}>${esc(x.name)}</option>`).join('');
      return `
      <div class="role-user-row" style="flex-direction:column; align-items:stretch; gap:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="display:flex; align-items:center; gap:10px;">
            <div style="width:34px; height:34px; border-radius:50%; overflow:hidden; background:var(--teal-solid); display:flex; align-items:center; justify-content:center; flex-shrink:0; cursor:${canEdit?'pointer':'default'};" ${canEdit?`onclick="openUserAvatarUpload('${u.id}')"`:''} title="${canEdit?'Click to change photo':''}">
              ${(u.avatarDataUrl && isSafeDataUrl(u.avatarDataUrl)) ? `<img src="${u.avatarDataUrl}" style="width:100%; height:100%; object-fit:cover;">` : `<span style="color:#fff; font-weight:700; font-size:12px;">${esc(initials(u.name))}</span>`}
            </div>
            <div><div class="ru-name">${esc(u.name)}${isUserOutToday(u.id)?' <span style="color:var(--red-text); font-size:11px; font-weight:700;">· Out today</span>':''}</div><div class="ru-sub">${esc(u.email||'no email')} · ${role?esc(role.name)+' · sees '+(role.scope==='own'?'own records only':'everyone'):'No role assigned'}</div></div>
          </div>
          ${canEdit ? `<button class="btn-small" onclick="deleteUser('${u.id}')">Remove</button>` : ''}
        </div>
        ${canEdit ? `
        <div style="display:flex; gap:14px; align-items:center; flex-wrap:wrap;">
          <label style="display:flex; align-items:center; gap:6px; font-size:12px; font-weight:600; color:var(--ink); cursor:pointer;">
            <input type="checkbox" ${u.outOfOffice?'checked':''} onchange="toggleOutOfOffice('${u.id}', this.checked)" style="width:auto;"> Out of Office
          </label>
          <label style="display:flex; align-items:center; gap:6px; font-size:12px; color:var(--slate);">
            Manager:
            <select onchange="setUserManager('${u.id}', this.value)" style="padding:5px 8px; border-radius:6px; border:1px solid var(--line);">
              <option value="">None</option>${managerOptions}
            </select>
          </label>
          <label style="display:flex; align-items:center; gap:6px; font-size:12px; color:var(--slate);">
            Dept:
            <select onchange="setUserDepartment('${u.id}', this.value)" style="padding:5px 8px; border-radius:6px; border:1px solid var(--line);">
              ${DEPARTMENT_OPTIONS.map(d=>`<option value="${esc(d)}" ${u.department===d?'selected':''}>${esc(d)}</option>`).join('')}
            </select>
          </label>
          <label style="display:flex; align-items:center; gap:6px; font-size:12px; color:var(--slate);">
            Hired:
            <input type="date" value="${u.hireDate||''}" onchange="setUserHireDate('${u.id}', this.value)" style="padding:5px 8px; border-radius:6px; border:1px solid var(--line);">
          </label>
          <label style="display:flex; align-items:center; gap:6px; font-size:12px; color:var(--slate);">
            Birthday:
            <input type="date" value="${u.birthday||''}" onchange="setUserBirthday('${u.id}', this.value)" style="padding:5px 8px; border-radius:6px; border:1px solid var(--line);">
          </label>
          <label style="display:flex; align-items:center; gap:6px; font-size:12px; color:var(--slate);" title="What this person actually costs the business per hour (salary/overhead), used for project profitability, not what you bill clients">
            Cost rate ($/hr):
            <input type="number" min="0" step="0.01" value="${u.costRate||0}" onchange="setUserCostRate('${u.id}', this.value)" style="padding:5px 8px; border-radius:6px; border:1px solid var(--line); width:80px;">
          </label>
        </div>` : ''}
      </div>`;
    }).join('')}
    ${canEdit ? `
    <div class="field-row" style="margin-top:16px;">
      <div class="field"><label>Name</label><input id="user_name" placeholder="Team member name"></div>
      <div class="field"><label>Email</label><input id="user_email" type="email" placeholder="name@favze.com"></div>
    </div>
    <div class="field"><label>Role</label><select id="user_role"><option value="">No role</option>${roleOptions}</select></div>
    <button class="btn-primary" onclick="addUser()">Add team member</button>` : ''}
  `;
}
async function toggleRoundRobin(checked){
  if(!currentScope().canManageSettings){ showToast('Only the CEO role can change this'); return; }
  DATA.settings.roundRobin.enabled = checked;
  await saveData();
  refreshSettingsBody();
}
async function toggleOutOfOffice(userId, checked){
  const u = DATA.users.find(x=>x.id===userId);
  if(u) u.outOfOffice = checked;
  await saveData();
}
async function setUserManager(userId, managerId){
  const u = DATA.users.find(x=>x.id===userId);
  if(u) u.managerId = managerId || null;
  await saveData();
}
async function setUserDepartment(userId, dept){
  const u = DATA.users.find(x=>x.id===userId);
  if(u) u.department = dept.trim() || 'Marketing';
  await saveData();
}
async function setUserHireDate(userId, date){
  const u = DATA.users.find(x=>x.id===userId);
  if(u) u.hireDate = date;
  await saveData();
}
async function setUserBirthday(userId, date){
  const u = DATA.users.find(x=>x.id===userId);
  if(u) u.birthday = date;
  await saveData();
}
async function setUserCostRate(userId, rate){
  const u = DATA.users.find(x=>x.id===userId);
  if(u) u.costRate = Number(rate)||0;
  await saveData();
}
let pendingAvatarUserId = null;
function openUserAvatarUpload(userId){
  pendingAvatarUserId = userId;
  document.getElementById('userAvatarInput').click();
}
async function handleUserAvatarUpload(input){
  const file = input.files[0];
  if(!file || !pendingAvatarUserId) return;
  try{
    const compressed = await compressImageFile(file, 300, 0.85);
    const u = DATA.users.find(x=>x.id===pendingAvatarUserId);
    if(u){
      u.avatarDataUrl = compressed;
      await saveData();
      refreshSettingsBody();
      showToast('Photo updated');
    }
  }catch(err){
    showToast(err.message || 'Could not process that image');
  }
  pendingAvatarUserId = null;
  input.value = '';
}
async function setActiveUser(id){
  DATA.profile.activeUserId = id;
  await saveData();
  renderSidebarNav();
  render();
  showToast('Now previewing as ' + (DATA.users.find(u=>u.id===id)||{}).name);
}
async function addUser(){
  if(!currentScope().canManageSettings){ showToast('Only the CEO role can add team members'); return; }
  const name = document.getElementById('user_name').value.trim();
  if(!name){ showToast('Name is required'); return; }
  DATA.users.push({ id: uid(), name, email: document.getElementById('user_email').value.trim(), roleId: document.getElementById('user_role').value || null, outOfOffice:false, managerId:null, department:'Marketing', avatarDataUrl:null, hireDate:'', birthday:'', trainingStatus:{}, costRate:0 });
  await saveData();
  refreshSettingsBody();
  showToast('Team member added');
}
async function deleteUser(id){
  if(!currentScope().canManageSettings){ showToast('Only the CEO role can remove team members'); return; }
  DATA.users = DATA.users.filter(x=>x.id!==id);
  if(DATA.profile.activeUserId===id) DATA.profile.activeUserId = DATA.users[0] ? DATA.users[0].id : null;
  await saveData();
  refreshSettingsBody();
  showToast('Team member removed');
}

/* ===================== CONFIRM / PROMPT MODALS ===================== */
// showConfirmModal: replaces native confirm() with an inline modal.
// Returns a Promise<boolean> so callers can await it.
function showConfirmModal({ title, message, confirmLabel = 'Confirm', danger = false }){
  return new Promise(resolve => {
    document.getElementById('modalHead').textContent = title;
    document.getElementById('modalBody').innerHTML = `<p style="font-size:14px; color:var(--ink); line-height:1.55; margin:4px 0 2px;">${escHtml(message)}</p>`;
    const btnClass = danger ? 'btn-danger' : 'btn-primary';
    document.getElementById('modalFoot').innerHTML = `
      <button class="btn-ghost" onclick="closeModal(); window._cmResolve && window._cmResolve(false);">Cancel</button>
      <button class="${btnClass}" onclick="closeModal(); window._cmResolve && window._cmResolve(true);">${escHtml(confirmLabel)}</button>
    `;
    window._cmResolve = resolve;
    document.getElementById('modalPanel').style.maxWidth = '420px';
    document.getElementById('modalBackdrop').classList.add('open');
  });
}

// showPromptModal: replaces native prompt() with an inline, non-blocking modal.
// fields: [{id, label, placeholder, value, type}]
// onConfirm(values): called with {id: trimmedValue, ...} when the user clicks OK.
function showPromptModal({ title, fields, confirmLabel = 'OK', onConfirm }){
  const fieldsHtml = fields.map(f=>`
    <div style="margin-bottom:14px;">
      <label style="display:block; font-size:12px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.04em; margin-bottom:5px;">${escHtml(f.label)}</label>
      <input id="pm_${escHtml(f.id)}" type="${escHtml(f.type||'text')}" value="${escHtml(f.value||'')}" placeholder="${escHtml(f.placeholder||'')}"
        style="width:100%; padding:9px 11px; border:1.5px solid var(--border); border-radius:7px; font-size:14px; color:var(--ink); background:var(--paper); box-sizing:border-box;"
        onkeydown="if(event.key==='Enter'){event.preventDefault();document.getElementById('pm-confirm-btn').click();}"
      />
    </div>
  `).join('');
  document.getElementById('modalHead').textContent = title;
  document.getElementById('modalBody').innerHTML = `<div style="padding:4px 0 2px;">${fieldsHtml}</div>`;
  document.getElementById('modalFoot').innerHTML = `
    <button class="btn-ghost" onclick="closeModal()">Cancel</button>
    <button id="pm-confirm-btn" class="btn-primary" onclick="
      const vals = {};
      ${fields.map(f=>`vals['${f.id}'] = (document.getElementById('pm_${f.id}')||{value:''}).value.trim();`).join('')}
      closeModal();
      window._pmCallback && window._pmCallback(vals);
    ">${escHtml(confirmLabel)}</button>
  `;
  window._pmCallback = onConfirm;
  document.getElementById('modalPanel').style.maxWidth = '440px';
  document.getElementById('modalBackdrop').classList.add('open');
  setTimeout(()=>{ const f = document.getElementById('pm_'+fields[0].id); if(f) f.focus(); }, 80);
}

/* ===================== TOAST ===================== */
let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove('show'), 2400);
}

/* ===================== INIT ===================== */
/* ===================== SESSION TIMEOUT ===================== */
let inactivityTimer = null;
function resetInactivityTimer(){
  if(document.getElementById('lockOverlay').classList.contains('open')) return;
  if(inactivityTimer) clearTimeout(inactivityTimer);
  const mins = DATA.settings ? DATA.settings.sessionTimeoutMinutes : 0;
  if(!mins) return;
  inactivityTimer = setTimeout(lockSession, mins*60*1000);
}
function lockSession(){
  document.getElementById('lockProfileName').textContent = DATA.profile.name;
  const logoImg = document.getElementById('lockLogoImg');
  logoImg.src = (DATA.settings.logoDataUrl && isSafeDataUrl(DATA.settings.logoDataUrl)) ? DATA.settings.logoDataUrl : FAVZE_MARK_DATAURI;
  document.getElementById('lockOverlay').classList.add('open');
  hideGlobalSearch();
  closeModal();
}
function unlockSession(){
  document.getElementById('lockOverlay').classList.remove('open');
  resetInactivityTimer();
}
['mousemove','keydown','click','scroll','touchstart'].forEach(evt=>{
  document.addEventListener(evt, ()=>{ if(!document.getElementById('lockOverlay').classList.contains('open')) resetInactivityTimer(); });
});

/* ===================== GLOBAL HOTKEYS ===================== */
const HOTKEY_ACTIONS = [
  {key:'newContact', label:'New Contact', fn: ()=>openNewContactModal()},
  {key:'quickNote', label:'Quick Note (Reminder)', fn: ()=>openNewReminderModal()},
  {key:'newTask', label:'New Task', fn: ()=>openNewTaskModal()},
  {key:'newDeal', label:'New Deal', fn: ()=>openNewDealModal()},
  {key:'focusSearch', label:'Focus Search', fn: ()=>document.getElementById('searchInput').focus()},
  {key:'openSettings', label:'Open Settings', fn: ()=>openSettingsModal()},
];
function comboFromEvent(e){
  const parts = [];
  if(e.ctrlKey) parts.push('ctrl');
  if(e.altKey) parts.push('alt');
  if(e.shiftKey) parts.push('shift');
  if(e.metaKey) parts.push('meta');
  const k = e.key.toLowerCase();
  if(!['control','alt','shift','meta'].includes(k)) parts.push(k);
  return parts.join('+');
}
document.addEventListener('keydown', (e)=>{
  if(!DATA.settings || !DATA.settings.hotkeys) return;
  const isTyping = ['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName);
  if(isTyping && !(e.ctrlKey||e.altKey||e.metaKey)) return;
  const combo = comboFromEvent(e);
  const actionKey = Object.keys(DATA.settings.hotkeys).find(k => (DATA.settings.hotkeys[k]||'').toLowerCase() === combo);
  if(!actionKey) return;
  const action = HOTKEY_ACTIONS.find(a=>a.key===actionKey);
  if(action){ e.preventDefault(); action.fn(); }
});
function startHotkeyCapture(actionKey, btn){
  btn.textContent = 'Press keys...';
  const handler = async (e)=>{
    if(['control','alt','shift','meta'].includes(e.key.toLowerCase())) return;
    e.preventDefault();
    if(!(e.ctrlKey||e.altKey||e.metaKey)){
      showToast('Include a modifier like Alt or Ctrl so it does not break normal typing');
      return;
    }
    document.removeEventListener('keydown', handler, true);
    DATA.settings.hotkeys[actionKey] = comboFromEvent(e);
    await saveData();
    refreshSettingsBody();
    showToast('Hotkey updated');
  };
  document.addEventListener('keydown', handler, true);
}


/* ===================== SIGN-IN GATE =====================
   Every CRM page opens behind this screen. It lifts only for a signed-in agency account that an
   approved agency account has approved. New sign-ups wait on the "pending" screen. */
let gateMode = 'signin';
let gateListenerAttached = false;
let gateNotice = '';

/* ---- client-side login rate limiter ---- */
const AUTH_FAIL_KEY = 'favze_auth_fails';
const AUTH_LOCK_KEY = 'favze_auth_lock';
const AUTH_MAX_FAILS = 5;
const AUTH_LOCK_MS   = 5 * 60 * 1000; // 5 minutes
function authRecordFail(email){
  const now = Date.now();
  let fails = {};
  try{ fails = JSON.parse(sessionStorage.getItem(AUTH_FAIL_KEY)||'{}'); }catch(e){}
  fails[email] = (fails[email]||0) + 1;
  try{ sessionStorage.setItem(AUTH_FAIL_KEY, JSON.stringify(fails)); }catch(e){}
  if(fails[email] >= AUTH_MAX_FAILS){
    try{ sessionStorage.setItem(AUTH_LOCK_KEY + '_' + email, String(now + AUTH_LOCK_MS)); }catch(e){}
  }
  return fails[email];
}
function authClearFails(email){
  try{
    const fails = JSON.parse(sessionStorage.getItem(AUTH_FAIL_KEY)||'{}');
    delete fails[email];
    sessionStorage.setItem(AUTH_FAIL_KEY, JSON.stringify(fails));
    sessionStorage.removeItem(AUTH_LOCK_KEY + '_' + email);
  }catch(e){}
}
function authIsLocked(email){
  try{
    const until = Number(sessionStorage.getItem(AUTH_LOCK_KEY + '_' + email)||'0');
    if(!until) return false;
    if(Date.now() < until) return Math.ceil((until - Date.now()) / 1000);
    sessionStorage.removeItem(AUTH_LOCK_KEY + '_' + email);
    return false;
  }catch(e){ return false; }
}
function ensureGateEl(){
  let el = document.getElementById('crmGate');
  if(!el){
    el = document.createElement('div');
    el.id = 'crmGate';
    el.style.cssText = 'position:fixed; inset:0; z-index:100000; display:flex; align-items:center; justify-content:center; padding:20px; background:linear-gradient(185deg,#031f3d,#04305f 70%,#052549); font-family:"DM Sans",system-ui,sans-serif; overflow:auto;';
    document.body.appendChild(el);
  }
  el.style.display = 'flex';
  return el;
}
function gateShell(inner){
  return `<div style="background:#fff; border-radius:16px; width:100%; max-width:380px; padding:34px 30px; text-align:center; box-shadow:0 20px 60px rgba(0,0,0,.35);">
    <div style="width:60px; height:60px; margin:0 auto 14px; border-radius:14px; background:#fff; border:1px solid #e3e9f1; box-shadow:0 2px 8px rgba(4,48,95,.12); display:flex; align-items:center; justify-content:center; overflow:hidden; padding:7px; box-sizing:border-box;"><img src="${FAVZE_MARK_DATAURI}" alt="Favze" style="width:100%; height:100%; object-fit:contain;"></div>
    <div style="font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:26px; color:#04305f; margin-bottom:6px;">Favze CRM</div>
    ${inner}
  </div>`;
}
function renderGate(state){
  const el = ensureGateEl();
  if(state==='checking'){
    el.innerHTML = gateShell(`<p style="font-size:13px; color:#5b6b80;">Checking your sign-in...</p>`);
    return;
  }
  if(state==='pending'){
    const email = agencySupabaseSession ? agencySupabaseSession.user.email : '';
    el.innerHTML = gateShell(`
      <p style="font-size:14px; font-weight:700; color:#04305f; margin:10px 0 8px;">Almost there</p>
      <p style="font-size:13px; color:#5b6b80; line-height:1.55; margin-bottom:6px;">${esc(email)} is created and waiting for approval from an approved Favze agency account.</p>
      <p style="font-size:12px; color:#8a97a8; margin-bottom:20px;">Once it is approved, tap Check again to open the CRM.</p>
      <button type="button" onclick="gateRecheck()" style="width:100%; padding:11px; border:none; border-radius:9px; background:#04305f; color:#fff; font-weight:700; font-size:13.5px; cursor:pointer; margin-bottom:8px;">Check again</button>
      <button type="button" onclick="gateSignOut()" style="width:100%; padding:11px; border:1px solid #d5dce6; border-radius:9px; background:#fff; color:#04305f; font-weight:700; font-size:13.5px; cursor:pointer;">Sign out</button>`);
    return;
  }
  const signup = gateMode==='signup';
  const tab = (m,label)=>`<button type="button" onclick="gateSetMode('${m}')" style="flex:1; border:none; border-radius:7px; padding:8px 0; font-size:12.5px; font-weight:700; cursor:pointer; ${gateMode===m?'background:#04305f; color:#fff;':'background:transparent; color:#5b6b80;'}">${label}</button>`;
  el.innerHTML = gateShell(`
    <div style="display:flex; gap:4px; background:#eef2f7; border-radius:10px; padding:4px; margin:14px 0 16px;">${tab('signin','Sign In')}${tab('signup','Sign Up')}</div>
    <p style="font-size:12.5px; color:#5b6b80; margin-bottom:16px;">${signup ? 'Create your account. An approved Favze agency account then approves it before the CRM opens.' : 'Sign in with your approved Favze agency account.'}</p>
    <div style="text-align:left; margin-bottom:12px;"><label style="font-size:11.5px; font-weight:700; color:#04305f;">Email</label><input id="gate_email" type="email" autocomplete="username" placeholder="you@favze.com" style="width:100%; margin-top:4px; padding:10px 12px; border:1px solid #d5dce6; border-radius:9px; font-size:14px;"></div>
    <div style="text-align:left; margin-bottom:12px;"><label style="font-size:11.5px; font-weight:700; color:#04305f;">Password</label><input id="gate_password" type="password" autocomplete="${signup?'new-password':'current-password'}" placeholder="••••••••" onkeydown="if(event.key==='Enter')gateSubmit()" style="width:100%; margin-top:4px; padding:10px 12px; border:1px solid #d5dce6; border-radius:9px; font-size:14px;"></div>
    <div id="gate_msg" style="font-size:12.5px; margin-bottom:12px; min-height:16px; color:#b42318;">${esc(gateNotice)}</div>
    <button id="gate_btn" type="button" onclick="gateSubmit()" style="width:100%; padding:12px; border:none; border-radius:9px; background:#04305f; color:#fff; font-weight:700; font-size:14px; cursor:pointer;">${signup?'Create Account':'Sign In'}</button>`);
  gateNotice = '';
}
function gateSetMode(m){ gateMode = m; gateNotice = ''; renderGate('form'); }
function gateMsg(text, good){
  const m = document.getElementById('gate_msg');
  if(!m) return;
  m.style.color = good ? '#067647' : '#b42318';
  m.textContent = text;
}
async function gateSubmit(){
  const email = (document.getElementById('gate_email')||{}).value.trim();
  const password = (document.getElementById('gate_password')||{}).value;
  if(!email || !password){ gateMsg('Enter both email and password.'); return; }
  if(gateMode==='signin'){
    const locked = authIsLocked(email);
    if(locked){ gateMsg(`Too many failed attempts. Try again in ${locked} seconds.`); return; }
  }
  const client = getSupabaseClient();
  if(!client){ gateMsg('The sign-in service did not load. Check your connection and refresh.'); return; }
  const btn = document.getElementById('gate_btn');
  if(btn){ btn.disabled = true; btn.style.opacity = '.7'; }
  try{
    let session = null;
    if(gateMode==='signup'){
      if(password.length < 12){ gateMsg('Use a password with at least 12 characters.'); return; }
      const { data, error } = await client.auth.signUp({ email: email.trim(), password });
      if(error){ gateMsg(error.message || 'Could not create that account.'); return; }
      if(!data.session){
        gateMode = 'signin';
        renderGate('form');
        gateMsg('Account created. Check your email to confirm it, then sign in.', true);
        return;
      }
      session = data.session;
    } else {
      const { data, error } = await client.auth.signInWithPassword({ email, password });
      if(error){
        const fails = authRecordFail(email);
        const remaining = AUTH_MAX_FAILS - fails;
        if(remaining <= 0){
          gateMsg('Too many failed attempts. Sign-in is locked for 5 minutes.');
        } else if(/confirm/i.test(error.message||'')){
          gateMsg('Confirm your email first. Check your inbox for the Favze confirmation link, then sign in.');
        } else {
          gateMsg(`That email and password combination was not recognized.${remaining <= 2 ? ` ${remaining} attempt${remaining===1?'':'s'} remaining before lockout.` : ''}`);
        }
        return;
      }
      authClearFails(email);
      session = data.session;
    }
    agencySupabaseSession = session;
    agencyAccountRequest = await ensureAgencyAccountRequest(session);
    await refreshAccountRequests();
    const open = await applyAuthGate();
    if(open){ render(); }
  }catch(err){
    console.error(err);
    gateMsg('Could not reach the sign-in service. Check your connection and try again.');
  }finally{
    const b = document.getElementById('gate_btn');
    if(b){ b.disabled = false; b.style.opacity = '1'; }
  }
}
async function gateRecheck(){
  if(!agencySupabaseSession) return applyAuthGate();
  agencyAccountRequest = await ensureAgencyAccountRequest(agencySupabaseSession);
  await refreshAccountRequests();
  const open = await applyAuthGate();
  if(open){ render(); } else { showToast('Still waiting on approval'); }
}
async function gateSignOut(){
  const client = getSupabaseClient();
  try{ if(client) await client.auth.signOut(); }catch(e){}
  agencySupabaseSession = null; agencyAccountRequest = null; allAccountRequests = [];
  gateMode = 'signin';
  await applyAuthGate();
}
async function applyAuthGate(){
  const client = getSupabaseClient();
  if(client && !gateListenerAttached){
    gateListenerAttached = true;
    client.auth.onAuthStateChange((ev)=>{
      if(ev==='SIGNED_OUT'){ agencySupabaseSession = null; agencyAccountRequest = null; setTimeout(applyAuthGate, 0); }
    });
  }
  if(agencySupabaseSession){
    if(!agencyAccountRequest) agencyAccountRequest = await ensureAgencyAccountRequest(agencySupabaseSession);
    if(agencyAccountRequest && agencyAccountRequest.approved && agencyAccountRequest.role==='agency'){
      const el = document.getElementById('crmGate');
      if(el) el.style.display = 'none';
      return true;
    }
    renderGate('pending');
    return false;
  }
  renderGate('form');
  return false;
}
// Password reset handler -- detects Supabase recovery token in URL hash
async function gateSubmitPasswordReset(){
  const pw = document.getElementById('reset_pw').value;
  const msg = document.getElementById('reset_msg');
  const btn = document.getElementById('reset_btn');
  if(pw.length < 12){ msg.textContent='Use at least 12 characters.'; return; }
  btn.disabled=true; btn.style.opacity='.7';
  const c = getSupabaseClient();
  const {error} = await c.auth.updateUser({password: pw});
  if(error){ msg.textContent=error.message||'Could not update password.'; btn.disabled=false; btn.style.opacity='1'; return; }
  msg.style.color='#067647'; msg.textContent='Password updated. Signing you in...';
  setTimeout(()=>{ window.history.replaceState(null,'',window.location.pathname); applyAuthGate(); },1200);
}
const _isRecoveryLink = (function handlePasswordReset(){
  // Support both hash-based (#type=recovery) and query-param-based (?code=...) reset links.
  // Supabase PKCE flow uses query params; older implicit flow uses hash fragments.
  const hash = window.location.hash;
  const search = window.location.search;
  const hashParams = new URLSearchParams(hash.replace(/^#/, ''));
  const searchParams = new URLSearchParams(search);
  const codeVal = searchParams.get('code');
  const isRecovery = hashParams.get('type') === 'recovery' || searchParams.get('type') === 'recovery' || (typeof codeVal === 'string' && codeVal.length > 10);
  if(!isRecovery) return false;
  const client = getSupabaseClient();
  if(!client) return false;
  // Show a "loading" state immediately so renderGate('checking') is blocked
  const el = ensureGateEl();
  el.style.display = 'flex';
  el.innerHTML = gateShell('<p style="font-size:14px; color:#04305f; text-align:center; margin:20px 0;">Loading reset form...</p>');
  client.auth.onAuthStateChange((event) => {
    if(event === 'PASSWORD_RECOVERY'){
      const el2 = ensureGateEl();
      el2.style.display = 'flex';
      el2.innerHTML = gateShell(`
        <p style="font-size:14px; font-weight:700; color:#04305f; margin:10px 0 8px;">Set a new password</p>
        <p style="font-size:13px; color:#5b6b80; margin-bottom:16px;">Choose a strong password with at least 12 characters.</p>
        <div style="text-align:left; margin-bottom:12px;"><label style="font-size:11.5px; font-weight:700; color:#04305f;">New Password</label><input id="reset_pw" type="password" autocomplete="new-password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" onkeydown="if(event.key==='Enter')gateSubmitPasswordReset()" style="width:100%; margin-top:4px; padding:10px 12px; border:1px solid #d5dce6; border-radius:9px; font-size:14px;"></div>
        <div id="reset_msg" style="font-size:12.5px; margin-bottom:12px; min-height:16px; color:#b42318;"></div>
        <button id="reset_btn" type="button" onclick="gateSubmitPasswordReset()" style="width:100%; padding:12px; border:none; border-radius:9px; background:#04305f; color:#fff; font-weight:700; font-size:14px; cursor:pointer;">Set Password</button>`);
    }
  });
  return true;
})();

if(!_isRecoveryLink) renderGate('checking');

// Sign Out button at the bottom of the sidebar
(function addSideSignOut(){
  const foot = document.getElementById('sideFoot');
  if(!foot || document.getElementById('sideSignOut')) return;
  const btn = document.createElement('button');
  btn.id = 'sideSignOut';
  btn.type = 'button';
  btn.textContent = 'Sign out';
  btn.style.cssText = 'display:block; width:calc(100% - 24px); margin:0 12px 14px; padding:9px 12px; border:1px solid rgba(255,255,255,.18); border-radius:8px; background:transparent; color:#c3d6ec; font-size:13px; font-weight:600; cursor:pointer; text-align:center;';
  btn.onmouseenter = ()=>{ btn.style.background = 'rgba(255,255,255,.08)'; btn.style.color = '#fff'; };
  btn.onmouseleave = ()=>{ btn.style.background = 'transparent'; btn.style.color = '#c3d6ec'; };
  btn.onclick = ()=>{ closeMobileSidebar(); gateSignOut(); };
  foot.insertAdjacentElement('afterend', btn);

  // Legal links (Accessibility & Privacy Policy)
  const legalLinks = document.createElement('div');
  legalLinks.id = 'sideLegalLinks';
  legalLinks.style.cssText = 'display:flex;gap:12px;justify-content:center;padding:0 12px 10px;';
  ['Accessibility|crm-accessibility.html','Privacy Policy|crm-privacy.html'].forEach(pair => {
    const [label, href] = pair.split('|');
    const a = document.createElement('a');
    a.href = href; a.textContent = label;
    a.style.cssText = 'font-size:11px;color:rgba(195,214,236,.6);text-decoration:none;';
    a.onmouseenter = ()=>{ a.style.color='#c3d6ec'; };
    a.onmouseleave = ()=>{ a.style.color='rgba(195,214,236,.6)'; };
    legalLinks.appendChild(a);
  });
  btn.insertAdjacentElement('afterend', legalLinks);
})();

// Sync status indicator + JSON export/import (added after auth gate opens via addSyncUI())
function addSyncUI(){
  if(document.getElementById('crmSyncStatus')) return;
  const signOutBtn = document.getElementById('sideSignOut');
  if(!signOutBtn) return;

  // Status line
  const status = document.createElement('div');
  status.id = 'crmSyncStatus';
  status.style.cssText = 'font-size:11px;text-align:center;padding:0 12px 6px;color:#6ee7b7;cursor:pointer;';
  status.title = 'Click to sync now';
  status.onclick = ()=>{ pullRemote(); };
  signOutBtn.insertAdjacentElement('beforebegin', status);

  // Export / Import row
  const row = document.createElement('div');
  row.style.cssText = 'display:flex;gap:6px;padding:0 12px 8px;';

  const exportBtn = document.createElement('button');
  exportBtn.type = 'button';
  exportBtn.textContent = 'Export data';
  exportBtn.style.cssText = 'flex:1;padding:6px 0;border:1px solid rgba(255,255,255,.18);border-radius:6px;background:transparent;color:#c3d6ec;font-size:11px;cursor:pointer;';
  exportBtn.onmouseenter = ()=>{ exportBtn.style.background='rgba(255,255,255,.08)'; exportBtn.style.color='#fff'; };
  exportBtn.onmouseleave = ()=>{ exportBtn.style.background='transparent'; exportBtn.style.color='#c3d6ec'; };
  exportBtn.onclick = ()=>{
    const blob = new Blob([JSON.stringify(DATA, null, 2)], {type:'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'favze-crm-backup-' + new Date().toISOString().slice(0,10) + '.json';
    a.click(); URL.revokeObjectURL(a.href);
  };

  const importBtn = document.createElement('button');
  importBtn.type = 'button';
  importBtn.textContent = 'Import data';
  importBtn.style.cssText = 'flex:1;padding:6px 0;border:1px solid rgba(255,255,255,.18);border-radius:6px;background:transparent;color:#c3d6ec;font-size:11px;cursor:pointer;';
  importBtn.onmouseenter = ()=>{ importBtn.style.background='rgba(255,255,255,.08)'; importBtn.style.color='#fff'; };
  importBtn.onmouseleave = ()=>{ importBtn.style.background='transparent'; importBtn.style.color='#c3d6ec'; };
  importBtn.onclick = ()=>{
    const inp = document.createElement('input');
    inp.type = 'file'; inp.accept = '.json,application/json';
    inp.onchange = async (e)=>{
      const file = e.target.files[0]; if(!file) return;
      try{
        const text = await file.text();
        const parsed = JSON.parse(text);
        if(!parsed.contacts){ showToast('That file does not look like a Favze CRM backup.'); return; }
        const ok = await showConfirmModal({ title: 'Restore backup', message: 'Replace ALL current CRM data with this backup? This cannot be undone.', confirmLabel: 'Restore', danger: true });
        if(!ok) return;
        DATA = parsed; ensureDataShape();
        await saveData();
        showToast('Data imported. Syncing to cloud…');
        knownRev = 0; dirtySync = true; saveSyncState();
        await pushRemote(true);
        render();
      }catch(err){ showToast('Import failed: ' + err.message); }
    };
    inp.click();
  };

  row.appendChild(exportBtn);
  row.appendChild(importBtn);
  signOutBtn.insertAdjacentElement('beforebegin', row);

  setSyncStatus('Syncing…', 'saving');
}

loadData();
