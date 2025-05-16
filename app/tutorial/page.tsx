"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Sidebar from "@/components/sidebar"
import { cn } from "@/lib/utils"
import type { SectionType } from "@/lib/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronRight, Copy, Edit, FileText, Info, LayoutGrid, Search, Settings, Table } from "lucide-react"

export default function TutorialPage() {
  const router = useRouter()
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState("getting-started")

  const handleNavItemClick = (title: SectionType) => {
    switch (title) {
      case "Contract":
        router.push("/contract")
        break
      case "POH":
        router.push("/poh")
        break
      case "Item Master":
        router.push("/item-master")
        break
      case "Invoice":
        router.push("/invoice")
        break
    }
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Navigation Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        activeItem="Tutorial"
        onNavItemClick={handleNavItemClick}
      />

      {/* Main Content */}
      <div className={cn("flex flex-col flex-1 transition-all duration-300", isSidebarCollapsed ? "ml-16" : "ml-64")}>
        <div className="p-6 overflow-auto h-full">
          <h1 className="text-3xl font-bold mb-6">Supply Chain Data Viewer Tutorial</h1>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to the tutorial! Learn how to use all the features of the Supply Chain Data Viewer.
          </p>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="getting-started" className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                <span>Getting Started</span>
              </TabsTrigger>
              <TabsTrigger value="navigation" className="flex items-center gap-2">
                <LayoutGrid className="h-4 w-4" />
                <span>Navigation</span>
              </TabsTrigger>
              <TabsTrigger value="data-editing" className="flex items-center gap-2">
                <Edit className="h-4 w-4" />
                <span>Data Editing</span>
              </TabsTrigger>
              <TabsTrigger value="file-formats" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>File Formats</span>
              </TabsTrigger>
              <TabsTrigger value="advanced" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>Advanced Features</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="getting-started" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
                <p className="mb-4">
                  The Supply Chain Data Viewer is a powerful tool for managing and viewing supply chain data in various
                  formats. This tutorial will guide you through all the features of the application.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">Application Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Main Sections</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Contract</strong> - View and manage contract data
                      </li>
                      <li>
                        <strong>POH</strong> - Purchase Order History management
                      </li>
                      <li>
                        <strong>Item Master</strong> - Item catalog management
                      </li>
                      <li>
                        <strong>Invoice</strong> - Invoice data management
                      </li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Data editing with real-time updates</li>
                      <li>Multiple file format support (HL7, x12850, Tabular)</li>
                      <li>Copy formatted data to clipboard</li>
                      <li>Collapsible sidebar for more workspace</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-medium mt-6 mb-3">Basic Layout</h3>
                <p className="mb-4">The application is divided into three main areas:</p>
                <div className="border rounded-lg p-4 mb-6">
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong>Navigation Sidebar</strong> - Located on the left side, allows you to navigate between
                      different sections of the application.
                    </li>
                    <li>
                      <strong>Data Panel</strong> - The left panel in the main content area, displays the data table
                      where you can view and edit data.
                    </li>
                    <li>
                      <strong>Result Panel</strong> - The right panel in the main content area, shows the formatted
                      output of your data in various formats.
                    </li>
                  </ol>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <h4 className="text-blue-700 font-medium mb-2">Pro Tip</h4>
                  <p className="text-blue-600">
                    You can collapse the sidebar by clicking the arrow button at the top of the sidebar to get more
                    screen space for your data.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="navigation" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
                <p className="mb-4">
                  Learn how to navigate through the different sections of the application and use the sidebar
                  effectively.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">Using the Sidebar</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="mb-4">
                      The sidebar provides quick access to all main sections of the application. Each icon represents a
                      different data type:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-slate-700" />
                        <span>
                          <strong>Contract</strong> - Contract management
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-5 w-5 text-slate-700" />
                        <span>
                          <strong>POH</strong> - Purchase Order History
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Table className="h-5 w-5 text-slate-700" />
                        <span>
                          <strong>Item Master</strong> - Item catalog
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Search className="h-5 w-5 text-slate-700" />
                        <span>
                          <strong>Invoice</strong> - Invoice data
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Sidebar Features</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Collapse/Expand</strong> - Click the arrow button at the top to toggle sidebar width
                      </li>
                      <li>
                        <strong>Active Highlight</strong> - The current section is highlighted in the sidebar
                      </li>
                      <li>
                        <strong>Icon View</strong> - When collapsed, only icons are shown
                      </li>
                      <li>
                        <strong>Full View</strong> - When expanded, icons and labels are shown
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-medium mt-6 mb-3">Navigating Between Sections</h3>
                <p className="mb-4">
                  To navigate to a different section, simply click on the corresponding item in the sidebar. The main
                  content area will update to show the selected section's data.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-6">
                  <h4 className="text-yellow-700 font-medium mb-2">Note</h4>
                  <p className="text-yellow-600">
                    Each section maintains its own state, so you can switch between sections without losing your work.
                  </p>
                </div>

                <h3 className="text-xl font-medium mt-6 mb-3">File Format Tabs</h3>
                <p className="mb-4">
                  At the top of each section, you'll find tabs for different file formats. Click on these tabs to switch
                  between different ways of viewing your data:
                </p>

                <div className="border rounded-lg p-4">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>File type: HL7</strong> - View data in HL7 format (pipe-delimited)
                    </li>
                    <li>
                      <strong>File type: x12850</strong> - View data in X12 EDI format
                    </li>
                    <li>
                      <strong>Tabular in tab form</strong> - View data in a fixed-width text format
                    </li>
                    <li>
                      <strong>Tabular in delimiter form</strong> - View data in a key-value table format
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="data-editing" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Data Editing</h2>
                <p className="mb-4">
                  Learn how to view and edit data in the application, with real-time updates to the formatted output.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">Editing Data Fields</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="mb-4">To edit a field in the data table:</p>
                    <ol className="list-decimal pl-5 space-y-3">
                      <li>Click on the value cell you want to edit</li>
                      <li>The cell will transform into an editable text area</li>
                      <li>Make your changes to the value</li>
                      <li>Press Enter or click outside the cell to save</li>
                      <li>The Result panel will update automatically</li>
                    </ol>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Editing Features</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Text Wrapping</strong> - Long text will wrap within the cell
                      </li>
                      <li>
                        <strong>Auto-expanding</strong> - Text areas grow as you type more content
                      </li>
                      <li>
                        <strong>Real-time Updates</strong> - Result panel updates as you edit
                      </li>
                      <li>
                        <strong>Highlighted Fields</strong> - Some important fields are highlighted in yellow
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-medium mt-6 mb-3">Working with Data Tables</h3>
                <p className="mb-4">
                  The data table displays all fields and values for the current data type. Each row represents a field
                  in your data:
                </p>

                <div className="border rounded-lg p-4 mb-6">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Column</strong> - The name of the field
                    </li>
                    <li>
                      <strong>Value</strong> - The current value of the field (editable)
                    </li>
                    <li>Click on any row to select it (highlighted in blue)</li>
                    <li>Scroll vertically if there are many fields</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <h4 className="text-green-700 font-medium mb-2">Best Practice</h4>
                  <p className="text-green-600">
                    When editing data, make sure to use the correct format for each field. For example, use the correct
                    date format (YYYYMMDD) for date fields to ensure proper formatting in the Result panel.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="file-formats" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">File Formats</h2>
                <p className="mb-4">
                  Learn about the different file formats supported by the application and how to work with them.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">Supported File Formats</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">HL7 Format</h4>
                    <p className="mb-2">A pipe-delimited format commonly used in healthcare systems.</p>
                    <div className="bg-gray-100 p-2 rounded text-sm font-mono">
                      MSH|^~\&|SupplyChain|MCKESSON|||20140502064957||MFN^M18^MFN_M18|15335234|P|2.9
                      <br />
                      MFI|CTR||UPD|||NE
                      <br />
                      MFE|MAD|000000014||2802_110|E||20140502064957924||
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Available in: Contract, Item Master</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">X12850 Format</h4>
                    <p className="mb-2">An EDI format commonly used for purchase orders and invoices.</p>
                    <div className="bg-gray-100 p-2 rounded text-sm font-mono">
                      ISA*00* *00* *ZZ*SENDER *ZZ*RECEIVER *210101*1200*U*00401*000000001*0*P*
                      <br />
                      GS*PO*SENDER*RECEIVER*20210101*1200*1*X*004010
                      <br />
                      ST*850*0001
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Available in: POH, Invoice</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Tabular Format</h4>
                    <p className="mb-2">A fixed-width text format that aligns data in columns.</p>
                    <div className="bg-gray-100 p-2 rounded text-sm font-mono">
                      PO Number PO Date Line Number PO Qty PO UOM PO Price
                      <br />
                      --------- -------- ----------- ------ ------ --------
                      <br />
                      20250104 20250401 1 9 EA 99.9
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Available in: All sections</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Tabular Delimited Format</h4>
                    <p className="mb-2">A key-value table format showing field names and values.</p>
                    <div className="bg-gray-100 p-2 rounded text-sm font-mono">
                      Field | Value
                      <br />
                      ---------------------|------------------
                      <br />
                      PO Number | 20250104
                      <br />
                      PO Date | 20250401
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Available in: POH, Invoice</p>
                  </div>
                </div>

                <h3 className="text-xl font-medium mt-6 mb-3">Copying Formatted Data</h3>
                <p className="mb-4">You can easily copy the formatted data to your clipboard:</p>

                <div className="border rounded-lg p-4 mb-6">
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong>General Copy Button</strong> - Click the "Copy" button in the top-right corner of the
                      Result panel to copy all formatted data
                    </li>
                    <li>
                      <strong>Tabular Copy Button</strong> - When viewing Tabular format, use the dedicated "Copy
                      Tabular" button to copy the fixed-width formatted text
                    </li>
                    <li>A toast notification will appear to confirm the copy was successful</li>
                  </ol>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <Copy className="h-5 w-5 text-slate-700" />
                  <span>Click this icon to copy the formatted data to your clipboard</span>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                  <h4 className="text-purple-700 font-medium mb-2">Format Tip</h4>
                  <p className="text-purple-600">
                    The Tabular format is especially useful when you need to share data in a readable format with
                    colleagues who don't have access to specialized EDI or HL7 viewers.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Advanced Features</h2>
                <p className="mb-4">
                  Discover advanced features and tips to get the most out of the Supply Chain Data Viewer.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">Layout Management</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="mb-4">The application layout is designed to be flexible and efficient:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Collapsible Sidebar</strong> - Toggle the sidebar width to maximize workspace
                      </li>
                      <li>
                        <strong>Split Panels</strong> - Data and Result panels are separated with independent scrolling
                      </li>
                      <li>
                        <strong>Sticky Headers</strong> - Section headers remain visible when scrolling through data
                      </li>
                      <li>
                        <strong>Responsive Design</strong> - Works on different screen sizes
                      </li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Layout Tips</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Collapse the sidebar when working with wide data tables</li>
                      <li>Use a larger screen for better visibility of all panels</li>
                      <li>Each panel scrolls independently, so you can view different parts of your data</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-medium mt-6 mb-3">Data Management Best Practices</h3>
                <div className="border rounded-lg p-4 mb-6">
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong>Consistent Formatting</strong> - Use consistent date formats (YYYYMMDD) and numeric
                      formats
                    </li>
                    <li>
                      <strong>Regular Copying</strong> - Copy your data regularly if you need to preserve it
                    </li>
                    <li>
                      <strong>Section Organization</strong> - Use the appropriate section for each data type (Contract,
                      POH, etc.)
                    </li>
                    <li>
                      <strong>Format Selection</strong> - Choose the most appropriate format for your specific needs
                    </li>
                  </ol>
                </div>

                <h3 className="text-xl font-medium mt-6 mb-3">Keyboard Shortcuts</h3>
                <div className="border rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Enter</span>
                      <span>Save cell edits</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Tab</span>
                      <span>Move to next field</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Ctrl+C</span>
                      <span>Copy selected text</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Escape</span>
                      <span>Cancel editing</span>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
                  <h4 className="text-indigo-700 font-medium mb-2">Pro Tip</h4>
                  <p className="text-indigo-600">
                    For the best experience, use a modern browser like Chrome, Firefox, or Edge. The application uses
                    modern web features for optimal performance.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={() => router.push("/")}>
              Back to Home
            </Button>
            <Button onClick={() => router.push("/contract")}>Start Using the Application</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
