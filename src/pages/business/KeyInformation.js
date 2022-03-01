import React from 'react';
import styled from 'styled-components';

function KeyInformation({ changeActive, data }) {
  return (
    <Wrapper>
      <div className="txt">
        <p>
          In order for a company to be eligible to seek matched funding from the
          Future Fund, this investment round must be on the convertible loan
          terms that have been prescribed by the Future Fund for this purpose.
          These terms differ to our normal ‘advanced subscription agreements’.e
        </p>
      </div>
      <div className="txt">
        <p>
          Given this product differs from most campaigns on Seedrs, we urge all
          investors, including regular Rabar investors, to read the information
          below and ensure you understand the terms in full before making your
          investment.
        </p>
      </div>
      <div className="txt">
        <p>
          1. Key terms You will see a term sheet attached to this Campaign in
          the Documents section which sets out the key terms of the convertible
          loan and you can see the full document prescribed by the Future Fund
          here: https://www.british-business-bank.co.uk/ourpart....
        </p>
      </div>
      <div className="txt">
        <p>
          A summary of the key terms is set out below, but should be read in
          conjunction with the term sheet: Discount: 25%
        </p>
      </div>
      <div className="txt">
        <p>
          Interest: 8% per annum, non-compounding. On conversion events, the
          company can choose to repay the interest or convert it to equity
          (generally without the discount). See the Term Sheet for more details.
        </p>
      </div>
      <div className="txt">
        <p>
          Redemption Premium: An amount equal to 100% of the principal loan
          amount
        </p>
      </div>
      <div className="txt">
        <p>Valuation Cap: £35,000,000</p>
      </div>
      <div className="txt">
        <p>
          Qualifying Equity Financing. The convertible loan will automatically
          convert on an equity financing raising at least the total
        </p>
      </div>
      <div className="txt">
        <p>
          loan amount, at the lowest share price of equity financing less the
          Discount [or, if lower, the Valuation Cap share price].
        </p>
      </div>
      <div className="txt">
        <p>Maturity Date: 36 months from signing convertible loan agreement.</p>
      </div>
      <div className="txt">
        <p>
          The default position is on the maturity date is that the loan will
          convert to equity unless the investor majority elect to redeem.
        </p>
      </div>
      <div className="txt">
        <p>
          If redeemed, the company will repay the principal together with the
          Redemption Premium. If converted, the conversion price will be at the
          most recent funding round share price less the Discount, provided that
          funding
        </p>
      </div>
      <div className="txt">
        <p>
          round happened after 20 April 2020 and was at least a quarter of the
          size of the convertible loan investment. If no such funding
        </p>
      </div>
      <div className="txt">
        <p>
          round has occurred, conversion will be at the share price of the last
          funding round prior to 20 April 2020 (no Discount).
        </p>
      </div>
      <div className="txt">
        <p>Or, if lower, at the Valuation Cap share price.</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 2.5rem;
  padding-left: 3.5rem;
  .txt {
    margin-bottom: 1.5rem;
    width: 88%;
  }
`;

export default KeyInformation;
