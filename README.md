markdown
# PG-Captive-Portal
A lightweight splash page for the lab Wi-Fi that asks guests for their name & e-mail, logs the visit, and then unlocks internet access.

---

## Project Scope
Users connecting to the “Lab Guest” SSID will be redirected to this portal.  
They must:

1. Enter **first name**, **last name**, **e-mail**
2. Tick **Terms & Conditions**
3. Click **Connect**

The backend stores the data (18-month retention planned) and whitelists the device.

---

## ✨ Quick Start (Dev)

bash
# 1 Install PHP CLI
brew install php              # macOS
sudo apt install php-cli    # Debian/Ubuntu

# 2 Run from project root
php -S 0.0.0.0:9000 -t .  # Or a diffrent port

# 3 Open the splash page
open http://localhost:9000/index.html
# or from another device:
# http://<your-Mac-IP>:9000/index.html


<img width="1709" alt="Splash Page" src="https://github.com/user-attachments/assets/bc3c673f-286e-4a63-a338-99f563b917f4" />

<img width="1710" alt="Success Page" src="https://github.com/user-attachments/assets/eb293860-a640-42ad-a345-551df1324f3e" />


**Stack**

* PHP 8.2+ (built-in web server)
* HTML / CSS / Vanilla JS (no framework yet)
* Local MySQL 8 (planned; currently plain‐text log)

## Road Map
•	Static page & PHP stub — *Danial*
•	Express + MongoDB handler with TTL index — *Kumail*
•	MAC / IP whitelist hook into Nodogsplash (Network team)
•	TLS certificate + guest VLAN pilot
•	NetFlow logging → Elastic dashboards


![image](https://github.com/user-attachments/assets/f47f5bc4-89e9-47a3-9c9d-84234a255e8c)


PG-captive-portal/
│ index.html  splash form
│ success.html
│
├─ assets/    CSS
├─ js/        validate.js
└─ backend/
   ├─ submit.php    demo handler
   └─ log.txt       captured data


Resources:
https://en.wikipedia.org/wiki/Captive_portal 

https://github.com/jee1mr/captive-portal 

