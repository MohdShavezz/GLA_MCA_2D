localStorage:

	• Stores data in the browser permanently
	• Data does not expire even after browser close
	• Storage limit : 5-10 MB
	• Data is stored as string only
	• Accessible via JavaScript
	Use cases:
	• Auth tokens
	• Caching API data

Commands:

Set item
localStorage.setItem("name", "Shavez");

Get item
localStorage.getItem("name");

Remove specific item
localStorage.removeItem("name");

Clear all storage
localStorage.clear();

Get key by index
localStorage.key(0);

Length
localStorage.length;

Store Objects (JSON)
Stringify (store object)
const user = { id: 1, role: "admin" };
localStorage.setItem("user", JSON.stringify(user));

Parse (read object)
const data = JSON.parse(localStorage.getItem("user"));
console.log(data.role);

sessionStorage:

	• Stores data for one tab/session
	• Data is cleared when tab is closed
	• Storage limit ≈ 5 MB 
           Use cases
	• Temporary login/session data
	• One-time user actions

Commands (Same as localStorage)

What are Cookies?

	• Small data stored in browser
	• Sent to server with every HTTP request
	• Max size ≈ 4 KB
	• Can have expiry
	• Used by server & client

Use cases

	• Authentication
	• Session tracking

Set Cookie
document.cookie = "username=Shavez";

Set Cookie with Expiry
document.cookie = "token=abc123; expires=Fri, 31 Dec 2026 12:00:00 UTC";
