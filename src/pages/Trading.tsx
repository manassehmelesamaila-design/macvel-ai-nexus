import { useState, useMemo } from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  BarChart3, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft,
  Search,
  Settings2,
  Lock,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

const mockMarketData = [
  { time: "00:00", btc: 92000, eth: 3200, gold: 2350 },
  { time: "04:00", btc: 93500, eth: 3150, gold: 2365 },
  { time: "08:00", btc: 95000, eth: 3300, gold: 2380 },
  { time: "12:00", btc: 94200, eth: 3450, gold: 2375 },
  { time: "16:00", btc: 96800, eth: 3600, gold: 2405 },
  { time: "20:00", btc: 98400, eth: 3550, gold: 2420 },
  { time: "23:59", btc: 97900, eth: 3650, gold: 2415 },
];

const assets = [
  { symbol: "BTC", name: "Bitcoin", price: "$97,942.50", change: "+4.2%", up: true },
  { symbol: "ETH", name: "Ethereum", price: "$3,652.12", change: "+2.1%", up: true },
  { symbol: "XAU", name: "Gold Spot", price: "$2,415.80", change: "-0.5%", up: false },
  { symbol: "AAPL", name: "Apple Inc.", price: "$189.43", change: "+1.2%", up: true },
  { symbol: "NVDA", name: "Nvidia", price: "$920.15", change: "-1.8%", up: false },
];

export default function Trading() {
  const [selectedAsset, setSelectedAsset] = useState("BTC");

  return (
    <div className="space-y-6 pb-20">
      {/* Trading Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <TrendingUp className="text-green-500" />
            Macvel Trading Terminal
          </h1>
          <p className="text-muted-foreground">Secure market access for Stocks, Crypto, and Forex.</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20 px-3 py-1">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
            Market Open
          </Badge>
          <Button variant="outline" size="icon"><Settings2 className="w-4 h-4" /></Button>
          <Button className="bg-primary hover:bg-primary/90">Deposit Funds</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Market Sidebar */}
        <Card className="lg:col-span-3 border-border/50">
          <CardHeader className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search Assets..." className="pl-9 bg-muted/50 border-none" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {assets.map((asset) => (
                <div 
                  key={asset.symbol}
                  onClick={() => setSelectedAsset(asset.symbol)}
                  className={`p-4 flex items-center justify-between hover:bg-muted/50 cursor-pointer transition-colors ${selectedAsset === asset.symbol ? 'bg-primary/5 border-l-2 border-primary' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold text-xs">
                      {asset.symbol.substring(0, 2)}
                    </div>
                    <div>
                      <p className="font-bold text-sm leading-none">{asset.symbol}</p>
                      <p className="text-[10px] text-muted-foreground mt-1">{asset.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold leading-none">{asset.price}</p>
                    <p className={`text-[10px] mt-1 flex items-center justify-end ${asset.up ? 'text-green-500' : 'text-red-500'}`}>
                      {asset.up ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownLeft className="w-3 h-3 mr-0.5" />}
                      {asset.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Chart Area */}
        <div className="lg:col-span-6 space-y-6">
          <Card className="border-border/50 bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold">{selectedAsset}/USD</h2>
                  <p className="text-sm text-green-500 font-medium flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +4.25% ($3,940.10) today
                  </p>
                </div>
              </div>
              <div className="flex bg-muted rounded-lg p-1">
                {['1H', '4H', '1D', '1W', '1M'].map((t) => (
                  <Button key={t} variant="ghost" size="sm" className={`h-8 px-3 text-xs ${t === '1D' ? 'bg-background shadow-sm' : ''}`}>{t}</Button>
                ))}
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockMarketData}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#888888" opacity={0.1} />
                    <XAxis dataKey="time" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value.toLocaleString()}`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }}
                      itemStyle={{ color: 'hsl(var(--primary))' }}
                    />
                    <Area type="monotone" dataKey={selectedAsset.toLowerCase()} stroke="#22c55e" strokeWidth={2} fillOpacity={1} fill="url(#colorPrice)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "24h Volume", value: "$4.2B" },
              { label: "Market Cap", value: "$1.8T" },
              { label: "All-Time High", value: "$99,420" },
              { label: "Volatility", value: "High" },
            ].map((stat, i) => (
              <Card key={i} className="border-border/50 bg-muted/20">
                <CardContent className="p-4">
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{stat.label}</p>
                  <p className="text-lg font-bold mt-1">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trade Execution */}
        <Card className="lg:col-span-3 border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Place Order</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex bg-muted rounded-xl p-1">
              <Button variant="ghost" className="flex-1 bg-background shadow-sm rounded-lg">Buy</Button>
              <Button variant="ghost" className="flex-1">Sell</Button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Amount in USD</span>
                  <span className="text-primary font-medium">Balance: $24,500.00</span>
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input defaultValue="1000" className="pl-9 h-12 text-lg font-bold" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Receive (Est.)</span>
                </div>
                <div className="p-3 bg-muted rounded-lg border border-border flex items-center justify-between">
                  <span className="font-bold">0.01021 {selectedAsset}</span>
                  <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Network Fee</span>
                  <span>$2.50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Slippage Tolerance</span>
                  <span>0.5%</span>
                </div>
                <div className="pt-4">
                  <Button className="w-full h-14 text-lg font-bold rounded-xl shadow-lg shadow-primary/20">
                    Execute {selectedAsset} Trade
                  </Button>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border space-y-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="w-3 h-3" />
                <span>Secured by Macvel Cloud Vault</span>
              </div>
              <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                <p className="text-[10px] text-primary font-bold mb-1">AI TRADING SIGNAL</p>
                <p className="text-xs">Macvel AI detects a bullish divergence on the 4H timeframe. Consider long position at $96k support.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}