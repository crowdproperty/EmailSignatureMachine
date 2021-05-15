var clipboard = new Clipboard(".slc");

var searchBlock = document.getElementById("hollySignature");
$searchBlock = $(searchBlock);

function generateSig() {
  var name = document.getElementById("full-name").value,
    title = document.getElementById("title").value,
    member = $('input[name="member"]:checked').val();
    phone = document.getElementById("phone").value;

  $searchBlock.find(".employee-name").text(name);
  $searchBlock.find(".employee-title").text(title);

//other no number
if (phone == '' && member == "human"){
  $searchBlock.find(".employee-number").text("020 3012 0161");
    $(".oi").attr(
      "src",
      "https://www.crowdproperty.com/assets/images/signature/bnr.png"
    );
  }
  // lender with nmbr
  else if (phone != '' && member == "human"){ 
    $searchBlock.find(".employee-number").text(phone);
    $(".oi").attr(
      "src",
      "https://www.crowdproperty.com/assets/images/signature/bnr.png"
    );
  }
  //brwr no number
  else if (phone == '' && member != "human" ){
    $searchBlock.find(".employee-number").text("020 3012 0166");
    $(".url").attr(
      "href",
      "https://www.crowdproperty.com/borrowers"
    );
    $(".oi").attr(
      "src",
      "https://www.crowdproperty.com/assets/images/signature/bnr_brwr.png"
    );

  }
  // brwr with  number
  else if (phone != '' && member != "human"){ 
    $searchBlock.find(".employee-number").text(phone);
    $(".url").attr(
      "href",
      "https://www.crowdproperty.com/borrowers"
    );
    
    $(".oi").attr(
      "src",
      "https://www.crowdproperty.com/assets/images/signature/bnr_brwr.png"
    );
  }
  
  $("button").show();
}
clipboard.on("success", function (e) {
  $("#js-copy")
    .text("Copied")
    .addClass("has-background-success-light has-text-success");
});

clipboard.on("error", function (e) {
  console.log(e);
});

 