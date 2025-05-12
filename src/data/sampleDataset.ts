import { DatasetEntry } from '../types';

export const sampleDataset: DatasetEntry[] = [
  {
    id: '1',
    category: 'Non-Disclosure',
    originalText: 'The Recipient shall maintain the Confidential Information in strict confidence and shall not disclose, disseminate, or otherwise communicate such Confidential Information, in whole or in part, to any third party whatsoever, without the prior written consent of the Disclosing Party, which consent may be withheld in the Disclosing Party\'s sole and absolute discretion.',
    simplifiedText: 'You must keep all confidential information secret. You cannot share it with anyone else unless the other party gives you written permission first.',
    tags: ['confidentiality', 'disclosure', 'NDA']
  },
  {
    id: '2',
    category: 'Indemnification',
    originalText: 'To the fullest extent permitted by law, the Contractor shall indemnify, defend, and hold harmless the Owner, its officers, directors, shareholders, partners, representatives, agents and employees from and against any and all claims, damages, losses, and expenses, direct, indirect, or consequential (including but not limited to fees and charges of engineers, architects, attorneys, and other professionals and court costs) arising out of or resulting from the performance of the Contractor\'s work.',
    simplifiedText: 'If allowed by law, the contractor must protect the owner from any claims, damages, or costs that happen because of the contractor\'s work. This includes paying for lawyers, court fees, and other expenses.',
    tags: ['liability', 'indemnification', 'protection']
  },
  {
    id: '3',
    category: 'Termination',
    originalText: 'Either party may terminate this Agreement for material breach upon thirty (30) days written notice to the other party, provided that such breach remains uncured at the expiration of the notice period. In the event of termination by Company for Consultant\'s material breach, Consultant shall promptly refund to Company the portion of any fees prepaid by Company prorated to the effective date of termination.',
    simplifiedText: 'Either side can end this agreement if the other side seriously breaks the rules. They must send a written notice and give 30 days to fix the problem. If the company ends the agreement because of the consultant\'s serious breach, the consultant must return part of any money already paid, calculated up to the ending date.',
    tags: ['termination', 'breach', 'refund']
  },
  {
    id: '4',
    category: 'Payment Terms',
    originalText: 'Payment for services rendered shall be due and payable by Client to Service Provider within thirty (30) calendar days following Client\'s receipt of Service Provider\'s invoice. Any amount remaining unpaid following the thirty (30) day period shall accrue interest at a rate of one and one-half percent (1.5%) per month, or the maximum rate permitted by applicable law, whichever is less, from the due date until paid in full.',
    simplifiedText: 'You must pay for services within 30 days after receiving the invoice. If you pay late, you\'ll be charged 1.5% interest per month (or less if that\'s the maximum legal rate) on the unpaid amount until you pay everything.',
    tags: ['payment', 'interest', 'invoice']
  },
  {
    id: '5',
    category: 'Warranties',
    originalText: 'EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, AND COMPANY HEREBY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.',
    simplifiedText: 'Except for what\'s specifically promised in this agreement, the services are provided "as is" with no guarantees. The company makes no promises about the quality of services, their suitability for your needs, or that they won\'t violate any rights.',
    tags: ['warranty', 'disclaimer', 'liability']
  },
  {
    id: '6',
    category: 'Arbitration',
    originalText: 'Any dispute, controversy or claim arising out of or relating to this Agreement, or the breach, termination or invalidity thereof, shall be settled by arbitration in accordance with the UNCITRAL Arbitration Rules as at present in force. The appointing authority shall be the International Chamber of Commerce acting in accordance with the Rules adopted by the United Nations Commission on International Trade Law. The number of arbitrators shall be three. The place of arbitration shall be London, England. The language(s) to be used in the arbitral proceedings shall be English.',
    simplifiedText: 'If there\'s a disagreement about this agreement, it will be resolved through arbitration using UNCITRAL rules. The International Chamber of Commerce will appoint three arbitrators. The arbitration will take place in London, England, and will be conducted in English.',
    tags: ['dispute', 'arbitration', 'resolution']
  },
  {
    id: '7',
    category: 'Force Majeure',
    originalText: 'Neither party shall be liable for any failure to perform its obligations under this Agreement if such failure results from circumstances beyond that party\'s reasonable control, including but not limited to acts of God, natural disasters, terrorism, riots, war, epidemics, pandemics, action or inaction of government authorities, fire, flood, explosion, or other events of a similar or dissimilar nature that are beyond the reasonable anticipation and control of the parties, provided that financial inability in and of itself shall not be considered a force majeure event.',
    simplifiedText: 'Neither side is responsible for failing to meet their obligations due to events beyond their control, such as natural disasters, terrorism, war, epidemics, government actions, fires, or floods. However, simply not having enough money doesn\'t count as a force majeure event.',
    tags: ['force majeure', 'liability', 'extraordinary events']
  },
  {
    id: '8',
    category: 'Intellectual Property',
    originalText: 'All right, title and interest in and to any and all intellectual property, including but not limited to inventions, patents, trademarks, copyrights, trade secrets, know-how and proprietary information, whether or not patentable or registrable under patent, trademark, copyright or similar laws, made, conceived, reduced to practice or learned by Service Provider (either alone or jointly with others) during the course of providing Services to Client under this Agreement ("Inventions") will be the sole and exclusive property of Client.',
    simplifiedText: 'Any intellectual property created by the service provider while working for the client under this agreement belongs completely to the client. This includes inventions, patents, trademarks, copyrights, trade secrets, and any other proprietary information.',
    tags: ['intellectual property', 'ownership', 'inventions']
  },
  {
    id: '9',
    category: 'Limitation of Liability',
    originalText: 'IN NO EVENT SHALL EITHER PARTY BE LIABLE TO THE OTHER OR ANY THIRD PARTY FOR ANY LOSS OF USE, REVENUE, OR PROFIT OR LOSS OF DATA OR DIMINUTION IN VALUE, OR FOR ANY CONSEQUENTIAL, INCIDENTAL, INDIRECT, EXEMPLARY, SPECIAL, OR PUNITIVE DAMAGES WHETHER ARISING OUT OF BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, REGARDLESS OF WHETHER SUCH DAMAGE WAS FORESEEABLE AND WHETHER OR NOT SUCH PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.',
    simplifiedText: 'Neither party is responsible for the other party\'s lost profits, lost data, or other indirect damages, regardless of how they occur, even if they knew such damages might happen.',
    tags: ['liability', 'damages', 'limitation']
  },
  {
    id: '10',
    category: 'Governing Law',
    originalText: 'This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware, without giving effect to any choice or conflict of law provision or rule that would cause the application of laws of any jurisdiction other than those of the State of Delaware. Any legal suit, action, or proceeding arising out of or related to this Agreement or the matters contemplated hereunder shall be instituted exclusively in the federal courts of the United States or the courts of the State of Delaware.',
    simplifiedText: 'This agreement follows Delaware state laws. Any lawsuits related to this agreement must be filed only in federal courts or Delaware state courts.',
    tags: ['governing law', 'jurisdiction', 'venue']
  }
];

export const legalTerms: Record<string, string> = {
  "indemnify": "To compensate for loss or damage; to provide security for financial reimbursement to an individual in case of a specified loss incurred by the person",
  "hereinafter": "Referring to something that appears later in the document",
  "pursuant to": "In accordance with; following from",
  "notwithstanding": "Despite; in spite of",
  "whereby": "By which; through which",
  "forthwith": "Immediately; without delay",
  "heretofore": "Before this time; until now",
  "therein": "In that place, document, or matter",
  "ab initio": "From the beginning",
  "bona fide": "In good faith; genuine",
  "de facto": "In fact; in reality",
  "ex parte": "From one side only",
  "force majeure": "Unforeseeable circumstances that prevent someone from fulfilling a contract",
  "in perpetuity": "Forever; for all time",
  "prima facie": "At first sight; based on first impression",
  "pro rata": "Proportionally; according to an exactly calculated rate",
  "quid pro quo": "Something given in return for something else",
  "sine qua non": "An essential condition; a thing that is absolutely necessary",
  "status quo": "The existing state of affairs",
  "ultra vires": "Beyond the powers"
};