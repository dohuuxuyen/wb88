import React from "react";
import "./footer.css";
import { FaPhoneAlt, FaCcVisa, FaCcPaypal, FaAmazonPay } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-list">
        <div className="footer-item">
          <div className="footer-title">Các thông tin khác</div>
          <a href="/">Tin tức sự kiện</a>
          <a href="/">Liên hệ</a>
          <a href="/">Tuyển dụng</a>
          <a href="/">Thông tin về WB88</a>
        </div>
        <div className="footer-item">
          <div className="footer-title">Hỗ trợ khách hàng</div>
          <a href="/">Chính sách đổi hàng</a>
          <a href="/">Chính sách chất lượng</a>
          <a href="/">Chính sách bảo mật</a>
          <a href="/">Biểu phí vận chuyển</a>
          <a href="/">Trung tâm dịch vụ bảo hàng</a>
        </div>
        <div className="footer-item">
          <div className="footer-title">Tổng đài hỗ trợ CSKH</div>
          <p>Các ngày trong tuần từ 8:00 - 21:00</p>
          <div className="footer-phone">
            <FaPhoneAlt className="footer-icon_phone" />
            <p>1900 0000</p>
          </div>
          <p className="footer-pay">Phương thức thanh toán</p>
          <div className="footer-wrapper">
            <FaCcVisa className="footer-pay_icon" />
            <FaCcPaypal className="footer-pay_icon" />
            <FaAmazonPay className="footer-pay_icon" />
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-title">Tổng đài bán hàng online</div>
          <p>Các ngày trong tuần từ 8:00 - 21:00</p>
          <div className="footer-phone">
            <FaPhoneAlt className="footer-phone_icon" />
            <p>1900 1111</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
