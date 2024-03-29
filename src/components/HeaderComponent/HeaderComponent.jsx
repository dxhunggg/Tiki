import React from "react";
import { Col, Row } from "antd";
import {
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperTestHeader,
  WrapperTextHeaderSmall,
} from "./style";
import Search from "antd/es/input/Search";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WrapperTestHeader>TIKI LAZADA</WrapperTestHeader>
        </Col>
        <Col span={12}>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            //onSearch={onSearch}
          />
        </Col>
        <Col span={6} style={{ display: "flex", gap: "20px" }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "30px", color: "#fff" }} />

            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng kí</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
