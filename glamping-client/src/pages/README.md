DEL 1 – Backend og autentificering
1. Hvad er formålet med auth.route.js?
Den definerer route til login (/auth/signin) og sender requesten videre til login-logikken (signInUser).

2. Hvad gør funktionen signInUser i auth.handler.js?

Den tjekker brugerens email og adgangskode og returnerer en JWT-token, hvis login er korrekt.

3. Hvorfor bruger vi bcryptjs til adgangskoder, og hvad er forskellen på en hash og en
almindelig tekststreng?

Fordi bcryptjs hasher adgangskoder, så vi ikke gemmer dem som ren tekst. En hash er en uigenkendelig og ensrettet værdi — du kan ikke “af-hashe” den.

4. Hvad indeholder den JWT-token, der sendes tilbage til klienten?
Brugerens info som navn, email, rolle og billede — alt det vi skal bruge til at vide hvem der er logget ind.

5. Hvorfor bruger vi en try/catch-blok i signInUser-funktionen?
For at fange fejl som f.eks. hvis databasen fejler — så crasher serveren ikke, og vi kan sende en pæn fejlbesked.

6. Hvad sker der, hvis process.env.JWT_SECRET ikke er defineret?
Derfor tjekker vi om den findes og giver en fejl hvis den mangler.

DEL 2 – React-hooken useAuth
7. Hvad er formålet med useAuth-hooken?
At styre login, logout, token og brugerdata i frontend ét sted.

8. Hvordan gemmes token og brugerdata, så de overlever en opdatering/genindlæsning af
siden?
Vi bruger useLocalStorage, som gemmer token i browserens localStorage.

9. Hvordan ved app’en, om brugeren er logget ind? Hvilken variabel afgør det?
Variablen signedIn tjekker om der er en gyldig token gemt.

10. Hvorfor bruger vi jwt-decode, og hvad bruger vi det til?
For at læse indholdet af token, så vi kan få navn, rolle, billede osv. uden at kontakte serveren.

11. Forklar hvad signIn()-funktionen gør trin for trin.
Sender email + password til backend

Modtager JWT-token hvis login lykkes

Gemmer token i localStorage

Nulstiller email og password-felter

Viser bruger som logget ind

DEL 3 – Brug af login i komponent
12. Hvordan bruges useAuth-hooken i Login.jsx?
Den giver adgang til funktioner og data som email, signIn(), error, signedIn osv. — så Login.jsx holder sig simpel og logikken ligger i hooken

13. Hvad sker der, når brugeren klikker på knappen "Log ind"?
handleSubmit() kører → kalder signIn() → sender login-request → gemmer token hvis korrekt.

14. Hvordan vises fejl for brugeren, hvis login fejler?
Fejl gemmes i error fra useAuth og vises med en <p> under formularen.

DEL 4 – Refleksion og samarbejde
15. Hvilke dele af login-flowet forstod I bedst?
Forstod nogenlunde det med token, local storage men overordnet var det okay at lære hvis man bare lige tog det stille og roligt 

16. Var der noget, I synes var svært – og hvordan løste I det?
Tror der vare flere ting lige med at holde styr på også den vi skulle sammenkoble dine filer til vores var os lidt svært for det virkede ikke helt i starten

17. Hvordan fordelte I arbejdet i gruppen?
Jeg lavede alt kodningen og opsatte det med server og Github (Mathias) og Oliver var til stede, kikkede med osv også lærte vi det overordnet sammen 

18. Hvordan kunne I bruge dette login-system i et større projekt, fx med brugerroller eller
adgangsbegrænsede sider?
Jeg tænker hvis vi skulle lave noget med abonnoment eller hvis man skulle lave en side som brugte bruger som ligesom den opskrift side vi lavede osv, men tænker at der er mange sider man kunne bruge den slags login til 