/** @param {NS} ns */
export async function main(ns) {
// How much RAM each purchased server will have. In this case, it'll
// be 8GB.
const ram = 8;

// Iterator we'll use for our loop
const i = 0;

// Continuously try to purchase servers until we've reached the maximum
// amount of servers
while (i < getPurchasedServerLimit()) {
    // Check if we have enough money to purchase a server
    if (getServerMoneyAvailable("home") > getPurchasedServerCost(ram)) {
        // If we have enough money, then:
        //  1. Purchase the server
        //  2. Copy our hacking script onto the newly-purchased server
        //  3. Run our hacking script on the newly-purchased server with 3 threads
        //  4. Increment our iterator to indicate that we've bought a new server
        let hostname = purchaseServer("pserv-" + i, ram);
        scp("early-hack-template.script", hostname);
        exec("early-hack-template.script", hostname, 3);
        ++i;
    }
  }
}
