import {Component, OnDestroy, OnInit} from '@angular/core';
import {Faq} from "../Interfaces/faq";
import {Subscription} from "rxjs";

const  FAQ  = [
  {
    title: "How do i book my tour?",
    answer: "To book your tour to Bhutan, you can utilize the services of any authorized Bhutanese tour operator. For instance, Bhutan Travel Guide-BTG ensures top-quality services. You can get in touch with us by sending an email to: vibranttours21@gmail.com."
  },
  {
    title: "Is a visa required for my visit to Bhutan?",
    answer: "The Tourism Levy Bill of 2022 was approved by the National Assembly on June 24, 2022. This new legislation brings changes to the fees associated with visiting Bhutan. The previous Sustainable Development Fee (SDF) of 65 USD per night has been raised to 200 USD per night. Additionally, the minimum daily package rate (MDPR) has been eliminated.Previously, visitors were required to pay a MDPR of 250 USD per person per night, with 65 USD allocated as the SDF. Under the new bill, tourists will now be responsible for paying 200 USD per person per night, along with a one-time visa fee of 40 USD per person, valid for 90 days. Furthermore, visitors will need to separately cover expenses for accommodation, meals, transportation, and guides."
  },
  {
    title: "What is the cost of a Bhutan visa?",
    answer: "For international tourists, there is a fee of USD $40 for the Bhutan visa. This fee can be paid in advance to your tour operator or travel agent. However, Indian passport (or VIC) holders, Bangladeshi nationals, and individuals from the Maldives are exempt from this fee."
  },
  {
    title: "What is the process for entering Bhutan?",
    answer: "Bhutan can be accessed through various airports including Bangkok, Delhi, Kolkata, Bagdogra, Bodh Gaya, Dhaka, Kathmandu, Guwahati, Singapore, and Mumbai. Currently, there are two airlines, Drukair and Bhutan Airlines, operating flights to Bhutan. In addition to air travel, there are three land border crossings along the Indian border that allow overland entry into the kingdom. These crossings are located at Phuentsholing, Gelephu, and Samdrup Jongkhar. It is important to note that all travel arrangements to Bhutan must be arranged through a local tour operator."
  },
  {
    title: "Is it necessary to make advance payment for my trip to Bhutan?",
    answer: "In order to make a payment for your trip to Bhutan, you will finalize your travel itinerary, select your preferred hotel, and clarify any other necessary details beforehand. Once these arrangements are in place, you will send the payment directly to the bank account of the tour operator established in Bhutan by the government. However, it's important to note that the tour operator does not have direct access to this account. The payment is processed through the Bhutan Tourism Council and is only received by your tour operator once your Bhutan tour is successfully completed."
  },
  {
    title: "From which location can I board a Bhutanese plane?",
    answer: "You have the flexibility to board Bhutanese planes at your convenience from various locations such as Bangkok, Delhi, Mumbai, Kathmandu, Bagdogra, Dhaka, or Singapore."
  },
  {
    title: "What is the currency used in Bhutan?",
    answer: "To obtain the local currency in Bhutan, you can exchange your currency at various banks within the country. It is not necessary to do so at the airport, and the process is typically quick. The Bhutanese currency is known as Ngultrum (Nu), and the current exchange rate is approximately 81 Ngultrum for 1 USD."
  },
  {
    title: "What distinguishes the cuisine in Bhutan from other culinary traditions?",
    answer: "Bhutanese cuisine is notable for its prominent use of chillies in almost every dish. Rice serves as the primary component in the majority of Bhutanese meals. In essence, the defining feature of Bhutanese cuisine is its spiciness, providing a distinct culinary experience."
  }
]

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.scss']
})
export class TransportationComponent implements OnInit, OnDestroy {

  faq: Faq[] = FAQ;
  subscription!: Subscription;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

}
