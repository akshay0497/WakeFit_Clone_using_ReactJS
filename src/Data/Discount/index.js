import UPI from '../../Asset/DiscountPartner/upi.webp'
import IDFC from '../../Asset/DiscountPartner/IDFC_logo.webp'
import ICICI from '../../Asset/DiscountPartner/icici-logo-2023.webp'
import Wake from '../../Asset/DiscountPartner/wakefit_logo_expanded.svg'
import YESBANK from '../../Asset/DiscountPartner/Yes_logo.webp'
import HDFCBANK from '../../Asset/DiscountPartner/HDFC_logo.webp'
import KOTAKBANK from '../../Asset/DiscountPartner/Kotak_Mahindra_logo.webp'
import Rewards from '../../Asset/DiscountPartner/twid-logo-20-sep.webp'
import Mobikwik from '../../Asset/DiscountPartner/mobikwik-logo-new.webp'

export const ContentData = [
    {id:1, src: UPI, dis: "Upto 78% OFF on MRP", tag: "UPI"},
    {id:2, src: IDFC, dis: "Extra 10% discount upto INR 1000 on cart value", tag: "Credit Cards"},
    {id:3, src: ICICI, dis: "Extra 5% discount upto INR 1000 on cart value", tag: "Amazon Pay ICICI Credit Cards"},
    {id:4, src: ICICI, dis: "Extra 5% discount upto INR 1500 on cart value", tag: "Netbanking "},
    {id:5, src: Wake, dis: "Upto 75% OFF on MRP", tag: "Transaction"},
    {id:6, src: YESBANK, dis: "Extra 5% discount upto INR 1500 on cart value", tag: "Amazon Pay ICICI Credit EMI Cards"},
    {id:7, src: ICICI, dis: "Extra 5% discount upto INR 1500 on cart value", tag: "UPI"},
    {id:8, src: HDFCBANK, dis: "Extra 6% discount upto INR 2000 on cart value", tag: "Credit and Debit EMI Cards"},
    {id:9, src: KOTAKBANK, dis: "Extra 5% discount upto INR 1500 on cart value", tag: "Credit EMI Cards"},
    {id:10, src: Wake, dis: "Upto 69% OFF on MRP", tag: "Transaction"},
    {id:11, src: Rewards, dis: "Cashback upto INR 2000", tag: "Twid Reward"},
    {id:12, src: Mobikwik, dis: "Cashback upto INR 1000", tag: "MobiKwik wallet"},
    {id: 13, dis: "View All Offers"}
];

export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }