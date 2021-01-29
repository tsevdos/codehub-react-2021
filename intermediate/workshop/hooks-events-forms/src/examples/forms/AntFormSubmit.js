import React, { useState } from "react";
import { Form, Input, Button, Typography, List, Divider } from "antd";

const { Title } = Typography;

async function seacrhSWCharacter(character) {
  try {
    const res = await fetch(
      `https://swapi.dev/api/people/?search=${character}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const AntDesignFormSubmit = () => {
  const [character, setCharacter] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const updateCharacter = (e) => {
    setCharacter(e.target.value);
  };
  const handleSearch = async () => {
    const response = await seacrhSWCharacter(character);
    setSearchResults(response.results);
  };

  return (
    <div>
      <Title>Ant Design form submit</Title>
      <Form layout="inline">
        <Form.Item label="Star Wars character search:">
          <Input
            placeholder="type to search"
            value={character}
            onChange={updateCharacter}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSearch}>
            Search
          </Button>
        </Form.Item>
      </Form>
      <Divider />

      {searchResults.length > 0 && (
        <List
          size="large"
          header={<Title level={4}>Results</Title>}
          bordered
          dataSource={searchResults}
          style={{ background: "#fff" }}
          renderItem={({ name, gender }) => (
            <List.Item>
              name: {name} / gender: {gender}
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default AntDesignFormSubmit;
