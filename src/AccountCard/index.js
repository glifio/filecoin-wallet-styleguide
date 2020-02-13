import React, { forwardRef } from 'react'
import { string, func } from 'prop-types'
import { ADDRESS_PROPTYPE } from '../customPropTypes'
import { Box } from '../'

/*
 @ALEX - should we consider extending the ColoredContainer component for this?
*/

const truncate = string => `${string.slice(0, 4)}...${string.slice(-4)}`

const AccountCard = forwardRef(
  ({ address, alias, color, onAccountSwitch, ...props }, ref) => (
    <Box
      display="flex"
      flexDirection="column"
      width={11}
      height={11}
      borderRadius={2}
      bg="primary"
      boxShadow={1}
      ref={ref}
      {...props}
    >
      <div
        css={`
          margin-left: 12px;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        `}
      >
        <div
          css={`
            margin-top: 12px;
            display: flex;
            flex-direction: row;
            align-items: center;
          `}
        >
          <div
            css={`
              width: 50px;
              height: 48px;
              border: 3px solid #d9d0fe;
              display: flex;
              flex-direction: column;
              justify-content: center;
            `}
          >
            <p
              css={`
                font-weight: bold;
                color: #d9d0fe;
                font-size: 24px;
                align-self: center;
                font-family: RT Alias Fine Test;
              `}
            >
              Ac
            </p>
          </div>
          <p
            css={`
              margin-left: 12px;
              font-weight: bold;
              color: #d9d0fe;
              font-size: 24px;
              font-family: RT Alias Fine Test;
            `}
          >
            Account
          </p>
        </div>
        <div
          css={`
            margin-bottom: 24px;
          `}
        >
          <div>
            <p
              css={`
                font-weight: bold;
                color: #eeebfe;
                font-size: 64px;
                font-family: RT Alias Fine Test;
                font-weight: bold;
                margin: 0;
                height: 60px;
              `}
            >
              {alias}
            </p>
          </div>
          <div>
            <p
              css={`
                font-weight: bold;
                color: #e7e3fe;
                font-size: 24px;
                font-family: RT Alias Fine Test;
                font-weight: normal;
                margin: 0;
              `}
            >
              {truncate(address)}
            </p>
          </div>
        </div>
        <button
          onClick={onAccountSwitch}
          css={`
            margin-bottom: 12px;
            width: 90px;
            height: 36px;
            border: 1px solid #e9eeff;
            outline: none;
            background-color: Transparent;
            color: #d9d0fe;
            font-size: 18px;
            font-weight: bold;
            font-family: RT Alias Fine Test;
            cursor: pointer;
          `}
        >
          Switch
        </button>
      </div>
    </Box>
  )
)

AccountCard.propTypes = {
  /**
   * Filecoin address
   */
  address: ADDRESS_PROPTYPE,
  /**
   * Human readable alias of Filecoin address
   */
  alias: string.isRequired,
  /**
   * Sets background-color of the card
   */
  color: string,
  /**
   * Fired when the "switch" button is clicked
   */
  onAccountSwitch: func.isRequired
}

AccountCard.defaultProps = {
  color: 'white'
}

AccountCard.displayName = 'AccountCard'

export default AccountCard
