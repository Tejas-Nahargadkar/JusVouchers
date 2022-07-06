import React from "react";
import "./AboutUs.css";
import arrow from "../asset/arrow.png";
import rectangle01 from "../asset/rectangle01.png";
import rectangle02 from "../asset/rectangle02.png";
import dotarrow from "../asset/dotarrow.png";
import binoculers from "../asset/binoculars.png";
import bullseye from "../asset/bullseye-arrow.png";
import vector from "../asset/vectoraboutus.png";
export default function AboutUs() {
  return (
    <div className="AboutUs-Container">
      <div className="AboutUs-Banner">
        <div className="AboutUs-Image">
          <img src={vector} alt="" />
          <h1>Who We Are </h1>
        </div>
        <div className="AboutUs-Banner-Header">
          <h1>About Us</h1>
          <h2>Huge Discounts on Everything!</h2>
        </div>
        <div className="Dot-Arrow-points-container">
          <div className="Upperspan">
            <span></span>
          </div>
          <div className="Dot-arrow-col">
            <div className="Dot-arrow-row">
              <img src={dotarrow} alt="" />
              <p>
                You are a business that wants to market amazing offers to grow
                your ROI? We have got you covered.
              </p>
            </div>
            <div className="Dot-arrow-row">
              <img src={dotarrow} alt="" />
              <p>
                If you are a shopper or want to buy something with discounts,
                we’ve got your back boo!
              </p>
            </div>
            <div className="Dot-arrow-row">
              <img src={dotarrow} alt="" />
              <p>
                To make saving money easier, JusVouchers Portal offers you the
                biggest discounts on leading brands, with over 10,000 deals
                available every day. With JusVouchers Portal, you can save money
                while shopping. How? It's as simple as searching for your
                favorite brand and taking advantage of the best available deals
                to get your money back.
              </p>
            </div>
            <div className="Dot-arrow-row">
              <img src={dotarrow} alt="" />
              <p>
                With JusVouchers, you'll never have to worry about a thing when
                it comes to securing the best deals on your favorite items from
                all the businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="vision-mission-container">
        <div className="Vision-mission-Card">
          <div className="Vision-mission-Card-Image">
            <img src={binoculers} alt="" />
            <h1>Our Vision</h1>
          </div>
          <div className="Triangle-span">
            <span></span>
          </div>
          <div className="Vision-mission-card-content">
            <p>
              JusVouchers will make sure you never miss a chance to save money
              when shopping for things that will become a part of your everyday
              life from top brands and local retailers! And we will help your
              brand grow bigger and bigger with the best offers for your
              customers.
            </p>
          </div>
        </div>
        <div className="Vision-mission-Card">
          <div className="Vision-mission-Card-Image">
            <img src={bullseye} alt="" />
            <h1>Our Mission</h1>
          </div>
          <div className="Triangle-span">
            <span></span>
          </div>
          <div className="Vision-mission-card-content">
            <p>
              It is our mission to provide every customer with top-notch
              services and genuine savings, all with the purpose of making sure
              that your shopping list is as inexpensive as possible.The
              company's creators have a knack for locating the best discounts on
              everything they buy and the best offers for the vendors to market
              their company. So why not spread the happiness around to everyone
              else in the store? They also understand the plight of business
              owners and have therefore extended the portal to businesses for
              diverse offline and online marketing.
            </p>
          </div>
        </div>
      </div>
      <div className="Saving-tips-Container">
        <div className="Saving-tips-Header">
          <h2>Smart saving money tips</h2>
        </div>
        <div className="Saving-tips-Row">
          <div className="Saving-tips-Img">
            <span>01</span>
          </div>
          <div className="Saving-tips-arrow">
            <img src={arrow} alt="" />
          </div>
          <div className="Saving-tips-content">
            <p>
              Shopping is one of our favorite past times. Finding the ideal
              dress and shoes can make or break a wedding day, and we've all
              been there. For this reason, Vouchers Portal places infinite
              discounts and offers on top of your shopping list - it's like a
              cherry on top of the cake!
            </p>
          </div>
        </div>
        <div className="Saving-tips-Row">
          <div className="Saving-tips-Img">
            <span>02</span>
          </div>
          <div className="Saving-tips-arrow">
            <img src={arrow} alt="" />
          </div>
          <div className="Saving-tips-content">
            <p>
              To ensure that every shopping trip ends with a joyful cart and
              that your favorite products fit snugly in your wallet, we provide
              all the tools you need. Take a look at things through our
              customers' eyes!
            </p>
          </div>
        </div>
        <div className="Saving-tips-Row">
          <div className="Saving-tips-Img">
            <span>03</span>
          </div>
          <div className="Saving-tips-arrow">
            <img src={arrow} alt="" />
          </div>
          <div className="Saving-tips-content">
            <p>
              For example, let's assume you're planning to get the latest gaming
              laptop so that you can play your favorite games whenever you want.
              You compare the greatest options, such as Asus, Lenovo, and Dell,
              and discover just what you're looking for. It's all about the
              cost.
            </p>
          </div>
        </div>
        <div className="Saving-tips-Row">
          <div className="Saving-tips-Img">
            <span>04</span>
          </div>
          <div className="Saving-tips-arrow">
            <img src={arrow} alt="" />
          </div>
          <div className="Saving-tips-content">
            <p>
              But if you're a savvy shopper, you can take advantage of our
              coupons to get the most out of your shopping trip.
            </p>
          </div>
        </div>
        <div className="Saving-tips-Row">
          <div className="Saving-tips-Img">
            <span>05</span>
          </div>
          <div className="Saving-tips-arrow">
            <img src={arrow} alt="" />
          </div>
          <div className="Saving-tips-content">
            <p>
              But what if you're not successful in finding the perfect match?
              There's nothing to be concerned about! We offer a wide variety of
              retailers, from big-name brands to small-town merchants, that are
              known for providing excellent service and creative products at
              reasonable prices.
            </p>
          </div>
        </div>
        <div className="Saving-tips-Row">
          <div className="Saving-tips-Img">
            <span>06</span>
          </div>
          <div className="Saving-tips-arrow">
            <img src={arrow} alt="" />
          </div>
          <div className="Saving-tips-content">
            <p>
              So, here's a simple strategy that can make you a savvy shopper: Go
              through the brands, locate the best one, use the discount to
              obtain the greatest deal, and fill your cart with your wishlist at
              fantastic prices!
            </p>
          </div>
        </div>
      </div>
      <div className="WhyChooseUs-Container">
        <div className="WhyChooseUs-Header">
          <h2>Why Choose Us</h2>
        </div>
        <div className="WhyChooseUs-Row">
          <div className="Block-Content">
            <p>
              We have only one word to offer: discounts! To help you keep up
              with the current trends in everything from fashion and technology
              to food delivery, home appliances, Healthcare, and properties. We
              believe everything you buy must come with a discount, an offer
              that makes you delighted to buy it! Jus Vouchers helps you with a
              wide array of discounts for any industry! You’ve heard it right!
              Healthcare? We’ve got it covered.
            </p>
            <p>
              For construction materials? we offer discounts! Clothes, A big
              yes! We've put together a list of the top websites and blogs to
              keep you up to date on all the latest news. How does this work?
              Simply put, you can reduce the cost by applying the coupon code
              that saves you the most money in a matter of seconds. What is our
              promise to you? It will all be worth it in the end!Jus Vouchers
              helps businesses get customers, retain the previous customers, and
              spread the word for your business far and wide! Want to grow your
              marketing strategies for your businesses.
            </p>
            <p>
              Contact us today! To ensure that shopping is as enjoyable wherever
              you travel, Vouchers Portal offers a wide range of deals and
              discounts from some of the world's most popular and well-known
              businesses, big, medium and small. But that's not all there is to
              know about us! You can count on us to provide you with everything
              you need for a successful shopping binge, including a wide range
              of products of the highest quality at the lowest possible costs,
              as well as legitimate discounts. To ensure your business get the
              best marketing strategies Jus Vouchers will help you every step of
              the way.
            </p>
          </div>

          <div className="Rectangle-Content-Col">
            <div className="Rectangle-Content-row">
              <img src={rectangle01} alt="" />
              <p>
                To ensure that shopping is as enjoyable wherever you travel,
                Vouchers Portal offers a wide range of deals and discounts from
                some of the world's most popular and well-known businesses, big,
                medium and small. But that's not all there is to know about us!
              </p>
            </div>
            <div className="Rectangle-Content-row">
              <img src={rectangle02} alt="" />
              <p>
                You can count on us to provide you with everything you need for
                a successful shopping binge, including a wide range of products
                of the highest quality at the lowest possible costs, as well as
                legitimate discounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
