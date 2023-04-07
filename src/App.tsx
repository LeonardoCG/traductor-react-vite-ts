import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Stack } from 'react-bootstrap'

import './App.css'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Iconst'
import { LanguageSelector } from './components/LenguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'

function App () {
  const { fromLanguage, toLanguage, fromText, result, interchangeLanguage, setFromLanguage, setToLanguage, setFromText, setResult } = useStore()
  
  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
              <TextArea
                type={SectionType.From}
                value={fromText}
                onChange={setFromText}
              />
          </Stack>
        </Col>
        
        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick=
          {interchangeLanguage}>
            <ArrowsIcon />
          </Button>
        </Col>
        
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage} 
              onChange={setToLanguage}
            />
              <TextArea
                type={SectionType.To}
                value={result}
                onChange={setResult}
              /> 
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
