# ConnecTable
### Anforderungen

- Multitouch-Gerät, welches horizontal einstellbar ist. Hierfür wurde (Gerätename Fernseher) verwendet mit der Multitouch Frame PQLabs G4 Software (https://www.pqlabs.com/support-touch-screen.html)
- Die Software muss auf dem Gerät installiert sein: https://www.pqlabs.com/support-touch-screen.html
- Auflösung von 3072 × 1920 (verwendetes Gerät MacBook Pro 2019)

> [!IMPORTANT]
> Der Prototyp ist aktuell zugeschnitten auf diese Geräte und kann bei Nutzung anderer Geräte abweichen. Dies ist der erste funktionierende Prototyp für das Projekt “connecTable” und wurde in diesem Schritt nur für diese Geräte entwickelt.


## Schritt 1: Projekt klonen und öffnen

1. Klone das Projekt aus dem Github-Repository oder lade die ZIP-Datei runter
2. Öffne das Projekt in deinem Code-Editor (Empfohlen: Visual Studio Code)
3. Sichtbar müssen 2 Ordner sein: backend & frontend


## Schritt 2: Multitouch Gerät verbinden

1. Schließe das Multitouch Gerät an deinen Laptop an.
   - Hier wurde ein HDMI Kabel für den Anschluss an den Fernseher verwendet
   - Für die Verbindung des Touch-Treibers wurde ein USB Kabel verwendet
2. Der Bildschirm deines Laptops muss auf dem Multitouch Gerät sichtbar sein und sollte auf Touch Bewegungen auf dem Display reagieren.


## Schritt 3: Starten des TUIO-Clients

Um Multitouch verwenden zu können muss zunächst der TUIO-Client gestartet werden, um die Daten des Multitouch Treibers abfangen und nutzen zu können.

1. Öffne hierfür dein Terminal
2. Gebe folgende Befehle ins Terminal ein, um den TUIO-Client zu starten

```bash
cd backend
npm install
node tuio-client.js
```

3. Wird folgendes angezeigt, wurde der Client erfolgreich gestartet:

```bash
Listening for TUIO messages on 127.0.0.1:3333
Server is running on [http://localhost:3000](http://localhost:3000/)
```


## Schritt 4: Starten des Interfaces

1. Öffne ein neues Terminal Fenster
   
> [!IMPORTANT]
> Der TUIO-Client muss während der Nutzung des Prototypens weiterhin laufen. Schließe diesen erst, wenn du das gesamte Projekt schließen möchtest.

2. Wenn du dich noch im backend Ordner befindest gebe folgenden Befehl ein. Dann müsstest du dich wieder am Anfang des Ordners befinden und zwei Ordner sehen: backend & frontend

```bash
cd ..
```

3. Gebe folgenden Befehl ins Terminal ein:

```bash
cd frontend
```

> [!NOTE]
> Für den Prototypen und die Darstellung der Map wurde die API von Mapbox verwendet. Um die Map aufzurufen muss ein Token hinzugefügt werden. Diesen findest Du in der Betriebsanleitung im Abgabeordner.

4. Im Frontend Ordner erstelle eine neue Datei mit der Benennung .env.local

```bash
touch .env.local
```

5. In dieser Datei füge folgende Zeile hinzu:

```toml
REACT_APP_MAPBOX_TOKEN={Füge hier den richtigen Token ein}
```

6. Nun gehe wieder zurück ins Terminal und gebe folgende Befehle ein, um das Interface zu starten:

```bash
npm install
npm start
```

Nun öffnet sich das Interface in deinem Browser

7. Stelle deinen Browser nun so ein, dass er auf Vollbildmodus ist. Es soll nur das Interface angezeigt werden, d.h. keine Tabbar oder weitere Elemente des Browsers. 

> [!TIP]
> Opera: Shift + command + F\
> Chrome: Unter View entferne den Haken bei “Always Show Toolbar in Full Screen”\
> Safari: Unter View entferne den Haken bei “Always Show Toolbar in Full Screen”\

> [!NOTE]
> Das Ausblenden der Browserelemente und Anzeigen des Interfaces im Vollbildmodus dient dem zweiten Prototypen, da dieser aktuell auf statische Punkte eingestellt ist und auf einen Vollbildmodus angewiesen ist.

Wenn alle Schritte erfolgreich ausgeführt wurden kannst du nun die Prototypen nutzen. Standardmäßig wird der erste Prototyp, die Map, angezeigt.


## Schritt 5: Prototyp wechseln

1. Um zwischen den Prototypen zu wechseln, klicke auf den Button in der unteren rechten Ecke.  Dieser bringt dich zum zweiten Prototypen, dem Multitouch Test, und zurück.
