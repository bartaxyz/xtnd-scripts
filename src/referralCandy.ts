import * as md5 from "md5";

const initReferralCandy = () => {
  const appId = "nu1a0ru6vpnu7f3fr8ghiyt43";
  const accountSecret = "591621b6b1063c43604e71bdf8f00a96";

  const timestamp = +new Date();

  let orderNameElement: HTMLSpanElement = null;
  let orderEmailElement: HTMLSpanElement = null;
  let orderAmountElement: HTMLSpanElement = null;

  let orderName: string = "";
  let orderEmail: string = "";
  let orderAmount: string = "";

  const generateSignature = (
    email: string,
    firstName: string,
    amount: string
  ) => {
    return md5([email, firstName, amount, timestamp, accountSecret].join(","));
  };

  const initReferralCandyCode = () => {
    const [firstName, lastName] = orderNameElement.textContent.split(" ");
    const email = orderEmailElement.textContent.trim();
    const amount = getAmountFromCurrencyString(orderAmountElement.textContent);

    const generatedCode = `
      <div
        id="refcandy-mint"
        data-app-id=${appId}
        data-fname="${firstName}"
        data-lname="${lastName}"
        data-email="${email}"
        data-amount="${amount}"
        data-currency="USD"
        data-timestamp="${timestamp}"
        data-external-reference-id="93211001"
        data-signature="${generateSignature(email, firstName, amount)}"
      ></div>
      <script>(function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v;z=“script”;l=“refcandy-purchase-js”;c=“refcandy-mint”;p=“go.referralcandy.com/purchase/”;t=“data-app-id”;r={email:“a”,fname:“b”,lname:“c”,amount:“d”,currency:“e”,“accepts-marketing”:“f”,timestamp:“g”,“referral-code”:“h”,locale:“i”,“external-reference-id”:“k”,signature:“ab”};i=e.getElementsByTagName(z)[0];s=function(e,t){if(t){return”“+e+“=”+encodeURIComponent(t)}else{return”“}};d=function(e){return”“+p+h.getAttribute(t)+“.js?aa=75&“};if(!e.getElementById(l)){h=e.getElementById(c);if(h){o=e.createElement(z);o.id=l;a=function(){var e;e=[];for(n in r){u=r[n];v=h.getAttribute(“data-“+n);e.push(s(u,v))}return e}();o.src=“//“+d(h.getAttribute(t))+a.join(“&”);return i.parentNode.insertBefore(o,i)}}})(document);</script>
    `;

    console.log("Referral Candy:", generatedCode);

    const wrapperDiv = document.createElement("div");
    wrapperDiv.innerHTML = generatedCode;
    document.appendChild(wrapperDiv);
  };

  const getAmountFromCurrencyString = (amount: string) => {
    return amount.replace(/[^0-9.-]+/g, "");
  };

  const checkOrderElementsReady = () => {
    orderNameElement = document.getElementById("order-name");
    orderEmailElement = document.getElementById("order-email");
    orderAmountElement = document.getElementById("order-amount");

    if (!orderNameElement || !orderEmailElement || !orderAmountElement) {
      return false;
    }

    orderName = orderNameElement.textContent.trim();
    orderEmail = orderEmailElement.textContent.trim();
    orderAmount = orderAmountElement.textContent.trim();

    console.log(
      [
        ["full name", orderName].join(": "),
        ["email", orderEmail].join(": "),
        ["amount", orderAmount].join(": "),
      ].join("\n")
    );

    if (!orderName || !orderEmail || !orderAmount) {
      return false;
    }

    return true;
  };

  const interval = setInterval(() => {
    const elementsReady = checkOrderElementsReady();

    if (elementsReady) {
      clearInterval(interval);

      initReferralCandyCode();
    }
  }, 500);
};

if (location.pathname === "/order-confirmation") {
  initReferralCandy();
}
