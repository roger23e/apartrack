Bot de trading cripto - Resumen de decisiones y plan inicial

1) Alcance y enfoque
- Mercado: Cripto (solo cripto para comenzar)
- Objetivo: Bot de trading algorítmico con backtesting, paper trading y luego real en testnet/mainnet
- Primer exchange recomendado: Bybit Testnet (también válido Binance Testnet)

2) Componentes clave (checklist de capacidades)
- Objetivo y alcance (mercados, horizontes, capital, restricciones)
- Estilo de estrategia (tendencia, reversión, arbitraje, market making, stat-arb)
- Datos (históricos y tiempo real; calidad, latencia, normalización)
- Investigación y señal (features, modelos/reglas, validación out-of-sample y walk-forward)
- Costos de transacción (comisiones, slippage, impacto, financiamiento)
- Gestión de riesgo (tamaño de posición, stops, límites, drawdown)
- Backtesting robusto (motor por eventos, órdenes realistas, fees, latencias)
- Evaluación (Sharpe/Sortino, MAR/Calmar, expectancy, estrés/sensibilidad)
- Paper trading (simulación con testnet/sandbox del exchange)
- Integración con broker/exchange (REST/WebSocket, sandbox, permisos, rate limits)
- Ejecución/OMS (enrutado, idempotencia, reintentos, reconciliación)
- Arquitectura (datos, señal, riesgo, ejecución; colas/mensajería; procesos separados)
- Infraestructura (lenguaje/SDK, contenedores, orquestación, NTP)
- Almacenamiento (series temporales/OLAP: Parquet/Timescale/DuckDB; backups)
- Observabilidad (logging estructurado, métricas/dashboards, alertas)
- Seguridad (gestión de secretos, cifrado, mínimo privilegio, rotación de claves)
- Cumplimiento/legal (ToS del exchange, límites regulatorios, fiscalidad)
- DevOps (CI/CD, tests, linting, versionado, feature flags)
- Fiabilidad (persistencia de estado, recuperación, health checks y watchdogs)
- Operación (runbooks, límites diarios, kill-switch, horarios)
- Gestión de capital (asignación por estrategia/activo, exposición, apalancamiento)
- Post-trade (PnL y atribución, informes, auditoría, reconciliación)
- Escalado (paralelismo, tolerancia a fallos, coste-rendimiento)
- Mantenimiento (revisión de modelos, detección de degradación, retraining)

3) APIs recomendadas
- Cripto (trading + datos): Binance, Bybit, Kraken, Coinbase Advanced, OKX, Deribit (opciones)
- Datos cripto (solo data): Kaiko, CoinAPI, CryptoCompare
- Librerías agregadoras: CCXT (JS/TS/Python, cripto), XChange (Java)
- Combos rápidos: CCXT + Binance/Bybit; Bybit Testnet recomendado para empezar

4) Lenguajes de programación: recomendación
- Principal: Python (ecosistema cuant grande, desarrollo veloz)
- Alternativas según caso:
  - TypeScript/Node.js (UI web en tiempo real, CCXT nativo)
  - Java/Kotlin (robustez institucional, FIX/QuickFIX)
  - Go (microservicios concurrentes, despliegues ligeros)
  - C++/Rust (latencia ultra-baja/HFT)

5) Opinión sobre PHP
- Veredicto: válido para API/panel y glue, no ideal para el core del bot
- Pros: web/APIs rápidas (Laravel/Symfony), ecosistema web sólido, deploy simple
- Contras: asincronía/streaming menos maduro, librerías cuant escasas, procesos 24/7 requieren más trabajo
- Si se usa: Swoole/ReactPHP/Amphp para IO asíncrona; Redis/Colas; separar módulos de señal y ejecución; híbrido con Python/Go para feeds/cálculo

6) Aplicación móvil (iOS + Android)
- Recomendado: React Native (TypeScript, Expo) o Flutter (Dart)
- Elegir RN si el equipo domina JS/TS; Flutter si se prioriza UI/rendimiento consistente
- Stacks:
  - React Native: TypeScript, Expo, react-query/zustand, expo-notifications, secure store, WebSocket
  - Flutter: riverpod/bloc, dio, web_socket_channel, secure storage, firebase_messaging

7) Primeros pasos (solo cripto)
- Elige exchange y testnet: Bybit Testnet recomendado
- Crea cuenta y API keys con permisos mínimos (trading, sin retiros)
- Anota rate limits, tipos de órdenes, símbolos, latencias WS/REST
- Stack base: Python 3.11 + ccxt/pybit, WebSocket, Parquet/DuckDB, logging estructurado, .env para secretos
- MVP Día 1: conectar WS de BTCUSDT, guardar ticks a Parquet, métrica de volatilidad 1s, paper trading básico en testnet

8) Stack sugerido en Python (resumen)
- Datos/Backtesting: polars/pandas, numpy, ta/vectorbt/backtesting.py
- Trading: ccxt (REST) y websockets/websocket-client (o pybit para Bybit)
- Almacenamiento: DuckDB + Parquet
- API interna: FastAPI
- Configuración/validación: pydantic, python-dotenv
- Orquestación: Docker, docker-compose
- Tests: pytest
- Observabilidad: logging estructurado, métricas (prometheus opcional)

9) Roadmap técnico inicial
- Scaffolding del proyecto y .gitignore
- Requirements, .env.example y README de setup
- Config y logging base
- Stream WS público (trades) de Bybit
- Escritor Parquet por lotes
- Métrica de volatilidad simple (1s)
- Cliente CCXT para órdenes en testnet (opcional al inicio)
- Instalación de dependencias y smoke check

10) Próximas acciones
- Confirmar Bybit Testnet y generar API keys (guardar en gestor de secretos)
- Iniciar repo del proyecto, crear módulos y dependencias
- Ejecutar stream de prueba y validar persistencia en Parquet
- Añadir métrica de volatilidad y paper trading mínimo

Notas
- Mantener secretos fuera del repositorio (.env, variables de entorno)
- Sincronizar reloj del sistema (NTP) para timestamps coherentes
- Empezar con límites conservadores y kill-switch operativo

Fin del documento.